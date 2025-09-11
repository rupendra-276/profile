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

"use client"
import React from 'react'
import ProfileHeader from './Profileheader';
import { useState } from 'react';
import ProfileAbout from './ProfileAbout';
import ProfileExperience from './ProfileExperience';
import ProfileSkills from './ProfileSkills';
import ProfileContact from './ProfileContact';
import ProfileCompletion from './ProfileCompletion';
import ProfileLearning from './ProfileLearning';
import ProfileActivity from './ProfileActivity';
import EducationSection from './EducationForm';

export default function Profille() {
    const [user, setUser] = useState({
    name: "Rupendra Vishwakarma",
    cover: "/profiledefaultcover.jpg",
    avatar: "/AboutDumImg.jpeg",
    headline: "Software Engineer | MERN Stack | React, Next.js, Node.js | Python & ML (Learning) | Aspiring AI Engineer",
    location: "Rewa, India",
    company: "AmbiSpine Software Company",
    duration: "Mar 2024 - Sep 2024 • 0 Yr 6 Mos",
    followers: 2848,
    connections: 500,
    about:
      "Passionate Frontend Developer building performant web apps with React, Next.js and modern UX. Building portfolio projects in Generative AI integrations.",
      // "",
    experience: [
      {
        role: "Senior Frontend Developer",
        company: "AmbiSpine Software Company",
        start: "Mar 2024",
        end: "Sep 2024",
        summary: "Led frontend team, shipped UI components and improved performance by 30%.",
      },
      {
        role: "Frontend Developer",
        company: "Other Co",
        start: "Jan 2022",
        end: "Feb 2024",
        summary: "Built customer-facing dashboards and interactive visualizations.",
      },
    ],
    // experience: [],
    // skills: ["React", "Next.js", "Tailwind", "TypeScript (learning)", "Figma"],
    skills: [],
    projects: [
      {
        title: "Generative UI Editor",
        summary: "A prototype editor that uses LLM prompts to scaffold UI components.",
        github: "#",
        demo: "#",
      },
      {
        title: "Billing Dashboard",
        summary: "SaaS billing dashboard for finance teams (React + Charting).",
        github: "#",
      },
    ],
    contact: {
      email: "john.doe@example.com",
      phone: "+91 98765 43210",
      website: "https://johndoe.dev",
    },
  });

  const handleUpdate = (payload) => {
    setUser((u) => ({ ...u, ...payload }));
  };

  return (
    <div>
     {/* <ProfileHeader user={user} />   */}
      <div className="max-w-6xl mx-auto space-y-6">
        <ProfileHeader user={user} onUpdate={handleUpdate} />
        <ProfileActivity />
         <ProfileAbout about={user.about} />
         <ProfileExperience experience={user.experience} />
         <EducationSection />
        {/* Main Content */}
        <hr className="border-gray-400" />
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-2 md:px-0"> */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* <div className="space-y-6 border-r border-gray-400 mx-2 px-2">
            <ProfileCompletion />
            <ProfileContact contact={user.contact} />
            <ProfileSkills skills={user.skills} onSkillsChange={(s) => setUser((u) => ({ ...u, skills: s }))} />

          </div> */}

          <div className="md:col-span-2 space-y-6">
            {/* <ProfileAbout about={user.about} /> */}
            {/* <ProfileExperience experience={user.experience} /> */}
            <ProfileLearning />
          </div>

          
        </div>
      </div> 
    </div>
  )
}

