document.getElementById('startBtn').addEventListener('click', startTimer);
document.getElementById('pauseBtn').addEventListener('click', pauseTimer);
document.getElementById('resetBtn').addEventListener('click', resetTimer);

let timerId;
let timePassed = 0;
let isRunning = false;

function formatTime(milliseconds) {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    if (hours > 0) {
        return `${hours}h ${minutes.toString().padStart(2, '0')}m ${seconds.toString().padStart(2, '0')}s`;
    } else if (minutes > 0) {
        return `${minutes}m ${seconds.toString().padStart(2, '0')}s`;
    } else {
        return `${seconds.toString().padStart(2, '0')}s`;
    }
}

function updateStopwatch() {
    timePassed += 10; // Increment by 10 milliseconds
    displayStopwatch(timePassed);
}

function displayStopwatch(time) {
    document.getElementById('stopwatch').textContent = formatTime(time);
}

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timerId = setInterval(updateStopwatch, 10); // Update every 10 milliseconds
        document.getElementById('startBtn').disabled = true;
        document.getElementById('pauseBtn').disabled = false;
    }
}

function pauseTimer() {
    if (isRunning) {
        isRunning = false;
        clearInterval(timerId);
        document.getElementById('startBtn').disabled = false;
        document.getElementById('pauseBtn').disabled = true;
    }
}

function resetTimer() {
    isRunning = false;
    clearInterval(timerId);
    timePassed = 0;
    displayStopwatch(timePassed);
    document.getElementById('startBtn').disabled = false;
    document.getElementById('pauseBtn').disabled = true;
}