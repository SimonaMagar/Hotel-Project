// import React from 'react'

// function Footer() {
//   return (
//     <div>Footer</div>
//   )
// }

// export default Footer




import React from "react";
// import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";



export default function Footer() {
  return (
    <footer className="bg-[#B5651D] text-black py-10 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left Section */}
        <div>
          <h2 className="text-xl font-bold">Gokarna Forest Resort</h2>
          <p className="mt-2">Dhulikhel View Villa</p>
          <p>Nagarkot </p>
          <p className="mt-2 text-red-700">+9746991774</p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4 text-2xl">
            <FaYoutube />
            <FaFacebook />
            <FaTiktok />
          </div>
        </div>

        {/* Middle Section */}
        <div>
          <h2 className="text-xl font-bold">Explore</h2>
          <ul className="mt-2 space-y-2">
            <li>
              <a href="/" className="hover: text-black">
                About
              </a>
            </li>
            <li>
              <a href="/rooms-suites" className="hover:text-white-100">
                Rooms & Suites
              </a>
            </li>
            <li>
              <a href="/amenities" className="hover:text-white">
                Amenities
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-white">
                Dining
              </a>
            </li>
            <li>
              <a href="/contact-us" className="hover:text-white">
                Contact Us
              </a>
            </li>
            <li>
              <a href="/gallery" className="hover:text-white">
                Gallery
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:text-white">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h2 className="text-xl font-bold">Contact</h2>
          <p className="mt-2">Diyali Marg, Lazimpat, Kathmandu</p>
          <p className="mt-2">reservation@hotelmysticmountain.com</p>
          <p className="mt-2 text-red-700">+9824780101</p>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center mt-10 border-t border-[#964B00] pt-4 text-sm">
        © {new Date().getFullYear()} Hotel Mystic Mountain. All rights reserved.
      </div>
    </footer>
  );
}

