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

      const userimg = document.createElement('img');
      userimg.src = 'images/communityIcon_9jufwkeep7f41.jpeg';
      userimg.className = 'placeholder-img';

      const userinfo = document.createElement('div');
      userinfo.className = 'user-info';

      const h4 = document.createElement('h4');
      h4.innerHTML = `<span class="post-span">Posted by </span> ${post.name}`;
  
      const h3 = document.createElement('h3');
      h3.textContent = post.title;
    
      const p = document.createElement('p');
      p.textContent = post.content;
      p.className = 'post-content';
  
      const img = document.createElement('img');
      img.src = post.img_url;

      const arrowVote = document.createElement('div');
      arrowVote.className = 'arrowVotes';

      const PostInfo = document.createElement('div');
      PostInfo.className = 'PostInfo';

      const uparrow = document.createElement('img');
      uparrow.className = 'img-uparrow';
      uparrow.src = 'images/icons8-up-arrow-100.png';

      const downarrow = document.createElement('img');
      downarrow.className = 'img-downarrow';
      downarrow.src = 'images/icons8-down-arrow-100.png';

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
      userinfo.appendChild(userimg);
      userinfo.appendChild(h4);

      PostInfo.appendChild(userinfo);
      PostInfo.appendChild(h3);
      PostInfo.appendChild(p);
      PostInfo.appendChild(img);


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
      section.className = 'post-sec'

      const h3 = document.createElement('h3');
      h3.textContent = userPost.title;

      const deleteBtn = document.createElement('img');
      deleteBtn.src = '../images/icons8-delete-100.png';
      deleteBtn.className = 'deleteImg';

      const p = document.createElement('p');
      p.textContent = userPost.content;
      p.className = 'post-content';

      const arrowVote = document.createElement('div');
      arrowVote.className = 'arrowVotes';

      const PostInfo = document.createElement('div');
      PostInfo.className = 'PostInfo';

      const uparrow = document.createElement('img');
      uparrow.className = 'img-uparrow';
      uparrow.src = '../images/icons8-up-arrow-100.png';

      const downarrow = document.createElement('img');
      downarrow.className = 'img-downarrow';
      downarrow.src = '../images/icons8-down-arrow-100.png';

      const voteNum = document.createElement('p');
     voteNum.textContent = userPost.votes_num;

      PostInfo.appendChild(h3);
      PostInfo.appendChild(deleteBtn);
      PostInfo.appendChild(p);

      
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
      });

      if(data[i].img_url !== ""){
        const img = document.createElement('img');
        img.src = userPost.img_url;
        PostInfo.appendChild(img);
      }

      section.appendChild(arrowVote);
      section.appendChild(PostInfo);

      arrowVote.appendChild(uparrow);
      arrowVote.appendChild(voteNum);
      arrowVote.appendChild(downarrow);

      PostDiv.appendChild(section);
    }
  })
  }else{
      const pNoPost = document.createElement('p');
      pNoPost.textContent = `hmm... u/${data[0].name} hasn't posted anything`;
      pNoPost.className = 'nopost'
      PostDiv.appendChild(pNoPost);
  }
}
