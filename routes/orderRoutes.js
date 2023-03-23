const express = require("express");
const router = express.Router();
const { expressjwt: checkJwt } = require("express-jwt");
const orderController = require("../controllers/orderController");

router.get("/", orderController.index);
router.get("/:id", orderController.show);
router.post("/", orderController.create);
router.patch("/:id/edit", orderController.edit);
router.delete("/:id", orderController.destroy);

module.exports = router;
