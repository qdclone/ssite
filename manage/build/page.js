'use strict';

var component = require('./component.js');

function page(option){
	this.option = option;
	this.json = require(option.path);
}

page.prototype.toHtml = function(){
	var html = component(this.json.layout).toHtml();
	return html;
};

module.exports = function (path) {
    return new page({path: path});
};
