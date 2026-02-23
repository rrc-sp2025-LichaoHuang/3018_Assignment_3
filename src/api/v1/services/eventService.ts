import { Event } from "../models/eventModel";

let events: Event[] = [];
let idCounter = 1;

export const createEventService = (event: Event): Event => {
  const newEvent: Event = {
    id: idCounter++,
    ...event,
  };

  events.push(newEvent);
  return newEvent;
};

export const getAllEventsService = (): Event[] => {
  return events;
};

export const getEventByIdService = (id: number): Event | undefined => {
  return events.find((event) => event.id === id);
};

export const updateEventService = (
  id: number,
  updatedData: Partial<Event>
): Event | undefined => {
  const event = events.find((event) => event.id === id);
  if (!event) return undefined;

  Object.assign(event, updatedData);
  return event;
};

export const deleteEventService = (id: number): boolean => {
  const index = events.findIndex((event) => event.id === id);
  if (index === -1) return false;

  events.splice(index, 1);
  return true;
};