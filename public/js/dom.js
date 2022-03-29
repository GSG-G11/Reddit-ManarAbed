const email = document.querySelector("#email")
const password = document.querySelector("#password");
const username = document.querySelector("#name");
const loginBtn = document.querySelector("#login-btn");
const signBtn = document.querySelector("#signup-btn");
const signform = document.querySelector(".sign-in-form");
let redAddPostLink;


const loginSignupHandler = (errorList) =>{
  const errorsListDiv = document.querySelector('#errorsList');
  errorsListDiv.textContent = '';

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

// const createEle = (varName, elemName, classname) => {
//   document.createElement(elemName);
//   varName.className = classname
// }


const getAllPosts = (data) => {
  data.forEach((post , i) => {
    if(data[i].title !== ''){
      const PostDiv = document.querySelector(".post-div")

      const createPost = document.querySelector('#createPost');
      createPost.href = `/posts/${post.id}/add`


      const userimg = document.createElement('img');
      userimg.src = 'images/communityIcon_9jufwkeep7f41.jpeg';
      userimg.className = 'placeholder-img';

      const userinfo = document.createElement('div');
      userinfo.className = 'user-info';

      const comments = document.createElement('div');
      comments.className = 'comments';

      const allComments = document.createElement('div');
      allComments.className = 'allComments';

      comments.addEventListener('click', () =>{
        fetch('/cookie').then((data)=> data.json()).then( async (userdata)  => {
          if(userdata.message === 'Unauthorized'){
            // alert('you must be logged in firstly!')
            Swal.fire({
              icon: 'question',
              title: 'Oops...',
              text: 'Something went wrong! Maybe You are not logged in',
              footer: '<a href="/login"> Why You are not login? </a>'
            })
          }else{
            const { value: text } = await Swal.fire({
              input: 'textarea',
              inputLabel: 'Comment',
              inputPlaceholder: 'Type your comment here...',
              inputAttributes: {
                'aria-label': 'Type your comment here'
              },
              showCancelButton: true
            });
            if (text) {
              const data = {
                content: text
              }
              postFetch(`/posts/comments/${post.id}/${userdata.id}` , data , (comment)=>{
                const usercomment =  document.createElement('div');

                  const comCont =  document.createElement('p');
                  comCont.textContent = comment.data.content;
                  allComments.appendChild(comCont);

                  const username = document.createElement('p');
                  username.textContent = `Posted by ${document.querySelector('.username-div').children[0].innerHTML}`;

                  usercomment.appendChild(username);
                  usercomment.appendChild(comCont);
                  
                  allComments.appendChild(usercomment);

                  Swal.fire('Your comment was added Succssfully!')
              })
            };
          }
        })
      });
      
      const commentImg = document.createElement('img');
      commentImg.className = 'commentImg';
      commentImg.src = 'images/icons8-comments-100.png';

      const spancomm = document.createElement('span');
      spancomm.textContent = 'submit comment'

      const h4 = document.createElement('h4');
      h4.innerHTML = `<span class="post-span">Posted by </span> ${post.name}`;
  
      const h3 = document.createElement('h3');
      h3.textContent = post.title;
    
      const p = document.createElement('p');
      p.textContent = post.content;
      p.className = 'post-content';
  
      const img = document.createElement('img');
      img.src = post.img_url;
      img.className = 'postImg';

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
        fetch('/cookie').then((data)=> data.json()).then((data)  => {
          if(data.message === 'Unauthorized'){
            // alert('you must be logged in firstly!')
            Swal.fire({
              icon: 'question',
              title: 'Oops...',
              text: 'Something went wrong! Maybe You are not logged in',
              footer: '<a href="/login"> Why You are not login? </a>'
            })
          }else{
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
          }
        })
      });

      downarrow.addEventListener('click' ,(e)=>{
        fetch('/cookie').then((data)=> data.json()).then((data)  => {
          if(data.message === 'Unauthorized'){

          }else{
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
          }
        }).catch((err) => console.log(err))
      })

      fetch(`/posts/comments/${post.id}`)
      .then((data) => data.json())
      .then(data => {
        data.forEach((comment) =>{
          const hr =  document.createElement('hr');
          const usercomment =  document.createElement('div');

          const username = document.createElement('p');
          username.innerHTML = `<span style="color:#565656; font-size:14px">Posted by</span> 
          <span style="color:#FF2F17; font-size:16px">${document.querySelector('.username-div').children[0].innerHTML}</span>`;

          const comCont =  document.createElement('p');
          comCont.textContent = comment.content;

          usercomment.appendChild(username);
          usercomment.appendChild(comCont);

          allComments.appendChild(hr);
          allComments.appendChild(usercomment);
          //console.log(comment);
        })
      })
      .catch((err) => console.log(err))

      section.appendChild(arrowVote);
      section.appendChild(PostInfo);

      PostInfo.appendChild(userinfo);
      PostInfo.appendChild(h3);
      PostInfo.appendChild(p);
      PostInfo.appendChild(img);
      PostInfo.appendChild(comments);
      PostInfo.appendChild(allComments);

      userinfo.appendChild(userimg);
      userinfo.appendChild(h4);

      comments.appendChild(commentImg);
      comments.appendChild(spancomm);

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
  redAddPostLink = `/posts/${data[0].id}/add`;
  console.log(redAddPostLink);
  
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
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire(
              'Deleted!',
              'Your Post has been deleted.',
              'success'
            )
          }
          fetch(`/posts/delete/${data[i].postid}`, {method: 'DELETE'}).then(() => section.remove())
          .catch(err => console.log(err));
        })
        
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


