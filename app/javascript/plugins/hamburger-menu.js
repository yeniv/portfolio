const menuIcon = document.querySelector('.nav-bar-menu')
const popup = document.querySelector('.nav-bar-menu-popup')
const closeIcon = document.querySelector('.nav-bar-close')
const link = document.querySelectorAll('.nav-bar-link')

menuIcon.addEventListener('click', () => {
  popup.classList.toggle('hidden')
})

closeIcon.addEventListener('click', () => {
  popup.classList.toggle('hidden')
})
