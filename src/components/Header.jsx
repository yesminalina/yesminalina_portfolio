import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'

const Header = () => {
  const linkedinIcon = <FontAwesomeIcon icon={faLinkedin} size='2x' className='me-3' />
  const githubIcon = <FontAwesomeIcon icon={faGithub} size='2x' className='me-3' />
  return (
    <header name='about' className='md:flex md:justify-center md:align-bottom md:max-w-[1100px] mx-auto pt-28 text-olive'>
      <div className='md:flex md:self-center h-[540px] bg-hero-img bg-contain bg-center bg-no-repeat'>
        <div className='flex flex-col md:w-8/12'>
          <p className='text-xl text-pink'>Hey there, my name is</p>
          <h1 className='text-start font-semibold text-8xl max-w-36'>Yesmin Pizarro<span className='text-olive_pale'>.</span></h1>
        </div>
        <div className='self-end md:w-4/12 md:mt-8 mb-8 ps-16'>
          <h2 className='text-3xl uppercase font-semibold'>JS Fullstack Developer</h2>
          <p className='text-olive_pale font-semibold mb-4'>- former R&D pharmacist</p>
          <p className='mb-4 text-slate-500 text-md'>I’m currently applying my <span className='text-olive'>web app development skills </span>, leveraging my prior experience as a R&D Pharmacist to collaborate with <span className='text-olive'>innovative teams</span>. Always open to receiving feedback and focused on successfully <span className='text-olive'>completing each project with perseverance</span>.</p>
          <article className='flex'>
            <a href='https://www.linkedin.com/in/yesminpizarro/'>{linkedinIcon}</a>
            <a href='https://github.com/yesminalina'>{githubIcon}</a>
          </article>
        </div>
      </div>
    </header>
  )
}

export default Header
