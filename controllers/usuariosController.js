const { Usuario } = require('../models');

const usuariosController = {
    index: async (req, res) => {
        let usuarios = await Usuario.findAll()
        return res.json(usuarios)
    },
    create: async (req, res) => {
        const { nome, email, senha } = req.body
        let novoUsuario = await Usuario.create({
            nome: nome,
            email: email,
            senha: senha
        })
        return res.json(novoUsuario)
    },
    update: async (req, res) => {
        const { id } = req.params
        const { email } = req.body
        const usuarioAtt = await Usuario.update({
            email: email
        },
        {
            where: {
                id: id
            }
        })
        return res.json(usuarioAtt)
    },
    delete: async (req, res) => {
        const { id } = req.params
        const usuarioDel = await Usuario.destroy(
        {
            where: {
                id: id
            }
        })
        return res.json(usuarioDel)
    }
}

module.exports = usuariosController;

