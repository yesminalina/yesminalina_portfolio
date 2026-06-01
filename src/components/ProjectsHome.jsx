import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { Element } from 'react-scroll'
import ProjectBox from './ProjectBox'
import projects from '../assets/json/projects.json'

const ProjectsHome = () => {
  const arrowIcon = <FontAwesomeIcon icon={faArrowUpRightFromSquare} size='lg' className='ms-3 mt-1 me-3' />
  const githubIcon = <FontAwesomeIcon icon={faGithub} size='lg' className='mt-1 me-3' />
  const IMG_ALIGN = {
    left: 'object-left-top',
    center: 'object-top'
  }

  const { projects: myProjects } = projects

  const renderStack = (projectStack) => {
    return projectStack.map((stack) => (
      <span
        className='me-2 mb-2 py-1 px-3 border border-pink rounded-full text-xs text-pink font-medium bg-pink/10'
        key={stack}
      >
        {stack}
      </span>
    ))
  }

  const renderFeatures = (features) => {
    return features.map((feature, i) => (
      <li key={i} className='flex items-start gap-2 text-sm text-slate-200'>
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
            className={`rounded-xl w-full h-full object-cover ${IMG_ALIGN[project.imgAlign] ?? IMG_ALIGN.left} shadow-lg ring-1 ring-white_warm/15`}
            src={project.img}
            alt={project.title}
          />
        </div>

        {/* Content column — frosted glass */}
        <div className='sm:w-7/12 flex flex-col justify-center rounded-xl p-6 sm:p-8 gap-5 bg-gradient-to-br from-white_warm/10 to-white_warm/5 backdrop-blur-xl ring-1 ring-white_warm/15 border-t border-white_warm/20 shadow-2xl'>

          {/* Title + links */}
          <div>
            <div className='flex flex-wrap items-center gap-x-1 gap-y-1 mb-1'>
              <h3 className='text-xl sm:text-2xl font-semibold text-yellow_pale me-2'>{project.title}</h3>
              <span className='flex items-center gap-2'>
                {project.deploy && (
                  <a href={project.deploy} target='_blank' rel='noreferrer' className='text-pink hover:opacity-70 transition-opacity'>{arrowIcon}</a>
                )}
                {project.github
                  ? <a href={project.github} target='_blank' rel='noreferrer' className='text-pink hover:opacity-70 transition-opacity'>{githubIcon}</a>
                  : <span className='flex items-center gap-1 text-slate-300'>{githubIcon}<span className='text-xs text-slate-400'>(Private repository)</span></span>}
              </span>
            </div>
            <p className='text-sm text-slate-300 leading-relaxed'>{project.description}</p>
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
    <Element name='projects' id='projects' className='flex flex-col'>
      {/* Dark band */}
      <div className='relative overflow-hidden bg-text_main pb-24 sm:pb-60'>

        {/* Ambient pink glow — top right */}
        <div className='pointer-events-none absolute -top-32 -right-24 w-[600px] h-[400px] rounded-full bg-pink/20 blur-3xl' />

        {/* Ambient pink glow — bottom left */}
        <div className='pointer-events-none absolute -bottom-32 -left-24 w-[600px] h-[400px] rounded-full bg-pink/20 blur-3xl' />

        <div className='relative flex flex-col justify-between align-middle md:max-w-[1100px] mx-auto w-full px-6'>

          {/* Section heading */}
          <div className='self-start my-24 sm:my-20'>
            <p className='text-xs uppercase tracking-widest font-semibold text-pink mb-2'>Selected work</p>
            <h2 className='text-3xl text-yellow_pale uppercase font-bold'>
              Projects <span className='text-pink text-4xl'>.</span>
            </h2>
          </div>

          <div className='flex flex-col gap-16 sm:gap-24'>
            {renderProjects()}
          </div>
        </div>
      </div>
    </Element>
  )
}

export default ProjectsHome
