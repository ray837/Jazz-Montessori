import React from 'react'
import train from '../assets/train.png'
const Navbar = () => {
  return (
    <div style={{backgroundColor:'#f4f1eb',color:'#e94927'}} className="h-20vh px-20 py-5 flex justify-between align-center">
      <div className='flex'>
        {/* JAZZ */}
<img className='h-10' src={train}></img>
      </div>
      <div className='flex justify-between uppercase font-semibold gap-15'>
        <h1>Home</h1>
        <h1>Program</h1>
        <h1>Staff</h1>
        <h1>Staff</h1>
      </div>
    </div>
  )
}

export default Navbar