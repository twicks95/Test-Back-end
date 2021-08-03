const wrapper = require('../../helpers/wrapper')
const { getAllData } = require('./position_model')

module.exports = {
  getList: async (req, res) => {
    try {
      const result = await getAllData()
      return wrapper.response(res, 200, 'Success get position list', result)
    } catch (error) {
      return wrapper.response(res, 400, 'Bad request!', error)
    }
  }
}
