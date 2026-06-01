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
    <Element name='about' id='about' className='flex justify-center align-bottom md:max-w-[1100px] min-h-svh mx-auto sm:pt-20 text-olive'>
      <div className='flex flex-col sm:flex sm:flex-row sm:justify-between md:self-end sm:h-[540px] bg-none sm:bg-hero-img bg-contain bg-bottom bg-no-repeat'>
        <section className='flex sm:w-8/12 min-h-dvh bg-hero-img bg-contain bg-bottom bg-no-repeat sm:bg-none px-6'>
          <div className='flex flex-col w-full sm:w-8/12 pt-24 sm:pt-0'>
            <p className='text-xl text-pink'>Hey there, my name is</p>
            <h1 className='text-start font-semibold text-6xl sm:text-8xl max-w-36'>Yesmin Pizarro<span className='text-pink'>.</span></h1>
            <article className='sm:hidden'>
              <h2 className='text-xl md:text-3xl uppercase font-semibold'>Fullstack Developer</h2>
              <p className='mb-4 text-slate-500 text-md'>I build fullstack web products end to end with <span className='text-olive'>React, Node and Typescript</span>. I'm especially at home where the details <span className='text-olive'>can't be wrong: regulated, compliance-heavy domains</span> I already know from the inside thanks to my deep roots in the pharmaceutical world.</p>
              <article className='flex justify-start items-center gap-3'>
                <a href='https://www.linkedin.com/in/yesminpizarro/' target='_blank' rel='noreferrer'>{linkedinIcon}</a>
                <a href='https://github.com/yesminalina' target='_blank' rel='noreferrer'>{githubIcon}</a>
                <Link
                  smooth duration={500} to='projects'
                  className='border-2 rounded-md px-4 py-1 text-pink transition-transform ease-in-out duration-300 hover:scale-110 cursor-pointer'
                >
                  View my work
                </Link>
              </article>
            </article>
            <Link className='hidden sm:block mt-24 ms-36 alagn-bottom text-pink animate-bounce cursor-pointer' smooth duration={500} to='projects'>{arrowDown}</Link>
          </div>
        </section>
        <section id='description' className='hidden sm:block self-end md:w-4/12 mt-20 md:mt-8 mb-8 ps-16'>
          <h2 className='text-3xl uppercase font-semibold'>Fullstack Developer</h2>
          <p className='mb-4 text-slate-500 text-md'>I build fullstack web products end to end with <span className='text-olive'>React, Node and Typescript</span>. I'm especially at home where the details <span className='text-olive'>can't be wrong: regulated, compliance-heavy domains</span> I already know from the inside thanks to my deep roots in the pharmaceutical world.</p>
          <article className='flex items-center gap-3'>
            <a href='https://www.linkedin.com/in/yesminpizarro/' target='_blank' rel='noreferrer'>{linkedinIcon}</a>
            <a href='https://github.com/yesminalina' target='_blank' rel='noreferrer'>{githubIcon}</a>
            <Link
              smooth duration={500} to='projects'
              className='border-2 rounded-md px-4 py-1 text-pink transition-transform ease-in-out duration-300 hover:scale-110 cursor-pointer'
            >
              View my work
            </Link>
          </article>
        </section>
      </div>
    </Element>
  )
}

export default Header
