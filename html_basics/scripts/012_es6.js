let x = 10;
console.log(x)
{
    let x = 2
    console.log(x)
}
console.log(x)

/** ES5 traditional function */
function printTime() {
    console.log(new Date())
}

printTime()

const printTime2 = function () {
    console.log(new Date())
}

printTime2()
/** ES6 Arrow function */

const printDate = () => {
    console.log(new Date())
}

const printDate2 = () => console.log(new Date())

printDate()
printDate2()

/** Set */
const user = new Set();
user.add('prabha')
user.add('prabha')
user.add('prabha')

console.log(user)

class Car {
    constructor(model, brand) {
        this.model = model;
        this.brand = brand;
    }
}


const car1 = new Car("i10", "huyndai")
const car2 = new Car("indica", "Tata")

console.log(car1.model, car2.model)

const coronaTest = new Promise((myResolve, myReject) => {
    setTimeout(() => {
        myReject("Blood contaminated, retest required")
    }, 5000)
})

coronaTest
    .then((result) => console.log("Test Result :" + result))
    .catch((error) => console.log("Inform the patient that, ", error));

/** convert string into array of character */

let username = "Praba"
let charArr = []
for (let c of username) {
    charArr.push(c)
}
console.log(charArr)

console.log(Array.from(username))

const fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log("Array keys ", fruits.keys())

for (let index of fruits.keys()) {
    console.log(index)
}

fruits.forEach((f, index) => console.log(f, index))

/** Array find */

const ages = [4, 9, 16, 12, 30, 25, 29];
let firstAdult = ages.find(isAdult);

function isAdult(value, index, array) {
    return value > 18;
}

console.log(firstAdult)

/** Array find */

let firstAdultPosition = ages.findIndex(isAdult);


console.log(firstAdultPosition)

/** Object entries */


for (let e of fruits.entries()) {
    const index = e[0]
    const value = e[1]
    console.log("index ", index, " value ", value)
}

fruits.forEach((value, index) => console.log("index ", index, " value ", value))



