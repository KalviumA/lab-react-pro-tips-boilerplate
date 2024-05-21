
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Registration from './pages/Registration'
import Navbar from './Components/Navbar'

function App() {


  return (
    <>
    
    <Navbar/>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/contact' element={<Contact/>}/>
  <Route path='/registration' element={<Registration/>}/>
</Routes>

    </>
  )
}

export default App
