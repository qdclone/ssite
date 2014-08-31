'use strict';

var component = require('./component.js');

function page(option){
	this.option = option;
	this.json = require(option.path);
}

page.prototype.toHtml = function(){
	var cp, html = [];
	for (var i = 0; i < layout.length; i++) {
		cp = component(layout[i]);
		html.push(cp.toHtml());
	}
	return html.join('\n');
};

module.exports = function (path) {
    return new page({path: path});
};
