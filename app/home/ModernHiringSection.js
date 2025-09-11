// import React from "react";
// import {
//   User,
//   Zap,
//   MessageSquare,
//   Smartphone,
//   CheckCircle,
//   Recycle,
// } from "lucide-react";

// const ModernHiringSection = () => {
//   const features = [
//     {
//       icon: <User className="w-8 h-8 text-white" />,
//       title: "Student Engagement Tools",
//       description:
//         "Showcase your culture, perks, and mission with branded job pages. Use microblog posts, company Q&As, and early application boosts to connect with students directly.",
//     },
//     {
//       icon: <Zap className="w-8 h-8 text-white" />,
//       title: "Smart Applicant Management",
//       description:
//         "Create and publish job or internship listings in just a few clicks. Add eligibility filters, tags, and role-specific questions to target the right student profiles.",
//     },
//     {
//       icon: <MessageSquare className="w-8 h-8 text-white" />,
//       title: "Talent Discovery Boosts",
//       description:
//         "Reach relevant students faster with AI-powered recommendations, trending job highlights, and category-based visibility (e.g. Tech, Design, Marketing).",
//     },
//     {
//       icon: <Smartphone className="w-8 h-8 text-white" />,
//       title: "Mobile-Ready Experience",
//       description:
//         "Post, manage, and review applications from your phone. Students can apply instantly via their mobile profile.",
//     },
//     {
//       icon: <CheckCircle className="w-8 h-8 text-white" />,
//       title: "Instant Job Posting",
//       description:
//         "Create and publish job or internship listings in just a few clicks. Add eligibility filters, tags, and role-specific questions to target the right student profiles.",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-700 via-slate-600 to-teal-600 py-16 px-4">
//       <div className="max-w-7xl mx-auto">
//         {/* Header Section */}
//         <div className="text-center mb-16">
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
//             Built for Modern Hiring — Simple, Smart, and Student-Ready
//           </h1>
//           <p className="text-xl md:text-2xl text-slate-200 max-w-4xl mx-auto leading-relaxed">
//             Attract student talent, post roles in minutes, and manage applicants
//             effortlessly — all in one place.
//           </p>
//         </div>

//         {/* Features Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
//           {/* Top Row - 3 cards */}
//           {features.slice(0, 3).map((feature, index) => (
//             <div
//               key={index}
//               className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl border border-white/20"
//             >
//               <div className="mb-6 flex justify-center">
//                 <div className="bg-white/20 p-4 rounded-xl backdrop-blur-sm">
//                   {feature.icon}
//                 </div>
//               </div>
//               <h3 className="text-xl font-bold text-white mb-4 text-center">
//                 {feature.title}
//               </h3>
//               <p className="text-slate-200 leading-relaxed text-center">
//                 {feature.description}
//               </p>
//             </div>
//           ))}
//         </div>

//         {/* Bottom Row - 2 cards centered */}
//         <div className="flex justify-center mt-8">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
//             {features.slice(3, 5).map((feature, index) => (
//               <div
//                 key={index + 3}
//                 className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl border border-white/20"
//               >
//                 <div className="mb-6 flex justify-center">
//                   <div className="bg-white/20 p-4 rounded-xl backdrop-blur-sm">
//                     {feature.icon}
//                   </div>
//                 </div>
//                 <h3 className="text-xl font-bold text-white mb-4 text-center">
//                   {feature.title}
//                 </h3>
//                 <p className="text-slate-200 leading-relaxed text-center">
//                   {feature.description}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Call to Action */}
//         <div className="text-center mt-16">
//           <button className="bg-white text-slate-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-slate-100 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
//             Get Started Today
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ModernHiringSection;

import React from "react";
import {
  User,
  Zap,
  MessageSquare,
  Smartphone,
  CheckCircle,
  Recycle,
} from "lucide-react";

import LinkButton from "../button/Button";

const ModernHiringSection = () => {
  const features = [
    {
      icon: <User className="w-8 h-8 text-white" />,
      title: "Student Engagement Tools",
      description:
        "Showcase your culture, perks, and mission with branded job pages. Use microblog posts, company Q&As, and early application boosts to connect with students directly.",
    },
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: "Smart Applicant Management",
      description:
        "Create and publish job or internship listings in just a few clicks. Add eligibility filters, tags, and role-specific questions to target the right student profiles.",
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-white" />,
      title: "Talent Discovery Boosts",
      description:
        "Reach relevant students faster with AI-powered recommendations, trending job highlights, and category-based visibility (e.g. Tech, Design, Marketing).",
    },
    {
      icon: <Smartphone className="w-8 h-8 text-white" />,
      title: "Mobile-Ready Experience",
      description:
        "Post, manage, and review applications from your phone. Students can apply instantly via their mobile profile.",
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-white" />,
      title: "Instant Job Posting",
      description:
        "Create and publish job or internship listings in just a few clicks. Add eligibility filters, tags, and role-specific questions to target the right student profiles.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-700 via-slate-600 to-teal-600 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* <div className="inline-block bg-gradient-to-r from-blue-400 to-blue-400 text-transparent bg-clip-text mb-4">
            <span className="text-sm font-semibold tracking-wider uppercase">
              Modern Recruitment Platform
            </span>
          </div> */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Built for Modern Hiring — Simple, Smart, and Student-Ready
          </h1>
          <p className="text-lg md:text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
            Attract student talent, post roles in minutes, and manage applicants
            effortlessly — all in one place.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Top Row - 3 cards */}
          {features.slice(0, 3).map((feature, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-3xl p-6 hover:bg-white/20 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl border border-white/30 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="mb-5 flex justify-center">
                  <div className="bg-gradient-to-br from-blue-400 to-blue-600 p-3 rounded-2xl backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-3 text-center">
                  {feature.title}
                </h3>
                <p className="text-slate-200 leading-relaxed text-center text-sm">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Row - 2 cards centered */}
        <div className="flex justify-center mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            {features.slice(3, 5).map((feature, index) => (
              <div
                key={index + 3}
                className="bg-white/10 backdrop-blur-md rounded-3xl p-6 hover:bg-white/20 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl border border-white/30 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="mb-5 flex justify-center">
                    <div className="bg-gradient-to-br from-blue-400 to-blue-600 p-3 rounded-2xl backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 text-center">
                    {feature.title}
                  </h3>
                  <p className="text-slate-200 leading-relaxed text-center text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
            <LinkButton name="Get Started Today" href="/signin" linkclassname="bg-white !text-slate-700 hover:bg-slate-100 transition-all duration-300  hover:shadow-xl transform hover:!scale-105" />
          
        </div>
      </div>
    </div>
  );
};

export default ModernHiringSection;
