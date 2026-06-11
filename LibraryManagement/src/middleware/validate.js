import Ajv from 'ajv';
import addFormats from 'ajv-formats';
const ajv = new Ajv({
    allErrors: true,
});

const validate = (schema) => {
    const validator = ajv.compile(schema);

    return (req, res, next) => {
        const valid = validator(req.body);

        if (!valid) {
            return res.status(400).json({
                success: false,
                errors: validator.errors,
            });
        }

        next();
    };
};
addFormats(ajv);

export default validate;