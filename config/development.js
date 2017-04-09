const port = Number.parseInt(process.env.PORT, 10) || 5000
module.exports = {
	port,
	hostName: '127.0.0.1',
	database: 'miaow',
	user: 'root',
	password: '',
	serveStatic: process.env.SERVE_STATIC_PRO || false,
	assetHost: process.env.ASSET_HOST_PRO,
};

// module.exports = {
// 	port,
// 	hostName: '127.0.0.1',
// 	serveStatic: process.env.SERVE_STATIC_PRO || false,
// 	assetHost: process.env.ASSET_HOST_PRO,
// 	redisUrl: process.env.REDIS_URL_PRO,
// 	secretKeyBase: process.env.SECRET_KEY_BASE
// };