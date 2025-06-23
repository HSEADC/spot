import { getPostTeasers } from './search-data-fun'

let content

document.addEventListener('DOMContentLoaded', () => {
  getPostTeasers().then((data) => {
    content = data
    document.querySelector('.C_FunCards').innerHTML = ''
    content.forEach((card) => createCard(card))

    initSearch()
  })
})

function initSearch() {
  const O_Search = document.querySelector('.O_Search')
  const A_SearchButton = document.querySelector('.A_SearchButton')
  const A_SearchInput = O_Search.querySelector('.A_SearchInput')

  let requestText = getSearchRequest()

  if (requestText != undefined) {
    A_SearchInput.value = requestText

    if (content) {
      searchContent(requestText)
    }
  } else {
    A_SearchInput.value = ''
  }

  A_SearchInput.addEventListener('input', (e) => {
    requestText = e.target.value
    if (requestText.length >= 3) {
      A_SearchButton.classList.remove('disabled')
    } else {
      A_SearchButton.classList.add('disabled')
    }
  })

  A_SearchInput.addEventListener('keydown', (e) => {
    requestText = e.target.value

    if (e.key == 'Enter') {
      setSearchRequest(requestText)
      searchContent(requestText)
    }
  })

  A_SearchButton.addEventListener('click', (e) => {
    if (!e.target.classList.contains('disabled')) {
      requestText = A_SearchInput.value
      setSearchRequest(requestText)
      searchContent(requestText)
    }
  })
}

function searchContent(requestText) {
  const container = document.querySelector('.C_FunCards')
  const container2 = document.querySelector('.A_NothingFounded')
  const A_SectionsBottomText = document.querySelector('.A_SectionsBottomText')

  container.innerHTML = ''

  let contentItemIds = []

  content.forEach((contentItem) => {
    const nbspRegEx = /[\u202F\u00A0]/gm
    const punctuationRegEx = /[.,\/#!$%\^&\*;:{}=\-_`()]/gm

    let { title, id, tags } = contentItem

    title = title.replaceAll(nbspRegEx, ' ')
    title = title.replaceAll(punctuationRegEx, '')

    if (requestText.length >= 3) {
      if (title.includes(requestText) || tags.includes(requestText)) {
        contentItemIds.push(id)
      }
    }
  })

  if (contentItemIds.length > 0) {
    renderCardsByIds(container, contentItemIds)
  } else {
    renderNothingFounded(container2, A_SectionsBottomText)
  }
}

function renderNothingFounded(container, A_SectionsBottomText) {
  container.innerHTML = 'Ничего не найдено :('
  A_SectionsBottomText.innerHTML = ''
}

function renderCardsByIds(container, ids) {
  ids = [...new Set(ids)]

  ids.forEach((id) => {
    content.forEach((item) => {
      if (item.id == id) {
        createCard(item)
      }
    })
  })
}

function setSearchRequest(requestText) {
  const url = window.location.href.split('?')[0]
  window.location.href = url + '?request=' + requestText
}

function getSearchRequest() {
  const url = new URL(window.location.href)
  const searchParams = new URLSearchParams(url.search)

  if (searchParams.has('request')) {
    return searchParams.get('request')
  }
}

function createCard(card) {
  let { id, title, url, tags, classes } = card

  const O_FunCard = document.createElement('a')
  O_FunCard.classList.add('O_FunCard')
  O_FunCard.href = url

  classes.forEach((el) => {
    O_FunCard.classList.add(`${el}`)
  })

  const Q_GradientSquare = document.createElement('div')
  Q_GradientSquare.classList.add('Q_GradientSquare')

  const A_Tag = document.createElement('tag')
  A_Tag.classList.add('A_Tag', 'Q_BgYellow')
  A_Tag.innerText = tags

  const M_FunHeaderArrow = document.createElement('div')
  M_FunHeaderArrow.classList.add('M_FunHeaderArrow')

  const A_HeaderCards = document.createElement('h4')
  A_HeaderCards.classList.add('A_HeaderCards')
  A_HeaderCards.innerText = title

  const A_ArrowYellow = document.createElement('div')
  A_ArrowYellow.classList.add('A_ArrowYellow')

  O_FunCard.appendChild(Q_GradientSquare)
  O_FunCard.appendChild(A_Tag)
  O_FunCard.appendChild(M_FunHeaderArrow)
  M_FunHeaderArrow.appendChild(A_HeaderCards)
  M_FunHeaderArrow.appendChild(A_ArrowYellow)

  document.querySelector('.C_FunCards').appendChild(O_FunCard)
}
