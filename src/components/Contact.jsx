import { Element } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
  return (
    <Element name='contact' id='contact'>
      <div className='relative overflow-hidden bg-text_main'>

        {/* Ambient pink glow — top right */}
        <div className='pointer-events-none absolute -top-32 -right-24 w-[600px] h-[400px] rounded-full bg-pink/20 blur-3xl' />

        {/* Ambient pink glow — bottom left */}
        <div className='pointer-events-none absolute -bottom-32 -left-24 w-[600px] h-[400px] rounded-full bg-pink/20 blur-3xl' />

        <div className='relative md:max-w-[1100px] mx-auto w-full px-6 py-24 sm:py-40'>

          {/* Heading */}
          <div className='mb-8'>
            <p className='text-xs uppercase tracking-widest font-semibold text-pink mb-2'>Get in touch</p>
            <h2 className='text-3xl text-yellow_pale uppercase font-bold'>
              Let's work together <span className='text-pink text-4xl'>.</span>
            </h2>
          </div>

          {/* Lead copy */}
          <p className='text-slate-300 leading-relaxed max-w-2xl mb-10'>
            I'm looking for my first fullstack role on a team where I can grow and bring product vision from day one.
            If that sounds like your team, let's talk.
          </p>

          {/* Links row */}
          <div className='flex flex-wrap items-center gap-6'>

            {/* Email */}
            <a
              href='mailto:yesmin.pizarro@gmail.com'
              className='flex items-center gap-2 text-yellow_pale hover:text-pink transition-colors'
            >
              <FontAwesomeIcon icon={faEnvelope} size='lg' />
              yesmin.pizarro@gmail.com
            </a>

            {/* LinkedIn */}
            <a
              href='https://www.linkedin.com/in/yesminpizarro/'
              target='_blank'
              rel='noreferrer'
              className='text-yellow_pale hover:text-pink transition-colors'
            >
              <FontAwesomeIcon icon={faLinkedin} size='2x' />
            </a>

            {/* GitHub */}
            <a
              href='https://github.com/yesminalina'
              target='_blank'
              rel='noreferrer'
              className='text-yellow_pale hover:text-pink transition-colors'
            >
              <FontAwesomeIcon icon={faGithub} size='2x' />
            </a>

            {/* Download CV */}
            <a
              className='border-2 rounded-md px-4 py-1 text-pink transition-transform ease-in-out duration-300 hover:scale-110 hover:cursor-pointer'
              href='https://docs.google.com/uc?export=download&id=1lzj9vMGLbEqkpxZBQFkYGz_qrMHwcYSv'
              target='_blank'
              rel='noopener noreferrer'
            >
              Download CV
            </a>

          </div>
        </div>
      </div>
    </Element>
  )
}

export default Contact
