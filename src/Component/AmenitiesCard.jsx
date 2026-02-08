// import React from "react";
// import img10 from "../assets/img10.jpg";

// export default function AmenitiesCard() {
//   return (
//     <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
//       {/* Hero section with background image */}
//       <div className="relative w-full">
//         <img
//           src={img10}
//           alt="Contact Us"
//           className="w-full h-150 object-cover"
//         />

//         {/* Overlay */}
//         <div className="absolute inset-0  bg-opacity-50 flex flex-col items-center justify-center text-center px-4">
//           <h2 className="text-orange-400 text-3xl md:text-3xl font-bold mb-4">
//             Gokarna Forest Resort
//           </h2>
//           <p className="text-white text-xl md:text-4xl mb-6">
//             Our Facilities & Activities
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// import React from "react";
// import img10 from "../assets/img10.jpg";

// export default function AmenitiesCard() {
//   return (
//     <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
//       {/* Hero section with background image */}
//       <div className="relative w-full">
//         <img
//           src={img10}
//           alt="Resort Facilities"
//           className="w-full h-150 object-cover"
//         />

//         {/* Overlay */}
//         <div className="absolute inset-0  bg-opacity-50 flex flex-col items-center justify-center text-center px-4">
//           <h2 className="text-orange-400 text-3xl md:text-3xl font-bold mb-4">
//             Gokarna Forest Resort
//           </h2>
//           <p className="text-white text-xl md:text-4xl mb-6">
//             Our Facilities & Activities
//           </p>
//         </div>
//       </div>

//       {/* Content section */}
//       <div className="p-6 space-y-6">
//         <div>
//           <h3 className="text-2xl font-semibold text-gray-800 mb-2">
//             Endless Recreation
//           </h3>
//           <p className="text-gray-600 leading-relaxed">
//             Experience endless recreation at our resort, where every moment is
//             an adventure waiting to unfold. From invigorating outdoor activities
//             to relaxing leisure facilities, there’s something for everyone to
//             enjoy. Whether you’re seeking thrill or relaxation, our diverse
//             recreation options ensure an unforgettable stay.
//           </p>
//         </div>

//         <div>
//           <h3 className="text-2xl font-semibold text-gray-800 mb-2">
//             Meetings & Events
//           </h3>
//           <p className="text-gray-600 leading-relaxed">
//             People don’t just come to Gokarna Forest Resort for pleasure —
//             sometimes, they also bring work along. Office work amid pristine
//             surroundings does not actually feel like work. From seminars to
//             meetings, our well-designed and equipped hall is ideal to fulfill
//             your requirements.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";
import img10 from "../assets/img10.jpg";
import img11 from "../assets/img11.jpg";
import img12 from "../assets/img12.jpg";
import img13 from "../assets/img13.jpg";
import img14 from "../assets/img14.jpg";
import img15 from "../assets/img15.jpg";
import img16 from "../assets/img16.jpg";

export default function AmenitiesCard() {
  return (
    <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Hero section */}
      <div className="relative w-full">
        <img
          src={img10}
          alt="Resort Facilities"
          className="w-full h-64 md:h-150 object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0  bg-opacity-50 flex flex-col items-center justify-center text-center px-4">
          <h2 className="text-orange-400 text-3xl md:text-4xl font-bold mb-2">
            Gokarna Forest Resort
          </h2>
          <p className="text-white text-lg md:text-2xl">
            Our Facilities & Activities
          </p>
        </div>
      </div>

      {/* Content section */}
      <div className="p-6 space-y-8">
        {/* Endless Recreation (full width) */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">
            Endless Recreation
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Experience endless recreation at our resort, where every moment is
            an adventure waiting to unfold. From invigorating outdoor activities
            to relaxing leisure facilities, there’s something for everyone to
            enjoy. Whether you’re seeking thrill or relaxation, our diverse
            recreation options ensure an unforgettable stay.
          </p>
        </div>

        {/* Meetings & Events (image left, text right) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Left side: image */}
          <img
            src={img11}
            alt="Meeting Hall"
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />

          {/* Right side: text */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Meetings & Events
            </h3>
            <p className="text-gray-600 leading-relaxed">
              People don’t just come to Gokarna Forest Resort for pleasure —
              sometimes, they also bring work along. Office work amid pristine
              surroundings does not actually feel like work. From seminars to
              meetings, our well-designed and equipped hall is ideal to fulfill
              your requirements.
            </p>
          </div>
        </div>
      </div>
      {/* Swimming Pool (text left, image right) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Left side: text */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">
            Swimming Pool
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Dive into serenity at our unique temperature controlled indoor
            swimming pool, nestled in the peaceful Gokarna area. Designed for
            comfort and relaxation, it offers the perfect retreat after a day of
            exploration or a rejuvenating workout.
          </p>
        </div>

        {/* Right side: image */}
        <img
          src={img12}
          alt="Swimming Pool"
          className="w-full h-64 md:h-80 object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Meetings & Events (image left, text right) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Left side: image */}
        <img
          src={img13}
          alt="Meeting Hall"
          className="w-full h-64 object-cover rounded-lg shadow-md"
        />

        {/* Right side: text */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Spa</h3>
          <p className="text-gray-600 leading-relaxed">
            At Harmony Spa, every element is crafted to inspire tranquility,
            balance, and renewal. Step into a sanctuary of calm and indulge in
            soothing treatments performed by our skilled therapists, designed to
            nurture both body and mind.
          </p>
        </div>
      </div>
      {/* Swimming Pool (text left, image right) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Left side: text */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">
            Exclusive Golf Course
          </h3>
          <p className="text-gray-600 leading-relaxed">
            At the heart of the resort lies an 18-hole golf course, one of South
            Asia’s finest. Designed by renowned architects, the course meanders
            through the forest, offering breathtaking views and a challenging
            game. Whether you’re an avid golfer or a beginner, the course
            promises an unforgettable experience.
          </p>
        </div>

        {/* Right side: image */}
        <img
          src={img14}
          alt="Swimming Pool"
          className="w-full h-64 md:h-80 object-cover rounded-lg shadow-md"
        />
      </div>

      {/*Cart Tour (image left, text right) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Left side: image */}
        <img
          src={img15}
          alt="Cart Tour"
          className="w-full h-64 object-cover rounded-lg shadow-md"
        />

        {/* Right side: text */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">
            Cart Tour
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Enjoy a cart tour of one of the best golf courses in South East
            Asia. The cart trip is a popular and highly recommended activity. It
            is a wonderful way to enjoy the harmonious coexistence of the golf
            course and the Gokarna Forest.
          </p>
        </div>
      </div>
      {/* Swimming Pool (text left, image right) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Left side: text */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">
            Horse Riding
          </h3>
          <p className="text-gray-600 leading-relaxed">
            See the splendor of the Gokarna Forest in a very unique way by
            riding a horse through the resort. Enjoy the tour as a knowledgeable
            guide gives you information about the locations you travel through
            as you ride into the forest’s heart on horseback while taking in the
            gorgeous view. This resort has 16 horses and ponies. Pony rides are
            another option for kids less than eight.
          </p>
        </div>

        {/* Right side: image */}
        <img
          src={img16}
          alt="Swimming Pool"
          className="w-full h-64 md:h-80 object-cover rounded-lg shadow-md"
        />
      </div>
      <br/>
    </div>
    
  );
}
