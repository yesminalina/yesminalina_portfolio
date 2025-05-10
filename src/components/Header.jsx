import { Element, Link } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  const linkedinIcon = <FontAwesomeIcon icon={faLinkedin} size='2x' className='me-3' />
  const githubIcon = <FontAwesomeIcon icon={faGithub} size='2x' className='me-3' />
  const arrowDown = <FontAwesomeIcon icon={faAnglesDown} size='4x' />
  return (
    <Element name='about' className='flex justify-center align-bottom md:max-w-[1100px] min-h-svh mx-auto sm:pt-28 text-olive'>
      <div className='flex flex-col sm:flex sm:flex-row sm:justify-between md:self-end sm:h-[540px] bg-none sm:bg-hero-img bg-contain bg-bottom bg-no-repeat'>
        <section className='flex justify-center w-full min-h-dvh bg-hero-img bg-contain bg-bottom bg-no-repeat sm:bg-none px-6'>
          <div className='flex flex-col w-full md:w-8/12 pt-32 sm:pt-0'>
            <p className='text-xl text-pink'>Hey there, my name is</p>
            <h1 className='text-start font-semibold text-6xl sm:text-8xl max-w-36'>Yesmin Pizarro<span className='text-pink'>.</span></h1>
            <article className='sm:hidden'>
              <h2 className='text-xl md:text-3xl uppercase font-semibold'>JS Fullstack Developer</h2>
              <p className='text-pink font-semibold my-4'>Aplying and elevating my skills to create new things.</p>
            </article>
            <Link className='hidden sm:block mt-24 ms-36 alagn-bottom text-pink animate-bounce cursor-pointer' smooth duration={500} to='projects'>{arrowDown}</Link>
          </div>
        </section>
        <section id='description' className='hidden sm:block self-end md:w-4/12 mt-20 md:mt-8 mb-8 ps-16'>
          <h2 className='text-3xl uppercase font-semibold'>JS Fullstack Developer</h2>
          <p className='sm:block text-pink font-semibold mb-4'>- Scriptaceutical</p>
          <p className='mb-4 text-slate-500 text-md'>Applying and elevating my <span className='text-olive'>development skills</span>, leveraging my prior experience as a Pharmaceutical Product Developer to create new things and collaborate with <span className='text-olive'>innovative teams</span>.</p>
          <article className='flex'>
            <a href='https://www.linkedin.com/in/yesminpizarro/'>{linkedinIcon}</a>
            <a href='https://github.com/yesminalina'>{githubIcon}</a>
          </article>
        </section>
      </div>
    </Element>
  )
}

export default Header
