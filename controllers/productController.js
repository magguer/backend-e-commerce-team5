const { Product, Category } = require("../models");
const Brand = require("../models/Brand");
const formidable = require("formidable");

// Display a listing of the resource.
async function index(req, res) {
  const products = await Product.find().populate("brand");
  res.json(products);
}

// Display the specified resource.
async function show(req, res) {
  const productSlug = req.params.slug;
  const product = await Product.findOne({ slug: productSlug });
  res.json(product);
}

// Show the form for creating a new resource
async function create(req, res) {
  function createSlug(model) {
    const slug = model.split(" ").join("-").toLowerCase();
    return slug;
  }
  const brand = await Brand.findOne({ name: req.body.brand })
  const category = await Category.findOne({ name: req.body.category })
  const newProduct = await Product.create({
    brand: brand._id,
    model: req.body.model,
    slug: createSlug(req.body.model),
    image: [req.body.image],
    category: category._id,
    highlight: req.body.highlight,
    price: req.body.price,
    stock: req.body.stock,
    subtitle: req.body.subtitle,
    description: req.body.description,
  });
  brand.products.push(newProduct._id)
  category.products.push(newProduct._id)
  brand.save()
  category.save()
  res.json(newProduct);
}

// Show the form for editing the specified resource.
async function edit(req, res) {
  console.log(req.body.brand);
  const productSlug = req.params.slug;
  const form = formidable({
    uploadDir: __dirname + "/../public/img",
    keepExtensions: true,
    multiples: true,
  });
  form.parse(req, async (err, fields, files) => {
    if (files.image) {
      await Product.findOneAndUpdate(
        { where: { slug: productSlug } },
        {
          brand: fields.brand,
          model: fields.model,
          slug: fields.slug,
          image: files.image,
          highlight: fields.highlight,
          price: fields.price,
          stock: fields.stock,
          subtitle: fields.subtitle,
          description: fields.description,
        },
        { returnOriginal: false }
      );
    } else {
      await Product.findOneAndUpdate(
        { where: { slug: productSlug } },
        {
          brand: fields.brand,
          model: fields.model,
          slug: fields.slug,
          highlight: fields.highlight,
          price: fields.price,
          stock: fields.stock,
          subtitle: fields.subtitle,
          description: fields.description,
        },
        { returnOriginal: false }
      );
    }
    res.json("Todo Ok");
  })
}

async function updateStock(req, res) {
  const productSlug = req.params.slug;
  const product = await Product.findOne({ slug: productSlug });
  const newStock = product.stock - req.body.stock;
  const newProduct = await Product.findOneAndUpdate(
    { where: { slug: productSlug } },
    {
      stock: newStock,
    },
    { returnOriginal: false }
  );
  res.json(newProduct);
}

// Remove the specified resource from storage.
async function destroy(req, res) {
  const productId = req.params.id;
  const product = await Product.findOneAndDelete({ id: productId });
  res.json({ message: "The Product was deleted", productDeleted: product });
}

module.exports = {
  index,
  show,
  create,
  updateStock,
  edit,
  destroy,
};
