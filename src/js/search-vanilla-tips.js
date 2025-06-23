import { getPostTeasers } from './search-data-tips'

let content

document.addEventListener('DOMContentLoaded', () => {
  getPostTeasers().then((data) => {
    content = data

    content.sort((a, b) => a.index - b.index)

    document.querySelector('.C_TipsCards').innerHTML = ''
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
  const container = document.querySelector('.C_TipsCards')
  const container2 = document.querySelector('.A_NothingFounded')
  const A_SectionsBottomText = document.querySelector('.A_SectionsBottomText')

  container.innerHTML = ''

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
  let { id, title, description, url, image, tags, time, timer, classes } = card

  const O_ArticleCard = document.createElement('a')
  O_ArticleCard.classList.add('O_ArticleCard')
  O_ArticleCard.href = url

  classes.forEach((el) => {
    O_ArticleCard.classList.add(`${el}`)
  })

  const A_ArticleCardPhoto = document.createElement('img')
  A_ArticleCardPhoto.src = image
  A_ArticleCardPhoto.classList.add('A_ArticleCardPhoto')

  const M_ArticleCardData = document.createElement('div')
  M_ArticleCardData.classList.add('M_ArticleCardData')

  const M_ArticleCardTags = document.createElement('div')
  M_ArticleCardTags.classList.add('M_ArticleCardTags')

  const A_Tag = document.createElement('tag')
  A_Tag.innerText = tags
  A_Tag.classList.add('A_Tag', 'Q_BgYellow')

  const M_Time = document.createElement('div')
  M_Time.classList.add('M_Time')

  const A_IconTimer = document.createElement('img')
  A_IconTimer.src = timer
  A_IconTimer.classList.add('A_IconTimer')

  const A_Time = document.createElement('p')
  A_Time.classList.add('A_BodyText')
  A_Time.innerText = time

  const M_ArticleHeaderWithDescription = document.createElement('div')
  M_ArticleHeaderWithDescription.classList.add('M_ArticleHeaderWithDescription')

  const A_HeaderCards = document.createElement('h4')
  A_HeaderCards.classList.add('A_HeaderCards')
  A_HeaderCards.innerText = title

  const A_BodyText = document.createElement('p')
  A_BodyText.classList.add('A_BodyText')
  A_BodyText.innerText = description

  O_ArticleCard.appendChild(A_ArticleCardPhoto)
  O_ArticleCard.appendChild(M_ArticleCardData)
  M_ArticleCardData.appendChild(M_ArticleCardTags)
  M_ArticleCardData.appendChild(M_ArticleHeaderWithDescription)
  M_ArticleCardTags.appendChild(A_Tag)
  M_ArticleCardTags.appendChild(M_Time)
  M_Time.appendChild(A_IconTimer)
  M_Time.appendChild(A_Time)
  M_ArticleHeaderWithDescription.appendChild(A_HeaderCards)
  M_ArticleHeaderWithDescription.appendChild(A_BodyText)

  document.querySelector('.C_TipsCards').appendChild(O_ArticleCard)
}
