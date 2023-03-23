const { faker } = require("@faker-js/faker");
const { Admin } = require("../models");
const slugify = require("slugify");
const bcrypt = require("bcryptjs");

faker.locale = "es";

module.exports = async () => {
  const admin = {
    firstname: "Luis",
    lastname: "Romero",
    email: "admin@hack.com",
    password: await bcrypt.hash("1234", 8),
    rol: 200,
  };
  await Admin.create(admin);
  console.log("[Database] Se corrió el seeder de Admins.");
};
