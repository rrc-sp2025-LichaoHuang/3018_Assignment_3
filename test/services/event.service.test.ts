import * as eventService from "../../src/api/v1/services/eventService";
import * as repository from "../../src/api/v1/repositories/firestoreRepository";

jest.mock("../../src/api/v1/repositories/firestoreRepository");

describe("Event Service", () => {

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should generate 6-digit formatted ID when creating event", async () => {
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
    const result = await eventService.createEvent(data);

    // Assert
    expect(result.id).toBe("evt_000001");
    expect(repository.createDocument).toHaveBeenCalled();
  });

  it("should return all events", async () => {
    // Arrange
    (repository.getDocuments as jest.Mock).mockResolvedValue({
      docs: [
        { data: () => ({ id: "evt_000001" }) }
      ]
    });

    // Act
    const result = await eventService.getAllEvents();

    // Assert
    expect(result[0].id).toBe("evt_000001");
  });

  it("should update event if it exists", async () => {
    // Arrange
    (repository.getDocumentById as jest.Mock).mockResolvedValue({
      data: () => ({ id: "evt_000001" })
    });

    // Act
    await eventService.updateEvent("evt_000001", { capacity: 200 });

    // Assert
    expect(repository.updateDocument).toHaveBeenCalled();
  });

  it("should delete event if it exists", async () => {
    // Arrange
    (repository.getDocumentById as jest.Mock).mockResolvedValue({
      data: () => ({ id: "evt_000001" })
    });

    // Act
    await eventService.deleteEvent("evt_000001");

    // Assert
    expect(repository.deleteDocument).toHaveBeenCalled();
  });

});