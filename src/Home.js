import {Link} from 'react-router-dom'
import projects from './data'

export default function Home() {
    return (
        <section className='global-section'>
        <h2 className='global-section-title'>
            React Fund Projects
        </h2>
        <div className='global-projects-center'>
            {/* list of projects*/}
            {projects.map( (project, index) => {
                const {image, title, link } = project
                if (link.includes('https')){
                    return (
                        <a href={link} target='blank' key={index}>
                            <article className='global-project'>
                                <div>
                                    <img src={image} alt={title} />
                                </div>
                                <div className='global-project-footer'>
                                    <h4>{title}</h4>
                                </div>
                            </article>
                        </a>
                    )
                } else {
                    return (
                        <Link to={link} key={index}>
                            <article className='global-project'>
                                <div>
                                    <img src={image} alt={title} />
                                </div>
                                <div className='global-project-footer'>
                                    <h4>{title}</h4>
                                </div>
                            </article>
                        </Link>
                    )
                }
             
            })}
            
        </div>
      </section>

    )
}
