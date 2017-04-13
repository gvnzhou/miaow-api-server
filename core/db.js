/**
 * Created by h9zhou on 2017/4/13.
 */
const Sequelize = require('sequelize');
const Config = require('../config/config');

module.exports = new Sequelize(Config.mysql.database, Config.mysql.user, Config.mysql.password,
	{
		host: Config.mysql.host,
		port: Config.mysql.port,
		dialect: 'mysql',
		pool: {
			max: 5,
			min: 0,
			idle: 30000,
		},
	},
);