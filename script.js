/*------------------- SEARCH FORM ------------------*/

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    shippingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}


/*------------------- SHOPPING CART ------------------*/

let shippingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>{  //#cart-btn จาก ICON
    shippingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}


/*------------------- LOGIN FORM ------------------*/

let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{  //#cart-btn จาก ICON
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    shippingCart.classList.remove('active');
    navbar.classList.remove('active');
}


/*------------------- MEDIA QUERIES--------------------*/
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{  //#cart-btn จาก ICON
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    shippingCart.classList.remove('active');
    loginForm.classList.remove('active');
}

/*--- คำสั่งเมื่อเราคลิกไอคอนไหนให้แสดงไอคอนนั้นไม่ให้แสดงไอคอนทับกัน ---*/
window.onscroll =() =>{
    searchForm.classList.remove('active');
    shippingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

/*------------------- www.swiperjs.com  --------------------*/
const swiper = new Swiper('.swiper', {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,},
  centerredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
    
    },
    1020: {
      slidesPerView: 3,
    },
  },
});
