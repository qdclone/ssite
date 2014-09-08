'use strict';

var meta = require('../package.json'),
    express = require('express'),
    compress = require('compression'),
    session = require('express-session'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    compileSass = require('express-compile-sass'),
    path = require('path'),
    app = module.exports = express()
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

app.use(compileSass(root), {
    strictType: false, // If true, will only compile when Accept heder includes text/css
    logToConsole: false // If true, will log to console.error on errors
});

// load controllers
require('./lib/boot')(app, { verbose: !module.parent });

app.use(express.static(__dirname + '/public'));
//app.use(express.static(__dirname));
//app.use('/public', express.static(app.get('root') + './public'));

// session support
app.use(session({
    resave: false, // don't save session if unmodified
    saveUninitialized: false, // don't create session until something stored
    secret: 'some secret here'
}));

// parse request bodies (req.body)
app.use(bodyParser.urlencoded({ extended: true }));

// allow overriding methods in query (?_method=put)
app.use(methodOverride('_method'));

app.use(function(err, req, res, next){
    // log it
    if (!module.parent) console.error(err.stack);

    // error page
    res.status(500).end('500');//.render('5xx');
});

// assume 404 since no middleware responded
app.use(function(req, res, next){
    res.status(404).end(req.originalUrl);//.render('404', { url: req.originalUrl });
});

if (require.main === module) {
    app.listen(app.get('port'), function () {
        console.log('[%s] Express server listening on port %d',
            app.get('env').toUpperCase(), app.get('port'));
    });
}

global.ssite = {
    root: app.get('root')
};