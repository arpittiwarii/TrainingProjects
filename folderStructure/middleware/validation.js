const { AppError } = require("../errors")

// Returns middleware that validates req.body against a Joi schema
const validate = (schema) => (req, res, next) => {
  const { error, value } = schema.validate(req.body, {
    abortEarly: false,    // return ALL errors, not just first
    stripUnknown: true,   // remove fields not in schema (prevents mass assignment)
  })

  if (error) {
    const messages = error.details.map(d => d.message).join("; ")
    return next(new AppError(messages, 400, "VALIDATION_ERROR"))
  }

  req.body = value   // replace with validated + sanitised values
  next()
}

module.exports = { validate }
