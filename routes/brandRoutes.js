const express = require("express");
const router = express.Router();
const { expressjwt: checkJwt } = require("express-jwt");
const brandController = require("../controllers/brandController");

router.use(
  checkJwt({
    secret: process.env.SESSION_SECRET,
    algorithms: ["HS256"],
  })
);

router.get("/", brandController.index);
router.post("/", brandController.create);
router.get("/:id", brandController.show);
router.patch("/:id", brandController.edit);
router.delete("/:id", brandController.destroy);

module.exports = router;
