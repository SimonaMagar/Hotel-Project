// import { useParams } from "react-router-dom";

// export default function RoomDetail() {
//   const { id } = useParams();

//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold">Room Details</h1>
//       <p>Showing details for room #{id}</p>
//       {/* Later you can fetch room info by id and display name, price, image */}
//     </div>
//   );
// }



// import { useParams } from "react-router-dom";
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

// export default function RoomDetail() {
//   const { id } = useParams(); // get room id from URL
//   const room = Rooms.find((r) => r.id === parseInt(id));

//   if (!room) {
//     return <p className="p-6 text-red-600">Room not found.</p>;
//   }

//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       <h1 className="text-4xl font-bold mb-4">{room.name}</h1>
//       <img
//         src={room.image}
//         alt={room.name}
//         className="w-full h-96 object-cover rounded-lg shadow-md mb-6"
//       />
//       <p className="text-orange-600 text-xl mb-4">
//         From ${room.price}/night
//       </p>
//       <p className="text-gray-700 mb-6">
//         Experience the comfort of our {room.name}. This room offers modern
//         amenities, cozy interiors, and breathtaking views — perfect for your
//         stay.
//       </p>

//       {/* Example booking form */}
//       <form className="space-y-4">
//         <div>
//           <label className="block text-gray-700">Name</label>
//           <input
//             type="text"
//             className="w-100 border rounded px-3 py-2"
//             placeholder="Enter your name"
//           />
//         </div>
//         <div>
//           <label className="block text-gray-700">Email</label>
//           <input
//             type="email"
//             className="w-100 border rounded px-3 py-2"
//             placeholder="Enter your email"
//           />
//         </div>
//         <div>
//           <label className="block text-gray-700">Check-in Date</label>
//           <input type="date" className="w-100 border rounded px-3 py-2" />
//         </div>
//         <div>
//           <label className="block text-gray-700">Check-out Date</label>
//           <input type="date" className="w-100 border rounded px-3 py-2" />
//         </div>
//         <button className="bg-orange-600 text-white px-6 py-2 rounded hover:bg-orange-700">
//           Confirm Booking
//         </button>
//       </form>
//     </div>
//   );
// }




import { useParams } from "react-router-dom";
import t from "../assets/t.jpg";
import m from "../assets/m.jpg";
import k from "../assets/k.jpg";
import l from "../assets/l.jpg";
import s from "../assets/s.jpg";
import v from "../assets/v.jpg";

const Rooms = [
  { id: 1, name: "Deluxe Room", price: 80, image: t },
  { id: 2, name: "Executive Suite", price: 120, image: m },
  { id: 3, name: "Junior Suite", price: 60, image: k },
  { id: 4, name: "Family Room", price: 100, image: l },
  { id: 5, name: "Luxury Room", price: 150, image: s },
  { id: 6, name: "Presidential Suite", price: 200, image: v },
];

export default function RoomDetail() {
  const { id } = useParams();
  const room = Rooms.find((r) => r.id === parseInt(id));

  if (!room) {
    return <p className="p-6 text-red-600">Room not found.</p>;
  }

  return (
    <div className="max-w-6xl mx-auto p-8 bg-white rounded-lg shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left side: Room details */}
        <div>
          <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
            {room.name}
          </h1>
          <img
            src={room.image}
            alt={room.name}
            className="w-full h-[400px] object-cover rounded-lg shadow-md mb-6"
          />
          <p className="text-orange-600 text-2xl font-semibold mb-4">
            From ${room.price}/night
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Experience the comfort of our{" "}
            <span className="font-semibold">{room.name}</span>. This room offers
            modern amenities, cozy interiors, and breathtaking views — perfect
            for your stay at Gokarna Forest Resort.
          </p>
        </div>

        {/* Right side: Booking form */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-md border-0">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Book Your Stay
          </h2>
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2 ">
                Name
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 focus:outline-none"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 focus:outline-none"
                placeholder="Enter your email"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Check-in Date
                </label>
                <input
                  type="date"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Check-out Date
                </label>
                <input
                  type="date"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 focus:outline-none"
                />
              </div>
            </div>
            <button className="w-full bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition">
              Confirm Booking
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
