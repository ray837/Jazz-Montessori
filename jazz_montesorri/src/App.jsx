import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Navbar from './components/Navbar'
// import Hero from './components/Hero'
// import Info from './components/Info'
// import Footer from './components/Footer'
// import Programs from './components/Programs'
// import Principles from './components/Principles'
// import Stats  from './components/Stats'
// import Gallery from './components/Gallery'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Mentor from './components/Mentor'
import MainLayout from './components/MainLayout'
import Monsary from './components/Monsary'
function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
    <Route  element={<MainLayout />}>
      <Route path="/" element={<Home />}></Route>
      <Route path='/mentor' element={<Mentor></Mentor>}></Route>
      <Route path='/gallery' element={<Monsary></Monsary>}></Route>
      </Route>
      </Routes>
  )
}

export default App
