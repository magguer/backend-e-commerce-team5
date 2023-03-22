
const { faker } = require("@faker-js/faker");
const { User } = require("../models");
const slugify = require('slugify')

faker.locale = "es";

module.exports = async () => {

  const users = [];

  for (let i = 0; i <= Number(process.env.TOTAL_USERS); i++) {
    const firstname = faker.name.firstName();
    const lastname = faker.name.lastName();
    const user = new User({
      firstname,
      lastname,
      password: "asd",
      email: slugify(`${firstname}_${lastname}@gmail.com`, {
        replacement: '-',
        lower: true,
        locale: 'en',
      }),
    });
    users.push(user);

  }

  await User.insertMany(users);

  console.log("[Database] Se corrió el seeder de Users.");
};
