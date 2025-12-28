import React from 'react'
import infant from '../assets/infant.png'
import baby from '../assets/baby.png'
import preschool from '../assets/preschool.png'
import daycare from '../assets/daycare.png'
const Programs = () => {
  return (
    // <div style={{backgroundColor:"#e94927"}} className='h-[60vh]'> style={{backgroundColor:'#fc7d4bff'}} 
    <div style={{ backgroundColor: "#f4f1eb" }} className='h-[70vh] text-center'>
    {/* <div style={{ backgroundColor: '#fc7d4bff' }} className='h-[70vh] text-center'> */}
      <h1 className='text-4xl py-12 font-semibold'>PROGRAMS</h1>

      <div className='flex justify-between px-35 py-9'>

        <div   className='w-1/6 text-center flex flex-col whitespace-pre-wrap rounded-3xl'>
          <img className='h-[25vh]' src={infant}></img>
          <h1 className='font-semibold'>Infant Program</h1>
          <p>Sensory exploration</p>
          <p>Language development</p>
          <p>Emotional bonding</p>
        </div>

       <div   className='w-1/6 text-center flex flex-col whitespace-pre-wrap rounded-3xl'>
         
          <img className='h-[26vh]' src={baby}></img>
          <h1 className='font-semibold px-1.5'>Toddler Program</h1>
          <p>Language exposure</p>
          <p>Motor skill development</p>
          <p>Social & emotional learning</p>
        </div>

       <div   className='w-1/6 text-center flex flex-col whitespace-pre-wrap rounded-3xl '>
         
          <img className='h-[22vh]' src={preschool}></img>
          <h1 className='font-semibold mt-2'>Preschool Program</h1>
          <p>Early reading & writing</p>
          <p>Math with hands-on materials</p>
          <p>Problem-solving skills</p>
        </div>

        <div   className='w-1/7 text-center flex flex-col whitespace-pre-wrap rounded-3xl'>
         
          <img className='h-[24vh]' src={daycare}></img>
          <h1 className='font-semibold mt-2'>Daycare</h1>
          <p>Supervised play</p>
          <p>Creative activities</p>
          <p>Rest & care</p>
        </div>


      </div>
    </div>
  )
}

export default Programs