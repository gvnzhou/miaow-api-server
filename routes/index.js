/**
 * Created by h9zhou on 2017/3/21.
 */
const Router = require('koa-router');
const UserController = require('../controllers/user')

const router = Router();

router.post('/user/register', UserController.register);

// for require auto in index.js
module.exports = router;