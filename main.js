const menuBtn = document.querySelector('.menu-btn');
const body = document.querySelector('body');
let menuOpen = false;
menuBtn.addEventListener('click', () =>{
    if(!menuOpen){
        menuBtn.classList.add('open');
        body.classList.add('scroll');
        menuOpen = true;
        document.getElementById('menu-bar').style.setProperty('display', 'block');

    }
    else{
        menuBtn.classList.remove('open');
        menuOpen = false;
        document.getElementById('menu-bar').style.setProperty('display', 'none');
        body.classList.remove('scroll');

    }
});

// function reveal(){
//     var reveals = document.querySelectorAll(".animation");
//     for (var i = 0; 1 < reveals.length; i++){
//         var windowHeight = window.innerHeight;
//         var elementTop = reveals[i].getBoundingClientRect().top;
//         var elementVisible = 150;
//         if (elementTop < windowHeight - elementVisible){
//             reveals[i].classList.add('active');
//             reveals[i].classList.remove('animation');
//         }else{
//             reveals[i].classList.remove('active');
//             reveals[i].classList.add('animation');
//         }
//     }
// }
// window.addEventListener('scroll', reveal);