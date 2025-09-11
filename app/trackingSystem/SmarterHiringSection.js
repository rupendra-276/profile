// import React, { useState, useEffect } from "react";
// import {
//   ArrowRight,
//   Play,
//   Users,
//   Brain,
//   Zap,
//   Target,
//   CheckCircle,
//   Star,
// } from "lucide-react";

// const SmarterHiringSection = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [activeFeature, setActiveFeature] = useState(0);

//   useEffect(() => {
//     setIsVisible(true);
//     const interval = setInterval(() => {
//       setActiveFeature((prev) => (prev + 1) % 3);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   const features = [
//     {
//       icon: <Brain className="w-5 h-5" />,
//       label: "AI-Powered Matching",
//       color: "blue",
//     },
//     {
//       icon: <Users className="w-5 h-5" />,
//       label: "Team Collaboration",
//       color: "green",
//     },
//     {
//       icon: <Zap className="w-5 h-5" />,
//       label: "Lightning Fast",
//       color: "yellow",
//     },
//   ];

//   const benefits = [
//     "Resume parsing in seconds",
//     "Smart candidate matching",
//     "Automated interview scheduling",
//     "Real-time team collaboration",
//   ];

//   return (
//     <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50 py-20 px-6 overflow-hidden">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid lg:grid-cols-2 gap-16 items-center">
//           {/* Left Content */}
//           <div
//             className={`transform transition-all duration-1000 ${
//               isVisible
//                 ? "translate-x-0 opacity-100"
//                 : "-translate-x-10 opacity-0"
//             }`}
//           >
//             <div className="space-y-8">
//               <div>
//                 <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
//                   Smarter Hiring
//                   <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-600">
//                     Starts Here
//                   </span>
//                 </h1>

//                 <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
//                   Transform your recruitment process with our AI-powered ATS.
//                   From resume parsing to offer letters, we handle every step
//                   with intelligence and precision.
//                 </p>
//               </div>

//               <div className="space-y-3">
//                 {benefits.map((benefit, index) => (
//                   <div key={index} className="flex items-center space-x-3">
//                     <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
//                     <span className="text-gray-700 font-medium">{benefit}</span>
//                   </div>
//                 ))}
//               </div>

//               <div className="flex flex-wrap gap-3">
//                 {features.map((feature, index) => (
//                   <div
//                     key={index}
//                     className={`flex items-center space-x-2 px-5 py-3 rounded-full border-2 transition-all duration-500 transform hover:scale-105 ${
//                       activeFeature === index
//                         ? `bg-gradient-to-r ${
//                             feature.color === "blue"
//                               ? "from-blue-500 to-blue-600"
//                               : feature.color === "green"
//                               ? "from-green-500 to-green-600"
//                               : feature.color === "yellow"
//                               ? "from-yellow-500 to-yellow-600"
//                               : "from-purple-500 to-purple-600"
//                           } text-white border-transparent shadow-lg`
//                         : "bg-white text-gray-700 border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-md"
//                     }`}
//                   >
//                     {feature.icon}
//                     <span className="text-sm font-semibold">
//                       {feature.label}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           <div
//             className={`transform transition-all duration-1000 delay-300 ${
//               isVisible
//                 ? "translate-x-0 opacity-100"
//                 : "translate-x-10 opacity-0"
//             }`}
//           >
//             <div className="relative">
//               <div className="absolute -inset-4">
//                 <div className="w-full h-full bg-gradient-to-r from-blue-100 via-purple-50 to-pink-100 rounded-3xl opacity-50 blur-xl"></div>
//               </div>

//               <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100/50 backdrop-blur-sm">
//                 <div className="aspect-[4/3] relative overflow-hidden">
//                   <img
//                     src="https://img.freepik.com/free-photo/close-up-hand-holding-smartphone_23-2149155159.jpg" // Replace with your image path
//                     alt="Smarter Hiring Solution"
//                     className="w-full h-full object-cover"
//                   />

//                   <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
//                 </div>
//               </div>

//               <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20 blur-sm"></div>
//               <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-20 blur-sm"></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SmarterHiringSection;

import React, { useState, useEffect } from "react";
import {
  Users,
  Brain,
  Zap,
  CheckCircle,
} from "lucide-react";
import { StaggeredContainer, AnimatedWrapper } from "../animation/animation";

const SmarterHiringSection = () => {

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);


  const benefits = [
    "Resume parsing in seconds",
    "Smart candidate matching",
    "Automated interview scheduling",
    "Real-time team collaboration",
  ];

  return (
    <div className="bg-white py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <StaggeredContainer>
            <AnimatedWrapper delay={0.1}>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Smarter Hiring
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-600">
                  Starts Here
                </span>
              </h1>
            </AnimatedWrapper>

            <AnimatedWrapper delay={0.2}>
              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                Transform your recruitment process with our AI-powered ATS.
                From resume parsing to offer letters, we handle every step
                with intelligence and precision.
              </p>
            </AnimatedWrapper>

            <div className="space-y-3 mt-8">
              {benefits.map((benefit, index) => (
                <AnimatedWrapper key={index} delay={0.3 + index * 0.1}>
                  <div className="flex items-center space-x-2 shadow-md mx-4  p-2">
                    <CheckCircle className="w-5 h-5 text-gray-700 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">
                      {benefit}
                    </span>
                  </div>
                </AnimatedWrapper>
              ))}
            </div>
          </StaggeredContainer>

          {/* Right Content - Image + Features */}
          <AnimatedWrapper delay={0.4}>
            <div className="relative">
              <div className="relative bg-white rounded-md overflow-hidden">
                <img
                  src="/smarthiring.svg"
                  alt="Smarter Hiring Solution"
                  className="w-full h-full object-contain"
                />
              </div>

            
           
            </div>
          </AnimatedWrapper>
        </div>
      </div>
    </div>
  );
};

export default SmarterHiringSection;
