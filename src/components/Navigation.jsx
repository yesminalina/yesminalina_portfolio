import { useState } from 'react'
import { Link } from 'react-scroll'

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('about')

  const handleSetActive = (section) => setActiveSection(section)

  return (
    <nav className='flex justify-between align-middle text-olive font-semibold py-10 px-40 w-full top-0 left-0 z-50 fixed backdrop-blur-md h-16'>
      <div className='self-center'>
        <img className='w-20' src='yp_logo.png' />
      </div>
      <div className='flex self-center'>
        <Link to='about' smooth duration={500} spy onSetActive={handleSetActive} className={`cursor-pointer me-8 self-center ${activeSection === 'about' ? 'underline underline-offset-4 decoration-pink decoration-2' : null}`}>About me</Link>
        <Link to='projects' smooth duration={500} spy onSetActive={handleSetActive} className={`cursor-pointer me-8 self-center ${activeSection === 'projects' ? 'underline underline-offset-4 decoration-pink decoration-2' : null}`}>Projects</Link>
        <Link to='stack' smooth duration={500} spy onSetActive={handleSetActive} className={`cursor-pointer me-8 self-center ${activeSection === 'stack' ? 'underline underline-offset-4 decoration-pink decoration-2' : 'text-olive'}`}>My Stack</Link>
        <button className='border-2 rounded-md px-4 py-1 text-pink transition-transform ease-in-out duration-300 hover:scale-110'>Resume</button>
      </div>
    </nav>
  )
}

export default Navigation
