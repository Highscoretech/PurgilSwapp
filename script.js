let loginEl = document.getElementById("home")
let create = document.getElementById("create")
let createEl = document.getElementById("create-el")
let login = document.getElementById("login")

createEl.style.display = "none"

create.addEventListener("click", (()=>{
    loginEl.style.display = "none"
    createEl.style.display = "block"

}))

login.addEventListener("click", (()=>{
    createEl.style.display = "none"
    loginEl.style.display = "block"

}))


// pre-loading
let mobile = document.getElementById("mobile")

mobile.innerHTML = `<div class="loader">
    <span class="loader__element"></span>
    <span class="loader__element"></span>
    <span class="loader__element"></span>
</div>`