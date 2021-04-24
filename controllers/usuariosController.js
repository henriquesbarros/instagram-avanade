const bcrypt = require('bcryptjs')
const { Usuario } = require('../models');

const usuariosController = {
    login: (req, res) => {
        return res.render('login')
    },
    auth: async (req, res) => {
        const { email, senha } = req.body
        console.log(req.body)
        const usuario = await Usuario.findOne({
            where: { email }
        })
        console.log(usuario)
        if (usuario && bcrypt.compareSync(senha, usuario.senha)) {
            req.session.usuarioLogado = usuario
            return res.redirect('/posts')
        } else {
            return res.redirect('/users/login')
        }
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

        const senhaCrypt = bcrypt.hashSync(senha, 10)

        await Usuario.create({
            nome,
            email,
            senha: senhaCrypt
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

