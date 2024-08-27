import { useState, useEffect } from 'react'
import { createClient } from 'contentful'

const client = createClient({
  space: 'd7886xrfnju3',
  environment: 'master',
  accessToken: 'Gtui8aY-YlZooAgAV6L5RdjDl0C9DducxBzMgQYvzsk',
})

export const useFetchProjects = () => {
  const [loading, setLoading] = useState(true)
  const [projects, setProjects] = useState([])

  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: 'projects' })
      const projects = response.items.map((item) => {
        const { title, url, image } = item.fields
        const id = item.sys.id
        const img = image?.fields?.file?.url
        return { title, url, id, img }
      })
      setProjects(projects)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    getData()
  }, [])
  return { loading, projects }
}

// client.getEntries({ content_type: 'projects' }).then((response) => {
//   console.log(response.items)
// })
