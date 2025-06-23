import { getPostTeasers } from './search-data-tricks'

let content

document.addEventListener('DOMContentLoaded', () => {
  getPostTeasers().then((data) => {
    content = data

    content.sort((a, b) => a.index - b.index)

    document.querySelector('.C_TricksCards').innerHTML = ''
    document.querySelector('.C_Cards').innerHTML = ''
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
  const container = document.querySelector('.C_TricksCards')
  const container2 = document.querySelector('.A_NothingFounded')
  const A_SectionsBottomText = document.querySelector('.A_SectionsBottomText')

  container.innerHTML = ''

  let contentItemIds = []

  content.forEach((contentItem) => {
    const nbspRegEx = /[\u202F\u00A0]/gm
    const punctuationRegEx = /[.,\/#!$%\^&\*;:{}=\-_`()]/gm

    let { title, id } = contentItem

    title = title.replaceAll(nbspRegEx, ' ')
    title = title.replaceAll(punctuationRegEx, '')

    title = title.toLowerCase()
    requestText = requestText.toLowerCase()

    if (requestText.length >= 3) {
      if (title.includes(requestText)) {
        contentItemIds.push(id)
      }
    }
  })

  if (contentItemIds.length > 0 && (contentItemIds.length + 1) % 3 === 0) {
    renderCardsByIds(container, contentItemIds)
    document.querySelector('.C_Cards').style.justifyContent = 'flex-start'
  } else if (
    contentItemIds.length > 0 &&
    contentItemIds.length + (1 % 3) !== 0
  ) {
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
  let { id, title, tags, level, url, classes } = card

  const O_TrickCard = document.createElement('a')
  O_TrickCard.classList.add('O_TrickCard')
  O_TrickCard.href = url

  classes.forEach((el) => {
    O_TrickCard.classList.add(`${el}`)
  })

  const W_TrickTagsName = document.createElement('div')
  W_TrickTagsName.classList.add('W_TrickTagsName')

  const M_TrickTags = document.createElement('div')
  M_TrickTags.classList.add('M_TrickTags')

  const A_LevelIcon = document.createElement('img')
  A_LevelIcon.classList.add('A_LevelIcon', 'A_LevelIconEasy')
  A_LevelIcon.src = level

  const A_Level = document.createElement('p')
  A_Level.innerText = tags
  A_Level.classList.add('A_BodyText')

  const A_HeaderCards = document.createElement('h4')
  A_HeaderCards.classList.add('A_HeaderCards')
  A_HeaderCards.innerText = title

  const A_BodyText = document.createElement('p')
  A_BodyText.innerText = 'Развернуть'
  A_BodyText.classList.add('A_BodyText', 'grey')

  O_TrickCard.appendChild(W_TrickTagsName)
  O_TrickCard.appendChild(A_BodyText)
  W_TrickTagsName.appendChild(M_TrickTags)
  W_TrickTagsName.appendChild(A_HeaderCards)
  M_TrickTags.appendChild(A_LevelIcon)
  M_TrickTags.appendChild(A_Level)

  document.querySelector('.C_TricksCards').appendChild(O_TrickCard)
}
