let s = document.getElementById("s");
let m = document.getElementById("m");
let h = document.getElementById("h");
let clearTime;
let startTime;
let hours =  0;
let minute = 0;
let second = 0;
let isRunning = false;

function startWatch() {
    if (isRunning) return;

    startTime = new Date();
    clearTime = setInterval(mainTime, 1000);
    isRunning = true;
}

function mainTime() {
    const now = new Date();
    const elapsedTime = Math.floor((now - startTime) / 1000); 
  
    second = elapsedTime % 60;
    minute = Math.floor(elapsedTime / 60) % 60;
    hours = Math.floor(elapsedTime / 3600);

    s.innerText = second < 10 ? "0" + second : second;
    m.innerHTML = minute < 10 ? "0" + minute : minute;
    h.innerText = hours < 10 ? "0" + hours : hours;
}

function stopWatch() {
    clearInterval(clearTime);
    isRunning = false;
}

function resetWatch () {
    clearInterval(clearTime);
    isRunning = false;
    hours = 0;
    minute = 0;
    second = 0;
    s.innerText = "00";
    m.innerHTML = "00";
    h.innerText = "00";
}

document.getElementById("startBtn").addEventListener("click", startWatch);
document.getElementById("stopBtn").addEventListener("click", stopWatch);
document.getElementById("resetBtn").addEventListener("click", resetWatch);