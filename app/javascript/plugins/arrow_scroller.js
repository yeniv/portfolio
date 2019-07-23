const arrow = document.querySelector('.home-arrow')
const nav = document.querySelector('.nav-container')
const portfolioStart = document.querySelector('#forrest')
const top = portfolioStart.getBoundingClientRect().top

arrow.addEventListener(
  'click', () => {
    let navHeight = nav.getBoundingClientRect().height
    window.scrollTo({top: top - navHeight,
      behavior: 'smooth'
    })
  })
