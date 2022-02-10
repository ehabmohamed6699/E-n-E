let menuBtn = document.getElementById('menu');
let menuList = document.getElementById('drop-down');
let bodyElement = document.querySelector('body');
let searchBtn = document.getElementById('search');
let searchBox = document.getElementById('search-box');
let userBtn = document.getElementById('user');
let closeLoginBtn = document.getElementById('close-login');
let closeSignupBtn = document.getElementById('close-signup');
let userForm = document.getElementById('user-container-content');
let haveAcc = document.getElementById('have-acc');
let createAcc = document.getElementById('create-acc');
let loginForm = document.getElementById('login-form');
let signupForm = document.getElementById('signup-form');
let nextSlide = document.getElementById('next-slide');
let preSlide = document.getElementById('pre-slide');
let ads = document.getElementById('advertisement');

menuBtn.onclick = function(){
    if(menuList.style.display === 'flex' ){
        menuList.style.display = 'none';
        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    } else{
        menuList.style.display = 'flex'
        searchBox.style.display = 'none';
        menuBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    }
}

searchBtn.onclick = function(){
    if(searchBox.style.display === 'flex' ){
        searchBox.style.display = 'none';
    } else{
        searchBox.style.display = 'flex'
        menuList.style.display = 'none';
        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
}

userBtn.onclick = function(){
    userForm.style.display = 'flex';
}

closeLoginBtn.onclick = function(){
    userForm.style.display = 'none';
}

closeSignupBtn.onclick = function(){
    userForm.style.display = 'none';
}

createAcc.onclick = function(){
    loginForm.style.display = 'none'
    signupForm.style.display = 'block'
}

haveAcc.onclick = function(){
    loginForm.style.display = 'block'
    signupForm.style.display = 'none'
}

// nextSlide.onclick = function(){
//     ads.style.animationName = `s`;
//     ads.style.marginLeft += `-100%`
// }
// preSlide.onclick = function(){
//     ads.style.animationName = `s`;
//     ads.style.marginLeft += `100%`
// }


