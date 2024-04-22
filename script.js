let timerInterval;
let tenthsOfSeconds = 0;

function startStopwatch() {
    document.getElementById('startBtn').disabled = true;
    document.getElementById('pauseBtn').disabled = false;
    document.getElementById('resetBtn').disabled = false;

    timerInterval = setInterval(() => {
        tenthsOfSeconds++;
        updateDisplay();
    }, 100); // Update display every 100 milliseconds

function pauseStopwatch() {
    clearInterval(timerInterval);
    document.getElementById('startBtn').disabled = false;
    document.getElementById('pauseBtn').disabled = true;
}

function resetStopwatch() {
    clearInterval(timerInterval);
    tenthsOfSeconds = 0;
    updateDisplay();
    document.getElementById('startBtn').disabled = false;
    document.getElementById('pauseBtn').disabled = true;
    document.getElementById('resetBtn').disabled = true;
}

function updateDisplay() {
    const hours = Math.floor(tenthsOfSeconds / (3600 * 10));
    const minutes = Math.floor((tenthsOfSeconds % (3600 * 10)) / (60 * 10));
    const seconds = Math.floor((tenthsOfSeconds % (60 * 10)) / 10);
    const tenths = tenthsOfSeconds % 10;

    const formattedTime = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}.${tenths}`;
    document.getElementById('display').textContent = formattedTime;
}

function pad(value) {
    return String(value).padStart(2, '0');
}