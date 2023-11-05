const logregBox = document.querySelector('.logreg-box')
const loginLink = document.querySelector('.login-link')
const registerLink = document.querySelector('.register-link')
let emailInput = document.getElementById("emailInput")
let passwordInput = document.getElementById("passwordInput")
let button = document.querySelector('.btn')
let formNotice = document.getElementById("formNotice")
let ariaHidden = document.getElementById("ariaHidden")

registerLink.addEventListener('click', () => {
    logregBox.classList.add('active')
})

loginLink.addEventListener('click', () => {
    logregBox.classList.remove('active')
})

button.addEventListener("click", function(){
    if(emailInput.value === ""){
        formNotice.innerText = "Please enter your email address"
    }else if(passwordInput.value === ""){
        formNotice.innerText = "Please enter password"
    }else{
        ariaHidden.classList.remove("aria-hidden")
        ariaHidden.classList.add("reveal")
        setTimeout(function(){
            ariaHidden.style.display = "none";
        }, 3000)
    }
    
})



