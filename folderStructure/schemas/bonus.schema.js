const Joi = require("joi")

const creditBonusSchema = Joi.object({
  playerId: Joi.string()
    .uuid({ version: "uuidv4" })
    .required()
    .messages({ "string.uuid": "playerId must be a valid UUID" }),

  bonusType: Joi.string()
    .valid("DEPOSIT_MATCH", "FREE_SPINS", "CASHBACK")
    .required(),

  amount: Joi.number()
    .positive()
    .max(10000)
    .precision(2)         // max 2 decimal places
    .required(),

  depositId: Joi.string()
    .uuid()
    .required(),

  currency: Joi.string()
    .valid("USD", "EUR", "GBP", "BTC", "ETH")
    .default("USD"),

  expiryHours: Joi.number()
    .integer()
    .min(1)
    .max(720)             // max 30 days
    .default(168),        // default 7 days
})

// Schema for query params (different from body):
const getPlayerBonusesSchema = Joi.object({
  status: Joi.string().valid("active", "inactive", "expired", "completed"),
  page: Joi.number().integer().min(1).default(1),
  limit: Joi.number().integer().min(1).max(100).default(20),
})

module.exports = { creditBonusSchema, getPlayerBonusesSchema }
