
loginBtn.addEventListener("click",(e) =>{
    console.log(loginBtn)
    e.preventDefault();
    postFetch('/user/login' , { email: email.value, password: password.value },loginSignupHandler) 
})
