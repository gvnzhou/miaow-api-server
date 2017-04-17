/**
 * Created by h9zhou on 2017/4/12.
 */
const errorMsg = require('../core/errorMsg')
const model = require('../models/model');

const UserController = {};

/**
 * @api {post} /user/register Register User By Mobile
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiParam {String} mobile mobile of the User.
 * @apiParam {String} password  password of the User.
 *
 * @apiSuccess {String} mobile mobile of the User.
 * @apiSuccess {String} password  password of the User.
 */
UserController.signup = async function (ctx) {
	// 获取参数
	let mobile = ctx.request.body.mobile || '';
	let password = ctx.request.body.password;
	let nickname = ctx.request.body.nickname || `喵星人_${Math.floor(Math.random() * 100000000)}`; // 不设置就随机生成
	let email = ctx.request.body.email || '';
	let avatar = 'http://7xkwup.com1.z0.glb.clouddn.com/20120815170312_cyZui.jpeg'; // 默认头像地址
	let sex = ctx.request.body.sex || 0;
	let signature = '这个用户很勤快，什么都留下了。';
	let reg_time = +new Date() + '';
	let login_time = +new Date();

	// const res = await model.user.findAll();
	// ctx.body = res;
	// return;

	let res = await model.User
		.findOrCreate({
			where: {
				mobile,
			},
			defaults: {
				mobile,
				password,
				nickname,
				email,
				avatar,
				sex,
				signature,
				reg_time,
				login_time,
			},
		});
	// .spread((user, created) => {
	// 	console.log(user.get({
	// 		plain: true,
	// 	}))
	// 	console.log(created);
	// });
	console.log(res);

	// 手机号是否正确
	if (!(/^1(3|4|5|7|8)\d{9}$/.test(mobile))) {
		ctx.body = errorMsg.MOBILE_RULE_ERROR;
		return;
	}

	// 密码格式是否正确
	if (password.length > 6) {
		ctx.body = errorMsg.PASSWORD_ERROR;
		return;
	}

	// token
	// 手机号是否存在
	// ctx.body = ctx.request;
}

UserController.sendVerifyCode = async function (ctx) {}


module.exports = UserController;