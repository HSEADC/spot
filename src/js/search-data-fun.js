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

    base('fun')
      .select({ maxRecords: 100 })
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

export { getPostTeasers }
