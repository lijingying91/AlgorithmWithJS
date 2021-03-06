var BST = require("./BST.js");
/**
 * 后续遍历
 * @param {Object} node 
 */
function postOrder (node) {
    if (!(node == null)) {
        postOrder(node.left);
        postOrder(node.right);
        console.log(node.show() + " ");
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
console.log("PostOrder traversal: ");
postOrder(nums.root);
