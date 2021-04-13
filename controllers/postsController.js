const { Post } = require('../models');

const postsController = {
    index: async (req, res) => {
        let posts = await Post.findAll()
        return res.json(posts)
    },
    create: async (req, res) => {
        const { texto, img, usuarios_id, n_likes } = req.body
        let novoPost = await Post.create({
            texto: texto,
            img: img,
            usuarios_id: usuarios_id,
            n_likes: n_likes
        })
        return res.json(novoPost)
    },
    update: async (req, res) => {
        const { id } = req.params
        const { usuarios_id } = req.body
        const postAtt = await Post.update({
            usuarios_id: usuarios_id
        },
        {
            where: {
                id: id
            }
        })
        return res.json(postAtt)
    },
    delete: async (req, res) => {
        const { id } = req.params
        const postDel = await Post.destroy(
        {
            where: {
                id: id
            }
        })
        return res.json(postDel)
    }
}

module.exports = postsController;

