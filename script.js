let totalTime = 25 * 60;
let timeLeft = totalTime;
let timer = null;

const display = document.getElementById("time");
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");
const alarm = document.getElementById("alarm");
const circle = document.querySelector(".fill");

function updateTime() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    display.innerText = `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
}

function updateCircle() {
    const circumference = 565;
    const offset = circumference - (timeLeft / totalTime) * circumference;
    circle.style.strokeDashoffset = offset;
}

function startTimer() {
    if (timer) return;

    timer = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            updateTime();
            updateCircle();
        } else {
            clearInterval(timer);
            timer = null;
            alarm.play();
            alert("Time's up! Take a break.");
        }
    }, 1000);
}

function pauseTimer() {
    clearInterval(timer);
    timer = null;
}

function resetTimer() {
    pauseTimer();
    timeLeft = totalTime;
    updateTime();
    updateCircle();
}

startBtn.onclick = startTimer;
pauseBtn.onclick = pauseTimer;
resetBtn.onclick = resetTimer;

updateTime();
updateCircle();
