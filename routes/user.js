/**
 * Created by h9zhou on 2017/3/21.
 */
const Router = require('koa-router');
const { query } = require('../util/async-db');

const router = Router();

/**
 * @api {get} /user/:id Request User information
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */
router.post('/user/register', async (ctx) => {
	let username = ctx.request.body.username;
	let password = ctx.request.body.password;
	let nick = 'asdasdasd'; // 不设置就随机生成
	let email = '';
	let avatar = ''; // 默认头像地址
	let signature = '这个用户很勤奋，什么都留下了。';
	let regTime = +new Date();
	let loginTime = +new Date();

	const sql = 'SELECT * FROM mw_user'; // 插入sql
	const res = await query(sql);

	// token
	// 区别手机号和邮箱注册
	// 手机号是否存在
	// 手机号是否正确
	// 密码是否符合规则
	ctx.body = res;
});

// for require auto in index.js
module.exports = router;