var express = require("express");
var router = express.Router();

var usersController = require("../controllers/usersController")

/* GET usuarios listing. */
router.get("/", function (req, res) {
  res.send("Usuarios");
});

router.get("/login", usersController.login);
router.post("/autenticar", usersController.autenticar);

module.exports = router;
