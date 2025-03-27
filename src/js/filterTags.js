document.addEventListener('DOMContentLoaded', () => {
  initFilter()
})

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

      let activeTags = document.querySelectorAll('.A_FilterTag.active')

      if (tag === allTag || activeTags.length === 0) {
        tags.forEach((t) => t.classList.remove('active'))
        allTag.classList.add('active')
        filterAll()
      }
    })
  })
}

function filterAll() {
  const cards = document.querySelectorAll('.O_FunCard')
  cards.forEach((card) => {
    card.style.display = 'flex'
  })
}

function filterByTag() {
  const cards = document.querySelectorAll('.O_FunCard')
  const activeTags = document.querySelectorAll('.A_FilterTag.active')

  // Список активных фильтров
  let activeClasses = [...activeTags].map((tag) => tag.classList[1]) // Берём второй класс (films, music, slangs)

  cards.forEach((card) => {
    let hasMatch = activeClasses.some((tagClass) =>
      card.classList.contains(tagClass)
    )
    card.style.display = hasMatch ? 'flex' : 'none'
  })
}
