const adminRoutes = require("./adminRoutes");
const userRoutes = require("./userRoutes");
const productRoutes = require("./productRoutes");
const categoryRoutes = require("./categoryRoutes");
const statusRoutes = require("./statusRoutes");
const orderRoutes = require("./orderRoutes");

module.exports = (app) => {

  app.use("/categorys", categoryRoutes)
  app.use("/admin", adminRoutes)
  app.use("/status", statusRoutes)
  app.use("/orders", orderRoutes)
  app.use("/products", productRoutes)
  app.use("/usuarios", userRoutes);

};
