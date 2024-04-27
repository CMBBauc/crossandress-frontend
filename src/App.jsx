import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'



function App() {
  return (

    <div className='app-body'>
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default App
