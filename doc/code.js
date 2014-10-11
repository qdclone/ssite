

// https://github.com/benderTheCrime/jsoncompile/blob/master/index.js
function aggregate(obj) {
    var keyString = '';
    for (var key in obj) {
        var att;
        if (obj[key]['attributes']) {
            att = ' ';
            for (var attribute in obj[key]['attributes']) {
                att += attribute + '=' + '\''
                    + obj[key]['attributes'][attribute] + '\'';
            }
        }
        if (key === 'input' || key === 'link') {
            keyString += '<' + key + (att || '') + '/>';
        }
        else {
            keyString += '<' + key + (att || '') + '>';
        }
        att = null;
        if (obj[key]['children']) {
            keyString += aggregate(obj[key]['children']);
        }
        if (obj[key]['content']) {
            keyString += obj[key]['content'];
        }
        if (key !== 'input' && key !== 'link') {
            keyString += '</' + key + '>';
        }
    }
    return keyString;
}















