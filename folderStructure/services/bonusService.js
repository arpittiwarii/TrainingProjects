// Services: no req, no res, no HTTP concerns. Pure business logic.
const { PlayerBonus, Player } = require("../models")
const { masterDB, slaveDB } = require("../config/database")
const { bonusExpiryQueue } = require("../queues/bonusExpiry")
const {
  PlayerNotFoundError,
  BonusAlreadyActiveError,
  InsufficientKYCError
} = require("../errors")

/**
 * Credits a bonus to a player account.
 * Idempotent: duplicate calls with same depositId are safe.
 * @param {object} params
 * @param {string} params.playerId
 * @param {string} params.bonusType  DEPOSIT_MATCH | FREE_SPINS | CASHBACK
 * @param {number} params.amount
 * @param {string} params.depositId  Idempotency key
 * @returns {Promise<PlayerBonus>}
 */
const creditBonus = async ({ playerId, bonusType, amount, depositId }) => {
  // 1. Validate input
  if (!playerId || !bonusType || !amount || !depositId) {
    throw new Error("Missing required fields")
  }

  // 2. Fetch player from master (read-before-write must go to master)
  const player = await Player.findByPk(playerId, {
    connection: masterDB,
  })
  if (!player) throw new PlayerNotFoundError(playerId)

  // 3. Domain rule: KYC required for bonuses over threshold
  if (amount > 100 && player.kyc_status !== "VERIFIED") {
    throw new InsufficientKYCError(playerId)
  }

  // 4. Domain rule: one active bonus per type
  const existing = await PlayerBonus.findOne({
    where: { player_id: playerId, bonus_type: bonusType, status: "active" },
    connection: masterDB,
  })
  if (existing) throw new BonusAlreadyActiveError(playerId, bonusType)

  // 5. Upsert for idempotency — safe on retry
  const [bonus] = await PlayerBonus.upsert({
    player_id: playerId,
    bonus_type: bonusType,
    amount,
    deposit_id: depositId,       // unique constraint on deposit_id
    status: "active",
    wagering_requirement: amount * 35,
    wagered_amount: 0,
    expires_at: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days
  }, { connection: masterDB })

  // 6. Queue expiry job
  await bonusExpiryQueue.add("expire", { bonusId: bonus.id }, {
    delay: 7 * 24 * 60 * 60 * 1000,
    jobId: `bonus-expiry-${bonus.id}`,  // deduplicate BullMQ jobs
  })

  return bonus
}

module.exports = { bonusService: { creditBonus } }
