// routes/categoryRoutes.js
const express = require("express");
const router = express.Router();

const categoryController = require("../controllers/categoryController");

// /api/categories/...
router.get("/", categoryController.getAll);

module.exports = router;
