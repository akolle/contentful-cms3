import { createClient } from 'contentful'

const client = createClient({
  space: 'd7886xrfnju3',
  environment: 'master',
  accessToken: 'Gtui8aY-YlZooAgAV6L5RdjDl0C9DducxBzMgQYvzsk',
})

client
  .getEntries({ content_type: 'projects' })
  .then((response) => console.log(response))
