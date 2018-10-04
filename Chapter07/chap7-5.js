function Dictionary () {
    this.add = add;
    this.dataStore = new Array();
    this.find = find;
    this.remove = remove;
    this.showAll = showAll;
    this.count = count;
    this.clear = clear;
}

function add (key, value) {
    this.dataStore[key] = value;
}

function find(key) {
    return this.dataStore[key];
}

function remove(key) {
    delete this.dataStore[key];
}

function showAll() {
    // console.log(Object.keys(this.dataStore).sort());
    // for (var key in Object.keys(this.dataStore).sort()) {
    //     console.log(key + "->" + this.dataStore[key]);
    // }
    var _this = this;
    Object.keys(this.dataStore).sort().forEach(function(key){
        console.log(key + "->" + _this.dataStore[key]);
    })
}

function count () {
    var n = 0;
    for (var key in this.dataStore) {
        ++n;
    }
    return n;
}

function clear () {
    for (var key in this.dataStore) {
        delete this.dataStore[key];
    }
}

var pbook = new Dictionary();
pbook.add("Raymond","123");
pbook.add("David", "345");
pbook.add("Cynthia", "456");
pbook.add("Mike", "723");
pbook.add("Jennifer", "987");
pbook.add("Danny", "012");
pbook.add("Jonathan", "666");
pbook.showAll();
