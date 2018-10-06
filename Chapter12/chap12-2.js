var CArray = require("./chap12-1.js");
var numElements = 100;
var myNums = new CArray(numElements);
myNums.setData();
console.log(myNums.toString());

module.exports = myNums.toString();
