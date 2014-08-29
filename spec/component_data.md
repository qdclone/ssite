组件依赖数据格式规范
======

参考数据格式 http://www.cnblogs.com/xiehuiqi220/archive/2012/11/25/2787461.html
后台管理可以参考 http://www.ewikisoft.com/json2form/doc.php

```javascript
{
    arrayIndex: {
        show: true
    },
    fields: {
        Name: { label: "姓名", readonly: true },
        Married: { label: "已婚" },
        Height: { label: "身高", required: true, type:"number" , ctrlAttr : {min:100,max:200,step:1} },
        Age: { label: "年龄", maxlength: 3, required: true, pattern: "\\d+", title: "请输入数字", tips: "小于100" },
        Sexy: { label: "性别", type: "radio", datalist: [{ value: 0, text: "男" }, { value: 1, text: "女"}] },
        Children: { label: "子女", noCreate: false, noDelete: false },
        Hobby: { label: "爱好" , required: true,cssText : "background:infobackground;border:1px solid gray", type: "checkbox", delimiter: ",", multiple: true, size: 5, datalist: ["烹饪", "音乐", "电影", "睡觉", "篮球", "旅行"] },
        Address: { label: "居住地址" },
        Street: { label: "街道",width:"300px", tips: "居住所在地" , inline:true },
        zipCode: { label: "邮政编码", tips: "居住所在地" , inline:true },
        City: { label: "城市",cssText:"", inline:true,ctrlCssText:"color:red",hideLabel:false, maxlength: 2, size: 15, tips: "hello" },
        Country: { label: "国家",width:"300px", inline:true, readonly: true, type: "select", datalist: ['美国', '中国', '韩国'] }
    }
}

```
