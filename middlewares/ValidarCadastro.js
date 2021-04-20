const { Usuario } = require('../models')

module.exports = async (req, res, next) => {
    let { nome, email, senha } = req.body

    if ( !nome || !email || !senha ) {
        res.status(400).json({ erro: "Preencha todos os campos!" })
    } else {
        let user = await Usuario.findAll({
            where: { email }
        })
        if (user.length) {
            res.status(400).json({ erro: "Email já cadastrado!" })
        } else {
            if (typeof senha === "number") {
                senha = senha.toString()
            }
            if (senha.length < 6 || senha.length > 12) {
                res.status(400).json({ erro: "Insira uma senha com mais de 5 dígitos ou menos de 13 dígitos!" })
            } else {
                next()
            }
        }
    } 
}

