/**
 * Process a player withdrawal.
 * Atomic: balance deduction + transaction record created together or not at all.
 */
const processWithdrawal = async ({ playerId, amount, reference }) => {
    return sequelize.transaction(async (t) => {
      // All queries inside receive { transaction: t } — they are atomic
  
      // 1. Lock player row for this transaction (prevents concurrent withdrawals)
      const player = await Player.findOne({
        where: { id: playerId },
        lock: t.LOCK.UPDATE,   // SELECT FOR UPDATE
        transaction: t,
      })
  
      if (!player) throw new PlayerNotFoundError(playerId)
  
      // 2. Check balance
      if (player.balance < amount) {
        throw new InsufficientBalanceError(playerId, amount, player.balance)
      }
  
      // 3. Deduct balance
      await player.update(
        { balance: player.balance - amount },
        { transaction: t }
      )
  
      // 4. Create transaction record (audit trail)
      const txRecord = await Transaction.create({
        player_id: playerId,
        type: "WITHDRAWAL",
        amount: -amount,    // negative for deductions
        reference,
        balance_after: player.balance - amount,
      }, { transaction: t })
  
      // If ANYTHING above throws, the whole transaction rolls back automatically.
      // player.balance is restored. No orphaned records.
      return txRecord
    })
  }
  