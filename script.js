function AddTask() {
    const inputBox = document.getElementById("input-box");
    const listContainer = document.getElementById("list-container");

    if (inputBox.value.trim() === '') {
        alert("Please enter a task.");
        return;
    }
    const li = document.createElement("li");
    const taskText = document.createElement("span");
    taskText.textContent = inputBox.value;
    li.appendChild(taskText);


    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "remove-btn";
    deleteButton.addEventListener("click", function() {
        listContainer.removeChild(li); v
    });
    li.appendChild(deleteButton);
    listContainer.appendChild(li);
    inputBox.value = '';  

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "task-checkbox"; // Add a class for styling
    checkbox.addEventListener("change", function() {
        if (checkbox.checked) {
            li.classList.add("completed");
        } else {
            li.classList.remove("completed");
        }
    });
    li.appendChild(checkbox);
}
