// let nav = document.querySelector('.nav');

// fixedNav = () => {
//     if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
//         nav.classList.add('fixed-nav');
//       } else {
//         nav.classList.remove('fixed-nav');
//     }
// }

// window.addEventListener('scroll', fixedNav)

// const btn = document.getElementById('hamburger');
// const menu = document.getElementById('mobile-menu');
// btn.addEventListener('click', () => {
//   const open = menu.classList.toggle('open');
//   btn.classList.toggle('open', open);
//   btn.setAttribute('aria-expanded', open);
// });

const hamburgerBtn = document.getElementById('hamburger-btn');
const mobileMenu = document.getElementById('mobile-menu');
const body = document.getElementsByTagName('body');

hamburgerBtn.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('is-open');
  hamburgerBtn.classList.toggle('is-open');
  hamburgerBtn.setAttribute('aria-expanded', isOpen);
  
  document.body.classList.toggle('no-scroll', isOpen);
});