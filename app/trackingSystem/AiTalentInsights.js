


// import React, { useState, useEffect } from "react";
// import {
//   Users,
//   FileText,
//   ClipboardCheck,
//   Target,
//   Brain,
//   TrendingUp,
//   Sparkles,
//   ChevronRight,
//   Play,
//   Award,
//   Zap,
//   Star,
// } from "lucide-react";
// import LinkButton from '../button/Button';
// const AiTalentInsights = () => {
//   const [activeFeature, setActiveFeature] = useState(0);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//     const interval = setInterval(() => {
//       setActiveFeature((prev) => (prev + 1) % 4);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   const features = [
//     {
//       icon: <Brain className="w-6 h-6" />,
//       title: "AI Resume Analysis",
//       description: "Smart matching beyond keywords",
//       stat: "95% Accuracy",
//     },
//     {
//       icon: <Users className="w-6 h-6" />,
//       title: "Team Collaboration",
//       description: "Real-time hiring workflow",
//       stat: "3x Faster",
//     },
//     {
//       icon: <Target className="w-6 h-6" />,
//       title: "Smart Pipeline",
//       description: "Automated candidate tracking",
//       stat: "50% Efficiency",
//     },
//     {
//       icon: <ClipboardCheck className="w-6 h-6" />,
//       title: "Auto Onboarding",
//       description: "Seamless offer to hire process",
//       stat: "90% Automated",
//     },
//   ];



//   return (
//     <div>
//     <div className="min-h-screen bg-slate-900 relative overflow-hidden bg-[url(/Aitalentmatch.png)] bg-no-repeat bg-cover  bg-center flex items-center animate-backgroundMove">
//       <div className="relative  z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           <div className="text-center lg:text-left">
//             <div
//               className={`transform transition-all duration-1000 ${
//                 isVisible
//                   ? "translate-x-0 opacity-100"
//                   : "-translate-x-10 opacity-0"
//               }`}
//             >
//               <div className="inline-flex items-center space-x-2 bg-blue-500/20 backdrop-blur-sm text-blue-300 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-blue-400/30">
//                 <Sparkles className="w-4 h-4" />
//                 <span>AI-Powered Recruitment</span>
//               </div>

//               <h1 className="text-4xl lg:text-6xl font-black text-white mb-6 leading-tight">
//                 <span className="block">AI-Matched</span>
//                 <span className="text-blue-400">Talent Insights</span>
//               </h1>

//               <p className="text-lg lg:text-xl text-blue-100 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
//                 Surface perfect candidates with advanced AI that analyzes beyond
//                 resumes—understanding context, skills, and potential for
//                 exceptional matches.
//               </p>
//                 <LinkButton name="Start Free Trial" href="/contact" icon={ChevronRight} />
             
//             </div>
//           </div>

          
//         </div>
//       </div>    
//     </div>
//               <div className=" py-10  md:py-28 px-8 md:px-16">
//            <div className="grid grid-111 md:grid-cols-2 lg:grid-cols-4   gap-4">
//               {features.map((feature, index) => (
//                 <div
//                   key={index}
//                   className={`group relative bg-white/10 border border-gray-500 rounded-md p-6 cursor-pointer transform transition-all duration-500 hover:scale-105  `}>
                  
//                   <div className="relative z-10">
//                     <div className=" mb-4">
//                       <div className="flex items-center justify-center w-12 h-12 bg-[#70a9ff] text-black rounded-xl border border-blue-400/30 group-hover:scale-110 transition-transform duration-300">
//                         {feature.icon}
//                       </div>
//                        <h3 className="text-lg md:text-xl font-semibold text-black mt-3 mb-1 duration-300">
//                       {feature.title}
//                     </h3>
//                          <p className=" text-sm text-gray-800 leading-relaxed">
//                       {feature.description}
//                     </p>
//                     </div>
 
//                      <div className="px-3 inline-block py-1 bg-[#70a9ff] text-gray-700 rounded-full text-xs font-bold border border-blue-400/30">
//                         {feature.stat}
//                       </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//            <div className="max-w-4xl mx-auto my-10 bg-[#70a9ff] border border-white/20 rounded-2xl p-6 text-center">
//               <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">
//                 Ready to Transform Hiring?
//               </h3>
//               <p className="text-gray-800 text-sm mb-4">
//                 Join 200+ companies using AI for better recruitment
//               </p>
            
//               <LinkButton name="Get Started Free"  href="#" centerText={true} showIcon={false} linkclassname="!bg-white !text-blue-900 w-full !text-center hover:scale-101 hover:cursor-pointer " />
//             </div>
//               </div>
    
//           <style jsx>{`
        
//           @keyframes backgroundMove {
//   0% { background-position: 20px 20px; }
//   50% { background-position: 0px 0px; }
//   100% { background-position: 15px 15px; }
// }

// .animate-backgroundMove {
//   animation: backgroundMove 5s ease-in-out infinite alternate;
// }
//       `}</style>
//     </div>
    
//   );
// };

// export default AiTalentInsights;



// import React, { useState, useEffect } from "react";
// import {
//   Users,
//   FileText,
//   ClipboardCheck,
//   Target,
//   Brain,
//   TrendingUp,
//   Sparkles,
//   ChevronRight,
//   Play,
//   Award,
//   Zap,
//   Star,
// } from "lucide-react";
// import LinkButton from '../button/Button';
// import Image from "next/image";
// import { AnimatedWrapper } from "../animation/animation";

// const AiTalentInsights = () => {

//   const features = [
//     {
//       icon: <Brain className="w-6 h-6" />,
//       title: "AI Resume Analysis",
//       description: "Smart matching beyond keywords",
//       stat: "95% Accuracy",
//     },
//     {
//       icon: <Users className="w-6 h-6" />,
//       title: "Team Collaboration",
//       description: "Real-time hiring workflow",
//       stat: "3x Faster",
//     },
//     {
//       icon: <Target className="w-6 h-6" />,
//       title: "Smart Pipeline",
//       description: "Automated candidate tracking",
//       stat: "50% Efficiency",
//     },
//     {
//       icon: <ClipboardCheck className="w-6 h-6" />,
//       title: "Auto Onboarding",
//       description: "Seamless offer to hire process",
//       stat: "90% Automated",
//     },
//   ];



//   return (
//     <div>
//     <div className="min-h-screen bg-gradient-to-r from-blue-300 via-indigo-500 to-blue-400 text-white flex items-center">
//       <div className="relative  z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           <AnimatedWrapper direction="left" className="text-center lg:text-left">
//             <div
//               className={`transform transition-all duration-1000 `}
//             >
//               <div className="inline-flex items-center space-x-2 bg-blue-500 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-blue-400/30">
//                 <Sparkles className="w-4 h-4" />
//                 <span>AI-Powered Recruitment</span>
//               </div>

//               <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 ">
//                 <span className="block">AI-Matched</span>
//                 Talent Insights
//               </h1>

//               <p className="text-lg lg:text-xl text-white mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
//                 Surface perfect candidates with advanced AI that analyzes beyond
//                 resumes—understanding context, skills, and potential for
//                 exceptional matches.
//               </p>
//                 <LinkButton name="Start Free Trial" href="/contact" icon={ChevronRight} />
             
//             </div>
//           </AnimatedWrapper>
//           <AnimatedWrapper direction="right">
//   <Image 
//     src="/Group 170.png" 
//     alt="AI System Tracking"   // ✅ required alt
//     width={650} 
//     height={700} 
//     priority  // optional: helps with LCP optimization
//   />
// </AnimatedWrapper>

          
//         </div>
//       </div>    
//     </div>
           
    
//           <style jsx>{`

//       `}</style>
//     </div>
    
//   );
// };

// export default AiTalentInsights;


import React, { useState, useEffect } from "react";
import {
  Users,
  FileText,
  ClipboardCheck,
  Target,
  Brain,
  TrendingUp,
  Sparkles,
  ChevronRight,
  Play,
  Award,
  Zap,
  Star,
} from "lucide-react";
import LinkButton from '../button/Button';
import Image from "next/image";
import { AnimatedWrapper } from "../animation/animation";

const AiTalentInsights = () => {

  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI Resume Analysis",
      description: "Smart matching beyond keywords",
      stat: "95% Accuracy",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Collaboration",
      description: "Real-time hiring workflow",
      stat: "3x Faster",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Smart Pipeline",
      description: "Automated candidate tracking",
      stat: "50% Efficiency",
    },
    {
      icon: <ClipboardCheck className="w-6 h-6" />,
      title: "Auto Onboarding",
      description: "Seamless offer to hire process",
      stat: "90% Automated",
    },
  ];



  return (
    <div>
    <div className="min-h-screen bg-white  flex items-center">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedWrapper direction="left" className="text-center lg:text-left">
            <div
              className={`transform transition-all duration-1000 `}
            >
              <div className="inline-flex items-center space-x-2 bg-blue-500 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-blue-400/30">
                <Sparkles className="w-4 h-4" />
                <span>AI-Powered Recruitment</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold font-[inter] text-gray-800 mb-6 ">
                <span className="block">AI-Matched</span>
                Talent Insights
              </h1>

              <p className="text-lg lg:text-xl  mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Surface perfect candidates with advanced AI that analyzes beyond
                resumes—understanding context, skills, and potential for
                exceptional matches.
              </p>
                <LinkButton name="Start Free Trial" href="/contact" icon={ChevronRight} />
             
            </div>
          </AnimatedWrapper>
          <AnimatedWrapper direction="right">
  <Image 
    src="/Group 170.png" 
    alt="AI System Tracking"   // ✅ required alt
    width={650} 
    height={700} 
    priority  // optional: helps with LCP optimization
  />
</AnimatedWrapper>

          
        </div>
      </div>    
    </div>
           
    
          <style jsx>{`

      `}</style>
    </div>
    
  );
};

export default AiTalentInsights;