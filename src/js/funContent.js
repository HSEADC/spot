import Airtable from 'airtable'

let content
document.addEventListener('DOMContentLoaded', () => {
  getArticleContent().then((data) => {
    content = data
    createArticleContent(content)
  })
})

// const token =
//   'pat6NlUMRXr1Hpyuv.f31b5411264b7db981199aee8e05b7a44313c4f4a910b4099fc33a36478482ea'

const token =
  'patBbosjGKktgKYih.5882b4ff3b2f3784c56f88d80f2b5ac3571854e87c07c2b89f7d3de16161dde3'

Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: token
})
var base = Airtable.base('appTRdW2uqUIdN2AW')

function getArticleContent() {
  return new Promise((resolve, reject) => {
    const content = []

    base('fun')
      .select({
        maxRecords: 100,
        sort: [{ field: 'Index', direction: 'asc' }]
      })

      .firstPage()
      .then((result) => {
        result.forEach((record) => {
          content.push({
            id: record.id,
            title: record.fields['Title'],
            tags: record.fields['Tags'],
            url: record.fields['URL'],
            classes: record.fields['Class']
          })
        })
        resolve(content)
      })
  })
}

function createArticleContent(cards) {
  console.log(cards)
  cards.forEach((card) => {
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
    console.log(document.querySelector('.C_FunCards'))
  })
}
