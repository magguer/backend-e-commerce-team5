const express = require("express");
const router = express.Router();
const { expressjwt: checkJwt } = require("express-jwt");
const userController = require("../controllers/userController");

router.get("/", userController.index);
router.post("/crear", userController.create);
router.post("/", userController.store);
router.get("/:id", userController.show);
router.patch("/:id/editar", userController.edit);
router.patch("/:id", userController.update);
router.delete("/:id", userController.destroy);

module.exports = router;