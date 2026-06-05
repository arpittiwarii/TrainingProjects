const { logger } = require("../utils/logger")

const requestLogger = (req, res, next) => {
  const start = Date.now()

  res.on("finish", () => {
    logger.info({
      method: req.method,
      path: req.path,
      statusCode: res.statusCode,
      durationMs: Date.now() - start,
      playerId: req.player?.id,
      ip: req.ip,
    })
  })

  next()
}

module.exports = { requestLogger }
