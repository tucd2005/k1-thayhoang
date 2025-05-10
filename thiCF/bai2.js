const todoInput = document.getElementById("todoInput")
const actionButton = document.getElementById("actionButton")
const errorMessage = document.getElementById("errorMessage")
const todoList = document.getElementById("todoList")

let todoEditing = null 

function generateRandomID(length){
    let characters = "qwertyuioasdklt;lkjdhsgfadszvxbcnvbm,./'[0p897867435412wqemkluiutyrtertedgfgnhmjgkylit6u5yqtwgdhfmgh,j.kp\{L:K?Lj.jyrhterwq8ZAXscDRGTHYjfukilUSYA"

    let id = 'todo-' 
    for (let i = 0; i<length; i++){
        let index = Math.floor(Math.random()*characters.length)
        id += characters[index]
    }
    return id
}

function getData() {
    return JSON.parse(localStorage.getItem('todos')|| "[]")
}

function handleLocal(todo){
    localStorage.setItem('todos', JSON.stringify(todo))
}

let todoUI = getData()

function handleErrorMessage(text){
    errorMessage.style.display = "block"
    errorMessage.innerHTML = text
}

function reset() {
    todoInput.value = ""
    errorMessage.style.display = "none"
    actionButton.innerHTML = "Thêm"
}

function renderUI(dataList){
    if(!Array.isArray(dataList)){
        handleErrorMessage("sai dinh dang du lieu")
        return
    }
    if(dataList.length === 0){
        todoList.innerHTML = "Khong co du lieu"
        return
    }
    todoList.innerHTML = ``
    dataList.forEach((todo) => {
        const li = document.createElement('li')
        li.className = `todo-item ${todo.completed ? 'completed': ''}` 
        li.innerHTML = `
        <span class="status ${todo.completed ? 'completed' : 'active'}">${todo.completed ? 'hoan thanh' : 'chua hoan thanh'} </span>
        <span class="task-id">${todo.id}</span>
        <span class="task-text">${todo.title}</span>
        <button class="delete" onclick="deleteTodo('${todo.id}')">XOa</button>
        <button class="edit" onclick="editTodo('${todo.id}')">Sua</button>
    `
    todoList.appendChild(li)
    })
}

function addTodo() {
    todoUI = getData()
    const value = todoInput.value.trim()
    if(value === ""){
        handleErrorMessage("vui long nhap du lieu")
        return
    } 
    if (todoEditing){
        const todoElement = todoUI.find((todo) => todo.id === todoEditing.id)
        if(todoElement) {
            todoElement.title = value
            handleLocal(todoUI)
            reset()
            renderUI(getData())
        }
    }

    else {
        const todo = {
            id: generateRandomID(3),
            title: value,
            completed: false
        }
        handleLocal([...todoUI, todo])
        reset()
        renderUI(getData())
    }

    
}

function deleteTodo (idTodo) {
    todoUI = getData()
    todoUI = todoUI.filter((todo)=>todo.id !== idTodo)
    handleLocal([...todoUI])
    renderUI(getData())
}

function editTodo(idTodo){
    todoInput.focus()
    todoUI = getData()
    const todoEdit = todoUI.find((todo) => todo.id === idTodo)
    
    if(todoEdit){
        actionButton.innerHTML = "SUa 000"
        todoInput.value = todoEdit.title
        todoEditing = todoEdit
    }
}

function toggleTodo(idToggle){
    todoUI = getData()
    const todoToggle = todoUI.find((todo) => todo.id === idToggle)
    todoToggle.completed = !todoToggle.completed
    handleLocal(todoUI)
    renderUI(getData())
}

renderUI(getData())
