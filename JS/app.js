/* Selector */
let questions = document.querySelectorAll(".accordion--item");

/* Event Listener */
questions.forEach(box => 
    box.addEventListener("click", showAnswer(box)) )

/* Functions */
function showAnswer(box) {
    let answer = box.querySelector("answer");

    if (answer.classList.contains('active') = true) {
        answer.classList.toggle('active');
    }
    else {
        answer.classList.toggle('active');
    }
}