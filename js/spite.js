;
(function(win, doc, undefined){
	var spite = function(){
		
	};
	
	var id = 1;
	var createId = function(){
		return 's' + id++;
	};
	
	spite.obj = {};
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
		spite.obj[optins.gid] = self;
		return self;
	};
	widget.layout.prototype.init = function(){
		var self = this, target = spite.obj[self.option.target] && spite.obj[self.option.target].ele || self.option.target;
		self.ele = $("<div>", self.attrs);
		self.ele
			.css(self.style).addClass('layout')
			.appendTo(target);
		if (self.option.mode == 'float'){
			self.ele.addClass('layout-left');
		}
		self.ele.attr('id', self.option.gid);
		
		var next = {};
		self.ele.resizable({
			containment: target,
			grid : 4,
			handles : 'e',
			start: function( event, ui ){
				next.ele = self.ele.next();
				next.width = next.ele.width();
			},
			resize: function( event, ui ) {
				var ori = ui.originalSize, now = ui.size;
				next.ele.width(next.width - now.width + ori.width);
				console.log(now);
			},
			stop: function( event, ui ){
				
			}
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
		style : {width: '496px'}
	});
	layout.childs.items.push({
		style : {width: '496px'}
	});
	(function(layout, parent){
		var arg = arguments;
		for (var i = 0, item = layout.items[i], len = layout.items.length; i < len; i++, item = layout.items[i]){
			item.target = parent;
			item.mode = layout.mode;
			(new spite.widget.layout(item)).init();
			if (item.childs) {
				arg.callee(item.childs, item.gid);
			}
		}
	})({items: [layout]}, '.custom_panel');
	
	var ele = spite.obj[layout.gid].ele;
	ele.sortable({ items: "> div" });
	ele.disableSelection();
	
	window.layout = layout;
});













