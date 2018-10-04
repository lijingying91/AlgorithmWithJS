var Stack = require('./chap4-1.js');
/**
 * 判断给定字符串是否是回文
 * @param {String} word 
 */
function isPalindrome(word) {
    var s = new Stack();
    for (var i = 0; i < word.length; i++) {
        s.push(word[i]);
    }
    var reword = "";
    while (s.length() > 0) {
        reword += s.pop();
    }
    if (word == reword) {
        return true;
    }
    else {
        return false;
    }
}

var word = "hello";
if (isPalindrome(word)) {
    console.log(word + " is a palindrome.");
}
else {
    console.log(word + " is not a palindrome.");
}

word = "racecar";
if (isPalindrome(word)) {
    console.log(word + " is a palindrome.");
}
else {
    console.log(word + " is not a palindrome.");
}