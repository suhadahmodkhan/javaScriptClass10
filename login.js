const emailInput = document.getElementById("email")
const passwordInput = document.getElementById("password")
const loginButton = document.getElementById("login-button")

loginButton.addEventListener("click" , function () {
    console.log(emailInput.value)
    if ( emailInput.value == "creationit2020@gmail.com" || passwordInput.value == "123456" ){ 
        window.location.href = "blog.html"
    }
    else {
        console.log("password doesn't match")
    }
})