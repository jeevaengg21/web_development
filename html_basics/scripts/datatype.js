/** Set object */
let city = new Set(["c1", "c2", "c3", "c3"])
console.log(city, typeof city)

/** JS Array (json array) */
let cityarr = ["c1", "c2", "c3", "c3"]
console.log(cityarr)

/** Map object */

let friends = new Map([
    ["f1", "ABC"],
    ["f2", "ABC"],
    ["key", "value"]
])

friends.set("key2", "value")

/** JS Object (json) */
let friens2 = {
    f1: "ABC",
    f2: "ABC",
    key: "value",
    keynum: 100
}
friens2["key2"] = "value"

/** JSON Key - Handling key with space */

let employeeDetails = {
    jeeva: { location: "madurai", exp: 12 },
    prabha: { location: "chennai", exp: 7 },
    "selva murugan": { location: "chennai", exp: 7 },
}

console.log(typeof friends, friens2, JSON.stringify(friens2))
console.log(employeeDetails, JSON.stringify(employeeDetails))

/** Undefined Vs Null */

let school

console.log(school)

let college = null

console.log(college)

console.log("undefined vs null >> ", typeof school, typeof college)
