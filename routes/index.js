/**
 * Created by h9zhou on 2017/3/21.
 */
const Router = require('koa-router');
const user = require('../controllers/user')

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
router.post('/user/register', user.signup);

// for require auto in index.js
module.exports = router;