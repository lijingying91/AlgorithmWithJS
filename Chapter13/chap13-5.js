function findMin(arr) {
    var min = arr[0];
    for (var i = 1; i < arr.length; ++i) {
        if (arr[i] < min) {
            min = arr[i];
        } 
    }
    return min; 
}
var arr = [2,32,321,3,1,32,2,0]
console.log(findMin(arr))
