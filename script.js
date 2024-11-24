let memory = 0;
function addToDisplay(value) {
    const display = document.getElementById("display");
    if (display.innerText === "0") {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

function clearDisplay() {
    document.getElementById("display").innerText = "0";
}

function backspace() {
    const display = document.getElementById("display");
    display.innerText = display.innerText.slice(0, -1) || "0";
}

function calculateResult() {
    const display = document.getElementById("display");
    try {
        display.innerText = eval(display.innerText) || "0";
    } catch {
        display.innerText = "Error";
    }
}

function memorySave() {
    const display = document.getElementById("display");
    memory = parseFloat(display.innerText) || 0;
}

function memoryRecall() {
    const display = document.getElementById("display");
    display.innerText = memory;
}

function memoryClear () {
    memory = 0;
}