const express = require("express");
const router = express.Router();
const { expressjwt: checkJwt } = require("express-jwt");
const productController = require("../controllers/productController");

router.get("/", productController.index);
router.post("/crear", productController.create);
router.post("/", productController.store);
router.get("/:id", productController.show);
router.patch("/:id/editar", productController.edit);
router.patch("/:id", productController.update);
router.delete("/:id", productController.destroy);

module.exports = router;