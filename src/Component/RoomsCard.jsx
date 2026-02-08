// import React from "react";
// import img22 from "../assets/img22.jpg";

// export default function RoomsCard() {
//   return (
//     <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
//       {/* Hero section with background image */}
//       <div className="relative w-full">
//         <img
//           src={img22}
//           alt="Contact Us"
//           className="w-full h-150 object-cover"
//         />

//         {/* Overlay */}
//         <div className="absolute inset-0  bg-opacity-50 flex flex-col items-center justify-center text-center px-4">
//           <h2 className="text-orange-400 text-3xl md:text-3xl font-bold mb-4">
//             LUXURY EXPERIENCE
//           </h2>
//           <p className="text-white text-xl md:text-4xl mb-6">Rooms & Suites</p>
//         </div>
//       </div>
//     </div>
//   );
// }




// import React from "react";
// import img22 from "../assets/img22.jpg";

// export default function RoomsCard() {
//   return (
//     <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
//       {/* Hero section with background image */}
//       <div className="relative w-full">
//         <img src={img22} alt="Rooms" className="w-full h-150 object-cover" />

//         {/* Overlay */}
//         <div className="absolute inset-0  bg-opacity-50 flex flex-col items-center justify-center text-center px-4">
//           <h2 className="text-orange-400 text-3xl md:text-3xl font-bold mb-4">
//             LUXURY EXPERIENCE
//           </h2>
//           <p className="text-white text-xl md:text-4xl mb-6">Rooms & Suites</p>
//         </div>
//       </div>

//       {/* Content section */}
//       <div className="p-6 text-center">
//         <h3 className="text-2xl font-semibold text-gray-800 mb-4">
//           HOTEL VIEW VILLA
//         </h3>
//         <p className="text-gray-600 mb-6">
//           Indulge in comfort at our hotel. Stylishly designed rooms with modern
//           amenities including Wi-Fi, ensuring a relaxing stay. Immerse yourself
//           in a welcoming atmosphere, complemented by attentive service for an
//           unforgettable experience. Beautiful design with glamorous windows and
//           modern furnishings.
//         </p>
//         <button className="bg-orange-400 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-500 transition">
//           Book Now
//         </button>
//       </div>
//     </div>
//   );
// }


// import React from "react";
// import img22 from "../assets/img22.jpg";

// export default function RoomsCard() {
//   return (
//     <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
//       {/* Hero section with background image */}
//       <div className="relative w-full">
//         <img src={img22} alt="Rooms" className="w-full h-150 object-cover" />

//         {/* Overlay */}
//         <div className="absolute inset-0  bg-opacity-50 flex flex-col items-center justify-center text-center px-4">
//           <h2 className="text-orange-400 text-3xl md:text-3xl font-bold mb-4">
//             LUXURY EXPERIENCE
//           </h2>
//           <p className="text-white text-xl md:text-4xl mb-6">Rooms & Suites</p>
//         </div>
//       </div>

//       {/* Content section */}
//       <div className="p-6 text-center">
//         <h3 className="text-1xl font-semibold text-orange-500 mb-4">
//           GOKARNA FOREST RESORT
//         </h3>
//         {/* Content section */}
        
//         <h4 className="text-3xl font-semibold text-gray-800 mb-4">
//           Our Rooms
//         </h4>
//         <p className="text-gray-600 mb-6">
//           Indulge in comfort at our resort. Stylishly designed rooms with modern
//           amenities including Wi-Fi, ensuring a relaxing stay. Immerse yourself
//           in a welcoming atmosphere, complemented by attentive service for an
//           unforgettable experience. Beautiful design with glamorous windows and
//           modern furnishings.
//         </p>
//         <button className="bg-orange-400 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-500 transition">
//           Book Now
//         </button>

//       </div>

      
//     </div>
//   );
// }



import React from "react";
import img22 from "../assets/img22.jpg";
import m from "../assets/m.jpg"
import k from "../assets/k.jpg";
import l from "../assets/l.jpg";
import s from "../assets/s.jpg";
import v from "../assets/v.jpg";
import t from "../assets/t.jpg";





export default function RoomsCard() {
  return (
    <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Hero section with background image */}
      <div className="relative w-full">
        <img src={img22} alt="Rooms" className="w-full h-150 object-cover" />

        {/* Overlay */}
        <div className="absolute inset-0 bg-opacity-50 flex flex-col items-center justify-center text-center px-4">
          <h2 className="text-orange-400 text-3xl md:text-3xl font-bold mb-4">
            LUXURY EXPERIENCE
          </h2>
          <p className="text-white text-xl md:text-4xl mb-6">Rooms & Suites</p>
        </div>
      </div>

      {/* Content section */}
      <div className="p-6 text-center">
        <h3 className="text-1xl font-semibold text-orange-500 mb-4">
          GOKARNA FOREST RESORT
        </h3>

        <h4 className="text-3xl font-semibold text-gray-800 mb-4">Our Rooms</h4>
        <p className="text-gray-600 mb-6">
          Indulge in comfort at our resort. Stylishly designed rooms with modern
          amenities including Wi-Fi, ensuring a relaxing stay. Immerse yourself
          in a welcoming atmosphere, complemented by attentive service for an
          unforgettable experience. Beautiful design with glamorous windows and
          modern furnishings.
        </p>
        <button className="bg-orange-400 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-500 transition">
          Book Now
        </button>
      </div>

      {/* Images section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        {/* Executive Suite */}
        <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
          <img
            src={m}
            alt="Executive Suite"
            className="w-full h-56 object-cover"
          />
          <div className="p-4 text-center">
            <h5 className="text-lg font-semibold text-gray-800">
              Executive Suite Room
            </h5>
            <p className="text-orange-500 font-bold">FROM $400/NIGHT</p>
          </div>
        </div>

        {/* Deluxe Suite */}
        <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
          <img
            src={k}
            alt="Deluxe Suite"
            className="w-full h-56 object-cover"
          />
          <div className="p-4 text-center">
            <h5 className="text-lg font-semibold text-gray-800">
              Deluxe Suite Room
            </h5>
            <p className="text-orange-500 font-bold">FROM $300/NIGHT</p>
          </div>
        </div>

        {/* Junior Suite */}
        <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
          <img
            src={l}
            alt="Junior Suite"
            className="w-full h-56 object-cover"
          />
          <div className="p-4 text-center">
            <h5 className="text-lg font-semibold text-gray-800">
              Junior Suite Room
            </h5>
            <p className="text-orange-500 font-bold">FROM $200/NIGHT</p>
          </div>
        </div>
        {/* Premium Deluxe Villa */}
        <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
          <img
            src={s}
            alt="Premium Deluxe Villa"
            className="w-full h-56 object-cover"
          />
          <div className="p-4 text-center">
            <h5 className="text-lg font-semibold text-gray-800">
              Premium Room
            </h5>
            <p className="text-orange-500 font-bold">FROM $135/NIGHT</p>
          </div>
        </div>

        {/* Deluxe Villa Room */}
        <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
          <img
            src={v}
            alt="Deluxe Villa Room"
            className="w-full h-56 object-cover"
          />
          <div className="p-4 text-center">
            <h5 className="text-lg font-semibold text-gray-800">
              Family Room
            </h5>
            <p className="text-orange-500 font-bold">FROM $110/NIGHT</p>
          </div>
        </div>

        {/* Deluxe Villa Room */}
        <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
          <img
            src={t}
            alt="Deluxe Villa Room"
            className="w-full h-56 object-cover"
          />
          <div className="p-4 text-center">
            <h5 className="text-lg font-semibold text-gray-800">
              Deluxe Room
            </h5>
            <p className="text-orange-500 font-bold">FROM $110/NIGHT</p>
          </div>
        </div>
      </div>
    </div>
  );
}

