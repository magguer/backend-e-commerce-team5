const express = require("express");
const router = express.Router();
const { expressjwt: checkJwt } = require("express-jwt");
const productsController = require("../controllers/productsController");

router.get("/", productsController.index);
router.get("/crear", productsController.create);
router.get("/", productsController.store);
router.get("/:id", productsController.show);
router.get("/:id/editar", productsController.edit);
router.get("/:id", productsController.update);
router.get("/:id", productsController.destroy);

module.exports = router;