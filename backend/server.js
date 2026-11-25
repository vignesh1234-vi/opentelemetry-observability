
const express = require("express");

const app = express();
const PORT = 4000;

app.use(express.json());

const users = [
  { id: 1, name: "Vignesh", role: "DevOps Developer" },
  { id: 2, name: "Rahul", role: "Developer" },
  { id: 3, name: "Priya", role: "Tester" }
];

app.get("/health", (req, res) => {
  res.json({ status: "Backend is healthy" });
});

app.get("/users", (req, res) => {
  console.log("Fetching all users");
  res.json({
    message: "Users retrieved successfully",
    data: users
  });
});

app.get("/users/:id", (req, res) => {
  const user = users.find(u => u.id === Number(req.params.id));

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  res.json(user);
});

app.get("/slow", async (req, res) => {
  await new Promise(resolve => setTimeout(resolve, 5000));
  res.json({ message: "Slow API completed", delay: "5 seconds" });
});

app.get("/error", (req, res) => {
  res.status(500).json({ error: "Simulated server error" });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Backend running on port ${PORT}`);
});
