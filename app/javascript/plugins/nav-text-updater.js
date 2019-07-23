// console.log('text updater is working!')

const text = document.querySelector('.nav-text-update')
let navHeight = document.querySelector('.nav-container').getBoundingClientRect().height

const forrestTop = document.querySelector('#forrest').getBoundingClientRect().top - navHeight
const forrestBottom = document.querySelector('#forrest').getBoundingClientRect().bottom - navHeight

const hiiveTop = document.querySelector('#hiive').getBoundingClientRect().top - navHeight
const hiiveBottom = document.querySelector('#hiive').getBoundingClientRect().bottom - navHeight

const fetchTop = document.querySelector('#fetch').getBoundingClientRect().top - navHeight
const fetchBottom = document.querySelector('#fetch').getBoundingClientRect().bottom - navHeight

window.addEventListener(
  'scroll', () => {
    let scrollPosition = window.scrollY
    if (scrollPosition > forrestTop && scrollPosition < forrestBottom) {
      console.log('triggered FORREST')
      text.innerHTML = 'FORREST'
    } else if (scrollPosition > hiiveTop && scrollPosition < hiiveBottom){
      console.log('triggered HIIVE')
      text.innerHTML = 'HIIVE'
    } else if (scrollPosition > fetchTop && scrollPosition < fetchBottom){
      console.log('triggered FETCH')
      text.innerHTML = 'FETCH'
    } else {
      console.log('triggered NOTHING')
      text.innerHTML = ''
    }
  }
)
