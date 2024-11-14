let startTime;
let endTime;

function startTest() {
    const textToType = document.getElementById('textToType').innerText;
    const inputText = document.getElementById('inputText');
    inputText.value = ""; // Clear previous input
    inputText.focus();

    startTime = new Date().getTime();
    inputText.addEventListener('input', checkTyping);
}

function checkTyping() {
    const textToType = document.getElementById('textToType').innerText;
    const inputText = document.getElementById('inputText').value;

    if (inputText === textToType) {
        endTime = new Date().getTime();
        calculateResults();
    }
}

function calculateResults() {
    const timeTaken = (endTime - startTime) / 1000; // Time in seconds
    const wordCount = document.getElementById('textToType').innerText.split(" ").length;
    const wpm = Math.round((wordCount / timeTaken) * 60); // Words per minute

    document.getElementById('time').innerText = timeTaken.toFixed(2);
    document.getElementById('wpm').innerText = wpm;

    // Remove event listener after test is completed
    document.getElementById('inputText').removeEventListener('input', checkTyping);
}