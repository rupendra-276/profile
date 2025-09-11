// "use client";
// import React, { useState, useEffect } from "react";
// import { RotateCcw, TrendingUp, Users } from "lucide-react";

// const SkillsSection = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [activeCard, setActiveCard] = useState(0);

//   useEffect(() => {
//     setIsVisible(true);

//     // Auto-rotate cards every 4 seconds
//     const interval = setInterval(() => {
//       setActiveCard((prev) => (prev + 1) % 3);
//     }, 4000);

//     return () => clearInterval(interval);
//   }, []);

//   const skillFeatures = [
//     {
//       icon: RotateCcw,
//       title: "Skill Carousel",
//       description:
//         "Explore top skills in tech, product, design, business and marketing — rotating based on market data",
//       gradient: "from-pink-400 to-red-400",
//       bgGradient: "from-pink-50 to-red-50",
//     },
//     {
//       icon: TrendingUp,
//       title: "Skill Demand Heatmap",
//       description:
//         "Explore top skills in tech, product, design, business, and marketing — rotating based on market data",
//       gradient: "from-orange-400 to-pink-400",
//       bgGradient: "from-orange-50 to-pink-50",
//     },
//     {
//       icon: Users,
//       title: "Role-to-Skill Clustering",
//       description:
//         "Explore top skills in tech, product, design, business, and marketing — rotating based on market data",
//       gradient: "from-red-400 to-pink-400",
//       bgGradient: "from-red-50 to-pink-50",
//     },
//   ];

//   return (
//     <div className="relative overflow-hidden bg-gradient-to-br from-red-400 via-pink-400 to-rose-500 py-20 px-4 sm:px-6 lg:px-8">
//       {/* Background Pattern */}
//       <div className="absolute inset-0 opacity-10">
//         <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full animate-pulse"></div>
//         <div className="absolute bottom-20 right-20 w-24 h-24 bg-white rounded-full animate-pulse delay-1000"></div>
//         <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full animate-bounce delay-500"></div>
//       </div>

//       <div className="relative max-w-7xl mx-auto">
//         <div className="grid lg:grid-cols-2 gap-16 items-center">
//           {/* Left Side - Content */}
//           <div
//             className={`space-y-8 transform transition-all duration-1000 ${
//               isVisible
//                 ? "translate-x-0 opacity-100"
//                 : "-translate-x-10 opacity-0"
//             }`}
//           >
//             <div className="space-y-6">
//               <h2 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
//                 Fuel Your Career with{" "}
//                 <span className="block text-yellow-200">
//                   Skills That Matter
//                 </span>
//               </h2>

//               <p className="text-xl text-pink-100 leading-relaxed max-w-lg">
//                 Don't just learn more — learn right
//               </p>
//             </div>

//             <button className="group bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/30 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center space-x-3">
//               <span>Start Your Skill Journey</span>
//               <div className="transform group-hover:translate-x-1 transition-transform duration-300">
//                 →
//               </div>
//             </button>
//           </div>

//           {/* Right Side - Description and Cards */}
//           <div
//             className={`space-y-8 transform transition-all duration-1000 ${
//               isVisible
//                 ? "translate-x-0 opacity-100"
//                 : "translate-x-10 opacity-0"
//             }`}
//           >
//             {/* Description */}
//             <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
//               <p className="text-white text-lg leading-relaxed">
//                 At Spreads, our AI-powered system helps you discover the perfect
//                 skill combination for your next career move. Whether you're
//                 diving into design, jumping into AI, or growing in product
//                 management — we match real-time hiring data with your interests.
//               </p>
//             </div>

//             {/* Skill Feature Cards */}
//             <div className="grid gap-6">
//               {skillFeatures.map((feature, index) => {
//                 const IconComponent = feature.icon;
//                 const isActive = activeCard === index;

//                 return (
//                   <div
//                     key={index}
//                     className={`group cursor-pointer transform transition-all duration-700 ${
//                       isActive ? "scale-105" : "scale-100 hover:scale-102"
//                     }`}
//                     onClick={() => setActiveCard(index)}
//                   >
//                     <div
//                       className={`bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 ${
//                         isActive ? "ring-2 ring-white/50 bg-white" : ""
//                       }`}
//                     >
//                       <div className="flex items-start space-x-5">
//                         <div className="flex-shrink-0">
//                           <div
//                             className={`w-16 h-16 bg-gradient-to-br ${
//                               feature.gradient
//                             } rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${
//                               isActive ? "animate-pulse" : ""
//                             }`}
//                           >
//                             <IconComponent className="w-8 h-8 text-white" />
//                           </div>
//                         </div>
//                         <div className="flex-1 space-y-3">
//                           <h3
//                             className={`text-xl font-bold transition-colors duration-300 ${
//                               isActive
//                                 ? "text-pink-600"
//                                 : "text-gray-900 group-hover:text-pink-600"
//                             }`}
//                           >
//                             {feature.title}
//                           </h3>
//                           <p className="text-gray-600 leading-relaxed">
//                             {feature.description}
//                           </p>
//                         </div>

//                         {/* Active Indicator */}
//                         {isActive && (
//                           <div className="flex-shrink-0">
//                             <div className="w-3 h-3 bg-pink-500 rounded-full animate-pulse"></div>
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>

//             {/* Card Navigation Dots */}
//             <div className="flex justify-center space-x-3">
//               {skillFeatures.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setActiveCard(index)}
//                   className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                     activeCard === index
//                       ? "bg-white shadow-lg"
//                       : "bg-white/40 hover:bg-white/60"
//                   }`}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Floating Elements */}
//         <div className="absolute top-20 right-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
//         <div className="absolute bottom-32 left-20 w-16 h-16 bg-white/10 rounded-full animate-float delay-1000"></div>
//       </div>

//       <style jsx>{`
//         @keyframes float {
//           0%,
//           100% {
//             transform: translateY(0px);
//           }
//           50% {
//             transform: translateY(-20px);
//           }
//         }

//         .animate-float {
//           animation: float 6s ease-in-out infinite;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default SkillsSection;

// "use client";
// import React, { useState, useEffect } from "react";
// import {
//   RotateCcw,
//   TrendingUp,
//   Users,
//   ArrowRight,
//   Target,
//   BarChart3,
// } from "lucide-react";

// const SkillsSection = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [activeCard, setActiveCard] = useState(0);

//   useEffect(() => {
//     setIsVisible(true);

//     // Auto-rotate cards every 5 seconds
//     const interval = setInterval(() => {
//       setActiveCard((prev) => (prev + 1) % 3);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   const skillFeatures = [
//     {
//       icon: Target,
//       title: "Smart Skill Matching",
//       description:
//         "AI-powered algorithms match your experience with in-demand skills based on real-time market analysis and industry trends.",
//       gradient: "from-blue-500 to-purple-600",
//       bgGradient: "from-blue-50 to-purple-50",
//       stats: "98% Match Accuracy",
//     },
//     {
//       icon: TrendingUp,
//       title: "Market Demand Analytics",
//       description:
//         "Get insights into skill demand across industries with comprehensive data visualization and salary projections.",
//       gradient: "from-emerald-500 to-teal-600",
//       bgGradient: "from-emerald-50 to-teal-50",
//       stats: "500K+ Job Listings Analyzed",
//     },
//     {
//       icon: BarChart3,
//       title: "Career Path Optimization",
//       description:
//         "Discover strategic skill combinations that accelerate career growth and maximize earning potential in your field.",
//       gradient: "from-orange-500 to-red-600",
//       bgGradient: "from-orange-50 to-red-50",
//       stats: "3x Faster Career Growth",
//     },
//   ];

//   return (
//     <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-24 px-4 sm:px-6 lg:px-8">
//       {/* Professional Background Pattern */}
//       <div className="absolute inset-0 opacity-5">
//         <div className="absolute top-20 left-20 w-40 h-40 bg-white rounded-full blur-3xl"></div>
//         <div className="absolute bottom-32 right-32 w-32 h-32 bg-blue-300 rounded-full blur-2xl"></div>
//         <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-purple-300 rounded-full blur-xl"></div>
//       </div>

//       {/* Grid Pattern Overlay */}
//       <div className="absolute inset-0 opacity-10">
//         <div
//           className="h-full w-full"
//           style={{
//             backgroundImage: `url("data:image/svg+xml,%3csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3e%3cg fill='none' fill-rule='evenodd'%3e%3cg fill='%23ffffff' fill-opacity='0.1'%3e%3ccircle cx='7' cy='7' r='1'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e")`,
//           }}
//         ></div>
//       </div>

//       <div className="relative max-w-7xl mx-auto">
//         <div className="grid lg:grid-cols-2 gap-20 items-center">
//           {/* Left Side - Enhanced Content */}
//           <div
//             className={`space-y-10 transform transition-all duration-1000 ${
//               isVisible
//                 ? "translate-x-0 opacity-100"
//                 : "-translate-x-10 opacity-0"
//             }`}
//           >
//             <div className="space-y-8">
//               <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 backdrop-blur-sm">
//                 <span className="text-blue-200 text-sm font-medium">
//                   🚀 AI-Powered Career Intelligence
//                 </span>
//               </div>

//               <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
//                 Master Skills That
//                 <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
//                   Drive Careers
//                 </span>
//               </h1>

//               <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
//                 Transform your career trajectory with data-driven skill
//                 recommendations. Our platform analyzes millions of job postings
//                 to identify the exact skills that top companies are seeking
//                 right now.
//               </p>
//             </div>

//             <div className="flex flex-col sm:flex-row gap-4">
//               <button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center space-x-3 shadow-xl">
//                 <span>Discover Your Skills</span>
//                 <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
//               </button>

//               <button className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/20 hover:border-white/40 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-3">
//                 <span>View Demo</span>
//               </button>
//             </div>

//             {/* Professional Stats */}
//             <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
//               <div className="text-center">
//                 <div className="text-3xl font-bold text-white">2M+</div>
//                 <div className="text-sm text-slate-400">
//                   Professionals Helped
//                 </div>
//               </div>
//               <div className="text-center">
//                 <div className="text-3xl font-bold text-white">85%</div>
//                 <div className="text-sm text-slate-400">Career Advancement</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-3xl font-bold text-white">500+</div>
//                 <div className="text-sm text-slate-400">Partner Companies</div>
//               </div>
//             </div>
//           </div>

//           {/* Right Side - Professional Feature Cards */}
//           <div
//             className={`space-y-8 transform transition-all duration-1000 ${
//               isVisible
//                 ? "translate-x-0 opacity-100"
//                 : "translate-x-10 opacity-0"
//             }`}
//           >
//             {/* Professional Cards Grid */}
//             <div className="space-y-6">
//               {skillFeatures.map((feature, index) => {
//                 const IconComponent = feature.icon;
//                 const isActive = activeCard === index;

//                 return (
//                   <div
//                     key={index}
//                     className={`group cursor-pointer transform transition-all duration-500 ${
//                       isActive ? "scale-105 z-10" : "scale-100 hover:scale-102"
//                     }`}
//                     onClick={() => setActiveCard(index)}
//                   >
//                     <div
//                       className={`relative bg-white/95 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border transition-all duration-500 hover:shadow-3xl ${
//                         isActive
//                           ? "border-blue-200 ring-2 ring-blue-500/20 bg-white shadow-blue-500/10"
//                           : "border-white/20 hover:border-blue-200/50"
//                       }`}
//                     >
//                       {/* Card Header */}
//                       <div className="flex items-start justify-between mb-6">
//                         <div
//                           className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${
//                             feature.gradient
//                           } rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg ${
//                             isActive ? "animate-pulse shadow-xl" : ""
//                           }`}
//                         >
//                           <IconComponent className="w-8 h-8 text-white" />
//                         </div>

//                         {/* Professional Badge */}
//                         <div
//                           className={`px-3 py-1 rounded-full text-xs font-medium ${
//                             isActive
//                               ? "bg-blue-100 text-blue-700"
//                               : "bg-gray-100 text-gray-600"
//                           }`}
//                         >
//                           {feature.stats}
//                         </div>
//                       </div>

//                       {/* Card Content */}
//                       <div className="space-y-4">
//                         <h3
//                           className={`text-2xl font-bold transition-colors duration-300 ${
//                             isActive
//                               ? "text-blue-700"
//                               : "text-gray-900 group-hover:text-blue-700"
//                           }`}
//                         >
//                           {feature.title}
//                         </h3>

//                         <p className="text-gray-600 leading-relaxed text-lg">
//                           {feature.description}
//                         </p>

//                         {/* Professional CTA */}
//                         <div className="pt-4">
//                           <button
//                             className={`inline-flex items-center text-sm font-semibold transition-colors duration-300 ${
//                               isActive
//                                 ? "text-blue-600"
//                                 : "text-gray-500 group-hover:text-blue-600"
//                             }`}
//                           >
//                             Learn More
//                             <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
//                           </button>
//                         </div>
//                       </div>

//                       {/* Active Indicator */}
//                       {isActive && (
//                         <div className="absolute top-4 right-4">
//                           <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse shadow-lg"></div>
//                         </div>
//                       )}

//                       {/* Subtle Gradient Overlay */}
//                       <div
//                         className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl pointer-events-none`}
//                       ></div>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>

//             {/* Professional Navigation */}
//             <div className="flex justify-center items-center space-x-4 pt-4">
//               <div className="flex space-x-2">
//                 {skillFeatures.map((_, index) => (
//                   <button
//                     key={index}
//                     onClick={() => setActiveCard(index)}
//                     className={`w-12 h-2 rounded-full transition-all duration-300 ${
//                       activeCard === index
//                         ? "bg-blue-500 shadow-lg"
//                         : "bg-white/40 hover:bg-white/60"
//                     }`}
//                   />
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Professional Floating Elements */}
//       <div className="absolute top-32 right-16 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl animate-float"></div>
//       <div className="absolute bottom-40 left-24 w-20 h-20 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full blur-lg animate-float delay-1000"></div>

//       <style jsx>{`
//         @keyframes float {
//           0%,
//           100% {
//             transform: translateY(0px);
//           }
//           50% {
//             transform: translateY(-20px);
//           }
//         }

//         .animate-float {
//           animation: float 8s ease-in-out infinite;
//         }

//         .shadow-3xl {
//           box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
//         }
//       `}</style>
//     </div>
//   );
// };

// export default SkillsSection;

"use client";
import React, { useState, useEffect } from "react";
import { RotateCcw, TrendingUp, Users } from "lucide-react";

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    setIsVisible(true);

    // Auto-rotate cards every 4 seconds
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % 3);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const skillFeatures = [
    {
      icon: RotateCcw,
      title: "Skill Carousel",
      description:
        "Explore top skills in tech, product, design, business and marketing — rotating based on market data",
      gradient: "from-pink-400 to-red-400",
      bgGradient: "from-pink-50 to-red-50",
    },
    {
      icon: TrendingUp,
      title: "Skill Demand Heatmap",
      description:
        "Explore top skills in tech, product, design, business, and marketing — rotating based on market data",
      gradient: "from-orange-400 to-pink-400",
      bgGradient: "from-orange-50 to-pink-50",
    },
    {
      icon: Users,
      title: "Role-to-Skill Clustering",
      description:
        "Explore top skills in tech, product, design, business, and marketing — rotating based on market data",
      gradient: "from-red-400 to-pink-400",
      bgGradient: "from-red-50 to-pink-50",
    },
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-red-400 via-pink-400 to-rose-500 py-20 px-4 sm:px-6 lg:px-8">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-white rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full animate-bounce delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <div
            className={`space-y-8 transform transition-all duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            <div className="space-y-6">
              <h2 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                Fuel Your Career with{" "}
                <span className="block text-yellow-200">
                  Skills That Matter
                </span>
              </h2>

              <p className="text-xl text-pink-100 leading-relaxed max-w-lg">
                Don't just learn more — learn right
              </p>
            </div>

            <button className="group bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/30 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center space-x-3">
              <span>Start Your Skill Journey</span>
              <div className="transform group-hover:translate-x-1 transition-transform duration-300">
                →
              </div>
            </button>
          </div>

          {/* Right Side - Description and Cards */}
          <div
            className={`space-y-8 transform transition-all duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            {/* Description */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <p className="text-white text-lg leading-relaxed">
                At Spreads, our AI-powered system helps you discover the perfect
                skill combination for your next career move. Whether you're
                diving into design, jumping into AI, or growing in product
                management — we match real-time hiring data with your interests.
              </p>
            </div>

            {/* Professional Skill Feature Cards */}
            <div className="grid gap-6">
              {skillFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                const isActive = activeCard === index;

                return (
                  <div
                    key={index}
                    className={`group cursor-pointer transform transition-all duration-700 ${
                      isActive ? "scale-105" : "scale-100 hover:scale-102"
                    }`}
                    onClick={() => setActiveCard(index)}
                  >
                    <div
                      className={`bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-500 ${
                        isActive
                          ? "ring-2 ring-white/50 bg-white shadow-white/20"
                          : ""
                      }`}
                    >
                      <div className="flex items-start space-x-6">
                        <div className="flex-shrink-0">
                          <div
                            className={`w-20 h-20 bg-gradient-to-br ${
                              feature.gradient
                            } rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg ${
                              isActive ? "animate-pulse shadow-xl" : ""
                            }`}
                          >
                            <IconComponent className="w-10 h-10 text-white" />
                          </div>
                        </div>
                        <div className="flex-1 space-y-4">
                          <h3
                            className={`text-2xl font-bold transition-colors duration-300 ${
                              isActive
                                ? "text-pink-600"
                                : "text-gray-900 group-hover:text-pink-600"
                            }`}
                          >
                            {feature.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed text-lg">
                            {feature.description}
                          </p>
                        </div>

                        {/* Active Indicator */}
                        {isActive && (
                          <div className="flex-shrink-0">
                            <div className="w-4 h-4 bg-pink-500 rounded-full animate-pulse shadow-lg"></div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Card Navigation Dots */}
            <div className="flex justify-center space-x-3">
              {skillFeatures.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCard(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeCard === index
                      ? "bg-white shadow-lg"
                      : "bg-white/40 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 right-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute bottom-32 left-20 w-16 h-16 bg-white/10 rounded-full animate-float delay-1000"></div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </div>
  );
};

export default SkillsSection;
