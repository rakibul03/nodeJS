const express = resquire("express");
const router = express.Router();

// GET ALL THE TODOS
router.get("/", async (req, res) => {
  res.send("Todo route is running");
});

// GET A TODOS by ID
router.get("/:id", async (req, res) => {});

// POST TODO
router.post("/", async (req, res) => {});

module.exports = router;
