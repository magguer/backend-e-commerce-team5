const { faker } = require("@faker-js/faker");
const { Product } = require("../models");
const { Category } = require("../models");
const slugify = require("slugify");
const productsDb = require("../productsDb");

faker.locale = "es";

module.exports = async () => {
  const products = [];
  const categories = await Category.find();
  const [electric] = categories.filter(
    (category) => category.name === "Electric"
  );
  const [acoustic] = categories.filter(
    (category) => category.name === "Acoustic"
  );
  const [bass] = categories.filter((category) => category.name === "Bass");

  for (let productDb of productsDb) {
    const images = {
      original: productDb.image,
      thumbnail: productDb.image,
    };

    const product = new Product({
      brand: productDb.brand,
      model: productDb.model,
      slug: productDb.slug,
      image: productDb.image,
      images: [images],
      highlight: productDb.highlight,
      price: productDb.price,
      stock: productDb.stock,
      subtitle: productDb.subtitle,
      description: productDb.description,
      detail: productDb.detail,
    });
    if (productDb.category === "Electric") {
      product.category = electric._id;
      electric.products.push(product._id);
    }

    if (productDb.category === "Acoustic") {
      product.category = acoustic._id;
      acoustic.products.push(product._id);
    }

    if (productDb.category === "Bass") {
      product.category = bass._id;
      bass.products.push(product._id);
    }

    products.push(product);
  }
  electric.save();
  acoustic.save();
  bass.save();

  await Product.insertMany(products);

  console.log("[Database] Se corrió el seeder de Product.");
};
