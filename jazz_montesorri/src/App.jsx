import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Info from './components/Info'
import Footer from './components/Footer'
import Programs from './components/Programs'
import Principles from './components/Principles'
import Stats  from './components/Stats'
import Gallery from './components/Gallery'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <Navbar></Navbar>
<Hero></Hero>
<Info></Info>
 
<Principles></Principles>
<Stats></Stats>
<Gallery></Gallery>
<Programs></Programs>
<Footer></Footer>
 
    </>
  )
}

export default App
