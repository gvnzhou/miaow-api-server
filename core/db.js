/**
 * Created by h9zhou on 2017/4/13.
 */
const Sequelize = require('sequelize');
const Config = require('../config/config');

const sequelize = new Sequelize(Config.mysql.database, Config.mysql.user, Config.mysql.password, {
	host: Config.mysql.host,
	port: Config.mysql.port,
	dialect: 'mysql',
	pool: {
		max: 5,
		min: 0,
		idle: 30000,
	},
});

module.exports = sequelize;