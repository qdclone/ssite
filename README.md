ssite
=====

  [![npm version](http://img.shields.io/npm/v/ssite.svg)](https://npmjs.org/package/ssite) [![build status](http://img.shields.io/travis/badges/ssite.svg)](https://travis-ci.org/badges/ssite)

让前端工程师更专注于产品一点。拖拽可定制组件创造网站

定位前端开发组件并且设计数据模型，运营拖拽制作页面并且配置数据

*目前项目还在设计阶段*

## 详细设计

### 组件

- [X] 规范定义 参考 [component项目](https://github.com/component/spec/blob/master/component.json/specifications.md)
- [X] 完成组件demo
- [ ] 定义组件绘制事件
- [ ] 完成基本组件
	- [ ] box布局组件
- [ ] 组件依赖的数据规范

### 页面信息与布局

- [X] 定义支持页面结构布局规范
- [ ] 自定义样式数据结构
- [ ] 完成页面demo
- [ ] 数据解析生成页面模块

### 页面数据

- [ ] 定义通用格式规范
- [ ] 数据格式demo

### 后端管理

- [ ] 页面管理
- [ ] 解析页面依赖结构中依赖的数据格式生成表单
- [ ] 组件布局管理
	- [ ] 组件库收集管理
	- [ ] 生成组件缩略图
	- [ ] 组件拖拽控制
	- [ ] 组件属性管理

## 阶段

### 第一阶段

拖拽布局生成静态页面，普通杂志类；包含图文排列。

定义：组件只支持纯html、固定通栏布局、支持拖拽操作、不支持子集关系

### 第二阶段

后台（数据管理、页面管理、组件管理）、完善组件方案通用性

### 第三阶段

提取组件方案+基础组件+整个后台管理方案 打包成项目基础环境

## 兼容性

生成页面兼容目标 Android Browser 2.3+、iOS Safari 6+、Chrome 21+

## 参考

polymer http://polymer-project.org/

froont https://froont.com/

Sketch3 http://bohemiancoding.com/

modao https://modao.io/

jetstrap https://jetstrap.com/demo
