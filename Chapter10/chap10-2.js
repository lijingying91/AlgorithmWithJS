var BST = require("./BST.js");

/**
 * 先序遍历
 * @param {Object} node 
 */
function preOrder (node) {
    if (!(node == null)) {
        console.log(node.show() + " ");
        preOrder(node.left);
        preOrder(node.right);
    }
}

var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
console.log("Preorder traversal: ");
preOrder(nums.root);
