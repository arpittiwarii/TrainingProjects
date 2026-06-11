
export const authorSchema = {
    type: "object",
    required: ["name", "bio", "birth_date"],
    properties: {
        name: {
            type: "string",
            minLength: 3,
            maxLength: 255,
        },
        bio: {
            type: "string",
            minLength: 10,
        },
        birth_date: {
            type: "string",
            format: 'date-time',
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