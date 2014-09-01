'use strict';

var path = require('path');
var fs = require('fs');

function component(components, option){
	var self = this;

	self.components = components;
	self.option = option;
}

component.prototype.toHtml = function(){
	var self = this, item, components = self.components;
	
	if (components instanceof Array) {
		var i = 0, htmls = [];
		for (;i < components.length; i++) {
			var output = new component(components[i]).toHtml();
			htmls.push(output);
		}
		return htmls.join('\n');
	}else if (typeof components == 'string') {
		item = {
			'name' : components
		};
	}else if (typeof components == 'object'){
		item = components;
	}else {
		console.log('error : ' + JSON.stringify(cp) + ' ' + JSON.stringify(option));
		return null;
	}
	//console.log(item);
	var componentPath = path.join(ssite.root, 'component/' + item.name + '/component.json');
	//console.log(componentPath);
	if (!fs.existsSync(componentPath)) {
		console.log('error: no component ' + item.name);
		return '';
	}

	var componentInfo = require(componentPath);

	//console.log(componentInfo);
	var infoMain = componentInfo.main || 'index.html';
	var mainPath = path.join(ssite.root, 'component/' + item.name + '/' + infoMain);

	var mainContent = fs.readFileSync(mainPath);

	return mainContent || '';
};

module.exports = function (option) {
    return new component(option);
};
