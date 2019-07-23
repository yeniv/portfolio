const text = document.querySelector('.nav-text-update')
let navHeight = document.querySelector('.nav-container').getBoundingClientRect().height

const forrestTop = document.querySelector('#forrest').getBoundingClientRect().top - navHeight
const forrestBottom = document.querySelector('#forrest').getBoundingClientRect().bottom - navHeight

const hiiveTop = document.querySelector('#hiive').getBoundingClientRect().top - navHeight
const hiiveBottom = document.querySelector('#hiive').getBoundingClientRect().bottom - navHeight

const fetchTop = document.querySelector('#fetch').getBoundingClientRect().top - navHeight
const fetchBottom = document.querySelector('#fetch').getBoundingClientRect().bottom

changeText = (scrollPosition, top, bottom) => {
  return (scrollPosition > top) && (scrollPosition < bottom)
}

fadeInText = (newText) => {
  if (text.innerHTML != newText) {
      text.innerHTML = newText
      text.classList.remove('nav-text-fadein')
      text.offsetWidth = text.offsetWidth;
      text.classList.add('nav-text-fadein')
  }
}

fadeOutText = (newText) => {
  if (text.innerHTML != newText) {
      text.classList.remove('nav-text-fadeout')
      text.offsetWidth = text.offsetWidth;
      text.classList.add('nav-text-fadeout')
      text.innerHTML = ''
  }
}

window.addEventListener(
  'scroll', () => {
    let scrollPosition = window.scrollY
    if (changeText(scrollPosition, forrestTop, forrestBottom)) {
      fadeOutText('Forrest Gump')
      fadeInText('Forrest Gump')
    } else if (changeText(scrollPosition, hiiveTop, hiiveBottom)) {
      fadeOutText('Hiive')
      fadeInText('Hiive')
    } else if (changeText(scrollPosition, fetchTop, fetchBottom)) {
      fadeInText('Fetch')
    } else {
      fadeOutText('')
    }
  }
)


// is working
// updateText = (newText) => {
//   if (text.innerHTML != newText) {
//       text.innerHTML = newText
//       text.classList.remove('nav-text-fadein')
//       text.offsetWidth = text.offsetWidth;
//       text.classList.add('nav-text-fadein')
//   }
// }
