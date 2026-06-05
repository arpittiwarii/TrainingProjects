// Associations in models/index.js
// models/index.js — associations defined ONCE, centrally
const Player = require("./Player")
const PlayerBonus = require("./playerBonus")
const Transaction = require("./Transaction")
const Session = require("./Session")

// Player → PlayerBonus (one player has many bonuses)
Player.hasMany(PlayerBonus, {
  foreignKey: "player_id",
  as: "bonuses",
})
PlayerBonus.belongsTo(Player, {
  foreignKey: "player_id",
  as: "player",
})

// Player → Transaction
Player.hasMany(Transaction, {
  foreignKey: "player_id",
  as: "transactions",
})
Transaction.belongsTo(Player, {
  foreignKey: "player_id",
  as: "player",
})

// PlayerBonus → Transaction (bonus-funded transactions)
PlayerBonus.hasMany(Transaction, {
  foreignKey: "bonus_id",
  as: "transactions",
})

module.exports = { Player, PlayerBonus, Transaction, Session }
