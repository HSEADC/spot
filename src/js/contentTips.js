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

    base('articles')
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
            description: record.fields['Description'],
            tags: record.fields['Tags'],
            time: record.fields['Time'],
            timer: record.fields['Timer'],
            image: record.fields['Image'],
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
    let { id, title, description, url, image, tags, time, timer, classes } =
      card

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
    M_ArticleHeaderWithDescription.classList.add(
      'M_ArticleHeaderWithDescription'
    )

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
  })
}
