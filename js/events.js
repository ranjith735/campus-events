// Campus event details
const events = [
    { name: "Innovation Fest", category: "Technical", date: "Oct 15", department: "Computer Science" },
    { name: "Cultural Evening", category: "Cultural", date: "Oct 20", department: "Arts" },
    { name: "Sports Day", category: "Sports", date: "Oct 28", department: "Physical Education" },
    { name: "AI Lab", category: "Workshop", date: "Nov 5", department: "Information Technology" }
];

const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const eventList = document.getElementById("eventList");
const emptyMessage = document.getElementById("emptyMessage");

function displayEvents() {
    const searchText = searchInput.value.trim().toLowerCase();
    const selectedCategory = categoryFilter.value;

    const matchingEvents = events.filter(function (event) {
        const eventText = (event.name + " " + event.category + " " +
            event.date + " " + event.department).toLowerCase();

        return eventText.includes(searchText) &&
            (selectedCategory === "" || event.category === selectedCategory);
    });

    eventList.innerHTML = "";

    matchingEvents.forEach(function (event) {
        const card = document.createElement("div");
        card.className = "card";

        const date = document.createElement("span");
        date.className = "stat";
        date.textContent = event.date;

        const title = document.createElement("h3");
        title.textContent = event.name;

        const details = document.createElement("p");
        details.textContent = event.category + " · " + event.department;

        const registerLink = document.createElement("a");
        registerLink.className = "btn";
        registerLink.href = "register.html?event=" + encodeURIComponent(event.name);
        registerLink.textContent = "Register";

        card.append(date, title, details, registerLink);
        eventList.appendChild(card);
    });

    emptyMessage.hidden = matchingEvents.length !== 0;
}

searchInput.addEventListener("input", displayEvents);
categoryFilter.addEventListener("change", displayEvents);
displayEvents();
