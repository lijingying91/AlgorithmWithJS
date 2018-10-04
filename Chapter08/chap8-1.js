/**
 * 散列
 * 散列是一种常用的数据存储技术，散列后的数据可以快速地插入或取用。
 * 散列使用的数据 结构叫做散列表。
 * 
 * 我们使用一个类来表示散列表，该类包含计算散列值的方法、向散列中插入数据的方法、 从散列表中读取数据的方法、显示散列表中数据分布的方法，以及其他一些可能会用到的 工具方法
 * 在散列表上插入、删除和取用数据都非常快，但是对于查找操作来说却效率低下，比如查找一组数据中的最大值和最小值
 * 即使使用一个高效的散列函数，仍然存在将两个键映射成同一个值的可能，这种现象称为【碰撞】(collision)
 */
function HashTable () {
    this.table = new Array(137);
    this.simpleHash = simpleHash;
    this.betterHash = betterHash;
    this.showDistro = showDistro;
    this.put = put;
    // this.get = get;
}

function simpleHash (data) {
    var total = 0;
    for (var i = 0; i < data.length; ++i) {
        total += data.charCodeAt(i);
    }
    // console.log("Hash value: " + data + " -> " + total);
    return total % this.table.length;
}

function put (data) {
    // var pos = this.simpleHash(data);
    var pos = this.betterHash(data);
    this.table[pos] = data;
}

function showDistro () {
    var n = 0;
    for (var i = 0; i < this.table.length; ++i) {
        if (this.table[i] != undefined) {
            console.log(i + ": " + this.table[i]);
        }
    }
}

function betterHash(string, arr) {
    const H = 37;
    var total = 0;
    for (var i = 0; i < string.length; ++i) {
       total += H * total + string.charCodeAt(i);
    }
    total = total % this.table.length;
    if (total < 0) {
        total += this.table.length-1;
    }
    return parseInt(total);
 }

module.exports = HashTable;