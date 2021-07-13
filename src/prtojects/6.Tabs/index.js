import { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
import './index.css'

const url = 'https://course-api.com/react-tabs-project'

function Index() {
  const [loading, setLoading] = useState(true)
  const [jobs, setJobs] = useState([])
  const [value, setValue] = useState(0)

  const fetchJobs = async() => {
    const newJobs = await fetch(url).then(response => response.json())
    setJobs(newJobs)
  }
  useEffect(() => {
    fetchJobs()
    setLoading(false)
  }, [])

  return (
    <h1>Tabs</h1>
  )
}

export default Index