import React from 'react'
import earth from '../assets/earth.png'
import heart from '../assets/heart.png'
import paint from '../assets/paint.png'
import flowers from '../assets/flowers.png'
import stroke from '../assets/stroke.png'
import stars from '../assets/stars.png'
const Principles = () => {
  return (
 <div className="relative w-screen h-[250vh] overflow-hidden">
  <div
    style={{ backgroundColor: "#FE6634" }}
    className="absolute left-1/2 -translate-x-1/2 top-24
               w-[145vw] h-[225vh]
               rounded-b-[50%] rounded-t-[50%]
               flex items-start justify-center"
  >
    <div className='flex flex-col gap-10'>
        {/* <div className='flex items-center'> */}
    <h1 className="mt-32 text-white text-4xl font-black z-10 font-mono text-center">
     WELCOME TO JAZZ
    </h1>
    {/* <img src={stars} className='h-12 w-12 '></img> */}
    {/* </div> */}
    <img src={stroke} className='absolute h-12 w-24 align self-center-safe mt-10'></img>
    <div className='h-screen w-screen  '>
<div className=" text-white   px-[20vw] py-[3vh]">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

        <div>
  {/* Card 1 */}
  <div className="mb-7">
    <div className="bg-white rounded-[52px] shadow-lg overflow-hidden">
      <img
        src={earth}
        className="w-full h-auto rounded-t-[52px]"
        loading="lazy"
      />
      <div className="px-6 py-3.5 text-center text-black">
        <h2 className="text-2xl font-light">
          Bilungual environment
        </h2>
        <p className=" mt-4 mb-6">
         The child is learning in bilingual environment throughout the day he/she percieve native English and (Hindi/Urdu/Kannada)
         </p>
       
      </div>
    </div>
  </div>

  {/* Card 2 */}
  <div>
    <div className="bg-white rounded-[52px] shadow-lg overflow-hidden">
      <img
        src={flowers}
        className="w-full h-auto rounded-t-[52px]"
        loading="lazy"
      />
      <div className="p-8 text-center text-black">
        <h2 className="text-2xl font-light ">
          Certified pedagogues
        </h2>
        <p className=" mt-4 mb-6">
         Our Montessori Guides hold the X Certificates.Their main goal is to guide a child's activity,supporting his/her natural development.</p>
        
      </div>
    </div>
  </div>
</div>
<div>
  {/* Intro text */}
  <div className="mb-16 mt-12">
    {/* <span className="text-gray-400 text-lg font-light">
      Prepared atmosphere
    </span>
    <h2 className="text-4xl mt-4 font-light leading-tight">
     A safe environment suitable for eacch stage of development and encouraging independence.
    </h2> */}
  </div>

  {/* Card 3 (slightly down) */}
  <div className="mb-12 translate-y-6">
    <div className="bg-white rounded-[52px] shadow-lg overflow-hidden">
      <img
        src={heart}
        className="w-full h-auto rounded-t-[52px]"
        loading="lazy"
      />
      <div className="p-8 text-center text-black">
        <h2 className="text-2xl font-light">
        Prepared atmosphere
        </h2>
        <p className="mt-4 mb-6">
          A safe environment suitable for eacch stage of development and encouraging independence.
        </p>
       
      </div>
    </div>
  </div>

  {/* Card 4 */}
  <div>
    <div className="bg-white rounded-[52px] shadow-lg overflow-hidden">
      <img
        src={paint}
        className="w-full h-auto rounded-t-[52px]"
        loading="lazy"
      />
      <div className="p-8 text-center text-black">
        <h2 className="text-2xl font-light">
          Practical Life Skills</h2>
        <p className="  mt-4 mb-6">
          Everyday activities help children develop focus & coordination.  
  These purposeful tasks strengthen concentration & refine motor skills from an early age.
 </p>
        
      </div>
    </div>
  </div>
</div>

    </div>
</div>
    </div>
    </div>
  </div>
</div>
  )
}

export default Principles