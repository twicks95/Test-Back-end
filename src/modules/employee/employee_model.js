const db = require('../../config/mysql')

module.exports = {
  getAllData: () => {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT em.ID, em.NAME, em.BIRTH_DATE, pos.NAME as POSITION_NAME, em.ID_NUMBER as NIP, em.GENDER, em.IS_DELETE,
        CASE WHEN em.GENDER = 1 THEN 'PRIA' ELSE 'WANITA' END as GENDER_NAME  
        FROM t2_employee as em 
        JOIN t1_position as pos ON em.POSITION_ID = pos.ID WHERE em.IS_DELETE = 0`,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error))
        }
      )
    })
  },

  getDataById: (id) => {
    return new Promise((resolve, reject) => {
      db.query(
        'SELECT * FROM t2_employee WHERE ID = ?',
        id,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error))
        }
      )
    })
  },

  getDataByIdNumber: (id) => {
    return new Promise((resolve, reject) => {
      db.query(
        'SELECT * FROM t2_employee WHERE ID_NUMBER = ?',
        id,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error))
        }
      )
    })
  },

  insertData: (data) => {
    return new Promise((resolve, reject) => {
      db.query('INSERT INTO t2_employee SET ?', data, (error, result) => {
        if (!error) {
          const newResult = {
            ID: result.insertId,
            ...data
          }
          resolve(newResult)
        } else {
          reject(new Error(error))
        }
      })
    })
  },

  updateData: (data, id) => {
    return new Promise((resolve, reject) => {
      db.query(
        'UPDATE t2_employee SET ? WHERE ID = ?',
        [data, id],
        (error, result) => {
          if (!error) {
            const newResult = {
              ID: id,
              ...data
            }
            resolve(newResult)
          } else {
            reject(new Error(error))
          }
        }
      )
    })
  },

  deleteData: (id) => {
    return new Promise((resolve, reject) => {
      db.query(
        'UPDATE t2_employee SET IS_DELETE = 1 WHERE ID = ?',
        id,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error))
        }
      )
    })
  }
}
