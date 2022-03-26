const userId = window.location.href.split('/')[3];

getFetch(`/${userId}` , (data)=>{
    const username = document.querySelector("#username");
    username.textContent = data.name;
}) 