signBtn.addEventListener("click",(e) =>{
    e.preventDefault();
    postFetch('/signup' , { name: username.value, email: email.value, password: password.value },loginSignupHandler) 
})
