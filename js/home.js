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
    // document.body.style.overflowY = 'hidden';
    window.scrollTo(0,0);
}

closeLoginBtn.onclick = function(){
    userForm.style.display = 'none';
    document.body.style.overflowY = 'scroll';
}

closeSignupBtn.onclick = function(){
    userForm.style.display = 'none';
    document.body.style.overflowY = 'scroll';
}

createAcc.onclick = function(){
    loginForm.style.display = 'none'
    signupForm.style.display = 'block'
}

haveAcc.onclick = function(){
    loginForm.style.display = 'block'
    signupForm.style.display = 'none'
}

document.onscroll = function(){
    menuList.style.display = 'none';
    searchBox.style.display = 'none';
    menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
}


let product = document.getElementsByClassName("product-tools");
for (let index = 0; index < product.length; index++) {
    product[index].onclick = function () {
        location.href = "single-product.html";
    };    
}


let images = document.getElementsByClassName('thumb');
let mainImage = document.getElementById('main-image')
for (let i = 0; i < images.length; i++) {

    let url = images[i].getAttribute("src");
    let index = url.indexOf('-thumbnail');
    let newUrl = url.substring(0, index)
    images[i].onclick = function () {
        mainImage.style.backgroundImage = `url(${newUrl}.jpg)`
    }
}



