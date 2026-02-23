import { Request, Response, NextFunction } from "express";
import * as eventService from "../services/eventService";
import { HTTP_STATUS } from "src/constants/httpStatus";

/**
 * Create Event
 */
export const createEventHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const event = await eventService.createEvent(req.body);
    res.status(HTTP_STATUS.CREATED).json(event);
  } catch (error) {
    next(error);
  }
};

/**
 * Get All Events
 */
export const getAllEventsHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const events = await eventService.getAllEvents();
    res.status(HTTP_STATUS.OK).json(events);
  } catch (error) {
    next(error);
  }
};

/**
 * Get Event By ID
 */
export const getEventByIdHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const event = await eventService.getEventById(req.params.id as string);

    if (!event) {
      res.status(HTTP_STATUS.NOT_FOUND).json({ message: "Event not found" });
      return;
    }

    res.status(HTTP_STATUS.OK).json(event);
  } catch (error) {
    next(error);
  }
};

/**
 * Update Event
 */
export const updateEventHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    await eventService.updateEvent(req.params.id as string, req.body);
    res.status(HTTP_STATUS.OK).json({ message: "Event updated" });
  } catch (error) {
    next(error);
  }
};

/**
 * Delete Event
 */
export const deleteEventHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    await eventService.deleteEvent(req.params.id as string);
    res.status(HTTP_STATUS.OK).json({ message: "Event deleted" });
  } catch (error) {
    next(error);
  }
};