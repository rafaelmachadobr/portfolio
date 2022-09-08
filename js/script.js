const sr = ScrollReveal({
    origin: 'top',
    distance: '200px',
    duration: 2000,
    delay: 200,
    reset: true
});



sr.reveal('.home-section, .about-section, .skills-section, .work-section', {});



sr.reveal('.welcome h1, .welcome h3', {
    duration: 1500, 
    origin: 'top'
})

sr.reveal('.social_icon', {
    duration: 3500, 
    origin: 'left'
})


sr.reveal('.work-1, .work-2, .work-3, .work-4', {
    duration: 1000, 
    origin: 'bottom'
})




const title = document.querySelector('.title-main');

title.addEventListener('mouseover', function() {


    this.classList.add('text-green-main');
    this.classList.add('transition');
    this.classList.add('duration-1000');
    this.innerText = ('<RFM/>');

})

title.addEventListener('mouseout', function() {
    
    this.classList.remove('text-green-main');
    this.innerText = ('Rafael');
    this.classList.add('text-black');

});

// Configuração menu mobile

/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// SCROLL SUAVE

function getDistanceFromTheTop (element) {

    const id = element.getAttribute('href');
    return document.querySelector(id).offsetTop;
}

// function nativeScroll (distanceFromTheTop) {

//     window.scroll ({

//         top: distanceFromTheTop,
//         behavior: "smooth",

//     });

// }

function smoothScrollTo(endX, endY, duration) {
    const startX = window.scrollX || window.pageXOffset;
    const startY = window.scrollY || window.pageYOffset;
    const distanceX = endX - startX;
    const distanceY = endY - startY;
    const startTime = new Date().getTime();
  
    duration = typeof duration !== "undefined" ? duration : 400;
  
    const easeInOutQuart = (time, from, distance, duration) => {
      if ((time /= duration / 2) < 1)
        return (distance / 2) * time * time * time * time + from;
      return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;
    };
  
    const timer = setInterval(() => {
      const time = new Date().getTime() - startTime;
      const newX = easeInOutQuart(time, startX, distanceX, duration);
      const newY = easeInOutQuart(time, startY, distanceY, duration);
      if (time >= duration) {
        clearInterval(timer);
      }
      window.scroll(newX, newY);
    }, 1000 / 60);
  }

function scrollToSection (event) {

    event.preventDefault();
    const distanceFromTheTop = getDistanceFromTheTop(event.target) - 90;
    smoothScrollTo(0, distanceFromTheTop, 400)
}

const menuLinks = document.querySelectorAll(".nav__item a")

menuLinks.forEach((link) => {

    link.addEventListener("click", scrollToSection);

});



