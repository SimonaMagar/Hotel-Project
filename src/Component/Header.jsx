// import React from "react";
// import { useState } from "react";
// import { CiMenuBurger } from "react-icons/ci";
// // import {CiMenuBurger} from "react-icons/ci";
// const Navlinks = [
//   {
//     title: "Home",
//     url: "/",
//   },

//   {
//     title: "About",
//     url: "/about",
//   },
//   {
//     title: "Contact",
//     url: "/contact",
//   },
//   {
//     title: "Services",
//     url: "/service",
//   },
// ];

// export default function Header() {
//   // const [isOpen, setIsOpen] = useState(false);
//   return (
//     <div className="flex justify-center gap-4 items-center bg-pink-500">
//       {Navlinks.map((el, idx) => (
//         <a
//           href={el.url}
//           key={idx}
//           className="font-medium hover:text-white transition"
//         >
//           {el.title}
//         </a>
//       ))}
//     </div>
//   );
// }
import React from "react";
import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";


const NavLinks = [
  {
    title: "About",
    url: "/",
  },

  {
    title: "Rooms & Suites",
    url: "/rooms & suites",
  },

  {
    title: "Amenities",
    url: "/amenities",
  },
  {
    title: "Dining",
    url: "/services",
  },
  {
    title: "Contact Us",
    url: "/contact us",
  },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header>
      <div className="flex justify-center gap-4 items-center bg-blue-200 border-2">
        {/* desktop navbar */}
        <div className="hidden md:flex gap-6 ">
          {NavLinks.map((el, idx) => (
            <a
              href={el.url}
              key={idx}
              className="font-medium hover:text-white transition"
            >
              {el.title}
            </a>
          ))}
        </div>
      </div>
      <button
        className="md:hidden text-2xl "
        onClick={() => setIsOpen(!isOpen)}
      >
        <CiMenuBurger />
      </button>
      {/* mobile navbar */}
      {isOpen && (
        <div className="md:hidden flex flex-col ">
          {NavLinks.map((el, idx) => (
            <a
              href={el.url}
              key={idx}
              className="font-medium hover:text-white transition"
              onClick={() => setIsOpen(false)}
            >
              {el.title}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
