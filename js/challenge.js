let minusButton = document.getElementById("minus");
let plusButton = document.getElementById("plus");
let heartButton = document.getElementById("heart");
let pauseButton = document.getElementById("pause");
let commentForm = document.querySelector("form");
let counter = document.getElementById("counter");
let likesList = document.querySelector(".likes");
let commentsSection = document.querySelector(".comments");

let isPlaying = true;
let timerId;

function startTimer() {
    timerId = setInterval(() => {
        counter.innerText = parseInt(counter.innerText) + 1;
    }, 1000);
}

function stopTimer() {
    clearInterval(timerId);
}

minusButton.addEventListener("click", () => {
    counter.innerText = parseInt(counter.innerText) - 1;
});

plusButton.addEventListener("click", () => {
    counter.innerText = parseInt(counter.innerText) + 1;
});

heartButton.addEventListener("click", () => {
    let currentNumber = parseInt(counter.innerText);
    let existingLike = document.querySelector(`[data-num="${currentNumber}"]`);

    if (existingLike) {
        let likeCount = parseInt(existingLike.querySelector("span").innerText);
        existingLike.innerHTML = `${currentNumber} has been liked <span>${likeCount + 1}</span> times`;
    } else {
        let newLike = document.createElement("li");
        newLike.setAttribute("data-num", currentNumber);
        newLike.innerHTML = `${currentNumber} has been liked <span>1</span> time`;
        likesList.appendChild(newLike);
    }
});