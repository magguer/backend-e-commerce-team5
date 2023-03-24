const Brand = require("../models/Brand");
const { Category } = require("../models");

// Display a listing of users
async function index(req, res) {
  const brands = await Brand.find();
  res.json(brands);
}

// Display the specified resource.
async function show(req, res) {
  const brandId = req.params.id;
  const brand = await Brand.findById(brandId);
  res.json(brand);
}

// Show the form for creating a new resource
async function create(req, res) {}

// Show the form for editing the specified resource.
async function edit(req, res) {}

// Update the specified resource in storage.
async function update(req, res) {}

// Remove the specified resource from storage.
async function destroy(req, res) {}

module.exports = {
  index,
  show,
  create,
  edit,
  update,
  destroy,
};
