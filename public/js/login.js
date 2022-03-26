
loginBtn.addEventListener("click",(e) =>{
    e.preventDefault();
    postFetch('/login' , { email: email.value, password: password.value },loginSignupHandler) 
})
