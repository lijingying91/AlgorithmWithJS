var Dictionary = require("./chap7-1.js");

var word = "the brown fox jumped over the blue fox";
word = word.split(" ");

var accountObj = new Dictionary();
function account (word) {
    for (var i = 0; i < word.length; i++) {
        if (accountObj.find(word[i])) {
            accountObj.add(word[i], accountObj.find(word[i])+1);
        }
        else {
            accountObj.add(word[i], 1);
        }
    }
}
account(word);
accountObj.showAll();