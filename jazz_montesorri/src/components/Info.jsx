import React from "react";
import why from "../assets/whymontessori.png";

const Info = () => {
  return (<>
  <div className="flex items-center justify-center py-9 md:py-15">
    <img src={why} ></img>
  </div>
   <div className="flex justify-center py-8 px-4 md-py-20 mb-5 md:mb-20">
  <div className="max-w-3xl text-center">
    <p className="text-lg md:text-xl font-light leading-relaxed text-gray-700 font-[Fredoka]">
      “The greatest gifts we can give our children are the roots of responsibility
      and the wings of independence.”
    </p>

    {/* <div className="mt-4 text-right text-gray-500 font-medium  font-[Fredoka]">
      -Dr. Maria Montessori
    </div> */}
  </div>
</div>
</>
  );
};

export default Info;
