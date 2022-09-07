// private <T> methodName(arg1,arg2){

// }

// private void methodName(arg1,arg2){

// }




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