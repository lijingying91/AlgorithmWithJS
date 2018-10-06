/**
 * 插入排序
 */
var CArray = require("./chap12-1.js");
function insertionSort() {
    var temp, inner;
    for (var outer = 1; outer <= this.dataStore.length - 1; ++outer) {
        temp = this.dataStore[outer];
        inner = outer;
        while (inner > 0 && (this.dataStore[inner - 1] >= temp)) {
            this.dataStore[inner] = this.dataStore[inner - 1];
            --inner;
        }
        this.dataStore[inner] = temp;
        console.log(this.toString())
    }
}

var numElements = 10;
var mynums = new CArray(numElements);
mynums.setData();
console.log(mynums.toString());
console.log('-------------------------');
mynums.insertionSort = insertionSort;
mynums.insertionSort();
// console.log('-------------------------');
// console.log(mynums.toString());