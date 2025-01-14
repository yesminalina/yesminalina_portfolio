import Header from '../components/Header'
import ProjectsHome from '../components/ProjectsHome'
import Stack from '../components/Stack'

const Home = () => {
  return (
    <section className='mx-auto min-h-svh font-poppins'>
      <Header />
      <Stack />
      <ProjectsHome />
    </section>
  )
}

export default Home
