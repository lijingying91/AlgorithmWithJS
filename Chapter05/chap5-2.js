var fs = require('fs');
var Queue = require("./chap5-1.js");

function Dancer (name, sex) {
    this.name = name;
    this.sex = sex;
}

function getDancers (males, females) {
    var names = fs.readFileSync('dancers.txt', 'utf8').split("\n");
    for (var i = 0; i < names.length; ++i) {
        names[i] = names[i].trim();
    }
    for (var i = 0; i < names.length; ++i) {
        var dancer = names[i].split(" ");
        var sex = dancer[0];
        var name = dancer[1];
        if (sex == "F") {
            females.enqueue(new Dancer(name, sex));
        }
        else {
            males.enqueue(new Dancer(name, sex));
        }
    }
}

function dance(males, females) {
    console.log("The dance partners are: \n");
    while (!males.empty() && !females.empty()) {
        var person = females.dequeue();
        console.log("Female dancer is: " + person.name);
        var person = males.dequeue();
        console.log(" and the male dancer is: " + person.name);
    }
}

var maleDancers = new Queue();
var femaleDancers = new Queue();
getDancers(maleDancers, femaleDancers);
// console.log(maleDancers, femaleDancers);
dance(maleDancers, femaleDancers);
if (!femaleDancers.empty()) {
    console.log(femaleDancers.front().name + " is waiting to dance.");
}
if (!maleDancers.empty()){
    console.log(maleDancers.front().name + " is waiting to dance.");
}