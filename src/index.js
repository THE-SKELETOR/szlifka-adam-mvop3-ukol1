console.log("test")
console.log("")

// list stuff
const stuff = [
    "Lodash",
    "React",
    "Next",
    "Strapi",
    "Axios",
    "Typescript"
]

// objekt car
const car = ["bmw","xqc","1984"]
// destructure car
const [brand,model,year] = car

// random mezi 0 a 555 jesus take the wheel
let jttw = Math.floor(Math.random() * 556)
console.log("Náhodné číslo je: " + jttw)
console.log("")

// listuje stuff
stuff.forEach(listAll)
console.log("")
stuff.reverse().forEach(listAll)
console.log("")
stuff.sort().forEach(listAll)
console.log("")

// listuje objekt car
carList(car)

// funkce na listovani stuff
function listAll(item) {
    console.log(item)
}

// funkce na listovani destrukturovanyho car
function carList(item) {
    console.log(brand + ", " + model + ", " + year)
}