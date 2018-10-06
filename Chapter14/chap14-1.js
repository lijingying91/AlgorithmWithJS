function recurFib(n) { 
    if(n<2){
        return n; 
    }
    else {
        return recurFib(n-1) + recurFib(n-2);

    }
}
function dynFib(n) {
    var val = []; 
    for (var i = 0; i <= n; ++i) {
        val[i] = 0; 
    }
    if (n==1||n==2) { 
        return 1;
    } 
    else {
        val[1] = 1;
        val[2] = 2; 
        for(var i = 3; i <= n; ++i) {
            val[i] = val[i-1] + val[i-2];
        }
        return val[n-1];
    }
}

function iterFib(n) {
    var last = 1;
    var nextLast = 1;
    var result = 1; 
    for (var i = 2; i < n; ++i) {
        result = last + nextLast;
        nextLast = last;
        last = result;
    }
    return result;
}
// console.log(recurFib(0));
// console.log(recurFib(1));
// console.log(recurFib(2));
// console.log(recurFib(3));
// console.log(recurFib(4));
// console.log(recurFib(5));
// console.log(recurFib(6));
// console.log(recurFib(7));
// console.log(recurFib(8));
// console.log(recurFib(9));
// console.log(recurFib(10)); // 显示 55

var start = new Date().getTime(); 
console.log(recurFib(30));
var stop = new Date().getTime();
console.log(" 递归计算耗时 - " + (stop-start) + " 毫秒 "); 
console.log('---------------------');
start = new Date().getTime();
console.log(dynFib(30));
stop = new Date().getTime();
console.log(" 动态规划耗时 - " + (stop-start) + " 毫秒 ");
console.log('---------------------');
start = new Date().getTime();
console.log(iterFib(30));
stop = new Date().getTime();
console.log(" 迭代版本耗时 - " + (stop-start) + " 毫秒 ");