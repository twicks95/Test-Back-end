const db = require('../../config/mysql')

module.exports = {
  getAllData: () => {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM t1_position', (error, result) => {
        !error ? resolve(result) : reject(new Error(error))
      })
    })
  }
}
