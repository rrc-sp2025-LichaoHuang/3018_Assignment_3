import { Event } from "../models/eventModel";

let events: Event[] = [];
let idCounter = 1;

/**
 * Create Event
 */
export const createEvent = async (data: any): Promise<Event> => {
  const now = new Date().toISOString();

  const newEvent: Event = {
    id: `evt_${String(idCounter++).padStart(6, "0")}`,
    ...data,
    createdAt: now,
    updatedAt: now,
  };

  events.push(newEvent);
  return newEvent;
};

/**
 * Get All Events
 */
export const getAllEvents = async (): Promise<Event[]> => {
  return events;
};

/**
 * Get Event By ID
 */
export const getEventById = async (
  id: string
): Promise<Event | null> => {
  const event = events.find(e => e.id === id);
  return event || null;
};

/**
 * Update Event
 */
export const updateEvent = async (
  id: string,
  data: any
): Promise<void> => {
  const event = events.find(e => e.id === id);

  if (!event) {
    throw new Error("Event not found");
  }

  Object.assign(event, data);
  event.updatedAt = new Date().toISOString();
};

/**
 * Delete Event
 */
export const deleteEvent = async (id: string): Promise<void> => {
  const index = events.findIndex(e => e.id === id);

  if (index === -1) {
    throw new Error("Event not found");
  }

  events.splice(index, 1);
};