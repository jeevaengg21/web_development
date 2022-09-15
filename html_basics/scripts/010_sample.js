const aId = "input_a"
const bId = "input_b"
const resultId = "label_result"
const history_listId = "history_list"

function getElement(id) {
    return document.getElementById(id)
}

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

function clear() {
    getElement(aId).value = ""
    getElement(bId).value = ""
    getElement(resultId).innerText = ""
}

function addToHistory(a, b, c) {
    let message = "A = " + a + ", B= " + b + ", Result= " + c
    console.log(message)

    const li = document.createElement('li');

    const messageEl = document.createTextNode(message);
    li.appendChild(messageEl)
    document.getElementById(history_listId).appendChild(li)

}