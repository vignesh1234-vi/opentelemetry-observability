
const express = require("express");

const app = express();
const PORT = 3000;

const BACKEND_URL = "http://backend:4000";

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to OpenTelemetry COE Application",
    service: "Frontend",
    status: "Running"
  });
});

app.get("/users", async (req, res) => {
  try {
    const response = await fetch(`${BACKEND_URL}/users`);
    const data = await response.json();

    res.json({
      source: "Frontend",
      backendResponse: data
    });
  } catch (error) {
    console.error("Backend communication failed:", error.message);

    res.status(500).json({
      error: "Unable to communicate with backend"
    });
  }
});

app.get("/slow", async (req, res) => {
  try {
    const response = await fetch(`${BACKEND_URL}/slow`);
    const data = await response.json();

    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/error", async (req, res) => {
  try {
    const response = await fetch(`${BACKEND_URL}/error`);
    const data = await response.json();

    res.status(response.status).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Frontend running on port ${PORT}`);
});
