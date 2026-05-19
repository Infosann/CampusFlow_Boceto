const tabs = document.querySelectorAll(".tab");
const sections = document.querySelectorAll(".section");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        tabs.forEach(t => t.classList.remove("active"));
        sections.forEach(section => section.classList.remove("active-section"));

        tab.classList.add("active");

        const sectionId = tab.dataset.section;
        document.getElementById(sectionId).classList.add("active-section");
    });
});

const taskList = document.getElementById("taskList");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskInput = document.getElementById("taskInput");
const priorityInput = document.getElementById("priorityInput");

function activateCompleteButtons() {
    const completeButtons = document.querySelectorAll(".complete-btn");

    completeButtons.forEach(button => {
        button.onclick = () => {
            const task = button.closest(".task");
            task.classList.toggle("completed");

            if (task.classList.contains("completed")) {
                button.textContent = "Reabrir";
            } else {
                button.textContent = "Completar";
            }
        };
    });
}

addTaskBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Escribe una tarea antes de añadirla.");
        return;
    }

    const priority = priorityInput.value;

    const newTask = document.createElement("li");
    newTask.classList.add("task", priority);

    let priorityText = "Prioridad normal";

    if (priority === "urgent") {
        priorityText = "Prioridad alta";
    } else if (priority === "easy") {
        priorityText = "Tarea rápida";
    }

    newTask.innerHTML = `
        <div>
            <strong>${taskText}</strong>
            <span>${priorityText}</span>
        </div>
        <button class="complete-btn">Completar</button>
    `;

    taskList.appendChild(newTask);
    taskInput.value = "";

    activateCompleteButtons();
});

activateCompleteButtons();