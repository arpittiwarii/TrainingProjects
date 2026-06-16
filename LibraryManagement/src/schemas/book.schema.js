
const bookSchema = {
    type: 'object',
    required: ["title", "isbn", "publishedYear", "totalCopies", "authorId"],
    properties: {
        title: {
            type: "string",
            minLength: 3,
            maxLength: 255,
        },
        isbn: {
            type: "string",
            minLength: 10,
            maxLength: 13,

        },
        authorId: {
            type: "number",
        },
        publishedYear: {
            type: "number",
            minimum: 1000,
            maximum: new Date().getFullYear(),
        },
        totalCopies: {
            type: "number",
            minimum: 1,
            multipleOf: 5

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

module.exports = { bookSchema }
