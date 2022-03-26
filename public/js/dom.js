const email = document.querySelector("#email")
const password = document.querySelector("#password");
const username = document.querySelector("#name");
const loginBtn = document.querySelector("#login-btn");
const signBtn = document.querySelector("#signup-btn");
const signform = document.querySelector(".sign-in-form");

const loginSignupHandler = (errorList) =>{
  const errorsListDiv = document.querySelector('#errorsList');
  errorsListDiv.textContent = '';

  console.log(errorList)
  if(!errorList.message) location.href = '/';
  if(errorList.message){
    const hr = document.createElement('hr');
    errorsListDiv.appendChild(hr);

    if(errorList.message.details){
      errorList.message.details.forEach((error)=>{
        const p = document.createElement('p');
        p.textContent = error.message;
        errorsListDiv.appendChild(p);
     });
    }else{
      const p = document.createElement('p');
      p.textContent = errorList.message;
      errorsListDiv.appendChild(p);
    }
  }


};
  