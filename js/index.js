const input = document.getElementById("input");
const formButton = document.getElementById("todos-btn");

formButton.addEventListener("click", function() {
    const todoLi = document.createElement("li");
    todoLi.textContent = input.textContent;
    input.textContent = "";
    document.getElementById("todos").appendChild(todoLi);
});