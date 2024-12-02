var express = require("express");
var router = express.Router();

var pedidosController = require("../controllers/pedidosController");

/* GET usuarios listing. */
router.get("/agregar/:id", pedidosController.agregar);

module.exports = router;
