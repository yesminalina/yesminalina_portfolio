import { faRobot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Footer = () => {
  const robotIcon = <FontAwesomeIcon icon={faRobot} size='lg' />
  return (
    <footer className='flex justify-center text-olive p-4 text-xs font-medium w-full'>
      <article className='flex justify-center w-full border-t pt-2'>
        <p className='m-0 self-center'>Built with Reactjs and Tailwind CSS by Yesminalina - 2025 </p>
        <i className='sm:px-2 self-center text-pink'>{robotIcon}</i>
      </article>
    </footer>
  )
}

export default Footer
