
const { faker } = require("@faker-js/faker");
const { Admin } = require("../models");
const slugify = require('slugify')

faker.locale = "es";

module.exports = async () => {

  const admin = [];

  await Admin.insertMany(admin);

  console.log("[Database] Se corrió el seeder de Users.");
};
