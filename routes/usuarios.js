var express = require('express');
var router = express.Router();

var usuariosController = require('../controllers/usuariosController')

/* GET usuarios listing. */
router.get('/', usuariosController.index);
router.get('/crear', usuariosController.create);
router.post('/',usuariosController.guardar);
router.get('/eliminar/:id', usuariosController.eliminar);
router.get('/editar/:id', usuariosController.editar);
router.post('/actualizar',usuariosController.actualizar);

module.exports = router;
