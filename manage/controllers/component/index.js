
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
	var componentPath = path.resolve('./component');

	var list = commponentFindbyPath(componentPath);

    res.send({ status: "ok" , list : list});
};

