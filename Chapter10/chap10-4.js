var BST = require("./BST.js");
/**
 * 在二叉查找树上进行查找
 * (1) 查找给定值; 
 * (2) 查找最小值; 
 * (3) 查找最大值。
 */


// BST.getMin = getMin;
// BST.getMax = getMax;
// function getMin() {
//     var current = this.root;
//     while (!(current.left == null)) {
//         current = current.left;
//     }
//     return current.data;
// }

// function getMax() {
//     var current = this.root;
//     while (!(current.right == null)) {
//         current = current.right;
//     }
//     return current.data;
// }

var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
var min = nums.getMin();
console.log("The minimum value of the BST is: " + min);
console.log("\n");
var max = nums.getMax();
console.log("The maximum value of the BST is: " + max);

var value = 22;
// var value = 10;
var found = nums.find(value);
if (found != null) {
    console.log("Found " + value + " in the BST.");
}
else {
    console.log(value + " was not found in the BST.");
}
