var express = require('express');
var router = express.Router();

var librosController = require('../controllers/librosController')
var usuariosController = require('../controllers/usuariosController')

router.get('/libros', librosController.index_api);
router.post('/usuarios', usuariosController.guardar_api);
router.post('/usuarios/actualizar',usuariosController.actualizar_api);
router.get('/usuarios/eliminar/:id', usuariosController.eliminar_api);
router.get('/usuarios/obten/:id', usuariosController.obten_usuario_api);



module.exports = router;