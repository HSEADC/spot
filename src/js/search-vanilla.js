import { getPostTeasers } from './search-data'

let content

document.addEventListener('DOMContentLoaded', () => {
  getPostTeasers().then((data) => {
    content = data

    createCard(content)
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
  const container = document.querySelector('.S_Content')
  container.innerHtml = ''

  let contentItemIds = []

  content.forEach((contentItem) => {
    const nbspRegEx = /[\u202F\u00A0]/gm
    const punctuationRegEx = /[.,\/#!$%\^&\*;:{}=\-_`()]/gm

    let { title, description, id } = contentItem

    title = title.replaceAll(nbspRegEx, ' ')
    title = title.replaceAll(punctuationRegEx, '')

    description = description.replaceAll(nbspRegEx, ' ')
    description = description.replaceAll(punctuationRegEx, '')

    if (requestText.length >= 3) {
      if (title.includes(requestText) || description.includes(requestText)) {
        contentItemIds.push(id)
      }
    }
  })

  if (contentItemIds.length > 0) {
    renderCardsByIds(container, contentItemIds)
  } else {
    renderNothingFounded(container)
  }
}

function renderNothingFounded(container) {
  container.innerHTML = 'Ничего не найдено :('
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

  if (searchParams.has('requst')) {
    return searchParams.get('request')
  }
}

function createCard(card) {
  let { id, title, description, url, image, tags, metro, metroLogo } = card

  const contentItem = document.createElement('a')
  contentItem.classList.add('O_ContentItem')
  contentItem.classList.add(`${card.classList}`)
  contentItem.href = url

  const contentItemCover = document.createElement('img')
  contentItemCover.classList.add('A_ContentItemCover')
  contentItemCover.src = image

  const contentItemTitle = document.createElement('h3')
  contentItemTitle.classList.add('A_ContentItemTitle')
  contentItemTitle.innerText = title

  const contentItemDescription = document.createElement('p')
  contentItemDescription.classList.add('A_ContentItemDescription')
  contentItemDescription.innerText = description

  const contentItemTag = document.createElement('div')
  contentItemTag.classList.add('A_ContentItemTag')
  contentItemTag.innerText = tags

  const contentItemMetro = document.createElement('p')
  contentItemMetro.classList.add('A_ContentItemMetro')
  contentItemMetro.src = metro

  const contentItemMetroLogo = document.createElement('img')
  contentItemMetroLogo.classList.add('A_ContentItemMetroLogo')
  contentItemMetroLogo.src = metroLogo

  contentItem.appendChild(contentItemCover)
  contentItem.appendChild(contentItemTag)
  contentItem.appendChild(contentItemTitle)
  contentItem.appendChild(contentItemDescription)

  document.querySelector('.C_LocationCards').appendChild(contentItem)
}
