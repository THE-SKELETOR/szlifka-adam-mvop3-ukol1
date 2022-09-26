"use strict";

console.log("test");
console.log(""); // list stuff

var stuff = ["Lodash", "React", "Next", "Strapi", "Axios", "Typescript"]; // objekt car

var car = ["bmw", "xqc", "1984"]; // destructure car

var brand = car[0],
    model = car[1],
    year = car[2]; // random mezi 0 a 555 jesus take the wheel

var jttw = Math.floor(Math.random() * 556);
console.log("Náhodné číslo je: " + jttw);
console.log(""); // listuje stuff

stuff.forEach(listAll);
console.log("");
stuff.reverse().forEach(listAll);
console.log("");
stuff.sort().forEach(listAll);
console.log(""); // listuje objekt car

carList(car); // funkce na listovani stuff

function listAll(item) {
  console.log(item);
} // funkce na listovani destrukturovanyho car


function carList(item) {
  console.log(brand + ", " + model + ", " + year);
}