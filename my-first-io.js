const pathfile = process.argv[2];
if(!pathfile) process.exit(-1);

const fs = require("fs");

const objBufferedfile = fs.readFileSync(pathfile);

// console.log(objBufferedfile.toString().split("\n"));

const arrFile = objBufferedfile.toString().split("\n");
console.log(arrFile.length - 1);
