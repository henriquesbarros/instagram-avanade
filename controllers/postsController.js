const { Post } = require('../models');

const postsController = {
    index: async (req, res) => {
        let posts = await Post.findAll({
            include: ['usuario', 'comentarios', 'curtiu']
        })
        return res.render('index', { posts })
    },
    show: async (req, res) => {
        let { id } = req.params
        let postsFound = await Post.findAll({
            where: {
                usuarios_id: id
            }
        })

        return res.json(postsFound)
    },
    create: async (req, res) => {
        const { texto, img, usuarios_id, n_likes } = req.body
        let novoPost = await Post.create({
            texto,
            img,
            usuarios_id,
            n_likes
        })
        return res.json(novoPost)
    },
    update: async (req, res) => {
        const { id } = req.params
        const { usuarios_id } = req.body
        const postAtt = await Post.update({
            usuarios_id
        },
        {
            where: { id }
        })
        return res.json(postAtt)
    },
    delete: async (req, res) => {
        const { id } = req.params
        const postDel = await Post.destroy(
        {
            where: { id }
        })
        return res.json(postDel)
    }
}

module.exports = postsController;

