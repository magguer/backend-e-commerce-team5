const { faker } = require("@faker-js/faker");
const { Product } = require("../models");
const slugify = require("slugify");
const productsDb = require("../productsDb");

faker.locale = "es";

module.exports = async () => {
  const products = [];
  for (let productDb of productsDb) {
    const product = new Product({
      brand: productDb.brand,
      model: productDb.model,
      slug: productDb.slug,
      image: productDb.image,
      highlight: productDb.highlight,
      price: productDb.price,
      stock: productDb.stock,
    });
    products.push(product);
  }
  await Product.insertMany(products);
  console.log("[Database] Se corrió el seeder de Product.");
};
