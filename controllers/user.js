/**
 * Created by h9zhou on 2017/4/12.
 */
const UserModel = require('../models/user');

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
	let signature = '这个用户很勤快，什么都留下了。';
	let regTime = +new Date();
	let loginTime = +new Date();

	// 手机号是否正确
	if (mobile.length !== 11) {
	}

	const res = await UserModel.findAll();
	// const sql = 'SELECT * FROM mw_user'; // 插入sql
	// const res = await query(sql);

	// token
	// 区别手机号
	// 手机号是否存在
	// 手机号是否正确
	// 密码是否符合规则
	ctx.body = nickname;
}

UserController.sendVerifyCode = async function (ctx) {}


module.exports = UserController;