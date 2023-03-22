const express = require("express");
const router = express.Router();
const { expressjwt: checkJwt } = require("express-jwt");
const userController = require("../controllers/userController");

router.get("/", userController.index);
router.get("/crear", userController.create);
router.get("/", userController.store);
router.get("/:id", userController.show);
router.get("/:id/editar", userController.edit);
router.get("/:id", userController.update);
router.get("/:id", userController.destroy);

module.exports = router;