组件规范
======

组件规范引用了component项目规范，在基础之上规定了入口控制，达到单一入口依赖直接引入组件目的。
并且加入依赖数据项配置（data）.

component [component.json](https://github.com/component/spec/blob/master/component.json/specifications.md)


demo : 

```javascript
{
	"name": "header",
	"description": "one header",
	// 入口 默认 index.html
	// 以后扩展兼容js入口，根据条件控制输出内容
	"main" : "index.html",
	"data" : "data.js",
	"version": "0.0.1",
	"dependencies": {}
}
```

component dialog demo 非推荐

```javascript
// https://github.com/component/dialog/blob/master/component.json
{
  "name": "dialog",
  "description": "Dialog component",
  "version": "0.3.0",
  "keywords": [
    "dialog",
    "ui",
    "modal"
  ],
  "dependencies": {
    "component/emitter": "1.1.3",
    "component/overlay": "0.3.1",
    "component/domify": "1.3.1",
    "component/event": "0.1.4",
    "component/classes": "1.2.1",
    "component/query": "0.0.3"
  },
  "development": {
    "visionmedia/mocha": "*",
    "dominicbarnes/expect.js": "*"
  },
  "scripts": [
    "index.js"
  ],
  "styles": [
    "dialog.css"
  ],
  "templates": [
    "template.html"
  ],
  "demo": "http://component.github.io/dialog/"
}

```