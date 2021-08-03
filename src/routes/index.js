const express = require('express')
const Route = express.Router()

const positionRoute = require('../modules/position/position_route')
const employeeRoute = require('../modules/employee/employee_route')

Route.use('/position', positionRoute)
Route.use('/employee', employeeRoute)

module.exports = Route
