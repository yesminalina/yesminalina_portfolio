import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <main className='bg-yellow_pale overflow-x-hidden'>
      <Navigation />
      <Outlet />
      <Footer />
    </main>
  )
}

export default Layout
