/**
 * 列表
 * 一组有序的数据，每个列表中的数据项称为【元素】
 * JS中，元素可以是任意数据类型
 * 不包含任何元素的列表称为【空列表】
 * 
 */

function List () {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = []; // 初始化一个空数组来保存列表元素
    this.clear = clear;
    this.find = find;
    this.toString = toString;
    this.insert = insert;
    this.append = append;
    this.remove = remove;
    this.front = front;
    this.end = end;
    this.prev = prev;
    this.next = next;
    this.length = length;
    this.currPos = currPos;
    this.moveTo = moveTo;
    this.getElement = getElement;
    this.length = length;
    this.contains = contains;
}

function append (element) {
    this.dataStore[this.listSize++] = element;
}

function find (element) {
    for (var i = 0; i < this.dataStore.length; i ++) {
        if (this.dataStore[i] == element) {
            return i;
        }
    }
    return -1;
}

function remove (element) {
    var foundAt = this.find(element);
    if (foundAt > -1) {
        this.dataStore.splice(foundAt, 1);
        --this.listSize;
        return true;
    }
    return false;
}

function length () {
    return this.listSize;
}

function toString () {
    return this.dataStore;
}

function insert (element, after) {
    var insertPos = this.find(after);
    if (insertPos > -1) {
        this.dataStore.splice(insertPos + 1, 0, element);
        ++this.listSize;
        return true;
    }
    return false;
}

function clear () {
    /**
     * delete关键字的作用：
     * 删除对象的属性 语法：delete 对象.属性
     * 可以删除没有使用var关键字声明的全局变量（直接定义在window上面的属性）
     * 
     * delete关键字的使用注意：
     * 返回值类型为布尔值（true / false），删除成功返回true
     * 删除对象中不存在的属性，返回值是true
     * 删除对象的原型对象中的属性（不能删除），返回值是true
     * 无法删除使用var声明的全局的变量，但是却可以删除直接定义在window上面的属性
     */
    delete this.dataStore;
    this.dataStore = [];
    this.listSize = this.pos = 0;
}

function contains (element) {
    for (var i = 0; i < this.dataStore.length; ++i) {
        if (this.dataStore[i] == element) {
            return true;
        }
    }
    return false;
}

// 最后的一组方法允许用户在列表上自由移动
function front () {
    this.pos = 0;
}

function end () {
    this.pos = this.listSize - 1;
}

function prev () {
    if (this.pos > 0) {
        --this.pos;
    }
}

function next () {
    if (this.pos < this.listSize - 1) {
        ++this.pos;
    }
}

function currPos () {
    return this.pos;
}

function moveTo (position) {
    this.pos = position;
}

function getElement () {
    return this.dataStore[this.pos];
}

module.exports = List;
// var names = new List();
// names.append("Cynthia");
// names.append("Raymond");
// names.append("Barbara");
// console.log(names.toString());
// names.remove("Raymond");
// console.log(names.toString());
// names.append("Clayton");
// names.append("Raymond");
// names.append("Cynthia");
// names.append("Jennifer");
// names.append("Bryan");
// names.append("Danny");
// names.front();
// console.log(names.getElement());
// names.next();
// console.log(names.getElement());
// names.next();
// names.next();
// names.prev();
// console.log(names.getElement());