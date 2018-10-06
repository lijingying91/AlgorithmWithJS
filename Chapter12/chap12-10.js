/**
 * 希尔排序
 */
var CArray = require("./chap12-1.js");
function shellsort() {
    for (var g = 0; g < this.gaps.length; ++g) {
        for (var i = this.gaps[g]; i < this.dataStore.length; ++i) {
            var temp = this.dataStore[i];
            for (var j = i; j >= this.gaps[g] && this.dataStore[j-this.gaps[g]] > temp; j -= this.gaps[g]) {
                this.dataStore[j] = this.dataStore[j - this.gaps[g]];
            }
            this.dataStore[j] = temp;
        }
        console.log(this.toString());
    }
}

var nums = new CArray(10); 
nums.gaps = [5,3,1];
nums.shellsort = shellsort;
nums.setData();
console.log(" 希尔排序前:\n");
console.log(nums.toString());
console.log("\n 希尔排序中:\n"); 
nums.shellsort();
console.log("\n 希尔排序后:\n"); 
console.log(nums.toString());