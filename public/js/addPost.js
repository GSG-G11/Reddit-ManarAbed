const saveBtn = document.querySelector('#save-post');

const userid = window.location.href.split('/')[4];

saveBtn.addEventListener('click', (e) =>{
    e.preventDefault();
    const title = document.querySelector('#title')
    const content = document.querySelector('#myTextarea')
    const imgUrl = document.querySelector('#imgUrl')

    const data = {
        title: title.value,
        content: content.value,
        img_url: imgUrl.value
    }
    postFetch(`/posts/${userid}` , data ,(backData) =>{
        console.log(backData);
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your Post has been added',
            showConfirmButton: false,
            timer: 1500
          })
    })
    title.value = ''
    content.value= ''
    imgUrl.value= ''
}
)
//createPost.addEventListener('click',handeladdPost)
