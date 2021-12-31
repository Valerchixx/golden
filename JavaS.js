
// header


window.onscroll = function fixedHeader(){
    let header = document.getElementById('header');
    if(window.pageYOffset > 312){
        header.classList.add('fixed')
    } else{
        header.classList.remove('fixed');
    }
}

// nav

let nav = document.querySelector('.nav');
let burger = document.querySelector('.burger');

burger.addEventListener('click', function(){
    nav.classList.toggle("display");
});








