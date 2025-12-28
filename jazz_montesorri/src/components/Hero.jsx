import React from 'react'
import cloud from '../assets/cloudy.png'
import cloud2 from '../assets/single_sm_cloud.png'
import cloud3 from '../assets/cloud_lg.png'
import cloudflip from '../assets/cloud_flip.png'
import castle from '../assets/castle.png'
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

  return (
    <>
    <div style={{backgroundColor:'#38b6ff'}} className="h-[90vh]  font-sans flex flex-col gap-0.5 overflow-hidden">
      <div className='flex justify-center'>
      <div className='flex flex-col gap-2 text-white text-center py-5 '>
        {/* <h2 className='text-xs'> EST 2024</h2> */}
        <h6 className='text-4xl tracking-widest  font-bold'>WELCOME TO JAZZ MONTESORRI</h6>
        <h1>Where Curiosity Leads Learning.</h1>
      </div>
      </div>
      
      <div className='absolute flex gap-10 h-[13vh] mt-20 px-35 ' id='parallax-cloud'>
       {/* <img   src={cloud}></img> */}
          <img  className='h-20 py-1.5'  src={cloud3}></img>
         <img   src={cloudflip}></img>
         {/* <img   src={cloudflip}></img>
         <img  className='h-13 px-2'  src={cloud3}></img>
         <img   src={cloudflip}></img>
            <img   src={cloud}></img>
          <img  className='h-7 py-1.5'  src={cloud3}></img>
       
         <img   src={cloudflip}></img>
         <img  className='h-15 px-2'  src={cloud3}></img> */}
          
       </div>
        <div style={{right:0}} className='absolute flex gap-10 h-[13vh] mt-20 px-35 ' id='parallax-cloud'>
       {/* <img   src={cloud}></img> */}
          <img  className='h-10 py-1.5'  src={cloud3}></img>
         <img   src={cloudflip}></img>
         
          
       </div>
      <div >
       
      <div>
       
      </div>
      </div>
      <div className='flex justify-end px-20   self-center'>
         <img src={castle}></img>
        {/* <button className='px-3 py-2 bg-black  text-white'>Enquire Us</button> */}
      </div>
       
    </div>
    
    </>
  )
}

export default Hero