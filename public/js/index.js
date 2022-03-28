window.addEventListener('load', () => {
    // get all posts
    getFetch('/posts' , getAllPosts)

    // to get decoded data and display username in header
    getFetch('/cookie', (data) => {
        getFetch(`/${data.id}` , (allData) => {
            const usernameDiv = document.querySelector(".username-div");

            const a = document.createElement('a');
            a.href = `/${data.id}/profile`;
            a.textContent = allData[0].name;
            usernameDiv.appendChild(a);
        })
    });
});