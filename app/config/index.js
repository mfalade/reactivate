const nodeEnv = process.env['NODE_ENV'] || 'default';

console.log(`.. Starting app with [${nodeEnv}] configuration.`);

module.exports = require(`${__dirname}/${nodeEnv}`);