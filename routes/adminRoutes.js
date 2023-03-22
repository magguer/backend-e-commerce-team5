const express = require("express");
const router = express.Router();
const { expressjwt: checkJwt } = require("express-jwt");
const adminController = require("../controllers/adminController");

router.get("/", adminController.index);
router.get("/crear", adminController.create);
router.get("/", adminController.store);
router.get("/:id", adminController.show);
router.get("/:id/editar", adminController.edit);
router.get("/:id", adminController.update);
router.get("/:id", adminController.destroy);

module.exports = router;