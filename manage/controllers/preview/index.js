
//var db = require('../../db');
var path = require('path');
var fs = require('fs');
var root = path.resolve('./');

exports.before = function(req, res, next){
    next();
};

exports.index = function(req, res, next){

    res.send({ pet: "ok" });
};


function commponentFindbyPath(paths, dir_pev){
    var files = [];
    var dirs = fs.readdirSync(paths);

    dir_pev = dir_pev ? (dir_pev + '/') : '';

    var indexFileNames = [/*'component.json', */'index.html'],
        indexFileName = '';
    while (indexFileName = indexFileNames.shift()) {
        if (dirs.indexOf(indexFileName) != -1) {
            var file = paths + '/' + indexFileName;
            files = files.concat([{
                path: file,
                fileName: indexFileName,
                subdirname: file.replace(root, ''),
                url: '/public' + file.replace(root, '')
            }]);
            break;
        }
    }

    dirs.forEach(function (item) {
        var stats = null, filepath = paths + '/' + item;

        stats = fs.statSync(filepath);
        if(stats.isDirectory()){
            files = files.concat(commponentFindbyPath(filepath));
        }
    });

    return files;
}

exports.list = function(req, res, next){
    var pageContent = '' + fs.readFileSync(path.resolve('./page') + '/index.json');
    var pageData = (new Function('return ' + pageContent))();

    var componentPath = path.resolve('./component');
    var list = commponentFindbyPath(componentPath);

    var listMap = {};
    for (var i = 0; i < list.length; i++) {
        listMap[list[i].subdirname] = list[i];
    }
    var bodyHtml = [], html = '';
    for (var i = 0, len = pageData.body.length; i < len; i++) {
        var item = pageData.body[i], componentInfo = listMap[item['import']];
        if (componentInfo && componentInfo.path) {
            html = fs.readFileSync(componentInfo.path);
            bodyHtml.push(html);
        }else {
            //throw "";
            console.log('component no find: ' + JSON.stringify(item));
        }
    }

    pageData.bodyHtml = bodyHtml.join('');
    //console.log();
    console.log(pageData);

    // res.send({ status: "ok" , list : list});

    res.render('index', pageData)
};

