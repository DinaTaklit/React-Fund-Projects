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
    setLoading(false)
  }
  useEffect(() => {
    fetchJobs()
  }, [])

  if(loading){
    return(
      <section className='section loading'>
        <h1>Loading...</h1>
      </section>
    );
  }

  const {company, dates, duties, title} = jobs[value]
  return (
    <section className='section'>
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <div className="btn-container">
          {
            jobs.map((job, index) => {
              return (
                <button
                  key={job.id}
                  onClick={() => setValue(index)}
                  className={`job-btn ${index === value && 'active-btn'}`}
                >
                  {job.company}
                </button>
              )
            })
          }
        </div>
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties.map((duty, index) => {
            return (
                <div className="job-desc" key={index}>
                  <FaAngleDoubleRight className="job-icon">
                  </FaAngleDoubleRight>
                  <p>{duty}</p>
                </div>
              )
            })
          }
        </article>
      </div>
      <button type="button" className="btn">
          More info
      </button>

    </section>
  )
}

export default Index