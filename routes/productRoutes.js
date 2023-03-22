const express = require("express");
const router = express.Router();
const { expressjwt: checkJwt } = require("express-jwt");
const productController = require("../controllers/productController");

router.get("/", productController.index);
router.post("/create", productController.create);
router.get("/:slug", productController.show);
router.patch("/:slug/edit", productController.edit);
router.patch("/:slug/update-stock", productController.updateStock);
router.delete("/:slug", productController.destroy);

module.exports = router;
