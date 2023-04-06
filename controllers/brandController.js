const { default: slugify } = require("slugify");
const { Brand } = require("../models");
const { Product } = require("../models");
const formidable = require("formidable");
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
    console.log(fields, files);
    if (files.logo) {
      await Brand.create({
        logo: files.logo,
        name: fields.name,
        slug: slugify(fields.name, {
          replacement: "-",
          lower: true,
          locale: "en",
        }),
      });
    } else {
      await Brand.create({
        name: "fields.name",
        slug: slugify("fields.name", {
          replacement: "-",
          lower: true,
          locale: "en",
        }),
      });
    }
  });
  const brands = await Brand.find();
  res.json(brands);
}

// Show the form for editing the specified resource.
async function edit(req, res) {
  const form = formidable({
    uploadDir: __dirname + "/../public/img",
    keepExtensions: true,
    multiples: true,
  });
  form.parse(req, async (err, fields, files) => {
    if (files.logo) {
      await Brand.findByIdAndUpdate(
        { _id: req.params.id },

        {
          name: fields.name,
          slug: slugify(fields.name, {
            replacement: "-",
            lower: true,
            locale: "en",
          }),
          logo: files.logo.originalFilename,
          logo2: files.logo.originalFilename,
        },
        { returnOriginal: false }
      );
    } else {
      await Brand.findByIdAndUpdate(
        { _id: req.params.id },

        {
          name: fields.name,
          slug: slugify(fields.name, {
            replacement: "-",
            lower: true,
            locale: "en",
          }),
        },
        { returnOriginal: false }
      );
    }
  });
  const brands = await Brand.find();
  res.json(brands);
}

// Update the specified resource in storage.
async function update(req, res) {}

// Remove the specified resource from storage.
async function destroy(req, res) {
  const brandId = req.params.id;
  const deletedBrand = await Brand.findById(brandId);
  await Brand.findOneAndDelete({ _id: brandId });
  const brands = await Brand.find();
  res.json(brands);
}

async function searchBrand(req, res) {
  if (req.body.searchBrand) {
    const brandName = slugify(req.body.searchBrand).toLowerCase();
    const brands = await Brand.find();
    const searchBrands = brands.filter(
      (brand) => slugify(brand.slug).toLowerCase().includes(brandName) === true
    );
    res.json(searchBrands);
  } else {
    const searchBrands = await Brand.find();
    res.json(searchBrands);
  }
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
