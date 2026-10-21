// Handle the event registration form
const registrationForm = document.getElementById("form");
const message = document.getElementById("msg");
const eventSelect = document.getElementById("event");

// If the visitor clicked Register on an event card, select that event.
const selectedEvent = new URLSearchParams(window.location.search).get("event");
if (selectedEvent) {
    for (const option of eventSelect.options) {
        if (option.textContent === selectedEvent) {
            eventSelect.value = selectedEvent;
            break;
        }
    }
}

registrationForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const studentName = document.getElementById("name").value.trim();
    message.textContent = "Thank you, " + studentName +
        "! Your registration for " + eventSelect.value +
        " has been recorded in this demo.";

    registrationForm.reset();
});
