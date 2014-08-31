'use strict';

function component(option){

	if (typeof option == 'string') {
		option = {
			'name' : option
		};
	}else if (typeof option == 'object') {

	}else {
		console.log('error : ' + JSON.stringify(option));
		return '';
	}

	this.option = option;
}

component.prototype.toHtml = function(){
	var item = this.option;
	
	
	
};

module.exports = function (option) {
    return new component(option);
};
