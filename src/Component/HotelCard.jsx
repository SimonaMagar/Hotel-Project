// import React from "react";
// import t from "../assets/t.jpg";
// import m from "../assets/m.jpg";
// import k from "../assets/k.jpg";
// import l from "../assets/l.jpg";
// import s from "../assets/s.jpg";
// import v from "../assets/v.jpg"

// const Rooms = [
//   {
//     id: 1,
//     name: "Deluxe Room",
//     price: "80",
//     image: t,
//   },
//   {
//     id: 2,
//     name: "Deluxe Room",
//     price: "80",
//     image: m,
//   },
//   {
//     id: 3,
//     name: "Deluxe Room",
//     price: "80",
//     image: k,
//   },
//   {
//     id: 4,
//     name: "Deluxe Room",
//     price: "80",
//     image: l,
//   },
//   {
//     id: 6,
//     name: "Deluxe Room",
//     price: "80",
//     image: s,
//   },
//   {
//     id: 6,
//     name: "Deluxe Room",
//     price: "80",
//     image: v,
//   },
// ];

// export default function HotelCard() {
//   return (
//     <div className="grid grid-cols-4">
//       {Rooms.map((el, idx) => (
//         <div key={idx}>
//           <div>
//             <img src={el.image} alt="" />
//           </div>
//           <div>
//             <p>{el.price}</p>
//             <p>{el.name}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// import React from "react";
// import t from "../assets/t.jpg";
// import m from "../assets/m.jpg";
// import k from "../assets/k.jpg";
// import l from "../assets/l.jpg";
// import s from "../assets/s.jpg";
// import v from "../assets/v.jpg";

// const Rooms = [
//   { id: 1, name: "Deluxe Room", price: 80, image: t },
//   { id: 2, name: "Executive Suite", price: 120, image: m },
//   { id: 3, name: "Junior Suite", price: 60, image: k },
//   { id: 4, name: "Family Room", price: 100, image: l },
//   { id: 5, name: "Luxury Room", price: 150, image: s },
//   { id: 6, name: "Presidential Suite", price: 200, image: v },
// ];

// export default function HotelCard() {
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
//       {Rooms.map((room) => (
//         <div
//           key={room.id}
//           className="border rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
//         >
//           <img
//             src={room.image}
//             alt={room.name}
//             className="w-full h-48 object-cover"
//           />
//           <div className="p-4">
//             <p className="text-lg font-semibold">{room.name}</p>
//             <p className="text-gray-600">From ${room.price}/night</p>
//             <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
//               Book Now
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

import React from "react";

import { Link } from "react-router-dom";

import t from "../assets/t.jpg";
import m from "../assets/m.jpg";
import k from "../assets/k.jpg";
import l from "../assets/l.jpg";
import s from "../assets/s.jpg";
import v from "../assets/v.jpg";
import q from "../assets/q.jpg";
const Rooms = [
  { id: 1, name: "Deluxe Room", price: 80, image: t },
  { id: 2, name: "Executive Suite", price: 120, image: m },
  { id: 3, name: "Junior Suite", price: 60, image: k },
  { id: 4, name: "Family Room", price: 100, image: l },
  { id: 5, name: "Luxury Room", price: 150, image: s },
  { id: 6, name: "Presidential Suite", price: 200, image: v },
];

export default function HotelCard() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div>
        <p className=" text-center text-orange-400 text-3xl">
          welcome to our Hotel
        </p>
        <p className=" text-3xl">
          Hotel Gokarna Hotel is nestled on the tranquil hills of Nagarkot,
          offering the perfect escape for those seeking peace, comfort, and
          breathtaking Himalayan views. Surrounded by lush greenery and fresh
          mountain air, Hotel Gokarna Hotel blends modern comfort with a touch
          of traditional Nepali warmth. Experience calm mornings, starry nights,
          and the true essence of mountain living — all from the comfort of your
          home away from home."
        </p>
      </div>
      <br />
      <div className="container mx-auto w-150 border  rounded-lg  ">
        <img src={q} />
      </div>
      <div className="text-center mb-12">
        <p className="text-orange-400 uppercase tracking-widest text-2xl">
          Luxury Experience
        </p>
        <h2 className="text-4xl font-bold mt-2">Rooms & Suites</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {Rooms.map((room) => (
          <div
            key={room.id}
            className="border rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={room.image}
              alt={room.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <p className="text-lg font-semibold">{room.name}</p>
              <p className="text-orange-600">From ${room.price}/night</p>
              {/* <button className="mt-3 bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700">
                Book Now
              </button> */}

              <Link
                to={`/room/${room.id}`}
                className="mt-3 bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 inline-block"
              >
                Book Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
