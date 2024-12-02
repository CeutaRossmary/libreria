var express = require("express");
var router = express.Router();
const librosController = require("../controllers/librosController");

var multer = require("multer");
var fecha = Date.now();

var rutaImagenes = multer.diskStorage({
  destination: function (request, file, callback) {
    callback(null, "./public/images/");
  },
  filename: function (request, file, callback) {
    console.log(file);
    callback(null, fecha + "_" + file.originalname);
  },
});
var cargar = multer({ storage: rutaImagenes });

/* GET home page. */
router.get("/", librosController.index);
router.get("/crear", librosController.create);
router.post("/", cargar.single("imagen"), librosController.guardar);
router.get("/editar/:id", librosController.editar);
router.get("/eliminar/:id", librosController.eliminar);
router.post(
  "/actualizar",
  cargar.single("imagen"),
  librosController.actualizar
);

module.exports = router;
