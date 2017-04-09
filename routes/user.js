/**
 * Created by h9zhou on 2017/3/21.
 */
const Router = require('koa-router');

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
router.post('/user/register', (ctx) => {
	let username = ctx.request.body.username;
	let password = ctx.request.body.password;
	let regTime = +new Date();
	let loginTime = +new Date();
	
	// token
	// 区别手机号和邮箱注册
	// 手机号是否存在
	// 手机号是否正确
	// 密码是否符合规则
	ctx.body = ctx.request.body;
});

// for require auto in index.js
module.exports = router;