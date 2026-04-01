Assignment 5
Overview

This project is a simple Event API built with Express and TypeScript.
It allows users to create, read, update, and delete events.

The main goal is to apply security practices, validation, and API documentation.

Live Documentation

https://rrc-sp2025-lichaohuang.github.io/3018_Assignment_3/



API Endpoints

Base URL:

http://localhost:3000/api/v1

Endpoints:

POST /events → create event
GET /events → get all events
GET /events/ → get event by id
PUT /events/ → update event
DELETE /events/ → delete event

Security
Helmet

Helmet is used to add security headers:

hidePoweredBy → hide Express info
noSniff → prevent MIME attacks
CORS

CORS is used to control which requests are allowed from other origins.

Validation

Joi is used to validate input data:

name must be string
date must be future date
capacity must be number

Documentation

Swagger (OpenAPI) is used to generate API documentation.
The docs are deployed using GitHub Pages.

Testing

Tested using:

Swagger UI
Browser DevTools
Postman

Author

Lichao Huang