const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input")
const greeting = document.querySelector("#greeting")
const login = document.querySelector("#btn-login")
const logout = document.querySelector("#btn-logout")


const HIDDEN_CLASSNAME = "hidden"
const USERNAME = "username"

function callUsername (savedUser) {
    greeting.textContent = `Hello ${savedUser}`
    greeting.classList.remove(HIDDEN_CLASSNAME)
    loginForm.classList.add(HIDDEN_CLASSNAME)
}

function logoutHandler () {
    localStorage.removeItem(USERNAME)
    greeting.classList.add(HIDDEN_CLASSNAME)
    logout.classList.add(HIDDEN_CLASSNAME)
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    

}

function loginHandler (event) {
    event.preventDefault()
    let username = loginInput.value
    loginInput.value = ""
    loginForm.classList.add(HIDDEN_CLASSNAME)
    saveUserLogin(username)
    callUsername(username)
    logout.classList.remove(HIDDEN_CLASSNAME)
    logout.addEventListener("click", logoutHandler)

}
function saveUserLogin (user) {
    localStorage.setItem(USERNAME, user)    
}

const savedUsername = localStorage.getItem(USERNAME)
    if( savedUsername == null) {
        loginForm.classList.remove(HIDDEN_CLASSNAME) 
        loginForm.addEventListener("submit", loginHandler)
        //logout.classList.remove(HIDDEN_CLASSNAME)
    }
    else {
       callUsername(savedUsername)
       logout.classList.remove(HIDDEN_CLASSNAME)
       logout.addEventListener("click", logoutHandler)

    }
