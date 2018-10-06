function findMax(arr) {
    var max = arr[0];
    for (var i = 1; i < arr.length; ++i) {
        if (arr[i] > max) {
            max = arr[i];
        } 
    }
    return max; 
}
var arr = [2,32,321,3,1,32,2,0]
console.log(findMax(arr))