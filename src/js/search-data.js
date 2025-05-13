import Airtable from 'airtable'

const token =
  'patWJ1m7vuYs8HPrk.764ec31e150e7d996f85c1d9beae7cba274eb0ef45011bbd83864d25907e6ba3'

Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: token
})
var base = Airtable.base('appTRdW2uqUIdN2AW')

function getPostTeasers() {
  return new Promise((resolve, reject) => {
    const content = []

    base('teasers')
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
            url: record.fields['URL']
          })
        })
        resolve(content)
      })
  })
}

export { getPostTeasers }
