import React from 'react'
import founder from '../assets/founder.jpeg'
const Mentor = () => {
  return ( 
    <section className=" py-16 px-4 font-[Fredoka]">
         <h3 className="text-2xl font-semibold mb-4 text-center">
        Our Founder
      </h3>
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    <div className="w-full h-[340px] md:h-[570px] rounded-3xl overflow-hidden bg-gray-200 flex items-center justify-center">
      <img
        src={founder}
        alt="About Jazz Montessori"
        className="w-full h-full object-cover"
      />
    </div>
    {/* LEFT CONTENT */}
    <div className="text-center md:text-left">
      
      
<p className="text-gray-600 leading-relaxed">
  Jazz Montessori was founded in 1995 by <span className="font-semibold">Parveen Shaik</span>,
  a passionate educator with a deep belief in the Montessori philosophy and the
  unique potential of every child. Established with the vision of “play and learn,”
  the school was created to nurture young minds through joyful, meaningful, and
  child-centric learning experiences.
  <br /><br />
  From the very beginning, the curriculum at Jazz Montessori has been thoughtfully
  planned according to each child’s individual IQ and developmental readiness.
  Great emphasis is placed on personal attention, allowing teachers to understand
  every child’s capabilities, strengths, and learning pace—ensuring holistic growth
  and confidence.
  <br /><br />
  Since its inception, Parveen Shaik has remained the founder and guiding force of
  the school, shaping its vision, values, and approach to early childhood education.
  Jazz Montessori proudly stands as the first play school to introduce authentic
  Montessori methods across the entire Jayanagar locality, setting a benchmark in
  quality early education.
  <br /><br />
  With decades of dedication to nurturing young minds, she continues to lead Jazz
  Montessori with care, purpose, and an unwavering commitment to creating a
  supportive environment where children grow with independence, curiosity, and joy.
</p>
    </div>

   
     

  </div>
</section>
 

  )
}

export default Mentor