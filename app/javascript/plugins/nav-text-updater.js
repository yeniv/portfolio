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
      text.classList.remove('nav-text-fadeout')
      text.classList.remove('nav-text-fadein')
      text.offsetWidth = text.offsetWidth;
      text.classList.add('nav-text-fadein')
    }
}

window.addEventListener(
  'scroll', () => {
    let scrollPosition = window.scrollY
    if (changeText(scrollPosition, forrestTop, forrestBottom)) {
      fadeInText('Forrest')
    } else if (changeText(scrollPosition, hiiveTop, hiiveBottom)) {
      fadeInText('hiive')
    } else if (changeText(scrollPosition, fetchTop, fetchBottom)) {
      fadeInText('Fetch')
    } else {
      fadeInText('')
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

//fadein words... not fade out
// fadeOutText = () => {
//       text.classList.remove('nav-text-fadeout')
//       text.offsetWidth = text.offsetWidth;
//       text.classList.add('nav-text-fadeout')
// }

// fadeInText = (newText) => {
//       text.innerHTML = newText
//       text.classList.remove('nav-text-fadein')
//       text.offsetWidth = text.offsetWidth;
//       text.classList.add('nav-text-fadein')
// }

// textChange = (newText) => {
//   if (text.innerHTML != newText) {
//     // fadeOutText()
//     fadeInText(newText)
//     // setTimeout(() => {fadeInText(newText)}, 500)
//   }
// }


// textChange = (newText) => {
//   if (text.innerHTML != newText) {
//     // if (text.classList.contains('nav-no-fadeout')) {
//       text.innerHTML = newText
//       text.classList.remove('nav-text-fadeout')
//       text.classList.remove('nav-text-fadein')
//       text.offsetWidth = text.offsetWidth;
//       text.classList.add('nav-text-fadein')
//     // } else {
//     //   text.classList.add('nav-text-fadeout')
//     //   setTimeout(() => {
//     //     text.innerHTML = newText
//     //     text.classList.remove('nav-text-fadein')
//     //     text.classList.remove('nav-text-fadeout')
//     //     text.offsetWidth = text.offsetWidth;
//     //     text.classList.add('nav-text-fadein')
//     //   }, 600)
//     // }
//   }
// }

// fadeOutText = (newText) => {
//   if (text.innerHTML != newText) {
//       text.classList.remove('nav-text-fadeout')
//       text.offsetWidth = text.offsetWidth;
//       text.classList.add('nav-text-fadeout')
//       // setTimeout(() => {
//         text.innerHTML = newText
//       // }, 500)
//     }
// }


