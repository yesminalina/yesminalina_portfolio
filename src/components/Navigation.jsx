import { Link } from 'react-scroll'

const Navigation = () => {
  return (
    <nav className='flex justify-between align-middle text-olive font-semibold py-10 px-36 w-full top-0 left-0 z-50 fixed backdrop-blur-sm h-16'>
      <div className='flex self-center'>
        <img className='w-48' src='logo-nav.png' />
      </div>
      <div className='flex self-center'>
        <Link className='cursor-pointer me-8 self-center' to='about' smooth={true} duration={500}>About me</Link>
        <Link className='cursor-pointer me-8 self-center' to='projects' smooth={true} duration={500}>Projects</Link>
        <Link className='cursor-pointer me-8 self-center' to='stack' smooth={true} duration={500}>Stack</Link>
        <a>
          <button className='border-2 rounded-md px-4 py-1 text-pink'>Contact me</button>
        </a>
      </div>
    </nav>
  )
}

export default Navigation
