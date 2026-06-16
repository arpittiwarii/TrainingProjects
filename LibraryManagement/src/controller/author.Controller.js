const { success } = require('../utils/apiResponse.js');
const authorServices = require('../services/author.service.js');

const getAuthorsController = async (req, res, next) => {
    try {
        const result = await authorServices.getAuthorsService();
        return success(res, result, 'Authors retrieved', 200);
    } catch (err) {
        next(err);
    }
};

const addAuthorController = async (req, res, next) => {
    try {
        const result = await authorServices.addAuthorService(req.body);
        return success(res, result, 'Author added', 201);
    } catch (err) {
        next(err);
    }
};

const updateAuthorController = async (req, res, next) => {
    try {
        const id = req.params.id;
        const result = await authorServices.updateAuthorService(id, req.body);
        return success(res, result, 'Author updated', 200);
    } catch (err) {
        next(err);
    }
};

const deleteAuthorController = async (req, res, next) => {
    try {
        const id = req.params.id;
        const result = await authorServices.deleteAuthorService(id);
        return success(res, result, 'Author deleted', 200);
    } catch (err) {
        next(err);
    }
};

module.exports = {
    getAuthorsController,
    addAuthorController,
    updateAuthorController,
    deleteAuthorController,
};
