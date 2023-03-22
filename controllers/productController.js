const { Product } = require("../models");

// Display a listing of the resource.
async function index(req, res) {
  const products = await Product.find();
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
  console.log(createSlug);
  const newProduct = await Product.create({
    brand: req.body.brand,
    model: req.body.model,
    slug: createSlug(req.body.model),
    image: [req.body.image],
    highlight: req.body.highlight,
    price: req.body.price,
    stock: req.body.stock,
    subtitle: req.body.subtitle,
    description: req.body.description,
  });
  res.json(newProduct);
}

// Show the form for editing the specified resource.
async function edit(req, res) {
  const productSlug = req.params.slug;
  let newBrand = req.body.brand;
  let newModel = req.body.model;
  let newSlug = req.body.slug;
  let newImage = req.body.image;
  let newHighlight = req.body.highlight;
  let newPrice = req.body.price;
  let newStock = req.body.stock;
  let newSubtitle = req.body.subtitle;
  let newDescription = req.body.description;
  const product = await Product.findOneAndUpdate(
    { where: { slug: productSlug } },
    {
      brand: newBrand,
      model: newModel,
      slug: newSlug,
      image: newImage,
      highlight: newHighlight,
      price: newPrice,
      stock: newStock,
      subtitle: newSubtitle,
      description: newDescription,
    },

    { returnOriginal: false }
  );
  res.json(product);
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
