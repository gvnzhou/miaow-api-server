/**
 * Created by h9zhou on 2017/4/9.
 */
const mysql = require('mysql')
const config = require('../config/config')

const pool = mysql.createPool({
	host: config.database.HOST,   // 数据库地址
	user: config.database.USERNAME,    // 数据库用户
	password: config.database.PASSWORD,   // 数据库密码
	database: config.database.DATABASE,  // 选中数据库
})

const query = (sql, values) => {
	return new Promise((resolve, reject) => {
		pool.getConnection((err, connection) => {
			if (err) {
				reject(err);
			} else {
				connection.query(sql, values, (error, rows) => {
					if (error) {
						reject(error);
					} else {
						resolve(rows);
					}
					connection.release();
				});
			}
		});
	});
}

module.exports = { query };