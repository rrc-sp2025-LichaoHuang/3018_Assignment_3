import * as eventService from "../../src/api/v1/services/eventService";
import * as repository from "../../src/api/v1/repositories/firestoreRepository";

jest.mock("../../src/api/v1/repositories/firestoreRepository");

describe("Event Service", () => {

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should create an event", async () => {
    // Arrange
    const data = {
      name: "Test Event",
      date: "2026-12-25T10:00:00.000Z",
      capacity: 100,
      category: "general",
      status: "active"
    };

    (repository.createDocument as jest.Mock).mockResolvedValue({});

    // Act
    await eventService.createEvent(data);

    // Assert
    expect(repository.createDocument).toHaveBeenCalled();
  });

  it("should return all events", async () => {
    // Arrange
    (repository.getDocuments as jest.Mock).mockResolvedValue({
      docs: [
        { data: () => ({ id: "evt_1" }) }
      ]
    });

    // Act
    const result = await eventService.getAllEvents();

    // Assert
    expect(result.length).toBe(1);
  });

  it("should update event", async () => {
    // Arrange
    (repository.getDocumentById as jest.Mock).mockResolvedValue({
      data: () => ({ id: "evt_1" })
    });

    // Act
    await eventService.updateEvent("evt_1", { capacity: 200 });

    // Assert
    expect(repository.updateDocument).toHaveBeenCalled();
  });

  it("should delete event", async () => {
    // Arrange
    (repository.getDocumentById as jest.Mock).mockResolvedValue({
      data: () => ({ id: "evt_1" })
    });

    // Act
    await eventService.deleteEvent("evt_1");

    // Assert
    expect(repository.deleteDocument).toHaveBeenCalled();
  });

});