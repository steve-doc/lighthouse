const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector('.nav');

navToggle.addEventListener('click', () => {
    nav.classList.toggle('nav--visible');
})

const sections = document.querySelectorAll('section');

console.log(sections);

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
    console.log(entry.target);
    entry.target.classList.toggle('inverse')
  })
}, options);

sections.forEach(section => {
  observer.observe(section);
});
