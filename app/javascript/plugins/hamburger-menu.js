console.log('hello from hamburger menu')

const menuIcon = document.querySelector('.nav-bar-menu')
const popup = document.querySelector('.nav-bar-menu-popup')
const link = document.querySelectorAll('.nav-bar-link')

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('nav-bar-menu-open')
  menuIcon.classList.toggle('fa-bars')
  menuIcon.classList.toggle('fa-times')
  popup.classList.toggle('hidden')
})
