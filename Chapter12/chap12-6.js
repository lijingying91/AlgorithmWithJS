/**
 * 选择排序
 * 
 */
var CArray = require("./chap12-1.js");
function selectionSort() {
    var min, temp;
    for (var outer = 0; outer <= this.dataStore.length - 2; ++outer) {
       min = outer;
       for (var inner = outer + 1; inner <= this.dataStore.length-1; ++inner) {
            if (this.dataStore[inner] < this.dataStore[min]) {
                min = inner; 
            }
            this.swap(this.dataStore, outer, min);
        }
        console.log(this.toString());
    }
}

var numElements = 10;
var mynums = new CArray(numElements);
mynums.setData();
console.log(mynums.toString());
console.log('-------------------------');
mynums.selectionSort = selectionSort;
mynums.selectionSort();
