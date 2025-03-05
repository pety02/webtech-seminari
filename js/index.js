let input = document.getElementById("input");
let btn = document.getElementById("todos-btn");

btn.addEventListener("click", function  () {
    const todoLi = document.createElement("li");
    todoLi.textContent = input.value;
    input.value = "";
    document.getElementById("todos-list").appendChild(todoLi);
});


const input2 = document.getElementById("input-countries");
const countries = ["Bulgaria", "England", "USA", "Italy", "Norway"];
input2.addEventListener("keyup", function() {
    if(input2.value.length >= 3) {
        const match = countries.find(c => c.toLowerCase().includes(input2.value.toLowerCase()));
        if (match) {
            input2.value = match; 
        }
    }
});