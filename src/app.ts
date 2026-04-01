import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

import eventRoutes from "./api/v1/routes/eventRoutes";
import setupSwagger from "../config/swagger";
import { getHelmetConfig } from "../config/helmetConfig";
import { getCorsOptions } from "../config/corsConfig";

const app = express();


app.use(express.json());


app.use(getHelmetConfig());


app.use(cors(getCorsOptions()));

// health check
app.get("/api/v1/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    version: "1.0.0",
  });
});

// routes
app.use("/api/v1/events", eventRoutes);


setupSwagger(app);

export default app;