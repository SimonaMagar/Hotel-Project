import React from "react";
import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";

const NavLinks = [
  {
    title: "About",
    url: "/about",
  },

  {
    title: "Rooms",
    url: "/rooms",
  },

  {
    title: "Amenities",
    url: "/amenities",
  },
  {
    title: "Dining",
    url: "/dining",
  },
  {
    title: "ContactUs",
    url: "/contactus",
  },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header>
      <div className="flex justify-center gap-4 items-center bg-[#8B4513]  px-2 py-3">
        {/* desktop navbar */}
        <div className="hidden md:flex gap-6 ">
          {NavLinks.map((el, idx) => (
            <a
              href={el.url}
              key={idx}
              className="font-medium text-white hover:text-white transition"
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
        <div
          className="flex justify-center gap-4 items-center 
                    bg-white/80 border border-gray-300 
                    rounded-md px-6 py-2 shadow-md w-fit mx-auto"
        >
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
