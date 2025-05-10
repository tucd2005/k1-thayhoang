const todoInput = document.getElementById("todoInput")
const actionButton = document.getElementById("actionButton")
const errorMessage = document.getElementById("errorMessage")
const todoList = document.getElementById("todoList")

function random (length) {
    let characters = 
}

function getData(){
    return JSON.parse(localStorage.getItem('todos') || '[]')
}
function handleLoca(todo){
    localStorage.setItem("todos", JSON.stringify(todo))
}

let todoUI = getData()

function handleError(){
    errorMessage.style.display = "block"
    errorMessage.innerHTML = text
}

function reset(){
    todoInput.value = ""
    actionButton.style.display = "none"
    actionButton.innerHTML = "them"
}

function renderUI (dataList) {
    if(!Array.isArray(dataList)){
        handleError("sai dinh dang")
        return
    }
    if (dataList.length === 0){
        handleError("khong co du lieu")
        return
    }
    todoList.innerHTML = ``
    dataList.forEach((todo)=> {
        const li = document.createElement('li')
        li.innerHTML = ``
        todoList.appendChild(li)
    })
}

function addTodo() {
    todoUI = getData()
    const value = todoInput.value.trim()
    if(value === ""){
        handleError("vui long nhap")
        return
    }
    const data = {
        id: 
    }
}