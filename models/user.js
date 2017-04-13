/**
 * Created by h9zhou on 2017/4/12.
 */
const Sequelize = require('../core/db');

const User = Sequelize.define('user', {
	id: {
		type: Sequelize.INTEGER(8),
		autoIncrement: true,
		primaryKey: true,
		unique: true,
	},
	mobile: {
		type: Sequelize.INTEGER(11),
		allowNull: false,
	},
	email: {
		type: Sequelize.STRING(50),
		allowNull: false,
	},
	nickname: { type: Sequelize.STRING(100), unique: true },
	avatar: { type: Sequelize.STRING(50) },
	sexAge: { type: Sequelize.STRING(50) },
	introduction: { type: Sequelize.STRING(255) },
	tags: { type: Sequelize.STRING(3000) },
	hideTag: { type: Sequelize.STRING(50) },
	deviceId: { type: Sequelize.STRING(32) },
	accountType: { type: Sequelize.STRING(20), allowNull: false },
	isClose: { type: Sequelize.BOOLEAN, allowNull: false },
	createTime: { type: Sequelize.STRING(15), allowNull: false },
	updateTime: { type: Sequelize.STRING(15), allowNull: false },
}, {
	freezeTableName: true, // 默认false修改表名为复数，true不修改表名，与数据库同步
	tableName: 'users',
	timestamps: false,
})

module.exports = User;