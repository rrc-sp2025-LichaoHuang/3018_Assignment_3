import { Request, Response, NextFunction } from "express";
import * as eventService from "../services/eventService";

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
    res.status(201).json(event);
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
    res.status(200).json(events);
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
      res.status(404).json({ message: "Event not found" });
      return;
    }

    res.status(200).json(event);
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
    res.status(200).json({ message: "Event updated" });
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
    res.status(200).json({ message: "Event deleted" });
  } catch (error) {
    next(error);
  }
};