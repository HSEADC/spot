import { getPostTeasers } from './search-data'

let content

document.addEventListener('DOMContentLoaded', () => {
  getPostTeasers().then((data) => {
    content = data

    document.querySelector('.C_LocationCards').innerHTML = ''
    content.forEach((card) => createCard(card))

    initSearch()
  })

  getPostTeasers().then((data) => {
    content = data

    content.sort((a, b) => a.index - b.index)

    document.querySelector('.C_LocationCards').innerHTML = ''
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
  const container = document.querySelector('.C_LocationCards')
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

// function createCard(card) {
//   let { id, title, description, url, image, tags, metro, metroLogo } = card

//   const contentItem = document.createElement('a')
//   contentItem.classList.add('O_ContentItem')
//   contentItem.classList.add(`${card.classList}`)
//   contentItem.href = url

//   const contentItemCover = document.createElement('img')
//   contentItemCover.classList.add('A_ContentItemCover')
//   contentItemCover.src = image

//   const contentItemTitle = document.createElement('h3')
//   contentItemTitle.classList.add('A_ContentItemTitle')
//   contentItemTitle.innerText = title

//   const contentItemDescription = document.createElement('p')
//   contentItemDescription.classList.add('A_ContentItemDescription')
//   contentItemDescription.innerText = description

//   const contentItemTag = document.createElement('div')
//   contentItemTag.classList.add('A_ContentItemTag')
//   contentItemTag.innerText = tags

//   const contentItemMetro = document.createElement('p')
//   contentItemMetro.classList.add('A_ContentItemMetro')
//   contentItemMetro.src = metro

//   const contentItemMetroLogo = document.createElement('img')
//   contentItemMetroLogo.classList.add('A_ContentItemMetroLogo')
//   contentItemMetroLogo.src = metroLogo

//   contentItem.appendChild(contentItemCover)
//   contentItem.appendChild(contentItemTag)
//   contentItem.appendChild(contentItemTitle)
//   contentItem.appendChild(contentItemDescription)

//   document.querySelector('.C_LocationCards').appendChild(contentItem)
// }

function createCard(card) {
  let { id, title, description, url, image, tags, metro, metroLogo, classes } =
    card

  const O_LocationCard = document.createElement('a')
  O_LocationCard.classList.add('O_LocationCard')
  O_LocationCard.href = url

  if (Array.isArray(classes)) {
    classes.forEach((el) => {
      O_LocationCard.classList.add(el)
    })
  }

  const Q_GradientSquare = document.createElement('div')
  Q_GradientSquare.classList.add('Q_GradientSquare')

  const W_LocationCardInfo = document.createElement('div')
  W_LocationCardInfo.classList.add('W_LocationCardInfo')

  const M_LocationCardHeader = document.createElement('div')
  M_LocationCardHeader.classList.add('M_LocationCardHeader')

  const C_Tags = document.createElement('div')
  C_Tags.classList.add('C_Tags')

  tags.forEach((tagText) => {
    const tag = document.createElement('div')
    tag.classList.add('A_Tag', 'Q_BgYellow')
    tag.innerText = tagText
    C_Tags.appendChild(tag)
  })

  const A_HeaderCards = document.createElement('h4')
  A_HeaderCards.classList.add('A_HeaderCards')
  A_HeaderCards.innerText = title

  const W_AddressInfo = document.createElement('div')
  W_AddressInfo.classList.add('W_AddressInfo')

  const A_BodyText = document.createElement('p')
  A_BodyText.classList.add('A_BodyText')
  A_BodyText.innerText = description

  const M_MetroInfoArrow = document.createElement('div')
  M_MetroInfoArrow.classList.add('M_MetroInfoArrow')

  const W_MetroInfo = document.createElement('div')
  W_MetroInfo.classList.add('W_MetroInfo')

  const Q_MetroLogo = document.createElement('img')
  Q_MetroLogo.classList.add('Q_MetroLogo')
  Q_MetroLogo.src = metroLogo

  const Metro = document.createElement('p')
  Metro.classList.add('A_BodyText')
  Metro.innerText = metro

  const A_ArrowYellow = document.createElement('div')
  A_ArrowYellow.classList.add('A_ArrowYellow')

  O_LocationCard.appendChild(Q_GradientSquare)
  O_LocationCard.appendChild(W_LocationCardInfo)
  W_LocationCardInfo.appendChild(M_LocationCardHeader)
  W_LocationCardInfo.appendChild(W_AddressInfo)
  M_LocationCardHeader.appendChild(C_Tags)
  M_LocationCardHeader.appendChild(A_HeaderCards)
  W_AddressInfo.appendChild(A_BodyText)
  W_AddressInfo.appendChild(M_MetroInfoArrow)
  M_MetroInfoArrow.appendChild(W_MetroInfo)
  M_MetroInfoArrow.appendChild(A_ArrowYellow)
  W_MetroInfo.appendChild(Q_MetroLogo)
  W_MetroInfo.appendChild(Metro)

  document.querySelector('.C_LocationCards').appendChild(O_LocationCard)
}
