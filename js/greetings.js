const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input")
const greeting = document.querySelector("#greeting")
const login = document.querySelector("#btn-login")
const logoutForm = document.querySelector("#logout-form")

const HIDDEN_CLASSNAME = "hidden"
const USERNAME = "username"

function callUsername (savedUser) {
    greeting.textContent = `Hello ${savedUser}`
    loginForm.classList.toggle(HIDDEN_CLASSNAME)
}

function logoutHandler (event) {
    event.preventDefault()
    localStorage.removeItem(USERNAME)
    greeting.classList.add(HIDDEN_CLASSNAME)
    logoutForm.classList.add(HIDDEN_CLASSNAME)
}




function loginHandler (event) {
    event.preventDefault()
    let username = loginInput.value
    loginInput.value = ""
    saveUserLogin(username)
    callUsername(username)
}
function saveUserLogin (user) {
    localStorage.setItem(USERNAME, user)    
}

const savedUsername = localStorage.getItem(USERNAME)
    if( savedUsername == null) {
        loginForm.classList.remove(HIDDEN_CLASSNAME) 
        logoutForm.classList.add(HIDDEN_CLASSNAME)
        loginForm.addEventListener("submit", loginHandler)
    }
    else {
       callUsername(savedUsername)
       logoutForm.addEventListener("submit", logoutHandler)
       logoutForm.classList.remove(HIDDEN_CLASSNAME) 
    }

/*
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
        logout.classList.add(HIDDEN_CLASSNAME)
        loginForm.addEventListener("submit", loginHandler)
    }  else{
        callUsername(savedUsername)
        logout.classList.remove(HIDDEN_CLASSNAME)
        //logoutHandler(savedUsername)
        //logout.addEventListener('submit', logoutHandler)
        
    } 

// function logoutHandler(event) {
//      event.preventDefault()
//     logout.classList.remove(HIDDEN_CLASSNAME)
//     localStorage.removeItem(USERNAME, savedUsername)    
        
// }

*/