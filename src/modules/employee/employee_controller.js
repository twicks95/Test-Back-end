const wrapper = require('../../helpers/wrapper')
const {
  getAllData,
  getDataById,
  getDataByIdNumber,
  insertData,
  updateData,
  deleteData
} = require('./employee_model')

module.exports = {
  employeeList: async (req, res) => {
    try {
      const result = await getAllData()
      return wrapper.response(res, 200, 'Success get employee list', result)
    } catch (error) {
      return wrapper.response(res, 400, 'Bad request!', error)
    }
  },

  getById: async (req, res) => {
    try {
      const { id } = req.params
      const result = await getDataById(parseInt(id))
      return wrapper.response(res, 200, 'Success get employee by ID', result)
    } catch (error) {
      return wrapper.response(res, 400, 'Bad request!', error.message)
    }
  },

  getByIdNumber: async (req, res) => {
    try {
      const { id } = req.query
      const result = await getDataByIdNumber(parseInt(id))
      if (result.length > 0) {
        return wrapper.response(
          res,
          200,
          'Success get employee by ID_NUMBER',
          result
        )
      } else {
        return wrapper.response(res, 404, 'No data')
      }
    } catch (error) {
      return wrapper.response(res, 400, 'Bad request!', error.message)
    }
  },

  insertEmployee: async (req, res) => {
    try {
      const { NAME, BIRTH_DATE, POSITION_ID, ID_NUMBER, GENDER } = req.body

      const setData = {
        NAME,
        BIRTH_DATE,
        POSITION_ID: parseInt(POSITION_ID),
        ID_NUMBER,
        GENDER: parseInt(GENDER),
        IS_DELETE: 0
      }

      const result = await insertData(setData)
      return wrapper.response(
        res,
        200,
        "Success insert employee's data!",
        result
      )
    } catch (error) {
      return wrapper.response(res, 400, 'Bad request!', error)
    }
  },

  updateEmployee: async (req, res) => {
    try {
      const { id } = req.params
      const { NAME, BIRTH_DATE, POSITION_ID, ID_NUMBER, GENDER } = req.body

      const setData = {
        NAME,
        BIRTH_DATE,
        POSITION_ID: parseInt(POSITION_ID),
        ID_NUMBER,
        GENDER: parseInt(GENDER)
      }

      const result = await updateData(setData, id)
      return wrapper.response(res, 200, 'Success update employee!', result)
    } catch (error) {
      return wrapper.response(res, 400, 'Bad request!', error)
    }
  },

  deleteEmployee: async (req, res) => {
    try {
      const { id } = req.params
      const result = await deleteData(id)
      return wrapper.response(res, 200, 'Success delete employee!', result)
    } catch (error) {
      return wrapper.response(res, 400, 'Bad request!', error)
    }
  }
}
