import express from "express";
import { validateRequest } from "../middleware/validate";
import { eventSchemas } from "../validation/eventSchemas";
import * as eventController from "../controllers/eventController";

const router = express.Router();

/**
 * @openapi
 * /events:
 *   post:
 *     summary: Create a new event
 *     tags: [Events]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateEventInput'
 *     responses:
 *       '201':
 *         description: Event created successfully
 *       '400':
 *         description: Invalid input
 */
router.post(
  "/",
  validateRequest(eventSchemas.create),
  eventController.createEventHandler
);

/**
 * @openapi
 * /events:
 *   get:
 *     summary: Get all events
 *     tags: [Events]
 *     responses:
 *       '200':
 *         description: List of events
 */
router.get(
  "/",
  eventController.getAllEventsHandler
);

/**
 * @openapi
 * /events/{id}:
 *   get:
 *     summary: Get event by ID
 *     tags: [Events]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Event found
 *       '404':
 *         description: Event not found
 */
router.get(
  "/:id",
  validateRequest(eventSchemas.getById),
  eventController.getEventByIdHandler
);

/**
 * @openapi
 * /events/{id}:
 *   put:
 *     summary: Update an event
 *     tags: [Events]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Event updated
 *       '404':
 *         description: Event not found
 */
router.put(
  "/:id",
  validateRequest(eventSchemas.update),
  eventController.updateEventHandler
);

/**
 * @openapi
 * /events/{id}:
 *   delete:
 *     summary: Delete an event
 *     tags: [Events]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Event deleted
 *       '404':
 *         description: Event not found
 */
router.delete(
  "/:id",
  validateRequest(eventSchemas.delete),
  eventController.deleteEventHandler
);

export default router;