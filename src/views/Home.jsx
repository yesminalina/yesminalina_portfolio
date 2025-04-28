import Header from '../components/Header'
import ProjectsHome from '../components/ProjectsHome'
import Stack from '../components/Stack'
import { Element } from 'react-scroll'

const Home = () => {
  return (
    <Element name='home' className='min-h-svh font-poppins'>
      <Header />
      <ProjectsHome />
      <Stack />
    </Element>
  )
}

export default Home
