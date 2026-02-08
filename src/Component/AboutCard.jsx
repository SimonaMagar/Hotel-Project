// import React from "react";
import img50 from "../assets/img50.jpg";   // main hero image for Gokarna Forest Resort
import img30 from "../assets/img30.jpg"; 

import img31 from "../assets/img31.jpg"; 
import img32 from "../assets/img32.jpg"; 
import img33 from "../assets/img33.jpg"; 
import img34 from "../assets/img34.jpg"; 


const cards = [{ id: 1, image: img30 }];

function AboutCard() {
  return (
    <div className="w-full">
      {cards.map((card) => (
        <div key={card.id}>
          {/* Hero Image */}
          <div>
            <img
              src={card.image}
              className="w-full block h-150 object-cover"
              alt="Gokarna Forest Resort"
            />
            {/* Overlay */}
            <div className="absolute inset-0  bg-opacity-50 flex flex-col items-center justify-center text-center px-4">
              <h2 className="text-orange-400 text-3xl md:text-2xl font-bold mb-2">
                EXPEREINCE TIMELESS ELEGANCE AND UNFORGETABLE MOMENTS
              </h2>
              <p className="text-white text-lg md:text-3xl">
                About Gokarna Forest Resort
              </p>
            </div>
          </div>
          <br />

          {/* Intro Section */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Text Section – Left */}
            <section className="md:w-1/2 text-justify">
              <p className="text-gray-700">
                At Gokarna Forest Resort Kathmandu, we take pride in offering a
                rare blend of natural tranquility and modern luxury. Nestled
                within the ancient Gokarna Forest, the resort provides a
                peaceful escape just minutes away from the vibrant city of
                Kathmandu.
              </p>
              <br />
              <p>
                Surrounded by centuries-old trees and rich wildlife, the resort
                features spacious rooms, world-class amenities, and personalized
                service. Whether you’re here for leisure, wellness, or business,
                every detail is designed to create a retreat where comfort meets
                nature.
              </p>
              <br />
              <p>
                From rejuvenating spa treatments and fine dining to golf and
                outdoor adventures, Gokarna Forest Resort offers experiences
                that go beyond expectations. It is more than a place to stay —
                it is a destination where heritage, hospitality, and harmony
                with nature come together.
              </p>
            </section>

            {/* Image Section – Right */}
            <div className="md:w-1/2 flex justify-center">
              <img
                src={img50}
                className="w-full h-auto rounded-lg shadow-lg"
                alt="Gokarna Forest Resort Kathmandu"
              />
            </div>
          </div>

          {/* History Section */}
          <div className="container mx-auto px-6 py-16">
            <div className="flex flex-col md:flex-row gap-12 items-start">
              {/* LEFT: Image Cards */}
              <div className="md:w-1/2 grid grid-cols-2 gap-6">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={img30}
                    alt="Gokarna History 1"
                    className="w-full h-40 object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={img31}
                    alt="Gokarna History 2"
                    className="w-full h-40 object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={img31}
                    alt="Gokarna History 3"
                    className="w-full h-40 object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={img32}
                    alt="Gokarna History 4"
                    className="w-full h-40 object-cover"
                  />
                </div>
              </div>

              {/* RIGHT: History Text */}
              <div className="md:w-1/2">
                <h2 className="text-3xl font-semibold mb-6">Our History</h2>
                <p className="text-gray-700 leading-relaxed text-justify">
                  Gokarna Forest Resort carries a legacy deeply rooted in
                  Nepal’s cultural and natural heritage. Once a royal hunting
                  ground, the forest has been preserved for centuries and now
                  serves as the serene backdrop for the resort. Established to
                  combine luxury hospitality with environmental conservation,
                  the resort has become a landmark destination for travelers
                  seeking both relaxation and adventure. Today, it continues to
                  honor its historic setting while offering modern comforts,
                  making every stay a journey into nature, tradition, and
                  tranquility.
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AboutCard;
