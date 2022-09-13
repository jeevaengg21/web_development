let fruits = ["apple", "mango", "orange"]
let fruit_map = { a: "apple", b: "banana" }

/** index based looping */
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}

/** for in */

//for(key in Object)

for (let index in fruits) {

    const reaction = fruits[index] + " is good for health";
    //.... 20
    console.log(fruits[index])
    // myfunction()
}

for (let key in fruit_map) {
    console.log(fruit_map[key])
}


/** for of */
console.log("---For of sample -------------------")

for (let fruit of fruits) {
    console.log(fruit);
}

let myname = "Prabha"
for (let c of myname) {
    console.log(c)
}

/** forEach */
function prepareJuice(item) {
    console.log(item + "Juice is ready!!")
}

function prepareJuiceWithToken(item, index) {
    console.log("Hi token number " + index + ", your " + item + " juice is ready!!")
}

function prepareJuiceAndUpdateStatus(item, index, fq) {
    fq[index] = "Hi token number " + index + ", your " + item + " juice is ready!!"
}

fruits.forEach(prepareJuice)
fruits.forEach(prepareJuiceWithToken)
let fruits_queue = ["apple", "mango", "orange"]
fruits_queue.forEach(prepareJuiceAndUpdateStatus)
console.log(fruits_queue)

