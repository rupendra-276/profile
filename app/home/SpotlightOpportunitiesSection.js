"use client";
import React, { useState, useEffect } from "react";

const JobOpportunitiesSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const tags = [
    "Tech & Engineering",
    "Tech & Engineering",
    "Tech & Engineering",
    "Tech & Engineering",
    "Tech & Engineering",
    "Tech & Engineering",
    "Tech & Engineering",
    "Tech & Engineering",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div
          className={`space-y-8 transition-all duration-1000 ease-out ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-12"
          }`}
        >
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Spotlight on
              </span>
              <br />
              <span className="text-gray-800">Opportunities</span>
              <br />
              <span className="text-3xl lg:text-4xl text-gray-600 font-medium">
                Find the right job or internship for you
              </span>
            </h1>

            <p className="text-xl text-gray-600 font-light leading-relaxed">
              Explore High-Credential Jobs for the New Generation
            </p>
          </div>

          <div className="flex space-x-4">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              Explore Opportunities
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-blue-500 hover:text-blue-600 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>

        <div
          className={`transition-all duration-1000 ease-out delay-300 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
          }`}
        >
          <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
            {tags.map((tag, index) => (
              <div
                key={index}
                className={`group relative bg-white/70 backdrop-blur-sm border border-gray-200 rounded-full px-6 py-4 text-center shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 hover:scale-105 ${
                  isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{
                  animationDelay: `${600 + index * 100}ms`,
                  animationFillMode: "both",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Floating Animation */}
                <div className="relative z-10">
                  <span className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors duration-300">
                    {tag}
                  </span>
                </div>

                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500"></div>
              </div>
            ))}
          </div>

          <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 blur-2xl animate-pulse"></div>
          <div
            className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-15 blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default JobOpportunitiesSection;
