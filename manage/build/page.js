'use strict';

var component = require('./component.js');

function page(option){
	this.option = option;
}

page.prototype.toHtml = function(){
	var html = component(this.option.layout).toHtml();
	return html;
};

module.exports = function (option) {
    return new page(option);
};
