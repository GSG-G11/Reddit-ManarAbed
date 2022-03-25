signform.addEventListener("submit",(e) =>{
    console.log(signBtn)
    e.preventDefault();
    postFetch('/user/signup' , { name: username.value, email: email.value, password: password.value },loginSignupHandler) 
})
