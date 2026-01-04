import React from 'react'
import earth from '../assets/earth.png'
import heart from '../assets/heart.png'
import paint from '../assets/paint.png'
import flowers from '../assets/flowers.png'
import stroke from '../assets/stroke.png'
import stars from '../assets/stars.png'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react'

const Principles = () => {
  useEffect(() => {
  AOS.init({ duration: 800, once: false, mirror: true });
}, []);
  return (
<div className="relative w-full overflow-hidden">

  {/* ORANGE BACKGROUND */}
<div
  className="
    absolute inset-x-1/2 top-0
    -translate-x-1/2
    w-[180vw]
    h-full
    bg-[#FE6634]
    rounded-none
    md:rounded-full
  "
/>


  {/* CONTENT (defines height) */}
  <div className="relative z-10 px-4 md:px-20 py-32">

    <h1 className="text-white text-3xl md:text-4xl font-black text-center font-[Fredoka]">
      Our Philosophy
    </h1>

    <img
      src={stroke}
      alt=""
      className="mx-auto mt-6 w-20 md:w-24"
    />

    {/* CARDS */}
    <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">

      <Card
        img={earth}
        title="Bilingual Environment"
        text="The child learns in a bilingual environment throughout the day, perceiving native English along with regional languages."
      />

      <Card
        img={flowers}
        title="Certified Pedagogues"
        text="Our Montessori guides are certified professionals who nurture natural development."
      />

      <div className="md:translate-y-10">
        <Card
          img={heart}
          title="Prepared Atmosphere"
          text="A safe environment suitable for every stage of development, encouraging independence."
        />
      </div>

      <Card
        img={paint}
        title="Practical Life Skills"
        text="Hands-on activities that develop focus, coordination, and confidence."
      />

    </div>
  </div>
</div>

  )
}
const Card = ({ img, title, text }) => (
  <div className="bg-white rounded-[40px] shadow-lg overflow-hidden  font-[Fredoka]"  data-aos="fade-up"
  data-aos-delay="200">
    <img src={img} alt={title} className="w-full h-auto" />
    <div className="p-6 text-center text-black">
      <h2 className="text-xl md:text-2xl font-light">{title}</h2>
      <p className="mt-4 text-gray-700">{text}</p>
    </div>
  </div>
);
export default Principles