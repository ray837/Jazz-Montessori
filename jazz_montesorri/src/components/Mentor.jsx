import React from 'react'
import founder from '../assets/founder.jpeg'
const Mentor = () => {
  return ( 
    <section className=" py-16 px-4 font-[Fredoka]">
         <h3 className="text-2xl font-semibold mb-4 text-center">
        Our Founder
      </h3>
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    <div className="w-full h-[300px] md:h-[400px] rounded-3xl overflow-hidden bg-gray-200 flex items-center justify-center">
      <img
        src={founder}
        alt="About Jazz Montessori"
        className="w-full h-full object-cover"
      />
    </div>
    {/* LEFT CONTENT */}
    <div className="text-center md:text-left">
      
      

     <p className="text-gray-600 leading-relaxed ">
  Jazz Montessori was founded in 1998 by <span className="font-semibold">Parveen Taj</span>,
  a passionate educator with a deep belief in the Montessori philosophy and the
  unique potential of every child. Since its establishment, she has remained the
  founder and guiding force of the school, shaping its vision, values, and approach
  to early childhood education.
  <br /><br />
  With decades of dedication to nurturing young minds, she continues to
  lead she with care, purpose, and an unwavering commitment to creating
  a supportive environment where children grow with confidence, independence, and
  curiosity.
</p>
    </div>

   
     

  </div>
</section>
 

  )
}

export default Mentor