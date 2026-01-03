import React from "react";
import why from "../assets/whymontessori.png";

const Info = () => {
  return (
    <div className="flex items-center justify-center py-10 px-4">
      <img
        src={why}
        alt="Why Montessori"
        className="
          w-full
          max-w-xs
          sm:max-w-sm
          md:max-w-md
          lg:max-w-lg
          xl:max-w-xl
          h-auto
        "
      />
    </div>
  );
};

export default Info;
