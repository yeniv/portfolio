const menuIcon = document.querySelector('.nav-bar-menu')
const popupClose = document.querySelector('.nav-bar-popup-close')
const popup = document.querySelector('.nav-bar-menu-popup')


menuIcon.addEventListener('click', () => {
  popup.classList.toggle('hidden')
})

popupClose.addEventListener('click', () => {
  popup.classList.toggle('hidden')
})

