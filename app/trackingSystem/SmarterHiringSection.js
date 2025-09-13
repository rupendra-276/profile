import React from "react";
import { Users, Brain, Zap, CheckCircle } from "lucide-react";
import { AnimatedWrapper } from "../animation/animation";

const SmarterHiringSection = () => {
  const benefits = [
    "Resume parsing in seconds",
    "Smart candidate matching",
    "Automated interview scheduling",
    "Real-time team collaboration",
  ];

  return (
    <div className="bg-[#f4f4f4a9] px-6 py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <AnimatedWrapper direction="left" className="transform transition-all duration-1000">
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                  Smarter Hiring
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-600">
                    Starts Here
                  </span>
                </h1>

                <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                  Transform your recruitment process with our AI-powered ATS.
                  From resume parsing to offer letters, we handle every step
                  with intelligence and precision.
                </p>
              </div>

              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-gray-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedWrapper>

          {/* Right Content */}
   
            <AnimatedWrapper direction="right" className="aspect-[4/3] relative overflow-hidden">
              <img
                src="/smarthiring.jpg"
                alt="Smarter Hiring Solution"
                className="w-full h-full object-cover rounded-md"
              />
            </AnimatedWrapper>
          </div>
        
      </div>
    </div>
  );
};

export default SmarterHiringSection;


// import React, { useState, useEffect } from "react";
// import {
//   Users,
//   Brain,
//   Zap,
//   CheckCircle,
// } from "lucide-react";
// import { StaggeredContainer, AnimatedWrapper } from "../animation/animation";

// const SmarterHiringSection = () => {

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveFeature((prev) => (prev + 1) % 3);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);


//   const benefits = [
//     "Resume parsing in seconds",
//     "Smart candidate matching",
//     "Automated interview scheduling",
//     "Real-time team collaboration",
//   ];

//   return (
//     <div className="bg-white py-20 px-6 overflow-hidden">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid lg:grid-cols-2 gap-16 items-center">

//           {/* Left Content */}
//           <StaggeredContainer>
//             <AnimatedWrapper delay={0.1}>
//               <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
//                 Smarter Hiring
//                 <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-600">
//                   Starts Here
//                 </span>
//               </h1>
//             </AnimatedWrapper>

//             <AnimatedWrapper delay={0.2}>
//               <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
//                 Transform your recruitment process with our AI-powered ATS.
//                 From resume parsing to offer letters, we handle every step
//                 with intelligence and precision.
//               </p>
//             </AnimatedWrapper>

//             <div className="space-y-3 mt-8">
//               {benefits.map((benefit, index) => (
//                 <AnimatedWrapper key={index} delay={0.3 + index * 0.1}>
//                   <div className="flex items-center space-x-2 shadow-md mx-4  p-2">
//                     <CheckCircle className="w-5 h-5 text-gray-700 flex-shrink-0" />
//                     <span className="text-gray-700 font-medium">
//                       {benefit}
//                     </span>
//                   </div>
//                 </AnimatedWrapper>
//               ))}
//             </div>
//           </StaggeredContainer>

//           {/* Right Content - Image + Features */}
//           <AnimatedWrapper delay={0.4}>
//             <div className="relative">
//               <div className="relative bg-white rounded-md overflow-hidden">
//                 <img
//                   // src="/smarthiring.svg"
//                   src="/smarthiring.jpg"
//                   alt="Smarter Hiring Solution"
//                   className="w-full h-full object-contain"
//                 />
//               </div>

            
           
//             </div>
//           </AnimatedWrapper>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SmarterHiringSection;
