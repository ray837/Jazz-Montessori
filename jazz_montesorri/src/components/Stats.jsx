import React, { useEffect, useRef, useState } from "react";
import left_girl from "../assets/girl_left.png";
import right_girl from "../assets/girl_right.png";

/* ---------- CountUp component ---------- */
const CountUp = ({ end, duration = 1500 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return <>{count}</>;
};

/* ---------- Stats Section ---------- */
const Stats = () => {
  const sectionRef = useRef(null);
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect(); // run only once
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="h-full flex items-center mt-10">
      <div className="h-full w-full flex">

        {/* Left Image */}
        <div className="w-1/4 flex flex-col justify-end">
          <img src={left_girl} className="w-[80%]" alt="" />
        </div>

        {/* Stats */}
        <div className="max-w-5xl mx-auto px-4 flex justify-center font-[Fredoka]">
          <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 items-center">

            {/* Card 1 */}
            <div className="flex flex-col items-center gap-2 text-orange-500">
              <div className="flex items-center">
                <h1 className="text-5xl font-bold">
                  {startCount && <CountUp end={27} />}
                </h1>
                <h5 className="text-xl ml-1">+</h5>
              </div>
              <h5 className="text-gray-500">Years of Experience</h5>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-center gap-2 text-orange-500">
              <div className="flex items-center">
                <h1 className="text-5xl font-bold">
                  {startCount && <CountUp end={2} />}
                </h1>
                <h5 className="text-xl ml-1">+</h5>
              </div>
              <h5 className="text-gray-500">Expert Teachers</h5>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col items-center gap-2 text-orange-500">
              <div className="flex items-center">
                <h1 className="text-5xl font-bold">
                  {startCount && <CountUp end={95} />}
                </h1>
                <h5 className="text-xl ml-1">%</h5>
              </div>
              <h5 className="text-gray-500">Happy Children</h5>
            </div>

            {/* Card 4 */}
            <div className="flex flex-col items-center gap-2 text-orange-500">
              <div className="flex items-center">
                <h1 className="text-5xl font-bold">
                  {startCount && <CountUp end={15} />}
                </h1>
                <h5 className="text-xl ml-1">+</h5>
              </div>
              <h5 className="text-gray-500">Learning Programs</h5>
            </div>

          </div>
        </div>

        {/* Right Image */}
        <div className="w-1/4 flex flex-col justify-end items-end">
          <img src={right_girl} className="w-1/2" alt="" />
        </div>

      </div>
    </div>
  );
};

export default Stats;
