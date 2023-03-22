const express = require("express");
const router = express.Router();
const { expressjwt: checkJwt } = require("express-jwt");
const adminController = require("../controllers/adminController");

router.get("/", adminController.index);
router.post("/", adminController.create);
router.post("/", adminController.store);
router.get("/:id", adminController.show);
router.patch("/:id", adminController.edit);
router.delete("/:id", adminController.destroy);

module.exports = router;
