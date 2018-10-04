var fs = require('fs');
var List = require('./chap3_1');
// 异步
// var movies;
// fs.readFile('./films.txt', 'utf8', function(err, data){
//     movies = data;
//     console.log(data);  
// });

// 同步
// var movies = fs.readFileSync('./films.txt', 'utf8').split("\n");
// console.log(movies);

// 获取数据列表
function createArr (file) {
    var arr = fs.readFileSync(file, 'utf8').split("\n");
    for (var i = 0; i < arr.length; ++i) {
        arr[i] = arr[i].trim();
    }
    return arr;
}

var movies = createArr('./films.txt');

var movieList = new List();
for (var i = 0; i < movies.length; ++i) {
    movieList.append(movies[i]);
}
// console.log(movieList.toString());

function displayList(list) {
    // console.log(list.getElement());
    // // console.log(list.front());
    // console.log(list.currPos());
    // console.log(list.length())

    for (0; list.currPos() < list.length(); list.pos++ ) {
        if (list.getElement() instanceof Customer) {
            console.log(list.getElement()["name"] + '，' + list.getElement()["movie"]);
        }
        else {
            console.log(list.getElement());
        }
    }
}
// displayList(movieList);

var customers = new List();
function Customer (name, movie) {
    this.name = name;
    this.movie = movie;
}
function checkOut(name, movie, filmList, customerList) {
    if (movieList.contains(movie)) {
        var c = new Customer(name, movie);
        customerList.append(c);
        filmList.remove(movie);
    }
    else {
        console.log(movie + ' is not available.');
    }
}

console.log("Available movies: \n");
displayList(movieList);
checkOut("Jane Doe", "(2) The Godfather(《教父》)", movieList, customers);
console.log("\nCustomer Rentals: \n");
displayList(customers);
