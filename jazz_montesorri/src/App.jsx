import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Program from './components/Program'
import Programs from './components/Programs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <Navbar></Navbar>
<Hero></Hero>
<Program></Program>
<Programs></Programs>
 
 
      
    </>
  )
}

export default App
