import React from 'react'
import house from '../assets/house.png'
import hands from '../assets/hands.png'
import cube from '../assets/cube.png'

const Program = () => {
  return (<>
    <div className=' h-[90vh] flex justify-between gap-9 '>
        <div className='  px-20 py-20 w-1/2 flex flex-col p-6'>
       
            <h1 className='mb-5 text-5xl font-bold'>About Us</h1>
            <p className='text-xl'>At Jazz Montessori, we believe every child is naturally curious, capable, and full of potential. Our environment is designed to nurture independence, creativity, and a lifelong love for learning through hands-on experiences.</p>

      

        </div>
        <div className='px-20 py-20 w-1/2'>
        <div className='h-10 w-1/2 p-10'>

        </div>
        

        </div>
        
         <div className='absolute flex self-end'>
          {/* <img className='h-[35vh] ' src={house}></img> */}
           <img  className='h-[35vh] ' src={cube} />
           
        
         
          </div>
           <div className='absolute  right-0 px-20'>
               <img className='h-[85vh] ' src={hands}></img>
               
          </div>
       
    </div>
     
    </>
  )
}

export default Program