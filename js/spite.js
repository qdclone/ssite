;
(function(win, doc, undefined){
	var spite = function(){
		
	};
	
	var id = 1;
	var createId = function(){
		return 's' + id++;
	};
	
	var auto = 'auto';
	var widget = function(){};
	widget.layout = function(optins){
		var self = this;
		self.option = $.extend({
			gid : '',
			target : '',
			
		}, optins);
		self.style = $.extend({}, optins.style);
		self.attrs = $.extend({}, optins.attrs);
		
		if (!self.option.gid) self.option.gid = optins.gid = createId();
		return self;
	};
	widget.layout.prototype.init = function(){
		var self = this;
		self.ele = $("<div>", self.attrs);
		self.ele
			.css(self.style).addClass('layout')
			.appendTo(self.option.target);
		if (self.option.mode == 'float'){
			self.ele.addClass('layout-left');
		}
		self.ele.attr('id', self.option.gid);
		
		self.ele.resizable({
			containment: self.option.target,
			grid : 4
		});
		return self;
	};
	
	spite.widget = widget;
	window.spite = spite;
	
})(window, document, undefined);




$(document).ready(function(){
	var layout = {
		style : {width: '1000px', height: '1000px', margin: '0 auto'},
		childs : {
			mode : 'float',
			items : [
				
			]
		}
	};
	layout.childs.items.push({
		
	});
	layout.childs.items.push({
		
	});
	(function(layout, parent){
		var arg = arguments;
		for (var i = 0, item = layout.items[i], len = layout.items.length; i < len; i++, item = layout.items[i]){
			item.target = parent;
			item.mode = layout.mode;
			item.layout = new spite.widget.layout(item);
			item.layout.init();
			if (item.childs) {
				arg.callee(item.childs, item.layout.ele);
			}
		}
	})({items: [layout]}, '.custom_panel');
	
	//layout.layout.sortable();
	layout.layout.disableSelection();
	
	window.layout = layout;
});













