import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from './views/Home'
import './App.css'
import NotFound from './views/NotFound'
import Layout from './views/Layout'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Navbar/Footer routes */}
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
        </Route>
        {/* Routers without navbar */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
