/**
 * Created by h9zhou on 2017/4/17.
 */
const errorMsg = {
	REGISTER_TYPE_ERROR: {
		code: '10001',
		message: 'regType不能为空或错误！',
	},
	MOBILE_RULE_ERROR: {
		code: '10002',
		message: '手机号格式错误！',
	},
	MOBILE_EXISTS_ERROR: {
		code: '10003',
		message: '手机号已存在！',
	},
	PASSWORD_ERROR: {
		code: '10004',
		message: '密码格式错误！',
	},
};

module.exports = errorMsg;