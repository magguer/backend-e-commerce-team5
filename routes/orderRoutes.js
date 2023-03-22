const express = require("express");
const router = express.Router();
const { expressjwt: checkJwt } = require("express-jwt");
const orderController = require("../controllers/orderController");

router.get("/", orderController.index);
router.get("/crear", orderController.create);
router.get("/", orderController.store);
router.get("/:id", orderController.show);
router.get("/:id/editar", orderController.edit);
router.get("/:id", orderController.update);
router.get("/:id", orderController.destroy);

module.exports = router;