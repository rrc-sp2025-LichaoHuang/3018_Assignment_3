import express from "express";
import { validateRequest } from "../middleware/validate";
import { eventSchemas } from "../validation/eventSchemas";
import * as eventController from "../controllers/eventController";

const router = express.Router();

/**
 * POST /events
 */
router.post(
  "/events",
  validateRequest(eventSchemas.create),
  eventController.createEventHandler
);

/**
 * GET /events
 */
router.get(
  "/events",
  eventController.getAllEventsHandler
);

/**
 * GET /events/:id
 */
router.get(
  "/events/:id",
  validateRequest(eventSchemas.getById),
  eventController.getEventByIdHandler
);

/**
 * PUT /events/:id
 */
router.put(
  "/events/:id",
  validateRequest(eventSchemas.update),
  eventController.updateEventHandler
);

/**
 * DELETE /events/:id
 */
router.delete(
  "/events/:id",
  validateRequest(eventSchemas.delete),
  eventController.deleteEventHandler
);

export default router;