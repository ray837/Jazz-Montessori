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
const images = [fathers_day, kid1, kid2,kid4,kid5,kid6];
import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";

const Gallery = () => {
   const [index, setIndex] = useState(0);
    useEffect(() => {
     AOS.init({ duration: 800, once: false, mirror: false });
   }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000); // 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='h-full' style={{backgroundColor:'#FBF8FF'}}>
        <section
  className="bg-cover bg-center py-20"
  style={{ backgroundImage: "url(image/BG16.png)" }}
>
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

      {/* LEFT CONTENT */}
      <div className="flex flex-col gap-4 justify-center">
        <h6 className="text-sm   w-fit  font-[Fredoka]" style={{color:'#704FE6'}}>
          Learning in Action
        </h6>

        <h3 className="text-3xl font-light  font-[Fredoka]">
          Exciting <span className=" font-semibold"  style={{color:'#704FE6'}}>Classes</span> for Every Kids
        </h3>

        <p className="text-gray-600  font-[Fredoka]">
          We bring learning to life with engaging activities, real-world connections, and a focus on making every moment exciting.
        </p>

        <Link to='/gallery'
          
          className="w-1/2 inline-flex items-center gap-3 rounded-full border  border-[#704FE6] px-6 py-2 text-[#704FE6] hover:bg-[#704FE6] hover:text-white transition justify-between"
        >
          <span className=' font-[Fredoka]' >View All</span>
          <span className="w-8 h-8 rounded-full bg-[#704FE6] text-white flex items-center justify-center"  >
            ↗
          </span>
        </Link>
      </div>

      {/* MIDDLE CARD */}
      <div className="flex">
        <div className="bg-[#704FE6] rounded-[40px] p-6 flex flex-col items-center gap-4 w-full" data-aos="fade-up"
  data-aos-delay="200">
          <h4 className="text-white text-xl  font-[Fredoka]">Outdoor Visit</h4>

          <div className="relative w-full h-full">
            <img
              src={field_visit}
              className="w-full h-full object-cover rounded-[32px]"
              alt=""
            />   
             {/* {longimages.map((img, i) => (
        <img
          key={i}
          src={img}
          className={` w-full h-full object-cover rounded-[32px]
            transition-opacity duration-700
            ${i === index ? "opacity-100" : "opacity-0"}`}
          alt=""
        />
      ))} */}

            <Link
             to="/gallery"
              className="absolute bottom-0 right-0 bg-[#704FE6] rounded-tl-[24px] p-3"
            >
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                ↗
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div className="flex flex-col gap-6">
        <div className="bg-yellow-100 rounded-[40px] p-6 text-center flex flex-col gap-3" data-aos="fade-up"
  data-aos-delay="200">
          <h4 className="text-[#704FE6] text-xl  font-[Fredoka]">  Outdoor Visit</h4>
          <p className="text-gray-600  font-[Fredoka]">
          Children explore nature, build curiosity, and learn through real-world experiences beyond the classroom.

          </p>
        </div>
 <div className="relative w-full h-[350px] overflow-hidden" data-aos="fade-up"
  data-aos-delay="200">
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          className={`absolute inset-0 w-full h-full object-cover rounded-[40px]
            transition-opacity duration-700
            ${i === index ? "opacity-100" : "opacity-0"}`}
          alt=""
        />
      ))}
    </div>
      </div>

    </div>
  </div>
</section>

    </div>
  )
}

export default Gallery