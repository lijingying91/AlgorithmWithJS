/**
 * 字典
 * 
 * 字典是一种以键 - 值对形式存储数据的数据结构，就像电话号码簿里的名字和电话号码一样
 * Dictionay 类的基础是 Array 类，而不是 Object 类
 * 
 */

function Dictionary () {
    this.add = add;
    this.dataStore = new Array();
    this.find = find;
    this.remove = remove;
    this.showAll = showAll;
    this.count = count;
    this.clear = clear;
}

function add (key, value) {
    this.dataStore[key] = value;
}

function find(key) {
    return this.dataStore[key];
}

function remove(key) {
    delete this.dataStore[key];
}

function showAll() {
    for (var key in this.dataStore) {
        console.log(key + "->" + this.dataStore[key]);
    }
}

function count () {
    var n = 0;
    for (var key in this.dataStore) {
        ++n;
    }
    return n;
}

function clear () {
    for (var key in this.dataStore) {
        delete this.dataStore[key];
    }
}

module.exports = Dictionary;