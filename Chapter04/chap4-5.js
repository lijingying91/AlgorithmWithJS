var Stack = require("./chap4-1.js")
/**
 * 栈实现递归
 * 使用 JavaScript 讲解递归工作原理的网页(http://bit.ly/lenDGE3)是不错的起点
 * 
 * 使用栈来模拟计算 5! 的过程，首先将数字从 5 到 1 压入栈，然后使用一个循环，将数字挨个弹出连乘，就得到了正确的答案:120
 */

function fact(n) {
    var s = new Stack();
    while (n > 1) {
        s.push(n--);
    }
    var product = 1;
    while (s.length() > 0) {
        product *= s.pop();
    }
    return product;
}

console.log(fact(5));