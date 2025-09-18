// import React from 'react'
// import ProfileHeader from './Profileheader';

// export default function Profille() {
//              const user = {
//         name: "Rupendra Vishwakarma",
//         cover: "/profiledefaultcover.jpg",
//         avatar: "/profiledefault.png",
//         headline: "Senior Frontend Developer",
//         location: "Rewa, India",
//         followers: 2847,
//         following: 1523,
//         connections: 500,
//       };
//   return (
//     <div>
//      <ProfileHeader user={user} />
//     </div>
//   )
// }

// "use client"
// import React from 'react'
// import ProfileHeader from './Profileheader';
// import { useState } from 'react';
// import ProfileAbout from './ProfileAbout';
// import ProfileExperience from './ProfileExperience';

// import ProfileLearning from './SkillsLearning';
// import ProfileActivity from './ProfileActivity';
// import EducationSection from './EducationForm';
// import ProjectSection from './Project';
// import CertificationSection from './Certification';
// import JobPreferences from './Jobpreferences';
// import SocialLinks from './SocialLinks';
// import ProfileAnalytics from './ProfileAnalytics';
// import PeopleYouMayKnow from './PeopleYouMayKnow';
// import JoinCommunities from './JoinCommunities';
// import DesignerProfile from './DesignerProfile';
// import { AnimatedWrapper } from '../animation/animation';

// export default function Profille() {
//     const [user, setUser] = useState({
//     name: "Rupendra Vishwakarma",
//     cover: "/profiledefaultcover.jpg",
//     avatar: "/AboutDumImg.jpeg",
//     headline: "Software Engineer | MERN Stack | React, Next.js, Node.js | Python & ML (Learning) | Aspiring AI Engineer",
//     location: "Rewa, India",
//     company: "AmbiSpine Software Company",
//     duration: "Mar 2024 - Sep 2024 • 0 Yr 6 Mos",
//     followers: 2848,
//     connections: 500,
//     about:
//       "Passionate Frontend Developer building performant web apps with React, Next.js and modern UX. Building portfolio projects in Generative AI integrations.",
//       // "",
//     experience: [
//       {
//         role: "Senior Frontend Developer",
//         company: "AmbiSpine Software Company",
//         start: "Mar 2024",
//         end: "Sep 2024",
//         summary: "Led frontend team, shipped UI components and improved performance by 30%.",
//       },
//       {
//         role: "Frontend Developer",
//         company: "Other Co",
//         start: "Jan 2022",
//         end: "Feb 2024",
//         summary: "Built customer-facing dashboards and interactive visualizations.",
//       },
//     ],
//     // experience: [],
//     // skills: ["React", "Next.js", "Tailwind", "TypeScript (learning)", "Figma"],
//     skills: [],
//     projects: [
//       {
//         title: "Generative UI Editor",
//         summary: "A prototype editor that uses LLM prompts to scaffold UI components.",
//         github: "#",
//         demo: "#",
//       },
//       {
//         title: "Billing Dashboard",
//         summary: "SaaS billing dashboard for finance teams (React + Charting).",
//         github: "#",
//       },
//     ],
//     contact: {
//       email: "john.doe@example.com",
//       phone: "+91 98765 43210",
//       website: "https://johndoe.dev",
//     },
//   });

//   const handleUpdate = (payload) => {
//     setUser((u) => ({ ...u, ...payload }));
//   };

//   return (
//    <div className='bg-[#f9f9fa] my-5'>
//  <div className="max-w-7xl mx-auto ">
//   <div className="flex flex-col md:flex-row md:gap-10 items-start">
//     {/* left side */}
//     <AnimatedWrapper direction='left' className='w-[15%] border-r  h-screen border-gray-200'>
//       <div>Home</div>
//       <div>Massage</div>
//       <div>Community</div>
//       <div>Profile </div>
//     </AnimatedWrapper>
//     <div className=" w-full md:w-[60%] ">
//       <ProfileHeader user={user} onUpdate={handleUpdate} />
//       {/* <ProfileActivity /> */}
//       <ProfileAbout about={user.about} />
//       <DesignerProfile />
//       {/* <ProfileExperience experience={user.experience} /> */}
//       {/* <EducationSection /> */}
//       {/* <ProjectSection /> */}
//       {/* <SocialLinks />
//       <CertificationSection /> */}
//       {/* <JobPreferences /> */}
//       <hr className="border-gray-400" />
//     </div>

//     {/* right side */}
//     <div className="w-full md:w-[20%] my-5">
//       <ProfileAnalytics />
//       <PeopleYouMayKnow />
//       <JoinCommunities />
//     </div>
//   </div>
//   </div>
//     </div>

//   )
// }




"use client";
import React, { useState } from "react";
import ProfileHeader from "./Profileheader";
import ProfileAbout from "./ProfileAbout";
import DesignerProfile from "./DesignerProfile";
import ProfileAnalytics from "./ProfileAnalytics";
import PeopleYouMayKnow from "./PeopleYouMayKnow";
import JoinCommunities from "./JoinCommunities";
import { dummyUser } from './Profileheader';

import { GoSidebarCollapse } from "react-icons/go";
import { Home, MessageSquare, Users, User, Menu } from "lucide-react";
import Link from "next/link";

export default function Profille() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const [user, setUser] = useState({
    name: "Rupendra Vishwakarma",
    cover: "/profiledefaultcover.jpg",
    avatar: "/AboutDumImg.jpeg",
    headline:
      "Software Engineer | MERN Stack | React, Next.js, Node.js | Python & ML (Learning) | Aspiring AI Engineer",
    location: "Rewa, India",
    company: "AmbiSpine Software Company",
    duration: "Mar 2024 - Sep 2024 • 0 Yr 6 Mos",
    followers: 2848,
    connections: 500,
    about:
      "Passionate Frontend Developer building performant web apps with React, Next.js and modern UX. Building portfolio projects in Generative AI integrations.",
  });

  const menuItems = [
    { name: "Home", icon: <Home className="w-6 h-6" />, link: "/" },
    { name: "Messages", icon: <MessageSquare className="w-6 h-6" />, link: "/messages" },
    { name: "Community", icon: <Users className="w-6 h-6" />, link: "/community" },
    { name: "Profile", icon: <User className="w-6 h-6" />, link: "/profile" },
  ];

  const handleUpdate = (payload) => {
    setUser((u) => ({ ...u, ...payload }));
  };

  return (
    <div className="bg-[#020718] h-screen overflow-hidden">
      <div className="flex items-start w-full gap-8 relative h-full">
        
        {/* ===== Left Sidebar (Fixed Width) ===== */}
        <div  className={`w-[18%] overflow-y-auto transition-transform  duration-300 border-r border-gray-200 text-white h-full z-20
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-[55%]"}`}>
        <div >
          <div className="p-4 mt-7 space-y-5 text-end">
              {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className={`flex ${isSidebarOpen ? " items-center justify-start" : " justify-end items-end"}  me-6 gap-3 text-white hover:text-blue-600 transition `}
            >
              {item.icon} 
              {isSidebarOpen && <span>{item.name}</span>}
            </Link>
          ))}

          </div>
        </div>

        {/* ===== Toggle Button ===== */}
       


        </div>
         <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className={`absolute top-12 transition-all bg-[#020718] duration-300 z-40 
            p-0.5 rounded-md shadow 
            ${isSidebarOpen ? "left-[16.5%]" : "left-[5%]"}
          `}
        >
          <GoSidebarCollapse className="w-8 h-8 text-white" />
        </button>
        {/* ===== Main Content ===== */}
        <div
          className={`transition-all duration-300 px-4 mt-5 relative h-full 
            ${isSidebarOpen ? "w-[60%] translate-x-0" : "w-[75%] -translate-x-[100px]"} 
          `}
        >
          <div className="h-full overflow-y-auto custom-scroll pr-2">
            <ProfileHeader user={dummyUser} onUpdate={handleUpdate} />
             <ProfileAbout about={user.about} />
            <DesignerProfile /> 
            {/* <hr className="border-gray-400 my-5" /> */}
          </div>
        </div>
        {/* ===== Right Sidebar ===== */}
        <div
          className={`transition-all duration-300 hidden md:block my-10  h-32 md:h-56
            ${isSidebarOpen ? "w-[20%] -translate-x-5" : "w-[28%] -translate-x-25"}
          `}
        > 
          <div className="h-full  border rounded-2xl  border-gray-200 pr-2">
            {/* <ProfileAnalytics />
            <PeopleYouMayKnow />
            <JoinCommunities /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
