

"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function DigitalHomeSection() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const router = useRouter();

  const cards = [
    {
      id: 1,
      image: "/new.jpg",
      title: "Post roles, manage applicants, and showcase your brand culture.",
      alt: "Team meeting in office discussing past roles",
      route: "/jobpostingmanagement",
    },
    {
      id: 2,
      image: "/img2.jpg",
      title:
        "Share, discover, and connect through reels, updates, and messaging.",
      alt: "Group of friends sharing and connecting through mobile devices",
      route: "/community",
    },
    {
      id: 3,
      image: "/img3.jpg",
      title:
        "Let our intelligent engine match you with the right roles and people.",
      alt: "Two professionals working together on a laptop",
      route: "/trackingSystem",
    },
  ];

  const handleCardClick = (route) => {
    router.push(route);
  };

  return (
    <section className=" py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          <div className="flex justify-center lg:justify-start flex-shrink-0">
            <div className="relative">
              <video
                className="md:w-96 w-80 h-[650] md:h-[750px] object-cover rounded-3xl"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/story.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Right Side - Content and Cards */}
          <div className="space-y-10 flex-1">
            {/* Heading */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium font-[font-jost] text-black leading-tight">
              Find your digital home for career stories, AI-matched jobs, and
              meaningful connections.
            </h2>

            {/* Cards in Separate Rows */}
            <div className="space-y-6 mx-9">
              {cards.map((card, index) => (
                <div
                  key={card.id}
                  className={`group cursor-pointer transition-all duration-300 transform ${
                    hoveredCard === card.id
                      ? "scale-[1.02]"
                      : "hover:scale-[1.01]"
                  } active:scale-95`}
                  onMouseEnter={() => setHoveredCard(card.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onClick={() => handleCardClick(card.route)}
                >
                  <div className=" bg-[#f1f2f972] rounded-2xl p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow duration-300 max-w-2xl">
                    <div className="flex items-center gap-4 md:gap-6">
                      {/* Card Image - Left Side */}
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-xl overflow-hidden">
                          <Image
                            src={card.image}
                            alt={card.alt}
                            width={96}
                            height={96}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                        </div>
                      </div>

                      {/* Card Content - Right Side */}
                      <div className="flex-1 text-left">
                        <p className="text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed text-left">
                          {card.title}
                        </p>
                      </div>

                      {/* Arrow Button - Far Right */}
                      <div className="flex-shrink-0">
                        <div
                          className={`w-10 h-10 md:w-12 md:h-12 bg-blue-500 rounded-full flex items-center justify-center transition-all duration-300 ${
                            hoveredCard === card.id
                              ? "bg-blue-600 transform shadow-lg"
                              : "group-hover:bg-blue-600 group-hover:shadow-lg"
                          }`}
                        >
                          <svg
                            className="w-4 h-4 md:w-5 md:h-5 text-white transform transition-transform duration-300 group-hover:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
