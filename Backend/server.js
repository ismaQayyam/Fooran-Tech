import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import contactRoutes from "./Routes/contactRoutes.js";
import { pool } from "./config/db.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// 🔌 Test PostgreSQL Connection
pool.connect()
  .then(() => console.log("📌 PostgreSQL Connected Successfully"))
  .catch(err => console.error("❌ PostgreSQL Connection Error:", err));

// API Routes
app.use("/api/contact", contactRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => 
  console.log("🚀 Server is running on port " + PORT)
);
