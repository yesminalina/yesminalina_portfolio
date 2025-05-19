import { useState } from 'react'
import { Link } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical, faXmark } from '@fortawesome/free-solid-svg-icons'

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('about')
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const handleSetActive = (section) => {
    setIsOpen(false)
    setActiveSection(section)
  }

  const menuIcon = <FontAwesomeIcon icon={faEllipsisVertical} size='xl' className='items-center' />
  const xIcon = <FontAwesomeIcon icon={faXmark} size='xl' className='items-center' />

  return (
    <nav className='flex flex-col justify-center align-middle w-full py-6 sm:py-10 text-olive font-semibold px-6 sm:px-40 top-0 inset-x-0 z-50 fixed backdrop-blur-md sm:h-16'>
      <div className='flex align-middle justify-between'>
        <Link to='about' smooth duration={500} spy onSetActive={handleSetActive} className='self-center cursor-pointer'>
          <img className='w-16' src='yp_logo.webp' />
        </Link>
        <div className='flex sm:hidden'>
          <button onClick={toggleMenu}>
            {isOpen ? xIcon : menuIcon}
          </button>
        </div>
        {/* Desktop Menu */}
        <div className='hidden sm:flex align-middle self-center'>
          <Link to='home' smooth duration={500} spy onSetActive={handleSetActive} className={`cursor-pointer me-8 self-center ${activeSection === 'about' ? 'underline underline-offset-4 decoration-pink decoration-2' : null}`}>About me</Link>
          <Link to='projects' smooth duration={500} spy onSetActive={handleSetActive} className={`cursor-pointer me-8 self-center ${activeSection === 'projects' ? 'underline underline-offset-4 decoration-pink decoration-2' : null}`}>Projects</Link>
          <Link to='stack' smooth duration={500} spy onSetActive={handleSetActive} className={`cursor-pointer me-8 self-center ${activeSection === 'stack' ? 'underline underline-offset-4 decoration-pink decoration-2' : 'text-olive'}`}>My Stack</Link>
          <a className='border-2 rounded-md px-4 py-1 text-pink transition-transform ease-in-out duration-300 hover:scale-110 hover:cursor-pointer' href='/CV_Yesmin_Pizarro_Dev.pdf' download='CV_Yesmin_Pizarro_Dev.pdf'>Resume</a>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`sm:hidden ${isOpen ? 'flex flex-col  self-center' : 'hidden'}`}>
        <Link to='about' smooth duration={500} spy onSetActive={handleSetActive} className={`cursor-pointer mb-2 self-center ${activeSection === 'about' ? 'underline underline-offset-4 decoration-pink decoration-2' : null}`}>About me</Link>
        <Link to='projects' smooth duration={500} spy onSetActive={handleSetActive} className={`cursor-pointer mb-2 self-center ${activeSection === 'projects' ? 'underline underline-offset-4 decoration-pink decoration-2' : null}`}>Projects</Link>
        <Link to='stack' smooth duration={500} spy onSetActive={handleSetActive} className={`cursor-pointer mb-2 self-center ${activeSection === 'stack' ? 'underline underline-offset-4 decoration-pink decoration-2' : 'text-olive'}`}>My Stack</Link>
        <a onClick={toggleMenu} className='m-auto border-2 rounded-md px-4 py-1 text-pink transition-transform ease-in-out duration-300 hover:scale-110 hover:cursor-pointer' href='/CV_Yesmin_Pizarro_Dev.pdf' download='CV_Yesmin_Pizarro_Dev.pdf'>Resume</a>
      </div>
    </nav>
  )
}

export default Navigation
