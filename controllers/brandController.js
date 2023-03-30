const { default: slugify } = require("slugify");
const { Brand } = require("../models");
const { Product } = require("../models");

// Display a listing of users
async function index(req, res) {
  const brands = await Brand.find();
  res.json(brands);
}

// Display the specified resource.
async function show(req, res) {
  const brandSlug = req.params.slug;
  const brand = await Brand.findOne({ slug: brandSlug });
  const products = await Product.find().populate("brand");
  const productByBrand = products.filter(
    (product) => product.brand.slug === brand.slug
  );

  res.json(productByBrand);
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

async function searchBrand(req, res) {
  const brandName = slugify(req.body.searchBrand).toLowerCase();
  const brands = await Brand.find();
  const searchBrands = brands.filter(
    (brand) => slugify(brand.slug).toLowerCase().includes(brandName) === true
  );

  res.json(searchBrands);
}

module.exports = {
  index,
  show,
  create,
  edit,
  update,
  destroy,
  searchBrand,
};
