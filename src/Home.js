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
                return (
                    <Link to={link}>
                        <article className='global-project' key={index}>
                            <div>
                                <img src={image} alt={title} />
                            </div>
                            <div className='global-project-footer'>
                                <h4>{title}</h4>
                            </div>
                        </article>
                    </Link>
                )
            })}
        </div>
      </section>

    )
}
