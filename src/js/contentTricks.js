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

    base('tricks')
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
            level: record.fields['Level'],
            url: record.fields['URL'],
            classes: record.fields['Classes']
          })
        })
        resolve(content)
      })
  })
}

function createArticleContent(cards) {
  cards.forEach((card) => {
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

    const A_LevelIcon = document.createElement('div')
    A_LevelIcon.classList.add('A_LevelIcon', 'A_LevelIconEasy')

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
  })
}
