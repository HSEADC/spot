document.addEventListener('DOMContentLoaded', () => {
  initArrowHideOnScroll()
  initFilter()
  initBurgerMenu()
})

// Function to hide `.A_Arrow` on scroll
function initArrowHideOnScroll() {
  let arrow = document.querySelector('.A_Arrow')
  if (!arrow) return // Ensure the element exists

  let lastScrollTop = 0
  window.addEventListener('scroll', function () {
    let scrollTop = window.scrollY || document.documentElement.scrollTop
    if (scrollTop > lastScrollTop) {
      arrow.style.opacity = '0'
      arrow.style.pointerEvents = 'none'
    } else {
      arrow.style.opacity = '1'
      arrow.style.pointerEvents = 'auto'
    }
    lastScrollTop = scrollTop
  })
}

// Function to handle tag-based filtering
function initFilter() {
  const tags = document.querySelectorAll('.A_FilterTag')
  const allTag = document.querySelector('.all')

  tags.forEach((tag) => {
    tag.addEventListener('click', () => {
      if (tag !== allTag) {
        allTag.classList.remove('active')
        tag.classList.toggle('active')
        filterByTag()
      }

      let activeTags = document.querySelectorAll('.active')
      if (tag === allTag && !tag.classList.contains('active')) {
        activeTags.forEach((tag) => tag.classList.remove('active'))
        tag.classList.add('active')
        filterAll()
      }

      if (tags.length - 1 === activeTags.length || activeTags.length === 0) {
        activeTags.forEach((tag) => tag.classList.remove('active'))
        allTag.classList.add('active')
        filterAll()
      }
    })
  })
}

// Function to show all items
function filterAll() {
  document
    .querySelectorAll('.O_TrickCard, .O_LocationCard, .O_FunCard')
    .forEach((card) => (card.style.display = 'flex'))
}

// Function to filter items by active tags
function filterByTag() {
  const cards = document.querySelectorAll(
    '.O_TrickCard, .O_LocationCard, .O_FunCard'
  )
  const activeTags = document.querySelectorAll('.active')
  let tagList = []

  cards.forEach((card) => (card.style.display = 'none'))

  activeTags.forEach((tag) => {
    let classes = tag.className.split(' ').slice(1) // Exclude 'active'
    tagList = [...tagList, ...classes]
  })

  tagList.forEach((tagName) => {
    cards.forEach((card) => {
      if (card.classList.contains(tagName)) {
        card.style.display = 'flex'
        card.classList.remove('O_Small', 'O_Big')
        card.classList.add('O_Mid')
      }
    })
  })
}

// Function to initialize burger menu toggle and icon change
function initBurgerMenu() {
  const toggleBtn = document.getElementById('toggleBtn')
  const navMenu = document.getElementById('navMenu')
  const burgerIcon = document.getElementById('burgerIcon')

  if (!toggleBtn || !navMenu || !burgerIcon) return // Ensure elements exist

  toggleBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active')

    burgerIcon.src = burgerIcon.src.includes('A_BurgerMenu.svg')
      ? 'https://raw.githubusercontent.com/HSEADC/spot/refs/heads/main/src/images/components/02_Atoms/A_BurgerClose.svg'
      : 'https://raw.githubusercontent.com/HSEADC/spot/refs/heads/main/src/images/components/02_Atoms/A_BurgerMenu.svg'
  })
}
