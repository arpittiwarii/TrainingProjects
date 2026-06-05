// models/PlayerBonus.js
const { DataTypes, Model } = require("sequelize")

class PlayerBonus extends Model {
  // ── Instance methods ──────────────────────────────────────
  isExpired() {
    return new Date() > this.expires_at
  }

  isFullyWagered() {
    return this.wagered_amount >= this.wagering_requirement
  }

  remainingWagering() {
    return Math.max(0, this.wagering_requirement - this.wagered_amount)
  }
}

PlayerBonus.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  player_id: {
    type: DataTypes.UUID,
    allowNull: false,
    references: { model: "players", key: "id" },
    onDelete: "CASCADE",
  },
  bonus_type: {
    type: DataTypes.ENUM("DEPOSIT_MATCH", "FREE_SPINS", "CASHBACK"),
    allowNull: false,
  },
  amount: {
    type: DataTypes.DECIMAL(10, 2),   // precision matters for money
    allowNull: false,
    validate: { min: 0 },
  },
  wagering_requirement: {
    type: DataTypes.DECIMAL(12, 2),
    allowNull: false,
    defaultValue: 0,
  },
  wagered_amount: {
    type: DataTypes.DECIMAL(12, 2),
    allowNull: false,
    defaultValue: 0,
  },
  status: {
    type: DataTypes.ENUM("active", "inactive", "expired", "completed"),
    defaultValue: "active",
  },
  deposit_id: {
    type: DataTypes.UUID,
    allowNull: true,
    unique: true,             // idempotency constraint
  },
  expires_at: {
    type: DataTypes.DATE,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: "PlayerBonus",
  tableName: "player_bonuses",
  underscored: true,          // auto snake_case for createdAt → created_at
  indexes: [
    { fields: ["player_id", "status"] },          // most common query pattern
    { fields: ["player_id", "bonus_type", "status"] },  // type lookup
    { fields: ["expires_at"], where: { status: "active" } }, // partial index
  ],
})

module.exports = PlayerBonus
