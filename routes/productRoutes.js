const express = require("express");
const router = express.Router();
const { expressjwt: checkJwt } = require("express-jwt");
const productController = require("../controllers/productController");

router.get("/", productController.index);
router.get("/:slug", productController.show);
/// rutas privadas ///
router.post("/create", productController.create);
router.patch("/:slug/edit", productController.edit);
router.patch("/:slug/update-stock", productController.updateStock);
router.delete("/:id", productController.destroy);

module.exports = router;
