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

displayText = (width) => {
  return (width > 940)
}

const text = document.querySelector('.nav-text-update')
let navHeight = document.querySelector('.nav-container').getBoundingClientRect().height

// home page
const forrestTop = document.querySelector('#forrest').getBoundingClientRect().top - navHeight
const forrestBottom = document.querySelector('#forrest').getBoundingClientRect().bottom - navHeight

const hiiveTop = document.querySelector('#hiive').getBoundingClientRect().top - navHeight
const hiiveBottom = document.querySelector('#hiive').getBoundingClientRect().bottom - navHeight

const fetchTop = document.querySelector('#fetch').getBoundingClientRect().top - navHeight
const fetchBottom = document.querySelector('#fetch').getBoundingClientRect().bottom

window.addEventListener(
  'scroll', () => {
    let scrollPosition = window.scrollY
    if (changeText(scrollPosition, forrestTop, forrestBottom) && displayText(window.innerWidth)) {
      fadeInText('LOVES MOVIES')
    } else if (changeText(scrollPosition, hiiveTop, hiiveBottom) && displayText(window.innerWidth)) {
      fadeInText('HATES BEE STINGS')
    } else if (changeText(scrollPosition, fetchTop, fetchBottom) && displayText(window.innerWidth)) {
      fadeInText("WILL WALK YOUR DOG")
    } else {
      fadeInText('')
    }
  }
)

// forrest case study
// const forrestFinalDivTop = document.querySelector('#forrest-final').getBoundingClientRect().top - navHeight
// const forrestFinalDivBottom = document.querySelector('#forrest-final').getBoundingClientRect().bottom - navHeight

// window.addEventListener(
// 'scroll', () => {
//     let scrollPosition = window.scrollY
//     if (changeText(scrollPosition, forrestFinalDivTop, forrestFinalDivBottom)) {
//       fadeInText('IS CHUFFED YOU READ EVERYTHING')
//     } else {
//       fadeInText('')
//     }
//   }
// )

