import { Request, Response } from "express";
import { HTTP_STATUS } from "../../../constants/httpStatus";
import { createEventService } from "../services/eventService";

export const createEvent = (req: Request, res: Response) => {
  const newEvent = createEventService(req.body);

  res.status(HTTP_STATUS.CREATED).json(newEvent);
};