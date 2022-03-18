const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input")
const greeting = document.querySelector("#greeting")

const HIDDEN_CLASSNAME = "hidden"
const USERNAME = "username"

function loginHandler(event) {
    event.preventDefault();
    const username = loginInput.value
    localStorage.setItem(USERNAME, username)   
    callUsername(username)
}

function callUsername(username) {
    greeting.textContent = `HELLO ${username}`
    loginForm.classList.toggle(HIDDEN_CLASSNAME)
}


const savedUsername = localStorage.getItem(USERNAME)
    if(savedUsername === null) {
        loginForm.classList.remove(HIDDEN_CLASSNAME)
        loginForm.addEventListener("submit", loginHandler)
    }  else{
        callUsername(savedUsername)
    } 
