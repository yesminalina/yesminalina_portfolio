import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { Element } from 'react-scroll'

const ProjectsHome = () => {
  const globeIcon = <FontAwesomeIcon icon={faGlobe} size='lg' className='ms-3 mt-1 me-3' />
  const githubIcon = <FontAwesomeIcon icon={faGithub} size='lg' className='mt-1 me-3' />

  return (
    <Element name='projects' className='py-8'>
      <div className='flex flex-col justify-between align-middle md:max-w-[1100px] mx-auto'>
        <h2 className='self-center text-3xl text-olive uppercase font-semibold mb-8'>Projects <span className='text-pink text-4xl'>.</span></h2>
        <article className='grid grid-cols-5 relative w-4/5 m-auto'>
          <div className='col-span-3'>
            <img className='rounded-lg' src='https://uizard.io/static/6ca745d1f9a74826ac241757a8825b24/0cfa7/67c4f4454578a650280ea846376eed1a15e65b2f-1440x835.webp' alt='' />
          </div>
          <div className='col-start-3 col-span-5 flex flex-col absolute self-center bg-mint rounded-md py-3 px-3 bg-gradient-to-r from-olive_pale to-olive_mint shadow-xl'>
            <div className='mx-3 text-end'>
              <h3 className='mb-2 text-xl inline'>Project Title</h3>
              <div className='text-pink inline'>
                <a href=''>{globeIcon}</a>
                <a href=''>{githubIcon}</a>
              </div>
              <p className='mb-4 text-olive text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione hic debitis fuga odio, ea similique unde vitae molestiae quaerat quasi eaque sed qui dolores dolorem nostrum, ipsam ad minus cum.</p>
              <div className='flex flex-wrap justify-end text-xs text-pink'>
                <h4 className='me-2 mb-2 py-1 px-2 border-2 border-pink rounded-lg'>HTML</h4>
                <h4 className='me-2 mb-2 py-1 px-2 border-2 border-pink rounded-lg'>CSS</h4>
                <h4 className='me-2 mb-2 py-1 px-2 border-2 border-pink rounded-lg'>Javascript</h4>
                <h4 className='me-2 mb-2 py-1 px-2 border-2 border-pink rounded-lg'>React</h4>
                <h4 className='me-2 mb-2 py-1 px-2 border-2 border-pink rounded-lg'>Node Js</h4>
                <h4 className='me-2 mb-2 py-1 px-2 border-2 border-pink rounded-lg'>Express Js</h4>
                <h4 className='me-2 mb-2 py-1 px-2 border-2 border-pink rounded-lg'>PostgreSQL</h4>
              </div>
            </div>
          </div>
        </article>
      </div>
    </Element>
  )
}

export default ProjectsHome
