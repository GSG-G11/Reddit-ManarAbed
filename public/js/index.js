const email = document.querySelector("#email")
const password = document.querySelector("#password");
const loginBtn = document.querySelector("#login-btn");

loginBtn.addEventListener("click",(e) =>{
    e.preventDefault();
    postFetch('/user/login' , { email: email.value, password: password.value }); 
})
