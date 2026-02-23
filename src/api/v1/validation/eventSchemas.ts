import Joi from "joi";

export const eventSchemas = {
    create: {
        body: Joi.object({
            name: Joi.string().required(),
            date: Joi.string().required(),
            capacity: Joi.number().integer().min(1).required(),
            status: Joi.string().required(),
            category: Joi.string().required(),
        }),
    },

    getById: {
        params: Joi.object({
            id: Joi.string().required(),
        }),
    },

    update: {
        params: Joi.object({
            id: Joi.string().required(),
        }),
        body: Joi.object({
            name: Joi.string().optional(),
            date: Joi.string().optional(),
            capacity: Joi.number().integer().min(1).optional(),
            status: Joi.string().optional(),
            category: Joi.string().optional(),
        }),
    },

    delete: {
        params: Joi.object({
            id: Joi.string().required(),
        }),
    },
};