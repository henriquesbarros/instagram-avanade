var express = require('express');
var router = express.Router();
const usuariosController = require('../controllers/usuariosController')
const validarCadastro = require('../middlewares/ValidarCadastro')

/* GET users listing. */
router.get('/login', usuariosController.login)
router.get('/', usuariosController.index);
router.get('/registro', usuariosController.registro)
router.post('/', validarCadastro, usuariosController.create);
router.put('/:id', usuariosController.update);
router.delete('/:id', usuariosController.delete);

module.exports = router;
