/**
 * 队列是一种列表，不同的是队列只能在队尾插入元素，在队首删除元素
 * 
 * 队列是一种先进先出(First-In-First-Out，FIFO)的数据结构。队列被用在很多地方
 * 应用场景：提交操作系统执行的一系列进程、打印任务池等，一些仿真系统用队列来模拟银行或杂货 店里排队的顾客
 */

function Queue () {
    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.empty = empty;
    this.count = count;
}

function enqueue (element) {
    this.dataStore.push(element);
}

function dequeue () {
    return this.dataStore.shift();
}

function front () {
    return this.dataStore[0];
}

function back () {
    return this.dataStore[this.dataStore.length-1];
}

function toString () {
    var retStr = "";
    for (var i = 0; i < this.dataStore.length; ++i) {
        retStr += this.dataStore[i] + "\n";
    }
    return retStr;
}

function empty () {
    if (this.dataStore.length == 0) {
        return true;
    }
    else {
        return false;
    }
}

function count () {
    return this.dataStore.length;
}

module.exports = Queue;