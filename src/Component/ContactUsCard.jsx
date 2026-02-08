// import React from "react";
// import img1 from "../assets/img1.jpg";

// export default function ContactUsCard({ image, title, description }) {
//   return (
//     <div className=" w-full block h- bg-white rounded-lg shadow-lg overflow-hidden ">
//       <img src={img1} alt={title} className="w-full h-150 object-cover" />

//       {/* Content */}
//       <div className="p-6">
//         <h3 className="text-xl font-semibold mb-2">{title}</h3>
//         <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
//       </div>
//     </div>
//   );
// }

//

// import React from "react";
// import img9 from "../assets/img9.jpg";

// export default function ContactUsCard() {
//   return (
//     <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
//       {/* Background image */}
//       <img src={img9} alt="Contact Us" className="w-full h-64 object-cover" />

//       {/* Contact section */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
//         {/* Left column: Contact info */}
//         <div className="space-y-4">
//           <h2 className="text-2xl font-bold text-orange-600">Address</h2>
//           <p>Nagarkot (Madan-deupur, Kavre)</p>

//           <h2 className="text-2xl font-bold text-orange-600">Email-Address</h2>
//           <p>reservation@hotelviewvilla.com</p>

//           <h2 className="text-2xl font-bold text-orange-600">Telephone</h2>
//           <p>+977-1-2004945/46/47</p>

//           <h2 className="text-2xl font-bold text-orange-600">
//             Kathmandu City Office
//           </h2>
//           <p>Diyali Marg, Lazimpat, Kathmandu</p>
//           <p>reservation@hotelviewvilla.com</p>
//           <p>+977-1-2004945/46/47</p>
//         </div>

//         {/* Right column: Form */}
//         <div>
//           <h2 className="text-2xl font-bold text-orange-600 mb-6">
//             Get in Touch
//           </h2>
//           <form className="space-y-4">
//             <div className="grid grid-cols-2 gap-4">
//               <input
//                 type="text"
//                 placeholder="First Name"
//                 className="border rounded-lg p-2 w-full"
//               />
//               <input
//                 type="text"
//                 placeholder="Last Name"
//                 className="border rounded-lg p-2 w-full"
//               />
//             </div>
//             <input
//               type="email"
//               placeholder="Email"
//               className="border rounded-lg p-2 w-full"
//             />
//             <input
//               type="tel"
//               placeholder="Mobile No."
//               className="border rounded-lg p-2 w-full"
//             />
//             <textarea
//               placeholder="Your Message"
//               rows="4"
//               className="border rounded-lg p-2 w-full"
//             ></textarea>
//             <button
//               type="submit"
//               className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition"
//             >
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// import React from "react";
// import img9 from "../assets/img9.jpg";

// export default function ContactUsCard() {
//   return (
//     <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
//       {/* Background image */}
//       <img src={img9} alt="Contact Us" className="w-full h-150 object-cover" />

//       {/* Contact section */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
//         {/* Left column: Contact info */}
//         <div className="space-y-4">
//           <h2 className="text-2xl font-bold text-orange-600">Address</h2>
//           <p>Nagarkot (Madan-deupur, Kavre)</p>

//           <h2 className="text-2xl font-bold text-orange-600">Email-Address</h2>
//           <p>reservation@hotelviewvilla.com</p>

//           <h2 className="text-2xl font-bold text-orange-600">Telephone</h2>
//           <p>+977-1-2004945/46/47</p>

//           <h2 className="text-2xl font-bold text-orange-600">
//             Kathmandu City Office
//           </h2>
//           <p>Diyali Marg, Lazimpat, Kathmandu</p>
//           <p>reservation@hotelviewvilla.com</p>
//           <p>+977-1-2004945/46/47</p>
//         </div>

//         {/* Right column: Form wrapped in a box */}
//         <div className="bg-black-50 rounded-lg shadow-md p-6 border-1 ">
//           <h2 className="text-2xl font-bold text-orange-600 mb-6">
//             Get in Touch
//           </h2>
//           <form className="space-y-4">
//             <div className="grid grid-cols-2 gap-4">
//               <input
//                 type="text"
//                 placeholder="First Name"
//                 className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-orange-400"
//               />
//               <input
//                 type="text"
//                 placeholder="Last Name"
//                 className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-orange-400"
//               />
//             </div>
//             <input
//               type="email"
//               placeholder="Email"
//               className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-orange-400"
//             />
//             <input
//               type="tel"
//               placeholder="Mobile No."
//               className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-orange-400"
//             />
//             <textarea
//               placeholder="Your Message"
//               rows="4"
//               className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-orange-400"
//             ></textarea>
//             <button
//               type="submit"
//               className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition"
//             >
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// import React from "react";
// import img1 from "../assets/img1.jpg";

// export default function ContactUsCard() {
//   return (
//     <div className="relative w-full bg-white rounded-lg shadow-lg overflow-hidden">
//       {/* Background image */}
//       <img src={img1} alt="Contact Us" className="w-full h-96 object-cover" />

//       {/* Overlay */}
//       <div className="absolute inset-0  bg-opacity-50 flex flex-col items-center justify-center text-center px-4">
//         <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
//           WE ARE 24/7 OPEN:CONTACT US NOW
//         </h2>
//         <p className="text-orange-400 text-xl md:text-2xl mb-6">
//           CONTACT US
//         </p>
//       </div>
//     </div>
//   );
// }

import React from "react";
import img9 from "../assets/img9.jpg";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
export default function ContactUsCard() {
  return (
    <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Hero section with background image */}
      <div className="relative w-full">
        <img
          src={img9}
          alt="Contact Us"
          className="w-full h-150 object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0  bg-opacity-50 flex flex-col items-center justify-center text-center px-4">
          <h2 className="text-orange-400 text-3xl md:text-3xl font-bold mb-4">
            WE ARE 24/7 OPEN: CONTACT US NOW
          </h2>
          <p className="text-white text-xl md:text-4xl mb-6">CONTACT US</p>
        </div>
      </div>

      {/* Contact section below hero */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
        {/* Left column: Contact info */}
        <div className="space-y-4">
          <FaLocationDot />
          <h2 className="text-2xl font-bold text-orange-600">Address</h2>

          <p>Nagarkot (Madan-deupur, Kavre)</p>
          <MdEmail />

          <h2 className="text-2xl font-bold text-orange-600">Email-Address</h2>
          <p>reservation@hotelviewvilla.com</p>
          <BsFillTelephoneFill />

          <h2 className="text-2xl font-bold text-orange-600">Telephone</h2>
          <p>+977-1-2004945/46/47</p>

          <h2 className="text-2xl font-bold text-orange-600">
            Kathmandu City Office
          </h2>
          <p>Diyali Marg, Lazimpat, Kathmandu</p>
          <p>reservation@hotelviewvilla.com</p>
          <p>+977-1-2004945/46/47</p>
        </div>

        {/* Right column: Form wrapped in a box */}
        <div className="bg-white rounded-lg shadow-lg p-6 border">
          <h2 className="text-2xl font-bold text-orange-600 mb-6">
            Get in Touch
          </h2>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className=" text-balck border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <input
              type="tel"
              placeholder="Mobile No."
              className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-orange-400"
            ></textarea>

            {/* Buttons row */}
            <div className="flex justify-between">
              <button
                type="submit"
                className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
