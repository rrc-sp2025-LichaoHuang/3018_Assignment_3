import express from "express";
import { validateRequest } from "../middleware/validate";
import { eventSchemas } from "../validation/eventSchemas";
import * as eventController from "../controllers/eventController";

const router = express.Router();

/**
 * POST /events
 */
router.post(
  "/",
  validateRequest(eventSchemas.create),
  eventController.createEventHandler
);

/**
 * GET /events
 */
router.get(
  "/",
  eventController.getAllEventsHandler
);

/**
 * GET /events/:id
 */
router.get(
  "/:id",
  validateRequest(eventSchemas.getById),
  eventController.getEventByIdHandler
);

/**
 * PUT /events/:id
 */
router.put(
  "/:id",
  validateRequest(eventSchemas.update),
  eventController.updateEventHandler
);

/**
 * DELETE /events/:id
 */
router.delete(
  "/:id",
  validateRequest(eventSchemas.delete),
  eventController.deleteEventHandler
);

export default router;