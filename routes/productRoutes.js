const express = require("express");
const router = express.Router();
const { expressjwt: checkJwt } = require("express-jwt");
const productController = require("../controllers/productController");

router.get("/", productController.index);
router.get("/crear", productController.create);
router.get("/", productController.store);
router.get("/:id", productController.show);
router.get("/:id/editar", productController.edit);
router.get("/:id", productController.update);
router.get("/:id", productController.destroy);

module.exports = router;