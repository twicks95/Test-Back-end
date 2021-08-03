const express = require('express')
const Route = express.Router()

const { getList } = require('./position_controller')

Route.get('/list', getList)

module.exports = Route
