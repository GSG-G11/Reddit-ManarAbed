const signup_Btn = document.querySelector('.signUp')
const login_Btn = document.querySelector('.signIn')
const logout_Btn = document.querySelector('.logout')
const createPost = document.querySelector('#createPost')

let userCom;
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
        if(data.message === 'Unauthorized'){
            hideLogout()
           
        }else{ 
            showLogout()
        }
    });
    const showLogout = () => {
        logout_Btn.style.display = 'inline-block';
        signup_Btn.style.display = 'none';
        login_Btn.style.display = 'none';
    };
    const hideLogout = () => {
        logout_Btn.style.display = 'none';
        signup_Btn.style.display = 'inline-block';
        login_Btn.style.display = 'inline-block';
    };
    //console.log(PostDiv);
});

