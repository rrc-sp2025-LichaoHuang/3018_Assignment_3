import { Event } from "../models/eventModel";
import * as repository from "../repositories/firestoreRepository";

const COLLECTION = "events";

let idCounter = 1;

/**
 * Creates a new event and stores it in Firestore.
 *
 * Generates a unique event ID and timestamps before saving.
 *
 * @param data Event payload received from controller
 * @returns The newly created event object
 */
export const createEvent = async (data: any): Promise<Event> => {
  const now = new Date().toISOString();

  const newEvent: Event = {
    id: `evt_${String(idCounter++).padStart(6, "0")}`,
    ...data,
    createdAt: now,
    updatedAt: now,
  };

  await repository.createDocument<Event>(
    COLLECTION,
    newEvent,
    newEvent.id
  );

  return newEvent;
};

/**
 * Retrieves all events from Firestore.
 *
 * @returns Array of events
 */
export const getAllEvents = async (): Promise<Event[]> => {
  const snapshot = await repository.getDocuments(COLLECTION);
  return snapshot.docs.map(doc => doc.data() as Event);
};

/**
 * Retrieves a single event by ID.
 *
 * @param id Event ID
 * @returns Event if found, otherwise null
 */
export const getEventById = async (
  id: string
): Promise<Event | null> => {
  const doc = await repository.getDocumentById(COLLECTION, id);

  if (!doc) {
    return null;
  }

  return doc.data() as Event;
};

/**
 * Updates an existing event in Firestore.
 *
 * Throws an error if the event does not exist.
 *
 * @param id Event ID
 * @param data Partial event fields to update
 */
export const updateEvent = async (
  id: string,
  data: Partial<Event>
): Promise<void> => {
  const existing = await getEventById(id);

  if (!existing) {
    throw new Error("Event not found");
  }

  await repository.updateDocument<Event>(
    COLLECTION,
    id,
    {
      ...data,
      updatedAt: new Date().toISOString(),
    }
  );
};

/**
 * Deletes an event from Firestore.
 *
 * Throws an error if the event does not exist.
 *
 * @param id Event ID
 */
export const deleteEvent = async (id: string): Promise<void> => {
  const existing = await getEventById(id);

  if (!existing) {
    throw new Error("Event not found");
  }

  await repository.deleteDocument(COLLECTION, id);
};