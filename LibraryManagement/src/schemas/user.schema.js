
const registerSchema = {
    type: "object",
    required: ["name", "email", "password"],
    properties: {
        name: {
            type: "string",
            minLength: 3,
            maxLength: 255,
        },
        email: {
            type: "string",
            format: "email",
        },
        password: {
            type: "string",
            minLength: 6,
        },
        createdAt: {
            type: "string",
            format: 'date-time',
        },
        updatedAt: {
            type: "string",
            format: 'date-time',
        }
    }
}
const loginSchema = {
    type: "object",
    required: ["email", "password"],
    properties: {
        email: {
            type: "string",
            format: "email",
        },
        password: {
            type: "string",
            minLength: 6,
        },
        createdAt: {
            type: "string",
            format: 'date-time',
        },
        updatedAt: {
            type: "string",
            format: 'date-time',
        }
    }
}

module.exports = { registerSchema, loginSchema }
