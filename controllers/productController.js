const { Product, Category, Brand } = require("../models");
const { createClient } = require("@supabase/supabase-js");
const formidable = require("formidable");
const fs = require("fs");
const path = require("path");
const slugify = require("slugify");

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

// Display a listing of the resource.
async function index(req, res) {
  const products = await Product.find({ highlight: true })
    .populate("brand")
    .populate("category");
  res.json(products);
}

// Display the specified resource.
async function show(req, res) {
  const productSlug = req.params.slug;
  const product = await Product.findOne({ slug: productSlug })
    .populate("brand")
    .populate("category");
  res.json(product);
}

// Show the form for creating a new resource
async function create(req, res) {
  const form = formidable({
    keepExtensions: true,
    multiples: true,
  });
  form.parse(req, async (err, fields, files) => {
    if (files) {
      const ext = path.extname(files.image.filepath);
      const newFileName = `image_${Date.now()}${ext}`;
      const { data, error } = await supabase.storage
        .from("images")
        .upload(newFileName, fs.createReadStream(files.image.filepath), {
          cacheControl: "3600",
          upsert: false,
          contentType: files.image.mimetype,
          duplex: "half",
        });

      const brand = await Brand.findOne({ name: fields.brand }).populate(
        "products"
      );
      const category = await Category.findOne({
        name: fields.category,
      }).populate("products");
      const product = new Product({
        brand: brand._id,
        model: fields.model,
        slug: slugify(fields.model).toLowerCase(),
        image: newFileName,
        highlight: fields.highlight,
        price: fields.price,
        stock: fields.stock,
        subtitle: fields.subtitle,
        description: fields.description,
        category: category._id,
      });
      await product.save();
      brand.products.push(product._id);
      category.products.push(product._id);
      await brand.save();
      await category.save();
      const newProduct = await Product.findById(product.id)
        .populate("brand")
        .populate("category");
      return res.json(newProduct);
    }
  });
}

// Patch Product
async function edit(req, res) {
  const form = formidable({
    keepExtensions: true,
    multiples: true,
  });
  form.parse(req, async (err, fields, files) => {
    const ext = path.extname(files.image.filepath);
    const newFileName = `image_${Date.now()}${ext}`;
    const { data, error } = await supabase.storage
      .from("images")
      .upload(newFileName, fs.createReadStream(files.image.filepath), {
        cacheControl: "3600",
        upsert: false,
        contentType: files.image.mimetype,
      });
    const brand = await Brand.findOne({ name: fields.brand });
    const product = await Product.findById(fields.product);
    await Brand.findOneAndUpdate(
      { name: fields.oldBrand },
      { $pull: { products: product._id } }
    );
    if (files.image) {
      const product = await Product.findByIdAndUpdate(
        fields.product,
        {
          brand: brand._id,
          model: fields.model,
          slug: fields.slug,
          image: newFileName,
          highlight: fields.highlight,
          price: fields.price,
          stock: fields.stock,
          subtitle: fields.subtitle,
          description: fields.description,
        },
        { returnOriginal: false }
      ).populate("brand");
      brand.products.push(product);
      await brand.save();
      return res.json(product);
    } else {
      const product = await Product.findByIdAndUpdate(
        fields.product,
        {
          brand: brand._id,
          model: fields.model,
          slug: fields.slug,
          highlight: fields.highlight,
          price: fields.price,
          stock: fields.stock,
          subtitle: fields.subtitle,
          description: fields.description,
        },
        { returnOriginal: false }
      ).populate("brand");
      brand.products.push(product);
      await brand.save();
      return res.json(product);
    }
  });
}

// Remove the specified resource from storage.
async function destroy(req, res) {
  const productId = req.params.id;
  const product = await Product.findByIdAndDelete(productId);
  res.json(product);
}

async function searchProduct(req, res) {
  function slug(model) {
    const slug = model.split(" ").join("-").toLowerCase();
    return slug;
  }
  const slugProduct = slug(req.body.searchValue);
  const products = await Product.find().populate("brand");
  const searchProducts = products.filter(
    (product) => product.slug.includes(slugProduct) === true
  );
  res.json(searchProducts);
}

async function filterProduct(req, res) {
  const products = await Product.find().populate("brand").populate("category");
  if (req.body.brand) {
    const productsByBrand = products.filter(
      (product) => product.brand.name === req.body.brand
    );
    return res.json(productsByBrand);
  }
  if (req.body.category) {
    const productsByCategory = products.filter(
      (product) => product.category.name === req.body.category
    );
    return res.json(productsByCategory);
  }
  res.json(products);
}

module.exports = {
  index,
  show,
  create,
  edit,
  destroy,
  searchProduct,
  filterProduct,
};
