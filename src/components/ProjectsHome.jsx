import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { Element } from 'react-scroll'
import ProjectBox from './ProjectBox'
import projects from '../assets/json/projects.json'

const ProjectsHome = () => {
  const arrowIcon = <FontAwesomeIcon icon={faArrowUpRightFromSquare} size='lg' className='ms-3 mt-1 me-3' />
  const githubIcon = <FontAwesomeIcon icon={faGithub} size='lg' className='mt-1 me-3' />

  const { projects: myProjects } = projects

  const renderStack = (projectStack) => {
    return projectStack.map((stack) => (
      <span
        className='me-2 mb-2 py-1 px-3 border border-pink rounded-full text-xs text-pink font-medium'
        key={stack}
      >
        {stack}
      </span>
    ))
  }

  const renderFeatures = (features) => {
    return features.map((feature, i) => (
      <li key={i} className='flex items-start gap-2 text-sm text-text_main'>
        <span className='text-pink mt-0.5 shrink-0'>▸</span>
        <span>{feature}</span>
      </li>
    ))
  }

  const renderProjects = () => {
    return myProjects.map((project, index) => (
      <ProjectBox key={project.title} reverse={index % 2 === 1}>
        {/* Image column */}
        <div className='sm:w-5/12 shrink-0 self-stretch'>
          <img
            className='rounded-xl w-full h-full object-cover object-top shadow-lg'
            src={project.img}
            alt={project.title}
          />
        </div>

        {/* Content column */}
        <div className='sm:w-7/12 flex flex-col justify-center bg-white_warm border border-olive/20 rounded-xl shadow-lg p-6 sm:p-8 gap-5'>

          {/* Title + links */}
          <div>
            <div className='flex flex-wrap items-center gap-x-1 gap-y-1 mb-1'>
              <h3 className='text-xl sm:text-2xl font-semibold text-olive me-2'>{project.title}</h3>
              {
                (project.deploy || project.github)
                  ? <span className='text-pink'>
                    <a href={project.deploy} target='_blank' rel='noreferrer' className='hover:opacity-70 transition-opacity'>{arrowIcon}</a>
                    <a href={project.github} target='_blank' rel='noreferrer' className='hover:opacity-70 transition-opacity'>{githubIcon}</a>
                  </span>
                  : <span className='flex items-center gap-2 text-slate-400'>
                    <span>{arrowIcon}</span>
                    <span>{githubIcon}</span>
                    <span className='text-xs text-slate-400'>(Private repository)</span>
                  </span>
              }
            </div>
            <p className='text-sm text-slate-500 leading-relaxed'>{project.description}</p>
          </div>

          {/* Features */}
          {project.features && project.features.length > 0 && (
            <div>
              <h4 className='text-xs uppercase tracking-widest font-semibold text-pink mb-2'>Features</h4>
              <ul className='flex flex-col gap-1.5'>
                {renderFeatures(project.features)}
              </ul>
            </div>
          )}

          {/* Stack */}
          <div>
            <h4 className='text-xs uppercase tracking-widest font-semibold text-pink mb-2'>Stack & Tools</h4>
            <div className='flex flex-wrap'>
              {renderStack(project.stack)}
            </div>
          </div>

        </div>
      </ProjectBox>
    ))
  }

  return (
    <Element name='projects' id='projects' className='flex flex-col pb-24'>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 100'>
        <g fill='#B95879'>
          <path d='M0 0v100c250 0 375-24 500-48 125 24 250 48 500 48V0H0Z' opacity='.5' />
          <path d='M0 0v4c250 0 375 24 500 48C625 28 750 4 1000 4V0H0Z' />
        </g>
      </svg>
      <div className='flex flex-col justify-between align-middle md:max-w-[1100px] mx-auto w-full px-6'>
        <h2 className='self-start text-3xl text-olive uppercase font-bold mb-8 sm:my-20 sm:pb-16'>
          Projects <span className='text-pink text-4xl'>.</span>
        </h2>
        <div className='flex flex-col gap-16 sm:gap-24'>
          {renderProjects()}
        </div>
      </div>
    </Element>
  )
}

export default ProjectsHome
