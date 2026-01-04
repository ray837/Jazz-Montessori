import React from 'react'
import left_girl from '../assets/girl_left.png'
import right_girl from '../assets/girl_right.png'
const Stats = () => {
  return (
   <div className="h-full flex  items-center mt-10">
  <div className="h-full w-full flex">
    <div className='w-1/4 flex flex-col justify-end '>
        <img src={left_girl} className='w-[80%]'></img>
    </div>
    <div className="max-w-5xl mx-auto px-4 flex flex-coll justify-center  font-[Fredoka]">
      
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 items-center">

        {/* Card 1 */}
        <div className="flex flex-col items-center gap-2 mb-3 text-orange-500">
          <div className="flex items-center">
            <h1 className="text-5xl font-bold">27</h1>
            <h5 className="text-xl ml-1">+</h5>
          </div>
          <h5 className="text-gray-500">Years of Experience</h5>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center gap-2 mb-3 text-orange-500">
          <div className="flex items-center">
            <h1 className="text-5xl font-bold">2</h1>
            <h5 className="text-xl ml-1">+</h5>
          </div>
          <h5 className="text-gray-500">Expert Teachers</h5>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center gap-2 mb-3 text-orange-500">
          <div className="flex items-center">
            <h1 className="text-5xl font-bold">95</h1>
            <h5 className="text-xl ml-1">%</h5>
          </div>
          <h5 className="text-gray-500">Happy Children</h5>
        </div>

        {/* Card 4 */}
        <div className="flex flex-col items-center gap-2 mb-3 text-orange-500">
          <div className="flex items-center">
            <h1 className="text-5xl font-bold">15</h1>
            <h5 className="text-xl ml-1">+</h5>
          </div>
          <h5 className="text-gray-500">Learning Programs</h5>
        </div>

      </div>

    </div>
    <div className='w-1/4  flex flex-col justify-end items-end'>
        <img src={right_girl} className='w-1/2' ></img>
    </div>
  </div>
</div>

  )
}

export default Stats