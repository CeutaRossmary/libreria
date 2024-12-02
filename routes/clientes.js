var express = require('express');
var router = express.Router();

const clientesController = require("../controllers/clientesController")

router.get('/', clientesController.index);
router.get('/crear', clientesController.create);
router.post('/',clientesController.guardar);
router.get('/eliminar/:id', clientesController.eliminar);
router.get('/editar/:id', clientesController.editar);
router.post('/actualizar',clientesController.actualizar);


module.exports = router;
console.log("router started 01")