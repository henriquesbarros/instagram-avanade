const { Usuario } = require('../models');

const usuariosController = {
    index: async (req, res) => {
        let usuarios = await Usuario.findAll()
        return res.render('usuarios', { usuarios })
    },
    create: async (req, res) => {
        const { nome, email, senha } = req.body
        let novoUsuario = await Usuario.create({
            nome,
            email,
            senha
        })
        return res.json(novoUsuario)
    },
    update: async (req, res) => {
        const { id } = req.params
        const { email } = req.body
        const usuarioAtt = await Usuario.update({
            email
        },
        {
            where: { id }
        })
        return res.json(usuarioAtt)
    },
    delete: async (req, res) => {
        const { id } = req.params
        const usuarioDel = await Usuario.destroy(
        {
            where: { id }
        })
        return res.json(usuarioDel)
    }
}

module.exports = usuariosController;

