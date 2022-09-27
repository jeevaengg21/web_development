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