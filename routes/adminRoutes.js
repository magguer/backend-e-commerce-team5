const express = require("express");
const router = express.Router();
const { expressjwt: checkJwt } = require("express-jwt");
const adminController = require("../controllers/adminController");

router.get("/", adminController.index);
router.post("/crear", adminController.create);
router.post("/", adminController.store);
router.get("/:id", adminController.show);
router.patch("/:id/editar", adminController.edit);
router.patch("/:id", adminController.update);
router.delete("/:id", adminController.destroy);


module.exports = router;