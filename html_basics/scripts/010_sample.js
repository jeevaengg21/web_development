const aId = "input_a"
const bId = "input_b"
const resultId = "label_result"
const history_listId = "history_list"

/**
 * Takes <i>id</i> as an input and Search for the element in document and retuns it
 * 
 * @param {*} id id of the target element to be found
 * @returns doucment element if found
 */
function getElement(id) {
    return document.getElementById(id)
}

/**
 * 
 * @param result 
 */
function updateResult(result) {
    document.getElementById(resultId).innerText = result;
}

function multiply() {
    const aEl = getElement(aId);
    const bEl = getElement(bId);

    let a = parseInt(aEl.value);
    let b = parseInt(bEl.value);

    let c = a * b
    updateResult(c)
    addToHistory(a, b, c)
    clear()
}


function sum() {
    const aEl = getElement(aId);
    const bEl = getElement(bId);

    let a = parseInt(aEl.value);
    let b = parseInt(bEl.value);

    let c = a + b
    updateResult(c)
    addToHistory(a, b, c)
    clear()
}

/**
 * Clear the input elements and result element
 */
function clear() {
    getElement(aId).value = ""
    getElement(bId).value = ""
    getElement(resultId).innerText = ""
}

/**
 * Add the operation history to the form
 * 
 * @param {*} a Input 1
 * @param {*} b Input 2
 * @param {*} c Result value
 */
function addToHistory(a, b, c) {
    let message = "A = " + a + ", B= " + b + ", Result= " + c
    console.log(message)

    /**
     * textNode -> b -> i -> span -> li -> ol
     */

    const li = document.createElement('li');
    const messageEl = document.createTextNode(message);
    const bEl = document.createElement("b")
    const iEl = document.createElement("i")
    const spanEl = document.createElement("span")
    // li.appendChild(messageEl)

    bEl.appendChild(messageEl);
    iEl.appendChild(bEl)
    spanEl.appendChild(iEl)
    li.appendChild(spanEl)
    // document.getElementById(history_listId).appendChild(li)

    /** approach 2 */

    const history_item = `
            <span>
                <i>
                    <b>`+ message + `</b>
                </i>
            </span>
        `
    const liNew = document.createElement('li');
    liNew.innerHTML = history_item;
    document.getElementById(history_listId).appendChild(liNew)


}

const ticket_to_mars = [{ name: "prabha", vaccinated: true }, { name: "surya", vaccinated: true }, { name: "jeeva", vaccinated: false }]



function isEligibleForTraining(tickets) {

    return tickets.some((t) => t.vaccinated)

}




function isEligibleForTravel(tickets) {
    return tickets.every((t) => t.vaccinated)
}

console.log("isEligibleForTraining " + isEligibleForTraining(ticket_to_mars));
console.log("isEligibleForTravel " + isEligibleForTravel(ticket_to_mars));