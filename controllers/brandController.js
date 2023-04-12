const { default: slugify } = require("slugify");
const { Brand } = require("../models");
const { Product } = require("../models");
const formidable = require("formidable");
const fs = require("fs");
const { createClient } = require("@supabase/supabase-js");
const path = require("path");

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);
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
    keepExtensions: true,
    multiples: true,
  });
  form.parse(req, async (err, fields, files) => {
    if (files.logo) {
      const ext = path.extname(files.logo.filepath);
      const newFileName = `image_${Date.now()}${ext}`;
      const { data, error } = await supabase.storage
        .from("images")
        .upload(newFileName, fs.createReadStream(files.logo.filepath), {
          cacheControl: "3600",
          upsert: false,
          contentType: files.logo.mimetype,
          duplex: "half",
        });

      const createdBrand = await Brand.create({
        logo2: newFileName,
        name: fields.name,
        slug: slugify(fields.name, {
          replacement: "-",
          lower: true,
          locale: "en",
        }),
      });
      res.json(createdBrand);
    } else {
      const createdBrand = await Brand.create({
        name: "fields.name",
        slug: slugify("fields.name", {
          replacement: "-",
          lower: true,
          locale: "en",
        }),
      });
      res.json(createdBrand);
    }
  });
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
      const brand = await Brand.findByIdAndUpdate(
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
      return res.json(brand);
    } else {
      const brand = await Brand.findByIdAndUpdate(
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
      return res.json(brand);
    }
  });
  const brands = await Brand.find();
}

// Update the specified resource in storage.
async function update(req, res) {}

// Remove the specified resource from storage.
async function destroy(req, res) {
  const brandId = req.params.id;
  const deletedBrand = await Brand.findById(brandId);
  await Brand.findOneAndDelete({ _id: brandId });

  res.json(deletedBrand);
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
