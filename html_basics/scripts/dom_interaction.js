/** querySelector */
console.log(document.querySelector('h3').innerText)

/** querySelectorAll */
let h3NodeList = document.querySelectorAll('h3')
for (let node of h3NodeList) {
    console.log(node.innerText)
}

/** query by id */
console.log(document.querySelector('#summary').innerText)

/** query by class name */

console.log(document.querySelector('.training-content').innerText)

/** querySelectorAll by class name */
let trainingContentNodes = document.querySelectorAll('.training-content')
for (let node of trainingContentNodes) {
    console.log(node.innerText)
}

document.querySelector("#desc").innerText = "New description"

/** getElementById - very efficient than query selector */

document.getElementById("desc").innerText = "New description updated using getElementById"

document.querySelectorAll("#hobbies li").forEach(function (node) {
    console.log(node.innerText)
})

document.querySelectorAll("#hobbies li").forEach(printHobby)

function printHobby(hobbyNode) {
    console.log(hobbyNode.innerText)
}