require("dotenv").config();
async function runAllSeeders() {
  const { mongoose } = require("../db");
  await mongoose.connection.dropDatabase();

  await require("./adminSeeder")();
  await require("./brandSeeder")();
  await require("./userSeeder")();
  await require("./categorySeeder")();
  await require("./productSeeder")();
  await require("./statusSeeder")();
  await require("./orderSeeder")();

  console.log("[Database] ¡Los datos de prueba fueron insertados!");
  process.exit();
}

runAllSeeders();
