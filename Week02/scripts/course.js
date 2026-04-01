const courses = [
  { code: "WDD130", credits: 2, completed: true },
  { code: "WDD131", credits: 2, completed: true },
  { code: "WDD231", credits: 2, completed: false },
  { code: "CSE110", credits: 2, completed: true }
];

const container = document.querySelector("#courses");

function displayCourses(list) {
    container.innerHTML = "";

    list.forEach(course => {
        const card = document.createElement("div");
        card.textContent = course.code;

        if (course.completed) {
            card.classList.add("completed");
        }

        container.appendChild(card);
    });
}

displayCourses(courses);

document.querySelector("#all").addEventListener("click", () => {
    displayCourses(courses);
});

document.querySelector("#wdd").addEventListener("click", () => {
    const wddCourses = courses.filter(course => course.code.includes("WDD"));
    displayCourses(wddCourses);
});

document.querySelector("#cse").addEventListener("click", () => {
    const cseCourses = courses.filter(course => course.code.includes("CSE"));
    displayCourses(cseCourses);
});

const totalCredits = courses.reduce((sum, course) => sum + course.credits, 0);

document.querySelector("#totalCredits").textContent =
`Total Credits: ${totalCredits}`;
