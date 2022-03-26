window.addEventListener('load', () => {
    // get all posts
    getFetch('/posts' ,(data) =>{
        console.log(data);
    })
    // to get decoded data and display username in header
    getFetch('/cookie', (data) => {
        getFetch(`/${data.id}` , (allData) => {
            const usernameDiv = document.querySelector(".username-div")
            const a = document.createElement('a');
            a.href = `/${data.id}/profile`;
            a.textContent = allData.name;
            usernameDiv.appendChild(a);
        })
    });
});