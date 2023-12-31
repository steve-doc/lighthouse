
// Initialise Swiper

const swiper = new Swiper('#hero-swiper', {
  // Optional parameters
  direction: 'horizontal',
  spaceBetween: 0,
  effect: 'fade',
  zoom: true,
  speed: 2000,
  fadeEffect: {
    crossFade: true
  },
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // zoom: {
  //   maxRatio: 1.2,
  //   minRatio: 1
  // },

  // on: {
  //   slideChange: function () {
  //     console.log('clicked!')
  //     this.zoom.in();
  //   }
  // },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  // For autoplay
  autoplay: {
    el: '.autoplay'
  }
});


// set up intersection observers

const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector('.nav');

navToggle.addEventListener('click', () => {
    nav.classList.toggle('nav--visible');
})

const sections = document.querySelectorAll('section');
const faders = document.querySelectorAll('.fade-in');


const options = { 
  root: null,
  threshold: 0,
  rootMargin: "-50px"
};

const observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if(!entry.isIntersecting) {
      return;
    }
    // entry.target.classList.toggle('inverse')
  })
}, options);

sections.forEach(section => {
  observer.observe(section);
});

const appearOptions = {
  threshold: 1,
  rootMargin: "0px 0px 250px 0px"
};

const appearOnScroll = new IntersectionObserver
(function(
  entries,
   appearOnScroll
   ) {
    entries.forEach(entry => {
      if(!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add('appear');
        appearOnScroll.unobserve(entry.target);
      } 
    })
   }, appearOptions);

   faders.forEach(fader => {
    appearOnScroll.observe(fader)
   })
