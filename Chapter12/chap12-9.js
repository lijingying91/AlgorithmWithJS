var numElements = 100;
var nums = new CArray(numElements);
nums.setData();
var start = new Date().getTime();
nums.bubbleSort();
var stop = new Date().getTime();
var elapsed = stop - start;
print(" 对 " + numElements + " 个元素执行冒泡排序消耗的时间为:" +
elapsed + " 毫秒。");
start = new Date().getTime();
nums.selectionSort();
stop = new Date().getTime();
elapsed = stop - start;
print(" 对 " + numElements + " 个元素执行选择排序消耗的时间为:" +
elapsed + " 毫秒。");
start = new Date().getTime();
nums.insertionSort();
stop = new Date().getTime();
elapsed = stop - start;
print(" 对 " + numElements + " 个元素执行插入排序消耗的时间为:" +
elapsed + " 毫秒。");