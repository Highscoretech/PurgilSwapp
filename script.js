let loginEl = document.getElementById("home")
let create = document.getElementById("create")
let createEl = document.getElementById("create-el")
let login = document.getElementById("login")

create.addEventListener("click", (()=>{
    loginEl.style.display = "none"
    createEl.style.display = "block"

}))

login.addEventListener("click", (()=>{
    createEl.style.display = "none"
    loginEl.style.display = "block"

}))


