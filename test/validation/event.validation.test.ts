import { eventSchemas } from "../../src/api/v1/validation/eventSchemas";

describe("Event Create Validation", () => {

  it("should pass with valid event data", () => {
    // Arrange
    const validData = {
      name: "Test Event",
      date: "2026-12-25T10:00:00.000Z",
      capacity: 100,
      category: "general",
      status: "active"
    };

    // Act
    const { error } = eventSchemas.create.body.validate(validData);

    // Assert
    expect(error).toBeUndefined();
  });

  it("should fail when required field is missing", () => {
    // Arrange
    const invalidData = {
      date: "2026-12-25T10:00:00.000Z",
      capacity: 100,
      category: "general",
      status: "active"
    };

    // Act
    const { error } = eventSchemas.create.body.validate(invalidData);

    // Assert
    expect(error).toBeDefined();
  });

  it("should fail when capacity is negative", () => {
    // Arrange
    const invalidData = {
      name: "Test Event",
      date: "2026-12-25T10:00:00.000Z",
      capacity: -10,
      category: "general",
      status: "active"
    };

    // Act
    const { error } = eventSchemas.create.body.validate(invalidData);

    // Assert
    expect(error).toBeDefined();
  });

  it("should fail when date is not ISO format", () => {
    // Arrange
    const invalidData = {
      name: "Test Event",
      date: "not-a-date",
      capacity: 100,
      category: "general",
      status: "active"
    };

    // Act
    const { error } = eventSchemas.create.body.validate(invalidData);

    // Assert
    expect(error).toBeDefined();
  });

});