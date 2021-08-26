const express = require('express')
const { getUsers, getDetailUser, postLikeUser, postPassUser } = require('../Controllers/User')

const userRouters = express.Router()

userRouters.get('/', getUsers)
userRouters.get('/:id', getDetailUser)
userRouters.post('/like', postLikeUser)
userRouters.post('/pass', postPassUser)

module.exports = userRouters
