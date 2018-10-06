/**
 * 冒泡排序
 * 最慢的排序算法之一
 */

var CArray = require("./chap12-1.js");
function bubbleSort() {
    var numElements = this.dataStore.length;
    var temp;
    for ( var outer = numElements; outer >= 2; --outer) {
        for(var inner = 0; inner <= outer - 1; ++inner) {
            if (this.dataStore[inner] > this.dataStore[inner + 1]) {
                this.swap(this.dataStore, inner, inner + 1);
            }
        }
        console.log(this.toString());
    }
}

var numElements = 10;
var mynums = new CArray(numElements);
mynums.setData();
console.log(mynums.toString());
console.log('-------------------------');
mynums.bubbleSort = bubbleSort;
mynums.bubbleSort();
// console.log('-------------------------');
// console.log(mynums.toString());
