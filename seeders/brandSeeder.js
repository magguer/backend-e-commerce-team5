const { faker } = require("@faker-js/faker");
const Brand = require("../models/Brand");

faker.locale = "es";

let ArrayBrands = [
  {
    name: "Gibson",
    slug: "gibson",
    logo: "GIBSON-LOGO-WHITE-1.png",
    products: [],
  },
  {
    name: "Fender",
    slug: "fender",
    logo: "FENDER-LOGO-WHITE-1.png",
    products: [],
  },
  {
    name: "PRS",
    slug: "prs",
    logo: "PRS-LOGO-WHITE-1.png",
    products: [],
  },
  {
    name: "Krk",
    slug: "krk",
    logo: "KRK-LOGO-WHITE-1.png",
    products: [],
  },
  {
    name: "Yamaha",
    slug: "yamaha",
    logo: "YAMAHA-LOGO-WHITE-1.png",
    products: [],
  }
];

module.exports = async () => {
  const brands = [];

  for (let itemBrand of ArrayBrands) {
    const brand = new Brand({
      name: itemBrand.name,
      slug: itemBrand.slug,
      logo: itemBrand.logo,
      products: itemBrand.products,
    });
    brands.push(brand);
  }

  await Brand.insertMany(brands);

  console.log("[Database] Se corrió el seeder de Brands.");
};
