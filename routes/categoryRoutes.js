const express = require("express");
const router = express.Router();
const { expressjwt: checkJwt } = require("express-jwt");
const categoryController = require("../controllers/categoryController");

router.get("/", categoryController.index);
router.get("/crear", categoryController.create);
router.get("/", categoryController.store);
router.get("/:id", categoryController.show);
router.get("/:id/editar", categoryController.edit);
router.get("/:id", categoryController.update);
router.get("/:id", categoryController.destroy);

module.exports = router;