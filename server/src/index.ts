import express from "express";
import { PrismaClient } from "../generated/prisma";
import cors from "cors";
import Utility from "./utils/Utilite";
import MainRoute from "./routes/main.route";

export const app = express();
export const prisma = new PrismaClient();

// CORS
app.use(cors({
  origin: process.env.CLIENT_ORIGIN ?? "*",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));

app.use(express.json());

// Health check
app.get("/", Utility.CatchAsync(async (req, res) => {
  res.send({ code: 200, msg: "Server is running", data: [] });
}));

// Routes
app.use(MainRoute);

// Error handling
app.use(Utility.Error_Handler);
app.use(Utility.NotFound);
