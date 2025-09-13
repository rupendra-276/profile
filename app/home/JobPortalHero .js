"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import LinkButton from "../button/Button";
import { StaggeredContainer, AnimatedWrapper } from "../animation/animation";
import {
  Upload,
  FileSearch,
  Briefcase,
  Share2,
  Calendar,
  UserCheck,
} from "lucide-react";

export const featuresData = [
  {
    title: "Upload or Build From Scratch",
    description:
      "Import your existing resume or start fresh with AI-powered templates tailored for job seekers and students.",
    icon: <Upload className="w-7 h-7 text-blue-600" />, // Blue for upload
    buttonName: "Start Upload",
    redirection: "/upload",
  },
  {
    title: "Smart Resume Parser",
    description:
      "Let our AI auto-extract your skills, experiences, and qualifications — no manual input required.",
    icon: <FileSearch className="w-7 h-7 text-green-600" />, // Green for parser
    buttonName: "Parse Resume",
    redirection: "/resume-parser",
  },
  {
    title: "Instant Job Matching",
    description:
      "Discover personalized job and internship listings matched to your profile in real-time.",
    icon: <Briefcase className="w-7 h-7 text-yellow-500" />, // Yellow for jobs
    buttonName: "Find Jobs",
    redirection: "/job-matching",
  },
  {
    title: "Auto-Share to Recruiters",
    description:
      "Use one-click scheduling and smart slot suggestions to book interviews, with real-time chat notifications.",
    icon: <Share2 className="w-7 h-7 text-purple-600" />, // Purple for sharing
    buttonName: "Share Resume",
    redirection: "/share",
  },
  {
    title: "One-Click Interview Setup",
    description:
      "Prove your potential with short assessments that simulate real work scenarios — technical and behavioral.",
    icon: <Calendar className="w-7 h-7 text-pink-500" />, // Pink for scheduling
    buttonName: "Setup Interview",
    redirection: "/interview",
  },
  {
    title: "Take Personality & Skills Assessments",
    description:
      "Prove your potential with short assessments that simulate real work scenarios — technical and behavioral.",
    icon: <UserCheck className="w-7 h-7 text-red-500" />, // Red for assessments
    buttonName: "Take Assessment",
    redirection: "/assessments",
  },
];

const JobPortalHero = () => {

  return (
    <>  
    <div className="min-h-screen bg-[##f9fafc] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-4 items-center">
          {/* Left Side */}
           <div className="space-y-8 transform transition-all duration-1000">
          <AnimatedWrapper
          delay={0.3}
            className="space-y-5"
          >
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
            Build a Standout Profile.{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent">
              Get Matched Instantly. Land Your Next Role.
            </span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed font-[Jost] max-w-lg mt-4">
            Spreads connects job seekers and students to careers with
            AI-matched jobs, verified employer signals, and smart resumes.
          </p>
        </div>

        <LinkButton name="Create Career Profile" href="/signin" />
      </AnimatedWrapper>
    </div>

          {/* Right Side - Feature Cards */}
          <StaggeredContainer className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
            {featuresData.map(
              ({ title, description, icon, buttonName, redirection }, index) => (
                <AnimatedWrapper
                  key={index}
                  delay={index * 0.2}
                  direction="up"                  
                  className="bg-[#f1f2f9] rounded-xl shadow-sm p-6 border border-gray-200 flex flex-col justify-between hover:scale-105 transition-transform duration-300"
                >
                  <div>
                    <div className="mb-4">{icon}</div>
                    <h3 className=" font-semibold mb-2">{title}</h3>
                    <p className="text-gray-600 text-[13px]">{description}</p>
                  </div>
                  {/* <Link
                    href={redirection}
                    className="mt-4 inline-block text-sm font-medium text-blue-600 hover:underline"
                  >
                    {buttonName}
                  </Link> */}
                </AnimatedWrapper>
              )
            )}
          </StaggeredContainer>
        </div>
      </div>
    </div>
    </>
  );
};

export default JobPortalHero;


// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import LinkButton from "../button/Button";
// import {
//   Upload,
//   FileSearch,
//   Briefcase,
//   Share2,
//   Calendar,
//   UserCheck,
// } from "lucide-react";

// const featuresData = [
//   {
//     title: "Upload or Build From Scratch",
//     description:
//       "Import your existing resume or start fresh with AI-powered templates tailored for job seekers and students.",
//     icon: <Upload className="w-6 h-6 text-blue-600" />,
//     buttonName: "Start Upload",
//     redirection: "/upload",
//   },
//   {
//     title: "Smart Resume Parser",
//     description:
//       "Let our AI auto-extract your skills, experiences, and qualifications — no manual input required.",
//     icon: <FileSearch className="w-6 h-6 text-blue-600" />,
//     buttonName: "Parse Resume",
//     redirection: "/resume-parser",
//   },
//   {
//     title: "Instant Job Matching",
//     description:
//       "Discover personalized job and internship listings matched to your profile in real-time.",
//     icon: <Briefcase className="w-6 h-6 text-blue-600" />,
//     buttonName: "Find Jobs",
//     redirection: "/job-matching",
//   },
//   {
//     title: "Auto-Share to Recruiters",
//     description:
//       "Use one-click scheduling and smart slot suggestions to book interviews, with real-time chat notifications.",
//     icon: <Share2 className="w-6 h-6 text-blue-600" />,
//     buttonName: "Share Resume",
//     redirection: "/share",
//   },
//   {
//     title: "One-Click Interview Setup",
//     description:
//       "Prove your potential with short assessments that simulate real work scenarios — technical and behavioral.",
//     icon: <Calendar className="w-6 h-6 text-blue-600" />,
//     buttonName: "Setup Interview",
//     redirection: "/interview",
//   },
//   {
//     title: "Take Personality & Skills Assessments",
//     description:
//       "Prove your potential with short assessments that simulate real work scenarios — technical and behavioral.",
//     icon: <UserCheck className="w-6 h-6 text-blue-600" />,
//     buttonName: "Take Assessment",
//     redirection: "/assessments",
//   },
// ];

// const JobPortalHero = () => {
//   return (
//     <div className="min-h-screen bg-[##f9fafc] py-20 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid lg:grid-cols-2 gap-4 items-center">
//           {/* Left Side */}
//            <div className="space-y-8 transform transition-all duration-1000">
//       <motion.div
//         initial={{ opacity: 0, y:50 }} // start left
//         animate={{ opacity: 1, y: 0 }} // move to normal
//         transition={{ duration: 0.8, ease: "easeOut" }}
//         className="space-y-5"
//       >
//         <div>
//           <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
//             Build a Standout Profile.{" "}
//             <span className="bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent">
//               Get Matched Instantly. Land Your Next Role.
//             </span>
//           </h1>
//           <p className="text-xl text-gray-600 leading-relaxed font-[Jost] max-w-lg mt-4">
//             Spreads connects job seekers and students to careers with
//             AI-matched jobs, verified employer signals, and smart resumes.
//           </p>
//         </div>

//         <LinkButton name="Create Career Profile" href="/signin" />
//       </motion.div>
//     </div>

//           {/* Right Side - Feature Cards */}
//           <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
//             {featuresData.map(
//               ({ title, description, icon, buttonName, redirection }, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 30 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: index * 0.2 }}
//                   whileHover={{ scale: 1.05 }}
//                   className="bg-[#f1f2f9] rounded-xl shadow-sm p-6 border border-gray-200 flex flex-col justify-between"
//                 >
//                   <div>
//                     <div className="mb-4">{icon}</div>
//                     <h3 className=" font-semibold mb-2">{title}</h3>
//                     <p className="text-gray-600 text-[13px]">{description}</p>
//                   </div>
//                   <Link
//                     href={redirection}
//                     className="mt-4 inline-block text-sm font-medium text-blue-600 hover:underline"
//                   >
//                     {buttonName}
//                   </Link>
//                 </motion.div>
//               )
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default JobPortalHero;

