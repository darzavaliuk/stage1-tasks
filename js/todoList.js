// let timeoutArea = document
//     .getElementById("wrapper")
//     .addEventListener("mouseover", isHover);

const taskInput = document.querySelector(".task-input input"),
    filters = document.querySelectorAll(".filters span"),
    clearAll = document.querySelector(".clear-btn"),
    taskBox = document.querySelector(".task-box");

let editId,
    isEditTask = false,
    todos = JSON.parse(localStorage.getItem("todo-list"));

if (document.querySelector(".label") != null) {
    document.querySelector(".label").addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        console.log("kdhsf");
    });
}

filters.forEach((btn) => {
    btn.addEventListener("click", () => {
        document.querySelector("span.activ").classList.remove("activ");
        btn.classList.add("activ");
        showTodo(btn.id);
    });
});

function showMenu(selectedTask) {
    let menuDiv = selectedTask.parentElement.lastElementChild;
    menuDiv.classList.add("show");
    document.addEventListener("click", (e) => {
        if (e.target.tagName != "I" || e.target != selectedTask) {
            menuDiv.classList.remove("show");
        }
    });
}

window.updateStatus = updateStatus;

function updateStatus(selectedTask) {
    let taskName = selectedTask.parentElement.lastElementChild;
    if (selectedTask.checked) {
        taskName.classList.add("checked");
        todos[selectedTask.id].status = "completed";
    } else {
        taskName.classList.remove("checked");
        todos[selectedTask.id].status = "pending";
    }
    localStorage.setItem("todo-list", JSON.stringify(todos));
}

window.editTask = editTask;

function editTask(taskId, textName) {
    editId = taskId;
    isEditTask = true;
    taskInput.value = textName;
    taskInput.focus();
    taskInput.classList.add("activ");
}

window.deleteTask = deleteTask;

function deleteTask(deleteId, filter) {
    isEditTask = false;
    todos.splice(deleteId, 1);
    localStorage.setItem("todo-list", JSON.stringify(todos));
    showTodo(filter);
}

function showTodo(filter) {
    let liTag = "";
    if (todos) {
        todos.forEach((todo, id) => {
            let completed = todo.status == "completed" ? "checked" : "";
            if (filter == todo.status || filter == "all") {
                liTag += `<li class="task">
                            <label class="label" for="${id}">
                                <input onclick="updateStatus(this)" type="checkbox" id="${id}" ${completed}>
                                <p class="${completed}">${todo.name}</p>
                            </label>
                            <div class="soluti">
                                <i onclick="showMenu(this)" class="uil uil-ellipsis-h"></i>
                                <ul class="task-menu">
                                    <li onclick='editTask(${id}, "${todo.name}")'><i class="uil uil-pen"></i>Edit</li>
                                    <li onclick='deleteTask(${id}, "${filter}")'><i class="uil uil-trash"></i>Delete</li>
                                </ul>
                            </div>
                        </li>`;
            }
        });
    }
    taskBox.innerHTML = liTag || `<span>You don't have any task here</span>`;
    let checkTask = taskBox.querySelectorAll(".task");
    !checkTask.length
        ? clearAll.classList.remove("activ")
        : clearAll.classList.add("activ");
    taskBox.offsetHeight >= 300
        ? taskBox.classList.add("overflow")
        : taskBox.classList.remove("overflow");
}
showTodo("all");

window.showMenu = showMenu;

clearAll.addEventListener("click", () => {
    isEditTask = false;
    todos.splice(0, todos.length);
    localStorage.setItem("todo-list", JSON.stringify(todos));
    showTodo();
});

taskInput.addEventListener("keyup", (e) => {
    let userTask = taskInput.value.trim();
    if (e.key == "Enter" && userTask) {
        if (!isEditTask) {
            todos = !todos ? [] : todos;
            let taskInfo = { name: userTask, status: "pending" };
            todos.push(taskInfo);
        } else {
            isEditTask = false;
            todos[editId].name = userTask;
        }
        taskInput.value = "";
        localStorage.setItem("todo-list", JSON.stringify(todos));
        showTodo(document.querySelector("span.activ").id);
    }
});
