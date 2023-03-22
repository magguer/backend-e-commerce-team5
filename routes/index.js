const userRoutes = require("./userRoutes");
const productRoutes = require("./productRoutes");
const categoryRoutes = require("./categoryRoutes");
const orderRoutes = require("./orderRoutes");

module.exports = (app) => {

  app.use("/categorys", categoryRoutes)
  app.use("/orders", orderRoutes)
  app.use("/products", productRoutes)
  app.use("/usuarios", userRoutes);

};
