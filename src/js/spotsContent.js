import Airtable from 'airtable'

let content
document.addEventListener('DOMContentLoaded', () => {
  getArticleContent().then((data) => {
    content = data

    // createstroke(content)
    createArticleContent(content)
  })
})

const token =
  'pat6NlUMRXr1Hpyuv.f31b5411264b7db981199aee8e05b7a44313c4f4a910b4099fc33a36478482ea'

Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: token
})
var base = Airtable.base('appTRdW2uqUIdN2AW')

function getArticleContent() {
  return new Promise((resolve, reject) => {
    const content = []

    base('spots')
      .select({ maxRecords: 100 })
      .firstPage()
      .then((result) => {
        result.forEach((record) => {
          content.push({
            id: record.id,
            title: record.fields['Title'],
            description: record.fields['Description'],
            tags: record.fields['Tags'],
            image: record.fields['Image'],
            url: record.fields['URL'],
            metro: record.fields['Metro'],
            metroLogo: record.fields['Metro_Logo'],
            classes: record.fields['Class']
          })
        })
        resolve(content)
      })
  })
}

function createArticleContent(cards) {
  cards.forEach((card) => {
    let {
      id,
      title,
      description,
      url,
      image,
      tags,
      metro,
      metroLogo,
      classes
    } = card

    const O_LocationCard = document.createElement('a')
    O_LocationCard.classList.add('O_LocationCard')
    O_LocationCard.href = url

    classes.forEach((el) => {
      O_LocationCard.classList.add(`${el}`)
    })

    const Q_GradientSquare = document.createElement('div')
    Q_GradientSquare.classList.add('Q_GradientSquare')

    const W_LocationCardInfo = document.createElement('div')
    W_LocationCardInfo.classList.add('W_LocationCardInfo')

    const M_LocationCardHeader = document.createElement('div')
    M_LocationCardHeader.classList.add('M_LocationCardHeader')

    const C_Tags = document.createElement('div')
    C_Tags.classList.add('C_Tags')

    tags.forEach(() => {
      const tag = document.createElement('div')
      tag.classList.add('A_Tag', 'Q_BgYellow')
      tag.innerText = tag
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
    Metro.src = metro

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
  })
}
