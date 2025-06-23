import Airtable from 'airtable'

const token =
  'patBbosjGKktgKYih.5882b4ff3b2f3784c56f88d80f2b5ac3571854e87c07c2b89f7d3de16161dde3'

Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: token
})
var base = Airtable.base('appTRdW2uqUIdN2AW')

function getPostTeasers() {
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

export { getPostTeasers }
