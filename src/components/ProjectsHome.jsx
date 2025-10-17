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
      <h4 className='me-2 mb-2 py-1 px-2 border-2 border-pink rounded-lg' key={stack}>{stack}</h4>
    ))
  }

  const renderProjects = () => {
    return myProjects.map(project => (
      <ProjectBox key={project.title}>
        <div className='col-span-full sm:col-span-7 sm:col-end-7 flex flex-col sm:absolute sm:z-10 self-center py-3 px-3 '>
          <div className='mx-3 text-start'>
            <h3 className='text-xl sm:text-xl inline text-olive font-semibold'>{project.title}</h3>
            {
              (project.deploy || project.github)
                ? <div className='text-pink inline'>
                  <a href={project.deploy} target='_blank' rel='noreferrer'>{arrowIcon}</a>
                  <a href={project.github} target='_blank' rel='noreferrer'>{githubIcon}</a>
                </div>
                : <div className='text-slate-500 inline'>
                  <a disabled rel='noreferrer'>{arrowIcon}</a>
                  <a disabled target='_blank' rel='noreferrer'>{githubIcon}</a>
                  <span className='text-sm text-slate-500'>(Private repository)</span>
                </div>
              }
            <p className='text-sm text-yellow_pale p-6 my-4 sm:my-8 rounded-md shadow-xl bg-olive/60 border-olive/40 border'>{project.description}</p>
            <div className='flex flex-wrap justify-start text-xs text-pink me-10'>
              {renderStack(project.stack)}
            </div>
          </div>
        </div>
        <div className='flex self-center col-span-full sm:col-start-6 sm:col-span-12 sm:relative group rounded-lg px-6 sm:px-0'>
          <img className='rounded-lg' src={project.img} />
          <div className='hidden sm:block absolute inset-0 rounded-lg cursor-pointer shadow-lg bg-olive opacity-50 transition-opacity duration-500 ease-in-out hover:opacity-0' />
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
      <div className='flex flex-col justify-between align-middle md:max-w-[1100px] mx-auto'>
        <h2 className='self-start text-3xl text-olive uppercase font-bold mb-8 ps-6 sm:my-20 sm:pb-16'>Projects <span className='text-pink text-4xl'>.</span></h2>
        <div className='grid grid-cols-1 gap-24 sm:gap-28 sm:px-16'>
          {renderProjects()}
        </div>
      </div>
    </Element>
  )
}

export default ProjectsHome
