import express from "express";
import { PrismaClient } from "../generated/prisma";
import cors from "cors";
import Utility from "./utils/Utilite";
import MainRoute from "./routes/main.route";

export const app = express();
export const prisma = new PrismaClient();

/**
 * CORS setup:
 * - Allows your Vercel frontend domain in production
 * - Defaults to "*" if CLIENT_ORIGIN not set (useful for dev)
 */
app.use(cors({
  origin: process.env.CLIENT_ORIGIN ?? "*",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));

// Parse JSON request bodies
app.use(express.json());

// Health check route
app.get("/", Utility.CatchAsync(async (req, res) => {
  res.send({
    code: 200,
    msg: "Server is running",
    data: []
  });
}));

// Main routes
app.use(MainRoute);

// Global error handler + 404 handler
app.use(Utility.Error_Handler);
app.use(Utility.NotFound);
