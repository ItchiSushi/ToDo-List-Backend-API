// npm install express-async-handler
const asyncHandler = require("express-async-handler");
const List = require('../models/listmodel');
const { text } = require("express");
// GET
const getLists = asyncHandler(async (req, res) => {
  const lists = await List.find()
  res.status(200).json(lists);
});
// POST
const setLists = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add text in the field");
  }
  const list = await List.create({
    text: req.body.text
  })
  res.status(200).json(list);
});
// PUT
const updateLists = asyncHandler(async (req, res) => {
  const list = await List.findById(req.params.id)
  if (!list) {
    res.status(400);
    throw new Error("List not found");
  }
   const updateList = await List.findByIdAndUpdate(req.params.id, req.body, {new:true,})
  res.status(200).json(updateList);
});
// DELETE
const deleteLists = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("List not found");
  }
  const deleteList = await List.findByIdAndDelete(req.params.id, req.body,{delete: true,})
  res.status(200).json({ message: `Deleted List ${req.params.id}` });
});
module.exports = {
  getLists,
  setLists,
  updateLists,
  deleteLists,
};
