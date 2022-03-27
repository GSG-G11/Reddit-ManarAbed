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

const getAllPosts = (data) => {
  data.forEach((post)=>{
    const PostDiv = document.querySelector(".post-div")

    const h3 = document.createElement('h4');
    h3.textContent = post.name;

    const h4 = document.createElement('h3');
    h4.textContent = post.title;
  
    const p = document.createElement('p');
    p.textContent = post.content;

    const img = document.createElement('img');
    img.src = post.img_url;

    const section = document.createElement('section');
    section.appendChild(img);
    section.appendChild(h4);
    section.appendChild(h3);
    section.appendChild(p);

    PostDiv.appendChild(section);
  })
}

const getUserInfo = (data) =>{
    const PostDiv = document.querySelector("#userPosts")
    const username = document.querySelector("#username");
    const addPostA = document.querySelector("#addPostA");

    addPostA.href = `/posts/${data[0].id}/add`
    username.textContent = data[0].name;

    console.log(data)

  if(data[0].title !== null && data[0].content !== null && data[0].img_url !== null){
    data.forEach((userPost) =>{
        const h3 = document.createElement('h3');
        h3.textContent = userPost.title;
        
        const p = document.createElement('p');
        p.textContent = userPost.content;
    
        const img = document.createElement('img');
        img.src = userPost.img_url;
    
        const section = document.createElement('section');
        section.appendChild(img);
        section.appendChild(h3);
        section.appendChild(p);
    
        PostDiv.appendChild(section);
    })
    }else{
        const pNoPost = document.createElement('p');
        pNoPost.textContent = `hmm... u/${data[0].name} hasn't posted anything`;
        PostDiv.appendChild(pNoPost);
    }
}
