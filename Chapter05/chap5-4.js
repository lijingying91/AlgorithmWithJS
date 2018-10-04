var Queues = require('./chap5-1.js');
/**
 * 基数排序
 * 对于 0~99 的数字，基数排序将数据集扫描两次。第一次按个位上的数字进行排序，第二 次按十位上的数字进行排序
 */

function distribute (nums, queues, n, digit) {
    for (var i = 0; i < n; ++i) {
        if (digit == 1) {
            queues[nums[i]%10].enqueue(nums[i]);
        }
        else {
            queues[Math.floor(nums[i] / 10)].enqueue(nums[i]);
        }
    }
}

function collect (queues, nums) {
    var i = 0;
    for (var digit = 0; digit < 10; ++digit) {
        while (!queues[digit].empty()) {
            nums[i++] = queues[digit].dequeue();
        }
    }
}
var queues = [];
for (var i = 0; i < 10; ++i) {
    queues[i] = new Queues();
}
var nums = [45, 72, 93, 51, 21, 16, 70, 41, 27, 31];
distribute(nums, queues, 10, 1);
collect(queues, nums);
distribute(nums, queues, 10, 10);
collect(queues, nums);
console.log(queues);
console.log(nums);