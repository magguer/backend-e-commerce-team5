
const { faker } = require("@faker-js/faker");
const { Order } = require("../models");
const slugify = require('slugify')

faker.locale = "es";

module.exports = async () => {

  const order = [];

  await Order.insertMany(order);

  console.log("[Database] Se corrió el seeder de Users.");
};
