bonus.routes.js
// src/routes/bonus.routes.js
const { Router } = require("express")
const { authenticate } = require("../middleware/auth")
const { validate } = require("../middleware/validate")
const { bonusController } = require("../controllers/bonus.controller")
const { creditBonusSchema, deactivateBonusSchema } = require("../schemas/bonus.schema")

const router = Router()

// All bonus routes require authentication
router.use(authenticate)

// POST /api/v1/bonuses/credit
router.post("/credit",
  validate(creditBonusSchema),       // 1. validate input
  bonusController.creditBonus        // 2. call controller
)

// POST /api/v1/bonuses/:bonusId/deactivate
router.post("/:bonusId/deactivate",
  validate(deactivateBonusSchema),
  bonusController.deactivateBonus
)

// GET /api/v1/bonuses — get player's active bonuses
router.get("/", bonusController.getPlayerBonuses)

module.exports = router
