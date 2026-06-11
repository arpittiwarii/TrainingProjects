import { success } from '../utils/apiResponse.js'
import {authorServices} from '../services/author.service.js'

export const getAuthorsController = async (req, res, next) => {
    try {
        const result = await authorServices.getAuthorsService()
        return success(res, result, "Authors retrieved", 200)
    } catch (err) {
        next(err)
    }
}

export const addAuthorController = async (req, res, next) => {
    try {
        const result = await authorServices.addAuthorService(req.body)
        return success(res, result, "Author added", 201)
    } catch (err) {
        next(err)
    }
}

export const updateAuthorController = async (req, res, next) => {
    try {
        const id = req.params.id;
        const result = await authorServices.updateAuthorService(id, req.body)
        return success(res, result, "Author updated", 200)
    } catch (err) {
        next(err)
    }
}

export const deleteAuthorController = async (req, res, next) => {
    try {
        const id = req.params.id;
        const result = await authorServices.deleteAuthorService(id)
        return success(res, result, "Author deleted", 200)
    } catch (err) {
        next(err)
    }
}
