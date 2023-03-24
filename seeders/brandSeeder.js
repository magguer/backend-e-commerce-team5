const { faker } = require("@faker-js/faker");
const Brand = require("../models/Brand");

faker.locale = "es";

let ArrayBrands = [
  {
    name: "Gibson",
    slug: "gibson",
    logo: "https://i.pinimg.com/originals/6c/e0/f3/6ce0f399b6c4f0d3949d13f6475c523b.jpg",
    products: [],
  },
  {
    name: "Fender",
    slug: "fender",
    logo: "https://assets.spotlight.fender.com/logos/fender-red-large.jpg",
    products: [],
  },
  {
    name: "Kramer",
    slug: "kramer",
    logo: "https://i.pinimg.com/originals/1e/d6/1a/1ed61a9a1302c9188d356a243028b56a.jpg",
    products: [],
  },
  {
    name: "Krk",
    slug: "krk",
    logo: "https://www.heavenimagenes.com/heavencommerce/43ff3c3d-fe3a-4118-ad1c-e1be4cd5df9b/logos/v2/KRK/12.jpg",
    products: [],
  },
  {
    name: "Maestro",
    slug: "maestro",
    logo: "https://img.freepik.com/vector-premium/logo-maestro-guitarra_23-2147522333.jpg?w=2000",
    products: [],
  },
  {
    name: "Steinberg",
    slug: "steinberg",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3_yqPJGGjvmonKGKJ0WQRJ02onmzZ5ozq_dDHciq5Tg&s",
    products: [],
  },
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
