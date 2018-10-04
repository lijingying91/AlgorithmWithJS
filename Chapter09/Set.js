/**
 * 【集合】(set)是一种包含不同元素的数据结构
 * 
 * 集合中的成员是无序的
 * 集合中不允许相同成员存在
 * 
 * 集合的定义：
 * • 不包含任何成员的集合称为空集，全集则是包含一切可能成员的集合。
 * • 如果两个集合的成员完全相同，则称两个集合相等。
 * • 如果一个集合中所有的成员都属于另外一个集合，则前一集合称为后一集合的子集。
 * 
 * 集合的操作：
 * 并集
 * 交集
 * 补集
 */
function Set () {
    this.dataStore = [];
    this.add = add;
    this.remove = remove;
    this.size = size;
    this.contains = contains;
    this.union = union; // 并集
    this.intersect = intersect; // 交集
    this.subset = subset; // 判断是否为子集
    this.difference = difference; // 补集 该方法返回一个新集合，该集合包含的是那些属于第一个集合但不属于第二个集合的成员
    this.show = show;
}

function add(data) {
    if (this.dataStore.indexOf(data) < 0) {
        this.dataStore.push(data);
        return true;
    }
    else {
        return false;
    }
}

function remove (data) {
    var pos = this.dataStore.indexOf(data);
    if (pos > -1) {
        this.dataStore.splice(pos, 1);
        return true;
    }
    else {
        return false;
    }
}

function size () {
    return this.dataStore.length;
}

function show () {
    return this.dataStore;
}

function contains (data) {
    if (this.dataStore.indexOf(data) > -1) {
        return true;
    }
    else {
        return false;
    }
}

function union(set) {
    var tempSet = new Set();
    for (var i = 0; i < this.dataStore.length; ++i) {
        tempSet.add(this.dataStore[i]);
    }
    for (var i = 0; i < set.dataStore.length; ++i) {
        if (!tempSet.contains(set.dataStore[i])) {
            tempSet.dataStore.push(set.dataStore[i]);
        }
    }
    return tempSet;
}

function intersect(set) {
    var tempSet = new Set();
    for (var i = 0; i < this.dataStore.length; ++i) {
        if (set.contains(this.dataStore[i])) {
            tempSet.add(this.dataStore[i]);
        }
    }
    return tempSet;
}

function subset(set) {
    if (this.size() > set.size()) {
        return false;
    }
    else {
        this.dataStore.forEach(function (member) {
            if (!set.contains(member)) {
                return false;
            }
        });
    }
    return true;
}

function difference (set) {
    var tempSet = new Set();
    for (var i = 0; i < this.dataStore.length; ++i) {
        if (!set.contains(this.dataStore[i])) {
            tempSet.add(this.dataStore[i]);
        }
    }
    return tempSet;
}

module.exports = Set;