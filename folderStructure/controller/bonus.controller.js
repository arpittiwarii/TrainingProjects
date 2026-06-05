const { bonusService } = require("../services/bonusService")
const { asyncHandler } = require("../utils/asyncHandler")

const creditBonus = asyncHandler(async (req, res) => {
  // Controller job: extract from req, call service, shape response
  const { playerId, bonusType, amount, depositId } = req.body
  const currentPlayerId = req.player.id

  // IDOR check — ensure player can only credit their own bonus
  if (playerId !== currentPlayerId) {
    throw new AppError("Forbidden", 403, "FORBIDDEN")
  }

  // Delegate ALL business logic to service
  const bonus = await bonusService.creditBonus({
    playerId,
    bonusType,
    amount,
    depositId,
  })

  // Shape HTTP response
  res.status(201).json({
    success: true,
    data: bonus,
  })
})

module.exports = { bonusController: { creditBonus } }
