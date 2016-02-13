var glob = require("glob");
var fs = require('fs');
var path = require('path');

// options is optional
glob("app/*.js", function (er, files) {
  console.log(files);
  var totalStr = ''
  files.forEach(function(fileName){
  	var fileStr = fs.readFileSync(fileName);
  	var baseName = path.basename(fileName);
  	if(baseName!='main.js'){
  		var addOne = "'./" + baseName.slice(0,baseName.length-3) + "',";
  		var fileStrNamed = fileStr.slice(0,16)+ addOne +fileStr.slice(16,fileStr.length);
  	}else{
  		var fileStrNamed = fileStr;
  	}
  	totalStr = totalStr+'\n'+fileStrNamed;
  });
  fs.writeFileSync('main.js',totalStr);
});

