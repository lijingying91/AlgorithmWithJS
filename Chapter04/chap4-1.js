/**
 * 栈就是和列表类似的一种数据结构
 * 栈是一种特殊的列表，栈内的元素只能通过列表的一端访问，这一端称为栈顶
 * 栈被称为一种后入先出(LIFO，last-in-first-out)的数据结构
 * push()、pop() 和 peek() 是栈的 3 个主要方法
 * 
 */

function Stack () {
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.clear = clear;
    this.length = length;
}

function push (element) {
    this.dataStore[this.top++] = element;
}

function pop () {
    return this.dataStore[--this.top];
}

function peek () {
    return this.dataStore[this.top-1];
}

function length () {
    return this.top;
}

function clear () {
    this.top = 0;
}

// var s = new Stack();
// s.push("David");
// s.push("Raymond");
// s.push("Bryan");
// console.log("length: " + s.length());
// console.log(s.peek());
// var popped = s.pop();
// console.log("The popped element is: " + popped);
// console.log(s.peek());
// s.push("Cynthia");
// console.log(s.peek());
// s.clear();
// console.log("length: " + s.length());
// console.log(s.peek());
// s.push("Clayton");
// console.log(s.peek());

module.exports = Stack;

