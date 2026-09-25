// Input fields
var username = document.getElementById("username")
var email = document.getElementById("email")
var password = document.getElementById("password")

// Button
var btn = document.getElementById("btn")

// Show user data
var data = document.getElementById("data")

function SetItem() {
    if (
        username.value.trim() == "" ||
        email.value.trim() == "" ||
        password.value.trim() == ""
    ) {
        alert("Please fill all fields.")
        return
    }

    localStorage.setItem("name", username.value.trim())
    localStorage.setItem("login", true)
    localStorage.setItem("email", email.value.trim())
    localStorage.setItem("password", password.value)

    username.value = ""
    email.value = ""
    password.value = ""

    getDATA()
}

function getDATA() {
    var getname = localStorage.getItem("name")
    var getemail = localStorage.getItem("email")
    var getpassword = localStorage.getItem("password")

    var checkLogin = localStorage.getItem("login")

    if (checkLogin == "true") {
        username.style.display = "none"
        email.style.display = "none"
        password.style.display = "none"
        btn.innerText = "Log out"
        btn.setAttribute("onclick", "logout()")

        data.innerHTML = `
            <h1>Welcome, ${getname}</h1>
            <h1>Email: ${getemail}</h1>
        `

        window.location.href = "./todo.html"
    } else {
        username.style.display = "block"
        email.style.display = "block"
        password.style.display = "block"

        data.innerHTML = ""
    }
}

function logout() {
    localStorage.removeItem("name")
    localStorage.removeItem("login")
    localStorage.removeItem("email")
    localStorage.removeItem("password")

    btn.innerText = "Log in"
    btn.setAttribute("onclick", "SetItem()")

    getDATA()
}

getDATA()
