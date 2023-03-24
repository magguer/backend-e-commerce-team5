const { faker } = require("@faker-js/faker");
const Brand = require("../models/Brand");



faker.locale = "es";


let ArrayBrands = ["Gibson","Fender","Kramer","Krk","Maestro","Steinberg"];

module.exports = async () => {
  const brands = [];
  for (let i = 0; i < ArrayBrands.length; i++) {
    const brand = new Brand({
      name: ArrayBrands[i],
      products: [],
    });
    brands.push(brand);
  }

  await Brand.insertMany(brands);

  console.log("[Database] Se corrió el seeder de Brands.");
};
