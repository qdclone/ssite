组件绘制入口
=====

component参数main值为js格式时，使用以下规范驱动绘制

处理阶段参考 vuejs
vuejs_instantiation-options http://vuejs.org/api/instantiation-options.html

```javascript

var component = {
	// 组件渲染所要用到的数据
	data: {}
	, template: './index.jade'
	// , methods: {
		
	// }
	// , created: function(){

	// }
	// , ready: function(){

	// }
};

module.exports = component;

```
