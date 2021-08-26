const User = require('../Models/User')

const getUsers = async (req, res) => {
    try {
        const page = !parseInt(req.query.page) ? 0 : parseInt(req.query.page)
        const limit = !parseInt(req.query.limit) ? 10 : parseInt(req.query.limit)
        const startIndex = page * limit
        const endIndex = (page + 1) * limit
        const users = await User.find();
        let data = users.slice(startIndex, endIndex)
        data = data.map(u => ({ id: u.id, firstName: u.firstName, lastName: u.lastName, picture: u.picture }))
        const response = {
            data,
            total: users.length,
            page,
            limit
        }
        res.status(200).json(response)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

const getDetailUser = async (req, res) => {
    try {
        const idUser = req.params.id

        const user = await User.find({ id: idUser });

        res.status(200).json(...user)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

const postLikeUser = async (req, res) => {
    try {
        const { idUser, idLikeUser } = req.body;
        const user = await User.findOne({ id: idUser });
        if (user.like) {
            user.like = [...user.like, idLikeUser]
        } else {
            user.like = [idLikeUser]

        }
        await user.save()
        res.status(200).json({ message: "Liked" })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}
const postPassUser = async (req, res) => {
    try {
        const { idUser, idLikeUser } = req.body;
        const user = await User.findOne({ id: idUser });
        if (user.pass) {
            user.pass = [...user.pass, idLikeUser]
        } else {
            user.pass = [idLikeUser]
        }
        await user.save()
        res.status(200).json({ message: "Passed" })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

module.exports = { getUsers, getDetailUser, postLikeUser, postPassUser }