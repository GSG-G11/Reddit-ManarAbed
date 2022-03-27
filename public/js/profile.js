const userId = window.location.href.split('/')[3];

getFetch(`/${userId}` , getUserInfo);

const saveBtn = document.querySelector('#save-post');
let title = document.querySelector('#title')
let content = document.querySelector('#myTextarea')
let imgUrl = document.querySelector('#imgUrl')
const userid = window.location.href.split('/')[4];

saveBtn.addEventListener('click',(e) =>{
    e.preventDefault();
    title.value = ''
    content.value= ''
    imgUrl.value= ''

    const data = {
        title: title.value,
        content: content.value,
        img_url: imgUrl.value,
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
})
