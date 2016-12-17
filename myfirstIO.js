var fs = require('fs');

var pathName = process.argv[2];  // get the path


var fileDataAsBuffer = fs.readFileSync(pathName); // read the file

var fileDataAsString = fileDataAsBuffer.toString(); // convert to string

var split = fileDataAsString.split('\n');  // create array thats split file fir \n
var lineCount = split.length - 1  //number of lines = items in array - 1 as end of file doesnt have \n
console.log(lineCount )
