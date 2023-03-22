const express = require("express");
const router = express.Router();
const { expressjwt: checkJwt } = require("express-jwt");
const userController = require("../controllers/userController");

router.get("/", userController.index);
router.post("/create", userController.create);
router.get("/:id", userController.show);
router.patch("/:id/edit", userController.edit);
router.delete("/:id", userController.destroy);

module.exports = router;
