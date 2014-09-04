
var fs = require('fs');
var path = require('path');
var page = require('./build/page.js');

global.ssite = {
    root: path.resolve(__dirname, '../')
};

var pagePath = path.resolve(ssite.root, 'page', 'index.json');

var pages = page(require(pagePath)),
	html = pages.toHtml();


var output = path.resolve(ssite.root, 'page_build', 'index.html');

fs.writeFileSync(output, html);


console.log('html: ' + html);