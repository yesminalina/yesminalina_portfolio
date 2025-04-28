import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from './views/Home'
import './App.css'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

const App = () => {
  return (
    <main className='bg-yellow_pale overflow-x-hidden'>
      <Navigation />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </main>
  )
}

export default App
