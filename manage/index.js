'use strict';

var meta = require('../package.json'),
    express = require('express'),
    compress = require('compression'),
    path = require('path'),
    app = module.exports = express(),
    router = require('./router')
;

process.on('uncaughtException', function (err) {
    (app.get('logger') || console).error('Uncaught exception:\n', err.stack);
});

app.set('name', meta.name);
app.set('version', meta.version);
app.set('port', process.env.PORT || 3000);
app.set('root', path.resolve(__dirname, '../'));
app.set('logger', console);
app.enable('trust proxy');

app.use(compress());

app.use(router({'index': '/manage'}));

//app.use('/public', express.static(app.get('root') + './public'));
app.use('/manage', express.static(__dirname));

if (require.main === module) {
    app.listen(app.get('port'), function () {
        console.log('[%s] Express server listening on port %d',
            app.get('env').toUpperCase(), app.get('port'));
    });
}

global.ssite = {
    root: path.resolve(__dirname, '../')
};