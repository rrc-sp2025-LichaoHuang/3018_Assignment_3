import { Request, Response, NextFunction } from "express";
import { ObjectSchema } from "joi";
import { HTTP_STATUS } from "../../../constants/httpStatus";

export const validate = (schema: ObjectSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error, value } = schema.validate(req.body, {
      abortEarly: true,
    });

    if (error) {
      return res.status(HTTP_STATUS.BAD_REQUEST).json({
        message: `Validation error: ${error.details[0].message}`,
      });
    }

    req.body = value;

    next();
  };
};