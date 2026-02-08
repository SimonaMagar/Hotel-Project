// import React from "react";

// import img1 from "../assets/img1.jpg";
// import img2 from "../assets/img2.jpg";
// import img3 from "../assets/img3.jpg";
// import img4 from "../assets/img4.jpg";
// import img5 from "../assets/img5.jpg";
// import img6 from "../assets/img6.jpg";
// import img7 from "../assets/img7.jpg";

// export default function DiningCard({ image, title, description }) {
//   return (
//     <div className=" w-full block h- bg-white rounded-lg shadow-lg overflow-hidden ">
//       <img src={img1} alt={title} className="w-full h-150 object-cover" />

//       {/* Content */}
//       <div className="p-6">
//         <h3 className="text-xl font-semibold mb-2">{title}</h3>
//         <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
//       </div>

//       <div>
//         <p className=" text-center text-orange-400 text-3xl">
//           About Dining Area
//         </p>
//         <p className=" text-2xl">
//           Nestled in the tranquility of ancient woodlands, our dining area
//           offers a refined yet relaxed atmosphere. Guests can savor Nepali,
//           Indian, Asian, and continental cuisines prepared with fresh, organic
//           ingredients, many sourced from our own gardens. With elegant
//           interiors, warm hospitality, and views of the surrounding forest,
//           every meal becomes a memorable experience.
//         </p>
//       </div>
//       <br/>

//       <div>

//       </div>

      
//     </div>
//   );
// }



import React from "react";

import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";

export default function DiningCard({ image, title, description }) {
  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Main image */}
      <img src={img1} alt={title} className="w-full h-150 object-cover" />
      {/* Overlay */}
      <div className="absolute inset-0  bg-opacity-50 flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-white text-4xl md:text-3xl font-bold mb-4">
          Restaurant & Bar
        </h2>
        
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>

      {/* About section */}
      <div className="px-6 pb-6">
        <p className="text-center text-orange-400 text-3xl mb-4">
          About Dining Area
        </p>
        <p className="text-2xl leading-relaxed">
          Nestled in the tranquility of ancient woodlands, our dining area
          offers a refined yet relaxed atmosphere. Guests can savor Nepali,
          Indian, Asian, and continental cuisines prepared with fresh, organic
          ingredients, many sourced from our own gardens. With elegant
          interiors, warm hospitality, and views of the surrounding forest,
          every meal becomes a memorable experience.
        </p>
      </div>

      {/* Image grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-6 pb-6">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Dining area ${index + 1}`}
            className="w-100 h-80 object-cover rounded-lg shadow-md"
          />
        ))}
      </div>
    </div>
  );
}
