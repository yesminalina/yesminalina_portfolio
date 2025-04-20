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
        <div className='col-span-7 col-end-7 flex flex-col absolute z-10 self-center py-3 px-3 '>
          <div className='mx-3 text-start'>
            <h3 className='text-2xl inline text-olive font-semibold'>{project.title}</h3>
            <div className='text-pink inline'>
              <a href={project.deploy} target='_blank' rel='noreferrer'>{arrowIcon}</a>
              <a href={project.github} target='_blank' rel='noreferrer'>{githubIcon}</a>
            </div>
            <p className='text-sm text-yellow_pale p-6 my-8 rounded-md shadow-xl bg-pink'>{project.description}</p>
            <div className='flex flex-wrap justify-start text-xs text-pink me-10'>
              {renderStack(project.stack)}
            </div>
          </div>
        </div>
        <div className='flex self-center col-start-6 col-span-12 relative group rounded-lg'>
          <img className='rounded-lg' src={project.img} />
          <div className='absolute inset-0 rounded-lg cursor-pointer shadow-lg bg-olive opacity-30 transition-opacity duration-500 ease-in-out hover:opacity-0' />
        </div>
      </ProjectBox>

    ))
  }

  return (
    <Element name='projects' id='projects' className='pt-28'>
      <div className='flex flex-col justify-between align-middle md:max-w-[1100px] mx-auto'>
        <h2 className='self-center text-4xl text-olive uppercase font-bold mb-24'>Projects <span className='text-pink text-4xl'>.</span></h2>
        <div className='grid grid-cols-1 gap-48'>
          {renderProjects()}
        </div>
      </div>
    </Element>
  )
}

export default ProjectsHome
