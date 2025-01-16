const express = require("express");
const router = express.Router();
const {
  getLists,
  setLists,
  updateLists,
  deleteLists,
} = require("../controllers/listController");

// Get and Post List
router.route("/").get(getLists).post(setLists);

// Update and Delete
router.route("/:id").put(updateLists).delete(deleteLists);

module.exports = router;
