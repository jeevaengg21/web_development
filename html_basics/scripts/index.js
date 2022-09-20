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
    composeExercisePanel();
}

/**
 * 
 */
function composeExercisePanel() {
    const exercise_listEl = document.getElementById("exercise_list")

    exerciseList.forEach(function (exercise_text) {
        const liEl = document.createElement("li");
        liEl.textContent = exercise_text
        exercise_listEl.appendChild(liEl);
    })
}
