/**
 * 【树】是计算机科学中经常用到的一种数据结构
 * 树是一种非线性的数据结构，以分层的方式 存储数据
 * 树被用来存储具有层级关系的数据，比如文件系统中的文件
 * 树还被用来存储 有序列表
 * 选择树而不是那些基本的数据结构，是因为在二叉树上进行查找非常快
 * 概念：节点、边
 * 概念：根节点、父节点、子节点、叶子节点
 */

/**
 * 【二叉树】是一种特殊的树，它的子节点个数不超过两个
 * 【二叉查找树】是一种 特殊的二叉树，相对较小的值保存在左节点中，较大的值保存在右节点中。这一特性使得 查找的效率很高，对于数值型和非数值型的数据，比如单词和字符串，都是如此。
 */
function Node(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.show = show;
}
function show () {
    return this.data;
}
/**
 * 查找正确插入点的算法
 * (1) 设根节点为当前节点。
 * (2) 如果待插入节点保存的数据小于当前节点，则设新的当前节点为原节点的左节点;反之，执行第 4 步。
 * (3) 如果当前节点的左节点为 null，就将新的节点插入这个位置，退出循环;反之，继续执行下一次循环。
 * (4) 设新的当前节点为原节点的右节点。
 * (5) 如果当前节点的右节点为 null，就将新的节点插入这个位置，退出循环;反之，继续执行下一次循环。
 */

function BST () {
    this.root = null;
    this.insert = insert;
    // this.inOrder = inOrder;
    this.getMin = getMin;
    this.getMax = getMax;
    this.find = find;
}

function insert(data) {
    var n = new Node(data, null, null);
    if (this.root == null) {
        this.root = n;
    }
    else {
        var current = this.root;
        var parent;
        while (true) {
            parent = current;
            if (data < current.data) {
                current = current.left;
                if (current == null) {
                    parent.left = n;
                    break;
                }
            }
            else {
                current = current.right;
                if (current == null) {
                    parent.right = n;
                    break;
                }
            }
        }
    }
}

function getMin() {
    var current = this.root;
    while (!(current.left == null)) {
        current = current.left;
    }
    return current.data;
}

function getMax() {
    var current = this.root;
    while (!(current.right == null)) {
        current = current.right;
    }
    return current.data;
}

function find (data) {
    var current = this.root;
    while (current != null) {
        if (current.data == data) {
            return current;
        }
        else if (data < current.data) {
            current = current.left;
        }
        else {
            current = current.right;
        }
    }
    return null;
}

// function inOrder (node) {
//     if (!(node == null)) {
//         inOrder(node.left);
//         console.log(node.show() + " ");
//         inOrder(node.right);
//     }
// }

module.exports = BST;
// module.exports = inOrder;
// var nums = new BST();
// nums.insert(23);
// nums.insert(45);
// nums.insert(16);
// nums.insert(37);
// nums.insert(3);
// nums.insert(99);
// nums.insert(22);
// console.log("Inorder traversal: ");
// inOrder(nums.root);