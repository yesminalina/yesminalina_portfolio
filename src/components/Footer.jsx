import { faRobot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Footer = () => {
  const robotIcon = <FontAwesomeIcon icon={faRobot} size='lg' />
  return (
    <footer className='flex justify-center text-olive p-4 uppercase text-xs font-medium border-t'>
      <p className='m-0 self-center'>Built with Reactjs and Tailwind CSS by Yesminalina - 2025 </p>
      <i className='px-2 self-center'>{robotIcon}</i>
    </footer>
  )
}

export default Footer
