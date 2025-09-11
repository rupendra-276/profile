"use client";

import React, { useState } from "react";
import LinkButton from "../button/Button";
import { motion } from "framer-motion";


import { Users, Monitor, Search, GraduationCap, School, LayoutDashboard } from "lucide-react";

const services = [
  {
    title: "HRMS",
    icon: <Users className="w-12 h-12 text-blue-600" />,
    description:
      "HRMS software for workforce, payroll, and employee management. Our HRMS helps businesses handle payroll, workforce attendance, and employee data effectively.",
    bgColor: "bg-blue-600",
  },
  {
    title: "IT/ITeS",
    icon: <Monitor className="w-12 h-12 text-green-500" />,
    description:
      "IT and ITeS services with modern technology and business support. We provide IT-enabled solutions, digital services, and technology-driven support systems.",
    bgColor: "bg-green-500",
  },
  {
    title: "Recruitment",
    icon: <Search className="w-12 h-12 text-yellow-500" />,
    description:
      "Recruitment solutions to hire skilled talent quickly and effectively. Our recruitment process ensures the right candidates for your business needs.",
    bgColor: "bg-yellow-500",
  },
  {
    title: "Trainings",
    icon: <GraduationCap className="w-12 h-12 text-pink-500" />,
    description:
      "Corporate and technical training programs for workforce growth. Our training sessions improve skills, enhance productivity, and build stronger teams.",
    bgColor: "bg-pink-500",
  },
  {
    title: "Campus Solutions",
    icon: <School className="w-12 h-12 text-indigo-500" />,
    description:
      "Campus hiring, placement, and engagement programs for fresh talent. We help organizations connect with colleges for skilled workforce recruitment.",
    bgColor: "bg-indigo-500",
  },
  {
    title: "CRM & CMS with Analytics",
    icon: <LayoutDashboard className="w-12 h-12 text-red-500" />,
    description:
      "CRM and CMS tools with inbuilt analytics for smart business growth. Our solutions simplify customer management, content handling, and data insights.",
    bgColor: "bg-red-500",
  },
];





export default function Services() {
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <div className="min-h-screen bg-[#0078cdc9] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
          {/* Left Section */}
          <div className="lg:w-[35%] w-full">
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
              Build a Standout Profile.{" "}
              <span className="text-white">
                Get Matched Instantly. Land Your Next Role.
              </span>
            </h1>
            <p className="text-lg text-gray-800 leading-relaxed font-[jost] max-w-lg mt-4">
              Spreads connects job seekers and students to careers with
              AI-matched jobs, verified employer signals, and smart resumes.
            </p>
            <div className="mt-6">
              <LinkButton name="Create Career Profile" href="signin" />
            </div>
          </div>

          {/* Right Section */}
          <div className="lg:w-[63%] w-full">
            <p className="text-lg mb-6 text-gray-800">
              At Spreads, our AI-powered system helps you discover the perfect
              skill combination for your next career move. Whether you're diving
              into design, jumping into AI, or growing in product management —
              we match real-time hiring data with your interests.
            </p>

           
             <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
            {services.map((service, index) => (
              <motion.div
                key={index}
                delay={index * 0.2}
                className="relative w-full h-72 perspective"
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
              >
                {/* Front side */}
                <motion.div
                  animate={{ rotateY: hoverIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0 backface-hidden flex flex-col items-center justify-center bg-white text-black rounded-sm shadow-lg"
                >
                  <div className="text-4xl mb-3">{service.icon}</div>
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                </motion.div>

                {/* Back side */}
                <motion.div
                  animate={{ rotateY: hoverIndex === index ? 0 : -180 }}
                  transition={{ duration: 0.6 }}
                  className={`absolute inset-0 backface-hidden ${service.bgColor} text-white flex flex-col items-center justify-center rounded-xl shadow-lg`}
                  style={{ transform: "rotateY(180deg)" }}
                >
                  <p className="text-center px-4 mb-3">{service.description}</p>
                  {/* <div>
                    <Link
                      href={service.link}
                      className="flex items-center gap-2 mt-2 hover:border-2 py-0.5 px-2 hover:border-white transition-all duration-100 "
                    >
                      Explore
                      <ArrowRight />
                    </Link>
                  </div> */}
                </motion.div>
              </motion.div>
            ))}
          </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .perspective {
          perspective: 1000px;
        }
      `}</style>
    </div>
  );
}
