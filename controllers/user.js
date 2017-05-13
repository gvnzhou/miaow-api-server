/**
 * Created by h9zhou on 2017/4/12.
 */
const errorMsg = require('../core/errorMsg');
const model = require('../models/model');
const md5 = require('js-md5');

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
UserController.register = async function (ctx) {
	const regType = ctx.request.body.regType;
	if (+regType === 1) {
		// 手机注册
		// todo: 验证验证码
		// 获取参数
		const mobile = ctx.request.body.mobile || '';
		const password = md5(ctx.request.body.password);
		// 不设置就随机生成, todo: 唯一
		const nickname = ctx.request.body.nickname || `喵星人_${Math.floor(Math.random() * 100000000)}`;
		const email = ctx.request.body.email || '';
		// 默认头像地址
		const avatar = 'http://7xkwup.com1.z0.glb.clouddn.com/20120815170312_cyZui.jpeg';
		const sex = ctx.request.body.sex || 0;
		const signature = '这个用户很勤快，什么都留下了。';
		const reg_time = +new Date();
		const login_time = +new Date();

		// 手机号是否正确
		if (!(/^1(3|4|5|7|8)\d{9}$/.test(mobile))) {
			ctx.body = errorMsg.MOBILE_RULE_ERROR;
			return;
		}

		// 密码格式是否正确
		if (password.length < 6) {
			ctx.body = errorMsg.PASSWORD_ERROR;
			return;
		}

		// 手机号已经存在
		const res = await model.User
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
	} else if (+regType === 2) {
		// 邮箱注册
	} else {
		ctx.body = errorMsg.REGISTER_TYPE_ERROR;
	} 
}

UserController.sendVerifyCode = async function (ctx) {}


module.exports = UserController;