"use strict";

console.log("test");
console.log(""); // list stuff

var stuff = ["Lodash", "React", "Next", "Strapi", "Axios", "Typescript"]; // objekt car

var car = {
  brand: "bmw",
  model: "sedan",
  year: 1984
}; // destructure car

var brand = car.brand,
    model = car.model,
    year = car.year; //const [brand,model,year] = car
// random mezi 0 a 555 jesus take the wheel

var jttw = Math.floor(Math.random() * 556);
console.log("Náhodné číslo je: " + jttw);
console.log(""); // listuje stuff

stuff.forEach(listAll);
console.log("");
stuff.reverse().forEach(listAll);
console.log("");
stuff.sort().forEach(listAll);
console.log(""); // listuje objekt car

console.log(brand + ", " + model + ", " + year); // funkce na listovani stuff

function listAll(item) {
  console.log(item);
}