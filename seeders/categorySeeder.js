
const { faker } = require("@faker-js/faker");
const { Category } = require("../models");
const slugify = require('slugify')

faker.locale = "es";

let ArrayCategories = ['Electric','Acoustic','Bass','Audio Pro']

module.exports = async () => {
  const categories = [];
  for(let i=0;i<ArrayCategories.length;i++){
     const category = new Category({
      name: ArrayCategories[i],
      products:[]
     })
    categories.push(category) 
  }

  await Category.insertMany(categories);

  console.log("[Database] Se corrió el seeder de Users.");
};
