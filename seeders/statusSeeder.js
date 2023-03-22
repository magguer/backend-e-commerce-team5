
const { faker } = require("@faker-js/faker");
const { Status } = require("../models");
const slugify = require('slugify')

faker.locale = "es";

module.exports = async () => {

  const status = [];

  await Status.insertMany(status);

  console.log("[Database] Se corrió el seeder de Users.");
};
