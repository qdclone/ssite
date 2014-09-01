
var path = require('path');
var page = require('./build/page.js');

global.ssite = {
    root: path.resolve(__dirname, '../')
};

var html = page(path.resolve(ssite.root, 'page', 'index.json'));

console.log('html: ' + html.toHtml());
