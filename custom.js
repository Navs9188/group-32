const projectData = {
    "projectA": { "name": "Project 1", "location": "file:///C:/Users/bakar/OneDrive/Desktop/123/task1/index.html" },
    "projectB": { "name": "Project 2", "location": "file:///C:/Users/bakar/OneDrive/Desktop/123/task2/index.html" },
    "projectC": { "name": "Project 3", "location": "file:///C:/Users/bakar/OneDrive/Desktop/123/task3/index.html" }
};

const navigationArea = document.getElementById("nav_div");
const displayArea = document.getElementById("content_frame");

for (const projectKey in projectData) {
    const linkElement = document.createElement("div");
    linkElement.textContent = projectData[projectKey].name;
    linkElement.classList.add("nav_item");

    linkElement.addEventListener("click", function() {
        displayArea.src = projectData[projectKey].location;
    });

    navigationArea.appendChild(linkElement);
}
