const express = require('express')
const Route = express.Router()

const {
  employeeList,
  getById,
  getByIdNumber,
  insertEmployee,
  updateEmployee,
  deleteEmployee
} = require('./employee_controller')

Route.get('/list', employeeList)
Route.get('/:id', getById)
Route.get('/', getByIdNumber)
Route.post('/add', insertEmployee)
Route.patch('/delete/:id', deleteEmployee)
Route.patch('/update/:id', updateEmployee)

module.exports = Route
