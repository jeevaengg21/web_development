"use strict";
console.info("Application JS execution started")
console.error("there was an error") // do disclose any error which affects user and also that user has take some action.
console.debug("debugging")
/**Variable*/
global_name = "prabha"
var my_global_name = "prabha"
/** Variable type **/
/** Constant variable **/
const myname = "prabhakaran"
const gender = "male"
/** let Scoped variable **/
let my_location = "Madurai"

console.debug(global_name, myname, gender, my_location)

console.debug("reached this line?")

my_location = "Trichy"

console.debug(global_name, myname, gender, my_location)

/** Data type */
// int age=10;
// String namee=""
// boolean flag=true
// float salary=12345.67

let age = 40
let username = "xyz"
let flag = true
let salary = 12345.67

console.log(age, username, flag, salary)
console.log(typeof age);
console.log(typeof salary);
console.log(typeof flag);
console.log(typeof username);

if (age > 10) {
    console.info("age is valid")
}

age = "jeeva"

console.log(typeof age)

//Array
// String city=new String[5];
// String city[]={"c1","c2","c3"}

// Collections:
// List,Queue,Stack
// List<T> experience=new ArrayList<T>();

// Dictionary:
// Map

//JS Array
let cities = ["c1", "c2", "c3"] // object / array object / json array object

console.log(cities, typeof cities)

//JS Map / Dictionary
let profile = { name: "jeeva", email: "xyz@test.com" } // object /JSON object
profile["age"] = 20;

console.log(profile["age"])

console.log(profile, typeof profile)



//Array deep dive

cities.push("c4")

console.log(cities)

console.log(cities.pop())

console.log(cities.reverse())

cities.push("c0")

console.log(cities.sort())

cities.push(10000)
cities.push(true)

cities.push(profile)



cities[7] = "new city"

console.log(cities)