module.exports = {
    appName: 'reactivate',
    port: process.env['NODE_ENV'],
    database: { 
        url: 'mongodb://localhost/reactivate'
    }
};