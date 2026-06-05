// app.js — Express Setup
// src/app.js

const express = require("express")
const helmet = require("helmet")
const cors = require("cors")
const { requestLogger } = require("./middleware/requestLogger")
const { errorHandler } = require("./middleware/errorHandler")
const { rateLimiter } = require("./middleware/rateLimiter")
const routes = require("./routes")

const app = express()

// ── Security middleware (first) ──────────────────────────────
app.use(helmet())                    // Sets secure HTTP headers
app.use(cors({ origin: process.env.ALLOWED_ORIGINS?.split(",") }))

// ── Parsing ──────────────────────────────────────────────────
app.use(express.json({ limit: "10kb" }))  // Limit body size
app.use(express.urlencoded({ extended: false }))

// ── Rate limiting (global) ────────────────────────────────────
app.use(rateLimiter)

// ── Logging ──────────────────────────────────────────────────
app.use(requestLogger)

// ── Routes ───────────────────────────────────────────────────
app.use("/api/v1", routes)

// ── Health check (no auth required) ──────────────────────────
app.get("/health", (req, res) => res.json({ status: "ok" }))

// ── Error handler (must be LAST) ─────────────────────────────
app.use(errorHandler)

module.exports = app
