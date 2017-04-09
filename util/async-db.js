/**
 * Created by h9zhou on 2017/4/9.
 */
const mysql = require('mysql')
const config = require('../config/config')

const pool = mysql.createConnection({
	host: config.hostName,   // 数据库地址
	user: config.user,    // 数据库用户
	password: config.password,   // 数据库密码
	database: config.database,  // 选中数据库
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