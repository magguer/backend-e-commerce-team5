
const { faker } = require("@faker-js/faker");
const { Category } = require("../models");
const slugify = require('slugify')

faker.locale = "es";

module.exports = async () => {

  const category = [];

  await Category.insertMany(category);

  console.log("[Database] Se corrió el seeder de Users.");
};
