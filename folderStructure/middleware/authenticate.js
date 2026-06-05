const jwt = require("jsonwebtoken")
const { AppError } = require("../errors")

const authenticate = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization
    if (!authHeader?.startsWith("Bearer ")) {
      throw new AppError("Missing or invalid Authorization header", 401, "UNAUTHORIZED")
    }

    const token = authHeader.split(" ")[1]
    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    // Attach player to request — available in all downstream handlers
    req.player = {
      id: decoded.playerId,
      role: decoded.role,
      kycStatus: decoded.kycStatus,
    }

    next()
  } catch (err) {
    if (err.name === "JsonWebTokenError") {
      return next(new AppError("Invalid token", 401, "INVALID_TOKEN"))
    }
    if (err.name === "TokenExpiredError") {
      return next(new AppError("Token expired", 401, "TOKEN_EXPIRED"))
    }
    next(err)
  }
}

module.exports = { authenticate }
