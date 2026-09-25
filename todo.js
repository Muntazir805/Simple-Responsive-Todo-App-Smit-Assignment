var input = document.getElementById("input")
var display = document.getElementById("display")

var add = document.getElementById("add")
var edit = document.getElementById("edit")
var deleteAll = document.getElementById("deleteAll")
var search = document.getElementById("search")

var editTodo = null
var todoList = []

input.addEventListener("keypress", function (e) {
    if (e.key == "Enter" && editTodo == null && input.value.trim() != "") {
        todo()
    }
    else if (e.key == "Enter" && editTodo != null && input.value.trim() != "") {
        updateTodo()
    }
})

input.addEventListener("input", function () {
    if (input.value.trim() != "") {
        input.style.border = "1px solid #d1d5db"
    }
    else {
        input.style.border = "1px solid #ef4444"
    }
})

function todo() {
    input.value = input.value.trim()

    if (input.value == "") {
        input.style.border = "1px solid #ef4444"
        return
    }

    todoList.push(input.value)
    saveTodos()
    renderTodos()

    input.value = ""
    input.style.border = "1px solid #d1d5db"
}

function renderTodos() {
    display.innerHTML = ""

    for (var i = 0; i < todoList.length; i++) {
        display.innerHTML += `
            <li>
                <b>${todoList[i]}</b>
                <button onclick="editBtn(this)">Edit</button>
                <button onclick="DeleteBtn(this)">Delete</button>
            </li>
        `
    }

    filterTodos()
}

function DeleteBtn(event) {
    var taskText = event.parentNode.querySelector("b").innerText
    var index = todoList.indexOf(taskText)

    if (index != -1) {
        todoList.splice(index, 1)
    }

    saveTodos()
    renderTodos()
}

function editBtn(event) {
    edit.style.display = "inline"
    add.style.display = "none"

    input.value = event.parentNode.querySelector("b").innerText
    editTodo = event.parentNode
    input.focus()
}

function updateTodo() {
    input.value = input.value.trim()

    if (input.value == "") {
        input.style.border = "1px solid #ef4444"
        return
    }

    var oldValue = editTodo.querySelector("b").innerText
    var index = todoList.indexOf(oldValue)

    if (index != -1) {
        todoList[index] = input.value
    }

    editTodo.querySelector("b").innerText = input.value

    saveTodos()

    add.style.display = "inline"
    edit.style.display = "none"
    input.value = ""
    editTodo = null
}

deleteAll.addEventListener("click", function () {
    todoList = []
    saveTodos()
    renderTodos()
})

search.addEventListener("input", function () {
    filterTodos()
})

function filterTodos() {
    var listItems = display.querySelectorAll("li")
    var searchValue = search.value.toLowerCase().trim()

    for (var i = 0; i < listItems.length; i++) {
        var taskText = listItems[i].querySelector("b").innerText.toLowerCase()

        if (taskText.indexOf(searchValue) != -1) {
            listItems[i].style.display = "flex"
        }
        else {
            listItems[i].style.display = "none"
        }
    }
}

function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todoList))
}

function getdb() {
    var currentUser = document.getElementById("currentUser")
    currentUser.innerText = `Welcome ${localStorage.getItem("NAME")}`

    todoList = JSON.parse(localStorage.getItem("todos")) || []
    renderTodos()
}

getdb()

function logout() {
    localStorage.removeItem("NAME")
    localStorage.removeItem("login")
    localStorage.removeItem("email")
    localStorage.removeItem("password")

    window.location.href = "./index.html"
}
