require("dotenv").config();
async function runAllSeeders() {

  const { mongoose } = require("../db");
  await mongoose.connection.dropDatabase();

  await require("./userSeeder")();

  console.log("[Database] ¡Los datos de prueba fueron insertados!");
  process.exit();

}

runAllSeeders();
