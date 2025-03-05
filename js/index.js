let input = document.getElementById("input");

function getTODOS () {
    const todoLi = document.createElement("li");
    todoLi.textContent = input.value;
    input.value = "";
    document.getElementById("todos-list").appendChild(todoLi);
}