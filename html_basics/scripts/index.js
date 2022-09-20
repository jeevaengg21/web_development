const exerciseList = [
    "Create your resume using HTML",
    "Prepare documentation for Git command with HTML and CSS",
    "Transform your resume page ",
    "Compose your profile in JSON object",
    "Simple Calculator script",
    "Array as queue and stack using pop() function",
]

/**
 * init() is meant to be called on body load,
 * so all the initial function to be executed can be stacked inside this 
 * function
 */
function init() {
    // composeExercisePanel();
    composeExercisePanelUsingMap();
}

function createExcerciseElements(value) {
    const liEl = document.createElement("li");
    liEl.textContent = value
    return liEl
}

function composeExercisePanelUsingMap() {
    // get ol list element
    const exercise_listEl = document.getElementById("exercise_list")
    // tranform / convert text into li element
    const liElList = exerciseList.map(createExcerciseElements)
    // iterate and append element to ol list
    liElList.forEach(function (liEl) {
        exercise_listEl.appendChild(liEl)
    })
}

/**
 * 
 */
function composeExercisePanel() {
    // get ol list element
    const exercise_listEl = document.getElementById("exercise_list")

    exerciseList.forEach(function (exercise_text) {
        // create element li
        const liEl = document.createElement("li");
        liEl.textContent = exercise_text
        // appent element to ol list
        exercise_listEl.appendChild(liEl);
    })
}

