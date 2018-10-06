function shellsort1() {
    var N = this.dataStore.length; 
    var h=1;
    while (h < N / 3) {
        h = 3 * h + 1; 
    }
    while (h >= 1) { 
        for(var i = h; i < N; i++) {
            for (var j = i; j >= h && this.dataStore[j] < this.dataStore[j-h]; j-=h){
                this.swap(this.dataStore, j, j-h);
            }
        }
        h = (h - 1) / 3; 
    }
}


var CArray = require("./chap12-1.js");
var nums = new CArray(100); 
nums.shellsort1 = shellsort1;
nums.setData();
console.log(" 希尔排序前 1:\n"); 
console.log(nums.toString());
nums.shellsort1(); 
console.log("\n 希尔排序后 1:\n"); 
console.log(nums.toString());