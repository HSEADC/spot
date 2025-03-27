document.addEventListener('DOMContentLoaded', () => {
  initFilter()
  initBurgerMenu()
  initScrollEffect() // Adding scroll effect for hiding the arrow
})

function initFilter() {
  const tags = document.querySelectorAll('.A_FilterTag')
  const a = document.querySelector('.all')

  tags.forEach((tag) => {
    tag.addEventListener('click', () => {
      if (tag !== a) {
        a.classList.remove('active')
        tag.classList.toggle('active')
        console.log('здесь будет функция фильтрации по тегу')
        filterByTag()
      }

      let activeTags = document.querySelectorAll('.active')
      if (tag === a && !tag.classList.contains('active')) {
        activeTags.forEach((activeTag) => {
          activeTag.classList.remove('active')
        })
        tag.classList.add('active')
        console.log('здесь будет функция вывода всех карточек')
        filterAll()
      }

      if (tags.length - 1 === activeTags.length || activeTags.length === 0) {
        activeTags.forEach((activeTag) => {
          activeTag.classList.remove('active')
        })
        a.classList.add('active')
        console.log('здесь будет функция вывода всех карточек')
        filterAll()
      }
    })
  })
}

function filterAll() {
  const cards = document.querySelectorAll(
    '.O_TrickCard, .O_LocationCard, .O_FunCard'
  )
  const activeTags = document.querySelectorAll('.active')

  activeTags.forEach((tag) => {
    let classList = tag.className.split(' ')
    if (tag.classList.contains('all')) {
      cards.forEach((card) => {
        card.style.cssText = 'display: flex;'
      })
    }
  })
}

function filterByTag() {
  const cards = document.querySelectorAll(
    '.O_TrickCard, .O_LocationCard, .O_FunCard'
  )
  const activeTags = document.querySelectorAll('.active')
  let tagList = []
  let count

  cards.forEach((card) => {
    card.style.cssText = 'display: none;'
  })

  activeTags.forEach((tag) => {
    let classList = tag.className.split(' ')
    classList = classList.sort()
    count = 1
    if (classList[1] === 'active') {
      count++
    }
    for (let i = count; i < classList.length; i++) {
      tagList.push(classList[i])
    }
  })

  tagList.forEach((tagName) => {
    cards.forEach((card) => {
      if (card.classList.contains(tagName)) {
        card.style.cssText = 'display: flex;'
        card.classList.remove('O_Small')
        card.classList.remove('O_Big')
        card.classList.add('O_Mid')
      }
    })
  })
}

// Burger menu toggle and image swap
function initBurgerMenu() {
  // Toggle the nav menu
  $('#toggleBtn').click(function () {
    $('#navMenu').toggleClass('active')
  })

  // Change the burger menu icon image on click
  $('#toggleBtn').click(function () {
    var img = $('#burgerIcon') // Select the image

    // Check the current image source and toggle between two icons
    if (
      img.attr('src') ===
      'https://raw.githubusercontent.com/HSEADC/spot/refs/heads/main/src/images/components/02_Atoms/A_BurgerMenu.svg'
    ) {
      img.attr(
        'src',
        'https://raw.githubusercontent.com/HSEADC/spot/refs/heads/main/src/images/components/02_Atoms/A_BurgerClose.svg'
      )
    } else {
      img.attr(
        'src',
        'https://raw.githubusercontent.com/HSEADC/spot/refs/heads/main/src/images/components/02_Atoms/A_BurgerMenu.svg'
      )
    }
  })
}

// Scroll effect for hiding the arrow
function initScrollEffect() {
  let arrow = document.querySelector('.A_Arrow')
  if (!arrow) return // Prevent errors if the element is missing

  let lastScrollTop = 0

  window.addEventListener('scroll', function () {
    let scrollTop = window.scrollY || document.documentElement.scrollTop

    if (scrollTop > lastScrollTop) {
      // Hide when scrolling down (add the 'hidden' class)
      arrow.classList.add('hidden')
    } else {
      // Show when scrolling up (remove the 'hidden' class)
      arrow.classList.remove('hidden')
    }

    lastScrollTop = scrollTop
  })
}
