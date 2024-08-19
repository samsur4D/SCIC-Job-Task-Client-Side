import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

function App() {
  return (
    <div className='h-screen w-full flex flex-col'>
      <div>
        <Navbar/>
      </div>
      <div className='flex-1'>
        <Outlet/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default App
