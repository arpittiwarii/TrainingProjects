
export const borrowSchema = {
    type: "object",
    properties: {
        userId: { type: "integer" },
        bookId: { type: "integer" },
        borrowDate: { type: "string", format: "date" },
        returnDate: { type: "string", default: null, format: "date" },
        status: { type: "string", enum: ["BORROWED", "OVERDUE", "RETURNED"] }
    },
    required: ["userId", "bookId"],
    additionalProperties: false,
};