import Joi from "joi";

export const eventSchemas = {
  create: {
    body: Joi.object({
      name: Joi.string().min(5).required(),

      date: Joi.date()
        .greater("now")
        .required(),

      capacity: Joi.number()
        .integer()
        .min(5)
        .required(),

      registrationCount: Joi.number()
        .integer()
        .min(0)
        .max(Joi.ref("capacity"))
        .default(0),

      status: Joi.string()
        .valid("active", "cancelled", "completed")
        .default("active"),

      category: Joi.string()
        .valid("conference", "workshop", "meetup", "seminar", "general")
        .default("general")
        .required(),
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
      name: Joi.string().min(3).optional(),

      date: Joi.date()
        .greater("now")
        .optional(),

      capacity: Joi.number()
        .integer()
        .min(5)
        .optional(),

      registrationCount: Joi.number()
        .integer()
        .min(0)
        .optional(),

      status: Joi.string()
        .valid("active", "cancelled", "completed")
        .optional(),

      category: Joi.string()
        .valid("conference", "workshop", "meetup", "seminar", "general")
        .optional(),
    }).min(1),
  },

    delete: {
    params: Joi.object({
      id: Joi.string().required(),
    }),
  },
};