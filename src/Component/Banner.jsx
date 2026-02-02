import React from "react";
import a from "../assets/a.jpg"

function Banner() {
  return (
    <div className="flex justify-center items-center mt-12 md:mt-0">
      <img
        src={a}
        alt="Banner"
        className="w-full h-100 object-cover shadow-xl"
      />
    </div>
  );
}

export default Banner;
