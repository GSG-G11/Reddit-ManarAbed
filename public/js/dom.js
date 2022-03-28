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
  data.forEach((post , i) => {
    if(data[i].title !== ''){
      console.log(post);
      const PostDiv = document.querySelector(".post-div")

      const h4 = document.createElement('h4');
      h4.textContent = post.name;
  
      const h3 = document.createElement('h3');
      h3.textContent = post.title;
    
      const p = document.createElement('p');
      p.textContent = post.content;
  
      const img = document.createElement('img');
      img.src = post.img_url;

      const arrowVote = document.createElement('div');
      arrowVote.className = 'arrowVotes';

      const PostInfo = document.createElement('div');
      PostInfo.className = 'PostInfo';

      const uparrow = document.createElement('i');
      uparrow.className = 'bx bx-up-arrow-alt';



      const downarrow = document.createElement('i');
      downarrow.className = 'bx bx-down-arrow-alt';

      const voteNum = document.createElement('p');
      voteNum.textContent = post.votes_num;

      const section = document.createElement('section');
      section.className = 'post-sec';
      

      uparrow.addEventListener('click' ,(e)=>{
        const voteVal = {
          votes_num: post.votes_num += 1
        }
        fetch(`/posts/vote/${post.id}/${post.userid}`, { 
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(voteVal)
        }).then((data) => data.json()).then((data) => {
          voteNum.textContent = data.post[0].votes_num
        }).catch((err) => console.log(err))

      });

      downarrow.addEventListener('click' ,(e)=>{
        const voteVal = {
          votes_num: post.votes_num -= 1
        }
        fetch(`/posts/vote/${post.id}/${post.userid}`, { 
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(voteVal)
        }).then((data) => data.json()).then((data) => {
          voteNum.textContent = data.post[0].votes_num
        }).catch((err) => console.log(err))
      })

      PostInfo.appendChild(h4);
      PostInfo.appendChild(h3);
      PostInfo.appendChild(img);
      PostInfo.appendChild(p);

      section.appendChild(arrowVote);
      section.appendChild(PostInfo);

      arrowVote.appendChild(uparrow);
      arrowVote.appendChild(voteNum);
      arrowVote.appendChild(downarrow);
  
      PostDiv.appendChild(section);
    }
  })
}

const getUserInfo =  (data) =>{
  const PostDiv = document.querySelector("#userPosts")
  const username = document.querySelector("#username");
  const addPostA = document.querySelector("#addPostA");

  addPostA.href = `/posts/${data[0].id}/add`
  username.textContent = data[0].name;

  console.log(data)

if(data[0].title !== null && data[0].content !== null && data[0].img_url !== null){
  data.forEach((userPost , i) =>{

    if(data[i].title !== "" && data[i].content !== "") {
      const section = document.createElement('section');
      const h3 = document.createElement('h3');
      h3.textContent = userPost.title;

      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'delete';

      deleteBtn.addEventListener('click', () =>{
        fetch(`/posts/delete/${data[i].postid}`, {
            method: 'DELETE'
        }).then(() => {
            Swal.fire(
                'Warning?',
                'You Are Sure?',
                'question'
            );
        }).catch(err => console.log(err));

        section.remove();
      })

      const p = document.createElement('p');
      p.textContent = userPost.content;

      if(data[i].img_url !== ""){
        const img = document.createElement('img');
        img.src = userPost.img_url;
        section.appendChild(img);
      }

      section.appendChild(h3);
      section.appendChild(p);
      section.appendChild(deleteBtn);

      PostDiv.appendChild(section);
    }
  })
  }else{
      const pNoPost = document.createElement('p');
      pNoPost.textContent = `hmm... u/${data[0].name} hasn't posted anything`;
      PostDiv.appendChild(pNoPost);
  }
}
