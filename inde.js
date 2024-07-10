const LogDiv = document.getElementById("log");
const StateDiv = document.getElementById("state");
const startDiv = document.getElementById("btn1");
const stopDiv = document.getElementById("btn2");

function handleup(event) {
    LogDiv.textContent = `Key ${event.key} is pressed up`;
    StateDiv.textContent = "Key is up";
}

function handledown(event) {
    LogDiv.textContent = `Key ${event.key} is pressed down`;
    StateDiv.textContent = "Key is pressed down";
}

startDiv.addEventListener("click", () => {
    document.addEventListener("keyup", handleup);
    document.addEventListener("keydown", handledown);
});

stopDiv.addEventListener("click", () => {
    document.removeEventListener("keyup", handleup);
    document.removeEventListener("keydown", handledown);
    LogDiv.textContent = "";
    StateDiv.textContent = "";
});