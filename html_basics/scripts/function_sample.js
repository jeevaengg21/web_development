function childFunction() {
    console.log("I am a child function")
}

function myParentFunction() {
    let a = sum(1, 10)
    console.log(a)
    console.log("i am a function")
    childFunction()
}

let result = myParentFunction()
console.log(result)


function sum(a, b) {
    let c = a + b
    return c;
}

/** Array as stack */
/** Array default behaviour - last in first out */

let school = []

school.push("s1")
school.push("s2")

school.pop()

/** Array as queue */

school = []

school.unshift("x1")
school.unshift("x2")
school.unshift("x3")
school.unshift("x4")

let popped = school.pop()
console.log(popped)
console.log(school)


/** Conditional Statement */
let age = 15
if (age >= 18) {
    console.log("Major")
} else if (age < 18 && age > 12) {
    console.log("teenager")
} else {
    console.log("child")
}

/** Equal comparison operator */
let x = '1'
/** === vs == */

/** with == */
if (1 == x) {
    console.log("Correct")
} else {
    console.log("Wrong")
}

/** with === */
if (1 === x) {
    console.log("Correct")
} else {
    console.log("Wrong")
}

/** != vs !== */

/** with != */
if (1 != x) {
    console.log("Correct")
} else {
    console.log("Wrong")
}

/** with !== */
if (1 !== x) {
    console.log("Correct")
} else {
    console.log("Wrong")
}

/** global scoping */

let i = 0;

for (i; i < 10; i++) {
    console.log("for looping count ", i)
}


while (i < 5) {
    console.log("while looping count ", i)
    i++
}

/** shadow scoping - local variable hide the global variable when both having same variable name */
function printer() {
    let i = 0
    console.log("printing i ", i)
    for (i; i < 15; i++) {
        console.log("Printing page ", i)
    }

}
printer()