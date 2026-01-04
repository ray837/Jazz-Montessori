import React from 'react'
import fathers_day from '../assets/fathers_day.jpeg'
import field_visit from '../assets/field_visit.jpeg'
import { useEffect, useState } from "react";
import kid1 from '../assets/kid1.jpeg'
import kid2 from '../assets/kid2.jpeg'
// import kid3 from '../assets/kid3.jpeg'
import kid4 from '../assets/kid4.jpeg'
import kid5 from '../assets/kid5.jpeg'
import kid6 from '../assets/kid6.jpeg'
 import AOS from "aos";
import "aos/dist/aos.css";

 
const Monsary = () => {
    // const [index, setIndex] = useState(0);
      useEffect(() => {
       AOS.init({ duration: 800, once: true, mirror: false });
     }, []);

    const images = [fathers_day, kid1, kid2,kid4,kid5,kid6,fathers_day,field_visit];
  return (
    <div className='px-5 py-7'>
        <h1 style={{color:'#E94927'}} className='text-3xl font-[Fredoka] text-center py-7'>Gallery</h1>
   <div className="columns-2 sm:columns-3 md:columns-4 gap-4">
  {images.map((img, i) => (
    <img
      key={i}
      src={img}
      alt=""
      className="mb-4 w-full rounded-2xl"
       data-aos="fade-up"

    />
  ))}
</div>
</div>
  )
}

export default Monsary