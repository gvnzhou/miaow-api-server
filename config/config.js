const _ = require('lodash');
const development = require('./development');
const production = require('./production');

const env = process.env.NODE_ENV || 'development';
const configs = {
	development,
	production,
};
const defaultConfig = {
	env,
};

const config = _.merge(defaultConfig, configs[env]);

module.exports = config;