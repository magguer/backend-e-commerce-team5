const { faker } = require("@faker-js/faker");
const { Admin } = require("../models");
const bcrypt = require("bcryptjs");

faker.locale = "es";

module.exports = async () => {
  const admin = {
    firstname: "Luxe",
    lastname: "Admin",
    email: "luxe@admin.com",
    password: await bcrypt.hash("1234", 8),
    rol: "Administrador",
    nivel: 500
  };
  await Admin.create(admin);
  console.log("[Database] Se corrió el seeder de Admins.");
};
