import React from 'react'
import infant from '../assets/infant.png'
import baby from '../assets/baby.png'
import preschool from '../assets/preschool.png'
import daycare from '../assets/daycare.png'
import toddler from '../assets/toddler.png'
const Programs = () => {
  return (
    // <div style={{backgroundColor:"#e94927"}} className='h-[60vh]'> style={{backgroundColor:'#fc7d4bff'}} 
    <div   className='h-full text-center'>
    {/* <div style={{ backgroundColor: '#fc7d4bff' }} className='h-[70vh] text-center'> */}
      <h1 className='text-4xl py-12 font-semibold  font-[Fredoka]'>PROGRAMS</h1>

      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 px-10">

  <div class="flex flex-col items-center text-center rounded-3xl overflow-hidden bg-white   max-w-xs mx-auto">
    
    <div class="w-full aspect-video  flex items-center justify-center mb-7">
      <img
        src={infant}
        class="max-h-full max-w-full object-contain"
        alt="Infant Program"
      />
    </div>

    <div class="p-4">
      <h1 class="font-semibold text-lg  font-[Fredoka]">Infant Program</h1>
      <p>Sensory exploration</p>
      <p>Language development</p>
      <p>Emotional bonding</p>
    </div>

  </div>

  <div class="flex flex-col items-center text-center rounded-3xl overflow-hidden bg-white   max-w-xs mx-auto">
    
    <div class="w-full h-80  flex items-center justify-center mb-7">
      <img
        src={toddler}
        class="max-h-full max-w-full object-contain"
        alt="Toddler Program"
      />
    </div>

    <div class="p-4">
      <h1 class="font-semibold text-lg  font-[Fredoka]">Toddler Program</h1>
      <p>Language exposure</p>
      <p>Motor skill development</p>
      <p>Social & emotional learning</p>
    </div>

  </div>

  <div class="flex flex-col items-center text-center rounded-3xl overflow-hidden bg-white   max-w-xs mx-auto">
    
        <div class="w-full h-85  flex items-center justify-center mb-5">
      <img
        src={preschool}
        class="max-h-full max-w-full object-contain"
        alt="Preschool Program"
      />
    </div>

    <div class="p-4">
      <h1 class="font-semibold text-lg  font-[Fredoka]">Preschool Program</h1>
      <p>Early reading & writing</p>
      <p>Math with hands-on materials</p>
      <p>Problem-solving skills</p>
    </div>

  </div>

  <div class="flex flex-col items-center text-center rounded-3xl overflow-hidden bg-white   max-w-xs mx-auto ">
    
       <div class="w-full h-85  flex items-center justify-center  mb-4">
      <img
        src={daycare}
        class="max-h-full max-w-full object-contain"
        alt="Daycare"
      />
    </div>

    <div class="p-4">
      <h1 class="font-semibold text-lg font-[Fredoka]">Daycare</h1>
      <p>Supervised play</p>
      <p>Creative activities</p>
      <p>Rest & care</p>
    </div>

  </div>

</div>


    </div>
  )
}

export default Programs