const { faker } = require("@faker-js/faker");
const { Product } = require("../models");
const { Category } = require("../models");
const slugify = require("slugify");
const productsDb = require("../productsDb");

faker.locale = "es";

module.exports = async () => {
  const products = [];

  for (let productDb of productsDb) {
    const productCategory = await Category.findOne({
      name: productDb.category,
    });
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
      category: productCategory,
    });
    productCategory.products.push(product._id);

    products.push(product);
    productCategory.save();
  }

  await Product.insertMany(products);

  console.log("[Database] Se corrió el seeder de Product.");
};
