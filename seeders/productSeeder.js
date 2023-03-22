
const { faker } = require("@faker-js/faker");
const { Products } = require("../models");
const slugify = require('slugify')

faker.locale = "es";

module.exports = async () => {

  const products = [];

  await Products.insertMany(products);

  console.log("[Database] Se corrió el seeder de Users.");
};
