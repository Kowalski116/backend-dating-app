const express = require('express')
const { getUsers, getDetailUser } = require('../Controllers/User')

const userRouters = express.Router()

userRouters.get('/', getUsers)
userRouters.get('/:id', getDetailUser)

module.exports = userRouters
