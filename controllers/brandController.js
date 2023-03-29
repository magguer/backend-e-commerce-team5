const { default: slugify } = require("slugify");
const { Brand } = require("../models");

// Display a listing of users
async function index(req, res) {
  const brands = await Brand.find();
  res.json(brands);
}

// Display the specified resource.
async function show(req, res) {
  const brandSlug = req.params.slug;
  const brand = await Brand.find({ slug: brandSlug }).populate({
    path: "products",
    populate: "category",
  });
  res.json(brand);
}

// Post Brand
async function create(req, res) {
  const form = formidable({
    uploadDir: __dirname + "/../public/img",
    keepExtensions: true,
    multiples: true,
  });
  form.parse(req, async (err, fields, files) => {
    await Admin.create({
      logo: files.logo,
      name: fields.name,
      slug: slugify(fields.name, {
        replacement: "-",
        lower: true,
        locale: "en",
      }),
    });
  });
  res.json("Todo OK.");
}

// Show the form for editing the specified resource.
async function edit(req, res) {}

// Update the specified resource in storage.
async function update(req, res) {}

// Remove the specified resource from storage.
async function destroy(req, res) {
  const brandId = req.params.id;
  const deletedBrand = await Brand.findById(brandId);
  await Brand.findOneAndDelete({ id: brandId });
  res.json({
    message: `The Admin ${deletedBrand.name} was deleted`,
  });
}

module.exports = {
  index,
  show,
  create,
  edit,
  update,
  destroy,
};
