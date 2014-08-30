页面组件布局格式规范
=====

主要是布局、以及关联的小样式数据

```javascript
// 格式例子
{
	"name": "index demo",
	"description": "one header",
	"meta": {
		"viewport" : "width=device-width"
	},
	"createTime": 123123123,
	"layout" : [
		"header",
		"header@0.0.1:index.html",
		{
			"name": "header",
			"version": "0.0.1",
			"style": "background-color: red;",
			"data": {"bgColor": "#fff", "fontColor": "#000"}
		},
		{
			"name": "box",
			"child": [
				{
					"name": "header",
					"boxFlex": 1
				}
			]
		}
	]
}
```

## 参考

依赖格式 http://duojs.org/
布局使用 boxFlex http://caniuse.com/#search=flex