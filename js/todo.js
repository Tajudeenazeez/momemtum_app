const todoForm = document.querySelector("#todoForm")
const todoInput = document.querySelector("#todoInput")
const todoList = document.querySelector("#todoList")
const SAVE_INPUT = "saveInput"
const TODOS = "todos"

let todos = []

function saveTodos () {
    localStorage.setItem(TODOS, JSON.stringify(todos))
}

function handleDeleteTodo (event) {
    let li = event.target.parentNode
    li.remove()
}

function paintSaveInput (newtodo) {
    let li = document.createElement("li")
    let span = document.createElement("span")
    let button = document.createElement("button")
    span.textContent = newtodo
    button.textContent = "❌"
    button.addEventListener("click", handleDeleteTodo)
    li.appendChild(span)
    li.appendChild(button)
    todoList.appendChild(li)

}

function handleToDoFormSubmit (event) {
    event.preventDefault()
    let saveInput = todoInput.value
    //localStorage.setItem(SAVE_INPUT, JSON.stringify(saveInput))
    todoInput.value = ""
    todos.push(saveInput)
    paintSaveInput(saveInput)   
    saveTodos()
}

todoForm.addEventListener("submit", handleToDoFormSubmit)

const userTodoItem = localStorage.getItem(TODOS)
    if(userTodoItem !== null) {
        let parsedtodo = JSON.parse(userTodoItem)
        todos = parsedtodo
        console.log(todos)
        parsedtodo.forEach(paintSaveInput)

    }