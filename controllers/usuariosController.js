const { Usuario } = require('../models');

const usuariosController = {
    login: (req, res) => {
        return res.render('login')
    },
    index: async (req, res) => {
        let usuarios = await Usuario.findAll()
        return res.render('usuarios', { usuarios })
    },
    registro: (req, res) => {
        return res.render('registro')
    },
    create: async (req, res) => {
        const { nome, email, senha } = req.body
        await Usuario.create({
            nome,
            email,
            senha
        })
        return res.redirect('/users/login')
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

