import React from 'react'
import cloud from '../assets/cloudy.png'
import cloud2 from '../assets/single_sm_cloud.png'
import cloud3 from '../assets/cloud_lg.png'
import cloudflip from '../assets/cloud_flip.png'
import castle from '../assets/castle.png'
import house from '../assets/house1.png'
import { useEffect } from 'react'
import {gsap} from 'gsap'
const Hero = () => {
    useEffect(() => {
    const handleMouseMove = ({ x, y }) => {
      gsap.set(document.documentElement, {
        "--x": gsap.utils.mapRange(0, window.innerWidth, -1, 1, x),
        "--y": gsap.utils.mapRange(0, window.innerHeight, -1, 1, y),
      });
    };

    window.addEventListener('pointermove', handleMouseMove);

    return () => {
      window.removeEventListener('pointermove', handleMouseMove);
    };
  }, []);
// #89C0FF
  return (
    <>
    <div style={{backgroundColor:'#38b6ff'}} className="h-full font-sans flex flex-col gap-0.5 overflow-hidden">
      <div className='flex justify-center'>
      <div className='flex flex-col gap-2 text-white text-center py-5 '>
        {/* <h2 className='text-xs'> EST 2024</h2> */}
        <h6 className='text-4xl tracking-widest  font-bold  font-[Fredoka]'>WELCOME TO JAZZ MONTESSORI</h6>
        <h1 className=' font-[Fredoka]'>Where Learning Matters.</h1>
      </div>
      </div>
      {/* clouds */}
      <div className='flex flex-row justify-between'>
      <div className=' flex gap-10 h-[13vh] mt-10 px-35 ' id='parallax-cloud'>
       {/* <img   src={cloud}></img> */}
       <div className="hidden md:flex justify-end gap-6 md:gap-10 mt-6 md:mt-10 px-4 md:px-20"> 
          <img  className='h-20 py-1.5'  src={cloud3}></img>
         <img   src={cloudflip}></img>
         </div>
         {/* <img   src={cloudflip}></img>
         <img  className='h-13 px-2'  src={cloud3}></img>
         <img   src={cloudflip}></img>
            <img   src={cloud}></img>
          <img  className='h-7 py-1.5'  src={cloud3}></img>
       
         <img   src={cloudflip}></img>
         <img  className='h-15 px-2'  src={cloud3}></img> */}
          
       </div>
        <div style={{right:0}} className=' flex gap-10 h-[13vh] mt-10 px-35 ' id='parallax-cloud'>
       {/* <img   src={cloud}></img> */}
          <img  className='h-10 py-1.5'  src={cloud3}></img>
         <img   src={cloudflip}></img>
         
         
          
       </div>
        </div>

      <div >
       
      <div>
       
      </div>
      </div>
    <div
  style={{ marginTop: "-70px" }}
  className="flex justify-end px-4 md:px-20 self-center"
>
  <img
    src={house}
    alt="House"
    className="
      w-full
      max-w-xs
      sm:max-w-sm
      md:max-w-md
      lg:max-w-lg
      xl:max-w-xl
      h-auto
    "
  />
</div>
       
    </div>
    
    </>
  )
}

export default Hero