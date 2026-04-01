import Joi from "joi";
/**
 * @openapi
 * components:
 *   schemas:
 *     Event:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         name:
 *           type: string
 *         date:
 *           type: string
 *         capacity:
 *           type: number
 *         registrationCount:
 *           type: number
 *         status:
 *           type: string
 *         category:
 *           type: string
 *
 *     CreateEventInput:
 *       type: object
 *       required:
 *         - name
 *         - date
 *         - capacity
 *       properties:
 *         name:
 *           type: string
 *         date:
 *           type: string
 *         capacity:
 *           type: number
 *         registrationCount:
 *           type: number
 *         status:
 *           type: string
 *         category:
 *           type: string
 */
export const createEventSchema = Joi.object({
  name: Joi.string()
    .min(3)
    .required(),

  date: Joi.date()
    .iso()
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
    .default("general"),
});