// "use client";
// import React, { useState } from "react";
// import ExperienceSection from './ProfileExperience';
// import EducationSection from './EducationForm';
// import ProjectSection from './Project';
// import ProfileAbout from './ProfileAbout';

// const DesignerProfile = () => {
//   const [activeTab, setActiveTab] = useState("experience");

//   // Tabs
//   const tabs = [
//     // { id: "overview", label: "Overview" },
//     { id: "experience", label: "Experience" },
//     { id: "education", label: "Education" },
//     { id: "skills", label: "Skills" },
//     { id: "projects", label: "Projects" },
//     { id: "analytics", label: "Analytics" },
//   ];

//   // Experience Data
//   const experiences = [
//     {
//       title: "Senior UX Designer",
//       company: "CreatiVision Studio",
//       date: "Jan 2022 – Present · Pune, Maharashtra",
//       points: [
//         "Designed SaaS experiences with focus on accessibility & usability.",
//         "Built design systems that reduced dev time by 25%.",
//       ],
//     },
//     {
//       title: "UI/UX Designer",
//       company: "PixelCraft Agency",
//       date: "Jul 2019 – Dec 2021 · Bangalore, Karnataka",
//       points: [
//         "Created responsive websites for e-commerce & fintech clients.",
//         "Improved conversion rates by 35% with UX research.",
//       ],
//     },
//   ];

//   // Education Data
//   const education = [
//     {
//       degree: "Bachelor of Design (B.Des)",
//       institute: "National Institute of Design",
//       year: "2015 – 2019",
//     },
//   ];

//   // Skills Data
//   const skills = [
//     { name: "Figma", value: 95 },
//     { name: "Adobe XD", value: 90 },
//     { name: "User Research", value: 88 },
//     { name: "Wireframing & Prototyping", value: 92 },
//     { name: "Design Systems", value: 85 },
//   ];

//   // Projects Data
//   const projects = [
//     {
//       title: "Mobile Banking App (Case Study)",
//       desc: "Designed onboarding, reduced drop-off by 20%.",
//     },
//     {
//       title: "E-commerce Website Redesign",
//       desc: "Increased checkout conversion by 18%.",
//     },
//     {
//       title: "Healthcare App Prototype",
//       desc: "Validated flows with 50+ test users.",
//     },
//   ];

//   // Analytics Data
//   const analytics = [
//     { label: "Projects Delivered", value: "50+" },
//     { label: "Client Industries", value: "10+" },
//     { label: "Client Rating", value: "4.8/5" },
//     { label: "Years Experience", value: "5+" },
//   ];

//   return (
//     <div className=" border border-gray-100  rounded-sm  mt-4  bg-white p-6">
//       {/* Tabs */}
//       <div className="flex space-x-10 border-b  border-gray-400 pb-1  mb-2">
//         {tabs.map((tab) => (
//           <button
//             key={tab.id}
//             onClick={() => setActiveTab(tab.id)}
//             className={`pb-2 capitalize hover:cursor-pointer ${
//               activeTab === tab.id
//                 ? " text-blue-600 font-semibold"
//                 : "text-gray-600" 
//             }`}
//           >
//             {tab.label}
//           </button>
//         ))}
//       </div>

//       {/* Content */}
//       <div>
//         {/* Overview 
//         {activeTab === "overview" && (
          
//           <ProfileAbout />
//         )} */}

//         {/* Experience */}
//         {activeTab === "experience" && (
//          <ExperienceSection />
//         )}

//         {/* Education */}
//         {activeTab === "education" && (
//           // <div>
//           //   <h2 className="text-2xl font-bold mb-4">🎓 Education</h2>
//           //   {education.map((edu, i) => (
//           //     <div key={i} className="p-4 border rounded-lg">
//           //       <h3 className="font-semibold">{edu.degree}</h3>
//           //       <p>{edu.institute}</p>
//           //       <p className="text-sm text-gray-500">{edu.year}</p>
//           //     </div>
//           //   ))}
//           // </div>
//           <EducationSection />
//         )}

//         {/* Skills */}
//         {activeTab === "skills" && (
//           <div>
//             <h2 className="text-2xl font-bold mb-4">⚡ Top Skills</h2>
//             <div className="grid grid-cols-2 gap-6">
//               {skills.map((skill, i) => (
//                 <div key={i}>
//                   <div className="flex justify-between mb-1">
//                     <span className="font-medium">{skill.name}</span>
//                     <span>{skill.value}%</span>
//                   </div>
//                   <div className="w-full bg-gray-200 rounded-full h-2">
//                     <div
//                       className="bg-blue-600 h-2 rounded-full"
//                       style={{ width: `${skill.value}%` }}
//                     ></div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Projects */}
//         {activeTab === "projects" && (
//           // <div>
//           //   <h2 className="text-2xl font-bold mb-4">📂 Projects</h2>
//           //   <ul className="space-y-4">
//           //     {projects.map((project, i) => (
//           //       <li key={i} className="p-4 border rounded-lg">
//           //         <b>{project.title}</b> – {project.desc}
//           //       </li>
//           //     ))}
//           //   </ul>
//           // </div>
//           <ProjectSection />
//         )}

//         {/* Analytics */}
//         {activeTab === "analytics" && (
//           <div>
//             <h2 className="text-2xl font-bold mb-4">📊 Analytics</h2>
//             <ul className="grid grid-cols-2 gap-6">
//               {analytics.map((stat, i) => (
//                 <li key={i} className="p-4 border rounded-lg text-center">
//                   <b>{stat.value}</b>
//                   <p>{stat.label}</p>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default DesignerProfile;

"use client";
import React, { useState } from "react";
import ExperienceSection from './ProfileExperience';
import EducationSection from './EducationForm';
import ProjectSection from './Project';
import ProfileAbout from './ProfileAbout';

const DesignerProfile = () => {
  const [activeTab, setActiveTab] = useState("overview");

  // Tabs
  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "analytics", label: "Analytics" },
  ];

  // Experience Data
  const experiences = [
    {
      title: "Senior UX Designer",
      company: "CreatiVision Studio",
      date: "Jan 2022 – Present · Pune, Maharashtra",
      points: [
        "Designed SaaS experiences with focus on accessibility & usability.",
        "Built design systems that reduced dev time by 25%.",
      ],
    },
    {
      title: "UI/UX Designer",
      company: "PixelCraft Agency",
      date: "Jul 2019 – Dec 2021 · Bangalore, Karnataka",
      points: [
        "Created responsive websites for e-commerce & fintech clients.",
        "Improved conversion rates by 35% with UX research.",
      ],
    },
  ];

  // Education Data
  const education = [
    {
      degree: "Bachelor of Design (B.Des)",
      institute: "National Institute of Design",
      year: "2015 – 2019",
    },
  ];

  // Skills Data
  const skills = [
    { name: "Figma", value: 95 },
    { name: "Adobe XD", value: 90 },
    { name: "User Research", value: 88 },
    { name: "Wireframing & Prototyping", value: 92 },
    { name: "Design Systems", value: 85 },
  ];

  // Projects Data
  const projects = [
    {
      title: "Mobile Banking App (Case Study)",
      desc: "Designed onboarding, reduced drop-off by 20%.",
    },
    {
      title: "E-commerce Website Redesign",
      desc: "Increased checkout conversion by 18%.",
    },
    {
      title: "Healthcare App Prototype",
      desc: "Validated flows with 50+ test users.",
    },
  ];

  // Analytics Data
  const analytics = [
    { label: "Projects Delivered", value: "50+" },
    { label: "Client Industries", value: "10+" },
    { label: "Client Rating", value: "4.8/5" },
    { label: "Years Experience", value: "5+" },
  ];

  return (
    <div className=" border-gray-100  rounded-sm  my-10">
      {/* Tabs */}
      <div className="flex justify-between items-start-end justify-items-start border-b  border-gray-400 pb-1  mb-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`pb-2 capitalize hover:cursor-pointer ${
              activeTab === tab.id
                ? " text-white font-semibold"
                : "text-gray-400" 
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div>

        {activeTab === "overview" && (
          
          <ProfileAbout />
        )}

        {/* Experience */}
        {activeTab === "experience" && (
         <ExperienceSection />
        )}

        {/* Education */}
        {activeTab === "education" && (
          // <div>
          //   <h2 className="text-2xl font-bold mb-4">🎓 Education</h2>
          //   {education.map((edu, i) => (
          //     <div key={i} className="p-4 border rounded-lg">
          //       <h3 className="font-semibold">{edu.degree}</h3>
          //       <p>{edu.institute}</p>
          //       <p className="text-sm text-gray-500">{edu.year}</p>
          //     </div>
          //   ))}
          // </div>
          <EducationSection />
        )}

        {/* Skills */}
        {activeTab === "skills" && (
          <div>
            <h2 className="text-2xl font-bold mb-4">⚡ Top Skills</h2>
            <div className="grid grid-cols-2 gap-6">
              {skills.map((skill, i) => (
                <div key={i}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span>{skill.value}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${skill.value}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Projects */}
        {activeTab === "projects" && (
          // <div>
          //   <h2 className="text-2xl font-bold mb-4">📂 Projects</h2>
          //   <ul className="space-y-4">
          //     {projects.map((project, i) => (
          //       <li key={i} className="p-4 border rounded-lg">
          //         <b>{project.title}</b> – {project.desc}
          //       </li>
          //     ))}
          //   </ul>
          // </div>
          <ProjectSection />
        )}

        {/* Analytics */}
        {activeTab === "analytics" && (
          <div>
            <h2 className="text-2xl font-bold mb-4">📊 Analytics</h2>
            <ul className="grid grid-cols-2 gap-6">
              {analytics.map((stat, i) => (
                <li key={i} className="p-4 border rounded-lg text-center">
                  <b>{stat.value}</b>
                  <p>{stat.label}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default DesignerProfile;

