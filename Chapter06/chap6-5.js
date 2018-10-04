/**
 * 循环链表
 * 
 * 循环链表和单向链表相似，节点类型都是一样的。
 * 唯一的区别是，在创建循环链表时，让其头节点的 next 属性指向它本身
 */

/**
 * Node类
 * @param {String} element 
 */
function Node (element) {
    this.element = element;
    this.next = this.head;
}
/**
 * LinkedList类
 */
function LList() {
    this.head = new Node("head");
    this.find = find;
    this.insert = insert;
    this.findPrevious = findPrevious;
    this.remove = remove;
    this.display = display;
}

function find(item) {
    var currNode = this.head;
    while (currNode.element != item) {
        currNode = currNode.next;
    }
    return currNode;
}

function insert(newElement, item) {
    var newNode = new Node(newElement);
    var current = this.find(item);
    newNode.next = current.next;
    current.next = newNode;
}

function display() {
    var currNode = this.head;
    while (!(currNode.next == null) && !(currNode.next.element == "head")) {
        console.log(currNode.next.element);
        currNode = currNode.next;
    }
}

function findPrevious (item) {
    var currNode = this.head;
    while (!(currNode.next == null) && (currNode.next.element != item)) {
        currNode = currNode.next;
    }
    return currNode;
}

function remove(item) {
    var prevNode = this.findPrevious(item);
    if (!(prevNode.next == null)) {
        prevNode.next = prevNode.next.next;
    }
}

var cities = new LList();
cities.insert("Conway", "head");
cities.insert("Russellville", "Conway");
cities.insert("Carlisle", "Russellville");
cities.insert("head", "Carlisle");
cities.display();
// module.exports = LList;