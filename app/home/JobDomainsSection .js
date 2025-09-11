// "use client";
// import React, { useState, useEffect } from "react";
// import {
//   Code,
//   Palette,
//   TrendingUp,
//   Briefcase,
//   Users,
//   Brain,
//   DollarSign,
//   Rocket,
//   GraduationCap,
//   Building,
//   Cog,
// } from "lucide-react";

// const JobDomainsSection = () => {
//   const [selectedDomains, setSelectedDomains] = useState([]);
//   const [hoveredDomain, setHoveredDomain] = useState(null);
//   const [isVisible, setIsVisible] = useState(false);

//   const jobDomains = [
//     {
//       id: 1,
//       title: "Technology & Engineering",
//       icon: Code,
//       gradient: "from-blue-500 to-purple-600",
//       bgColor: "bg-blue-50 hover:bg-blue-100",
//       borderColor: "border-blue-200 hover:border-blue-400",
//       jobs: "15,000+ jobs",
//       popular: true,
//     },
//     {
//       id: 2,
//       title: "Design & Creative",
//       icon: Palette,
//       gradient: "from-pink-500 to-rose-500",
//       bgColor: "bg-pink-50 hover:bg-pink-100",
//       borderColor: "border-pink-200 hover:border-pink-400",
//       jobs: "8,500+ jobs",
//     },
//     {
//       id: 3,
//       title: "Marketing & Growth",
//       icon: TrendingUp,
//       gradient: "from-green-500 to-emerald-500",
//       bgColor: "bg-green-50 hover:bg-green-100",
//       borderColor: "border-green-200 hover:border-green-400",
//       jobs: "12,000+ jobs",
//       popular: true,
//     },
//     {
//       id: 4,
//       title: "Business & Operations",
//       icon: Briefcase,
//       gradient: "from-orange-500 to-red-500",
//       bgColor: "bg-orange-50 hover:bg-orange-100",
//       borderColor: "border-orange-200 hover:border-orange-400",
//       jobs: "10,200+ jobs",
//     },
//     {
//       id: 5,
//       title: "Sales & Customer Success",
//       icon: Users,
//       gradient: "from-cyan-500 to-blue-500",
//       bgColor: "bg-cyan-50 hover:bg-cyan-100",
//       borderColor: "border-cyan-200 hover:border-cyan-400",
//       jobs: "9,800+ jobs",
//     },
//     {
//       id: 6,
//       title: "AI, Data & Research",
//       icon: Brain,
//       gradient: "from-purple-500 to-indigo-600",
//       bgColor: "bg-purple-50 hover:bg-purple-100",
//       borderColor: "border-purple-200 hover:border-purple-400",
//       jobs: "7,500+ jobs",
//       trending: true,
//     },
//     {
//       id: 7,
//       title: "Finance, Legal & HR",
//       icon: DollarSign,
//       gradient: "from-yellow-500 to-orange-500",
//       bgColor: "bg-yellow-50 hover:bg-yellow-100",
//       borderColor: "border-yellow-200 hover:border-yellow-400",
//       jobs: "6,700+ jobs",
//     },
//     {
//       id: 8,
//       title: "Product & Strategy",
//       icon: Rocket,
//       gradient: "from-indigo-500 to-purple-500",
//       bgColor: "bg-indigo-50 hover:bg-indigo-100",
//       borderColor: "border-indigo-200 hover:border-indigo-400",
//       jobs: "5,900+ jobs",
//     },
//     {
//       id: 9,
//       title: "Education & Content",
//       icon: GraduationCap,
//       gradient: "from-teal-500 to-green-500",
//       bgColor: "bg-teal-50 hover:bg-teal-100",
//       borderColor: "border-teal-200 hover:border-teal-400",
//       jobs: "4,300+ jobs",
//     },
//     {
//       id: 10,
//       title: "Public Sector & Development",
//       icon: Building,
//       gradient: "from-slate-600 to-gray-700",
//       bgColor: "bg-slate-50 hover:bg-slate-100",
//       borderColor: "border-slate-200 hover:border-slate-400",
//       jobs: "3,200+ jobs",
//     },
//     // {
//     //   id: 11,
//     //   title: "Manufacturing & Core Engineering",
//     //   icon: Cog,
//     //   gradient: "from-amber-600 to-orange-600",
//     //   bgColor: "bg-amber-50 hover:bg-amber-100",
//     //   borderColor: "border-amber-200 hover:border-amber-400",
//     //   jobs: "8,100+ jobs",
//     // },
//   ];

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   const toggleDomain = (domainId) => {
//     setSelectedDomains((prev) =>
//       prev.includes(domainId)
//         ? prev.filter((id) => id !== domainId)
//         : [...prev, domainId]
//     );
//   };

//   return (
//     <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
//       {/* Background decorative elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
//         <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float-delayed"></div>
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
//           {/* Left side - Illustration */}
//           <div
//             className={`lg:w-1/2 flex justify-center transform transition-all duration-1000 ${
//               isVisible
//                 ? "translate-x-0 opacity-100"
//                 : "-translate-x-full opacity-0"
//             }`}
//           >
//             <div className="relative">
//               {/* Main illustration container */}
//               <div className="w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 rounded-full relative overflow-hidden shadow-2xl">
//                 {/* Person sitting at desk */}
//                 <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
//                   {/* Chair */}
//                   <div className="w-16 h-20 bg-gradient-to-b from-green-400 to-green-500 rounded-t-full relative">
//                     {/* Chair back */}
//                     <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-b from-green-400 to-green-500 rounded-full"></div>
//                   </div>

//                   {/* Person */}
//                   <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
//                     {/* Body */}
//                     <div className="w-12 h-16 bg-gradient-to-b from-purple-300 to-purple-400 rounded-t-full"></div>
//                     {/* Head */}
//                     <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-b from-purple-200 to-purple-300 rounded-full"></div>
//                     {/* Hair */}
//                     <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-10 h-6 bg-gray-800 rounded-t-full"></div>
//                     {/* Arms */}
//                     <div className="absolute top-2 -left-2 w-6 h-8 bg-gradient-to-b from-purple-300 to-purple-400 rounded-full transform rotate-45"></div>
//                     <div className="absolute top-2 -right-2 w-6 h-8 bg-gradient-to-b from-purple-300 to-purple-400 rounded-full transform -rotate-45"></div>
//                   </div>
//                 </div>

//                 {/* Desk */}
//                 <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-24 h-4 bg-white rounded-lg shadow-lg">
//                   {/* Laptop */}
//                   <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-12 h-6 bg-gray-800 rounded-sm">
//                     <div className="w-full h-3 bg-gradient-to-b from-gray-200 to-gray-300 rounded-t-sm"></div>
//                     <div className="absolute top-1 left-1 right-1 bottom-1 bg-gray-900 rounded-sm flex items-center justify-center">
//                       <div className="w-8 h-1 bg-green-400 rounded animate-pulse"></div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Floating UI elements */}
//                 <div className="absolute top-8 left-8 animate-bounce-slow">
//                   <div className="w-20 h-16 bg-white rounded-lg shadow-lg p-2 transform rotate-12">
//                     <div className="w-4 h-4 bg-green-400 rounded-full mb-1"></div>
//                     <div className="space-y-1">
//                       <div className="w-12 h-1 bg-gray-300 rounded"></div>
//                       <div className="w-8 h-1 bg-gray-300 rounded"></div>
//                       <div className="w-10 h-1 bg-gray-300 rounded"></div>
//                     </div>
//                     <div className="flex justify-center mt-1">
//                       <div className="flex space-x-1">
//                         <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
//                         <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
//                         <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
//                         <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
//                         <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="absolute top-12 right-6 animate-bounce-slow animation-delay-1000">
//                   <div className="w-16 h-20 bg-white rounded-lg shadow-lg p-2 transform -rotate-12">
//                     <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-1 flex items-center justify-center">
//                       <div className="w-4 h-4 bg-white rounded-full"></div>
//                     </div>
//                     <div className="space-y-1">
//                       <div className="w-12 h-1 bg-gray-800 rounded"></div>
//                       <div className="w-8 h-1 bg-gray-300 rounded"></div>
//                       <div className="w-10 h-1 bg-gray-300 rounded"></div>
//                       <div className="w-6 h-1 bg-gray-300 rounded"></div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="absolute bottom-32 right-4 animate-bounce-slow animation-delay-2000">
//                   <div className="w-18 h-14 bg-white rounded-lg shadow-lg p-2 transform rotate-6">
//                     <div className="flex space-x-1 mb-1">
//                       <div className="w-3 h-3 bg-green-400 rounded-full"></div>
//                       <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
//                     </div>
//                     <div className="space-y-1">
//                       <div className="w-10 h-1 bg-gray-300 rounded"></div>
//                       <div className="w-8 h-1 bg-gray-300 rounded"></div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right side - Content */}
//           <div
//             className={`lg:w-1/2 transform transition-all duration-1000 delay-300 ${
//               isVisible
//                 ? "translate-x-0 opacity-100"
//                 : "translate-x-full opacity-0"
//             }`}
//           >
//             {/* Header */}
//             <div className="mb-8">
//               <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
//                 Find the right job or internship with{" "}
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
//                   trending domain
//                 </span>{" "}
//                 for you
//               </h2>
//             </div>

//             {/* Job Domain Pills */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//               {jobDomains.map((domain, index) => {
//                 const Icon = domain.icon;
//                 const isSelected = selectedDomains.includes(domain.id);
//                 const isHovered = hoveredDomain === domain.id;

//                 return (
//                   <div
//                     key={domain.id}
//                     className={`transform transition-all duration-300 delay-${
//                       index * 50
//                     }`}
//                     style={{
//                       transform: isVisible
//                         ? "translateY(0)"
//                         : "translateY(20px)",
//                       opacity: isVisible ? 1 : 0,
//                     }}
//                   >
//                     <button
//                       onClick={() => toggleDomain(domain.id)}
//                       onMouseEnter={() => setHoveredDomain(domain.id)}
//                       onMouseLeave={() => setHoveredDomain(null)}
//                       className={`
//                         relative w-full p-4 rounded-xl border-2 text-left transition-all duration-300 group
//                         ${
//                           isSelected
//                             ? `bg-gradient-to-r ${domain.gradient} text-white border-transparent shadow-lg transform scale-105`
//                             : `${domain.bgColor} ${domain.borderColor} text-gray-700 hover:shadow-md hover:transform hover:scale-102`
//                         }
//                         ${
//                           isHovered && !isSelected
//                             ? "shadow-lg transform scale-102"
//                             : ""
//                         }
//                       `}
//                     >
//                       {/* Popular/Trending badges */}
//                       {domain.popular && (
//                         <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
//                           Popular
//                         </div>
//                       )}
//                       {domain.trending && (
//                         <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-semibold animate-pulse">
//                           Trending
//                         </div>
//                       )}

//                       <div className="flex items-center space-x-3">
//                         <div
//                           className={`
//                           p-2 rounded-lg transition-all duration-300
//                           ${
//                             isSelected
//                               ? "bg-white bg-opacity-20"
//                               : `bg-gradient-to-r ${domain.gradient}`
//                           }
//                         `}
//                         >
//                           <Icon
//                             className={`w-5 h-5 ${
//                               isSelected ? "text-white" : "text-white"
//                             }`}
//                           />
//                         </div>
//                         <div className="flex-1">
//                           <h3 className="font-semibold text-sm lg:text-base mb-1">
//                             {domain.title}
//                           </h3>
//                           <p
//                             className={`text-xs ${
//                               isSelected
//                                 ? "text-white text-opacity-80"
//                                 : "text-gray-500"
//                             }`}
//                           >
//                             {domain.jobs}
//                           </p>
//                         </div>
//                         {isSelected && (
//                           <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
//                             <div className="w-3 h-3 bg-white rounded-full"></div>
//                           </div>
//                         )}
//                       </div>
//                     </button>
//                   </div>
//                 );
//               })}
//             </div>

//             {/* Selected count and CTA */}
//             {selectedDomains.length > 0 && (
//               <div className="mt-8 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl border border-purple-200 animate-fade-in">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <p className="text-sm text-gray-600">
//                       {selectedDomains.length} domain
//                       {selectedDomains.length > 1 ? "s" : ""} selected
//                     </p>
//                     <p className="text-xs text-gray-500 mt-1">
//                       Get personalized job recommendations
//                     </p>
//                   </div>
//                   <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
//                     Explore Jobs
//                   </button>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
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

//         @keyframes float-delayed {
//           0%,
//           100% {
//             transform: translateY(0px);
//           }
//           50% {
//             transform: translateY(-15px);
//           }
//         }

//         @keyframes bounce-slow {
//           0%,
//           100% {
//             transform: translateY(0) rotate(var(--rotation, 0deg));
//           }
//           50% {
//             transform: translateY(-10px) rotate(var(--rotation, 0deg));
//           }
//         }

//         @keyframes fade-in {
//           from {
//             opacity: 0;
//             transform: translateY(10px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .animate-float {
//           animation: float 6s ease-in-out infinite;
//         }

//         .animate-float-delayed {
//           animation: float-delayed 8s ease-in-out infinite;
//         }

//         .animate-bounce-slow {
//           animation: bounce-slow 4s ease-in-out infinite;
//         }

//         .animation-delay-1000 {
//           animation-delay: 1s;
//         }

//         .animation-delay-2000 {
//           animation-delay: 2s;
//         }

//         .animate-fade-in {
//           animation: fade-in 0.5s ease-out;
//         }

//         .hover\\:scale-102:hover {
//           transform: scale(1.02);
//         }
//       `}</style>
//     </section>
//   );
// };

// export default JobDomainsSection;
// =========================================
// "use client";
// import React, { useState, useEffect } from "react";
// import {
//   Code,
//   Palette,
//   TrendingUp,
//   Briefcase,
//   Users,
//   Brain,
//   DollarSign,
//   Rocket,
//   GraduationCap,
//   Building,
//   Cog,
//   ArrowRight,
//   Star,
//   Sparkles,
// } from "lucide-react";

// const JobDomainsSection = () => {
//   const [selectedDomains, setSelectedDomains] = useState([]);
//   const [hoveredDomain, setHoveredDomain] = useState(null);
//   const [isVisible, setIsVisible] = useState(false);

//   const jobDomains = [
//     {
//       id: 1,
//       title: "Technology & Engineering",
//       icon: Code,
//       gradient: "from-blue-500 to-purple-600",
//       bgColor: "bg-blue-50 hover:bg-blue-100",
//       borderColor: "border-blue-200 hover:border-blue-400",
//       jobs: "15,000+ jobs",
//       popular: true,
//       description: "Software development, DevOps, Cybersecurity",
//     },
//     {
//       id: 2,
//       title: "Design & Creative",
//       icon: Palette,
//       gradient: "from-pink-500 to-rose-500",
//       bgColor: "bg-pink-50 hover:bg-pink-100",
//       borderColor: "border-pink-200 hover:border-pink-400",
//       jobs: "8,500+ jobs",
//       description: "UI/UX, Graphic design, Content creation",
//     },
//     {
//       id: 3,
//       title: "Marketing & Growth",
//       icon: TrendingUp,
//       gradient: "from-green-500 to-emerald-500",
//       bgColor: "bg-green-50 hover:bg-green-100",
//       borderColor: "border-green-200 hover:border-green-400",
//       jobs: "12,000+ jobs",
//       popular: true,
//       description: "Digital marketing, SEO, Brand management",
//     },
//     {
//       id: 4,
//       title: "Business & Operations",
//       icon: Briefcase,
//       gradient: "from-orange-500 to-red-500",
//       bgColor: "bg-orange-50 hover:bg-orange-100",
//       borderColor: "border-orange-200 hover:border-orange-400",
//       jobs: "10,200+ jobs",
//       description: "Project management, Operations, Consulting",
//     },
//     {
//       id: 5,
//       title: "Sales & Customer Success",
//       icon: Users,
//       gradient: "from-cyan-500 to-blue-500",
//       bgColor: "bg-cyan-50 hover:bg-cyan-100",
//       borderColor: "border-cyan-200 hover:border-cyan-400",
//       jobs: "9,800+ jobs",
//       description: "Account management, Customer support",
//     },
//     {
//       id: 6,
//       title: "AI, Data & Research",
//       icon: Brain,
//       gradient: "from-purple-500 to-indigo-600",
//       bgColor: "bg-purple-50 hover:bg-purple-100",
//       borderColor: "border-purple-200 hover:border-purple-400",
//       jobs: "7,500+ jobs",
//       trending: true,
//       description: "Machine learning, Data science, Analytics",
//     },
//     // {
//     //   id: 7,
//     //   title: "Finance, Legal & HR",
//     //   icon: DollarSign,
//     //   gradient: "from-yellow-500 to-orange-500",
//     //   bgColor: "bg-yellow-50 hover:bg-yellow-100",
//     //   borderColor: "border-yellow-200 hover:border-yellow-400",
//     //   jobs: "6,700+ jobs",
//     //   description: "Financial analysis, Legal counsel, Talent",
//     // },
//     // {
//     //   id: 8,
//     //   title: "Product & Strategy",
//     //   icon: Rocket,
//     //   gradient: "from-indigo-500 to-purple-500",
//     //   bgColor: "bg-indigo-50 hover:bg-indigo-100",
//     //   borderColor: "border-indigo-200 hover:border-indigo-400",
//     //   jobs: "5,900+ jobs",
//     //   description: "Product management, Strategy, Innovation",
//     // },
//     // {
//     //   id: 9,
//     //   title: "Education & Content",
//     //   icon: GraduationCap,
//     //   gradient: "from-teal-500 to-green-500",
//     //   bgColor: "bg-teal-50 hover:bg-teal-100",
//     //   borderColor: "border-teal-200 hover:border-teal-400",
//     //   jobs: "4,300+ jobs",
//     //   description: "Teaching, Content writing, E-learning",
//     // },
//     // {
//     //   id: 10,
//     //   title: "Public Sector & Development",
//     //   icon: Building,
//     //   gradient: "from-slate-600 to-gray-700",
//     //   bgColor: "bg-slate-50 hover:bg-slate-100",
//     //   borderColor: "border-slate-200 hover:border-slate-400",
//     //   jobs: "3,200+ jobs",
//     //   description: "Government, NGO, Social impact",
//     // },
//   ];

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   const toggleDomain = (domainId) => {
//     setSelectedDomains((prev) =>
//       prev.includes(domainId)
//         ? prev.filter((id) => id !== domainId)
//         : [...prev, domainId]
//     );
//   };

//   return (
//     <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
//       {/* Background decorative elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
//         <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float-delayed"></div>
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
//           {/* Left side - Illustration */}
//           <div
//             className={`lg:w-1/2 flex justify-center transform transition-all duration-1000 ${
//               isVisible
//                 ? "translate-x-0 opacity-100"
//                 : "-translate-x-full opacity-0"
//             }`}
//           >
//             <div className="relative">
//               {/* Main illustration container */}
//               <div className="w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 rounded-full relative overflow-hidden shadow-2xl">
//                 {/* Person sitting at desk */}
//                 <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
//                   {/* Chair */}
//                   <div className="w-16 h-20 bg-gradient-to-b from-green-400 to-green-500 rounded-t-full relative">
//                     {/* Chair back */}
//                     <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-b from-green-400 to-green-500 rounded-full"></div>
//                   </div>

//                   {/* Person */}
//                   <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
//                     {/* Body */}
//                     <div className="w-12 h-16 bg-gradient-to-b from-purple-300 to-purple-400 rounded-t-full"></div>
//                     {/* Head */}
//                     <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-b from-purple-200 to-purple-300 rounded-full"></div>
//                     {/* Hair */}
//                     <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-10 h-6 bg-gray-800 rounded-t-full"></div>
//                     {/* Arms */}
//                     <div className="absolute top-2 -left-2 w-6 h-8 bg-gradient-to-b from-purple-300 to-purple-400 rounded-full transform rotate-45"></div>
//                     <div className="absolute top-2 -right-2 w-6 h-8 bg-gradient-to-b from-purple-300 to-purple-400 rounded-full transform -rotate-45"></div>
//                   </div>
//                 </div>

//                 {/* Desk */}
//                 <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-24 h-4 bg-white rounded-lg shadow-lg">
//                   {/* Laptop */}
//                   <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-12 h-6 bg-gray-800 rounded-sm">
//                     <div className="w-full h-3 bg-gradient-to-b from-gray-200 to-gray-300 rounded-t-sm"></div>
//                     <div className="absolute top-1 left-1 right-1 bottom-1 bg-gray-900 rounded-sm flex items-center justify-center">
//                       <div className="w-8 h-1 bg-green-400 rounded animate-pulse"></div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Floating UI elements */}
//                 <div className="absolute top-8 left-8 animate-bounce-slow">
//                   <div className="w-20 h-16 bg-white rounded-lg shadow-lg p-2 transform rotate-12">
//                     <div className="w-4 h-4 bg-green-400 rounded-full mb-1"></div>
//                     <div className="space-y-1">
//                       <div className="w-12 h-1 bg-gray-300 rounded"></div>
//                       <div className="w-8 h-1 bg-gray-300 rounded"></div>
//                       <div className="w-10 h-1 bg-gray-300 rounded"></div>
//                     </div>
//                     <div className="flex justify-center mt-1">
//                       <div className="flex space-x-1">
//                         <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
//                         <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
//                         <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
//                         <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
//                         <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="absolute top-12 right-6 animate-bounce-slow animation-delay-1000">
//                   <div className="w-16 h-20 bg-white rounded-lg shadow-lg p-2 transform -rotate-12">
//                     <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-1 flex items-center justify-center">
//                       <div className="w-4 h-4 bg-white rounded-full"></div>
//                     </div>
//                     <div className="space-y-1">
//                       <div className="w-12 h-1 bg-gray-800 rounded"></div>
//                       <div className="w-8 h-1 bg-gray-300 rounded"></div>
//                       <div className="w-10 h-1 bg-gray-300 rounded"></div>
//                       <div className="w-6 h-1 bg-gray-300 rounded"></div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="absolute bottom-32 right-4 animate-bounce-slow animation-delay-2000">
//                   <div className="w-18 h-14 bg-white rounded-lg shadow-lg p-2 transform rotate-6">
//                     <div className="flex space-x-1 mb-1">
//                       <div className="w-3 h-3 bg-green-400 rounded-full"></div>
//                       <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
//                     </div>
//                     <div className="space-y-1">
//                       <div className="w-10 h-1 bg-gray-300 rounded"></div>
//                       <div className="w-8 h-1 bg-gray-300 rounded"></div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right side - Enhanced Content */}
//           <div
//             className={`lg:w-1/2 transform transition-all duration-1000 delay-300 ${
//               isVisible
//                 ? "translate-x-0 opacity-100"
//                 : "translate-x-full opacity-0"
//             }`}
//           >
//             {/* Header with improved design */}
//             <div className="mb-10">
//               <div className="flex items-center gap-2 mb-4">
//                 <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
//                 {/* <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
//                   Career Opportunities
//                 </span> */}
//               </div>

//               <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
//                 Find the right job or internship with{" "}
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600 relative">
//                   trending domain
//                   <Sparkles className="absolute -top-2 -right-8 w-6 h-6 text-orange-500 animate-bounce" />
//                 </span>{" "}
//                 for you
//               </h2>

//               <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
//                 Explore diverse career paths across industries and find
//                 opportunities that match your skills, interests, and career
//                 goals.
//               </p>
//             </div>

//             {/* Stats bar */}
//             {/* <div className="flex items-center gap-6 mb-8 p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
//               <div className="flex items-center gap-2">
//                 <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
//                 <span className="text-sm font-medium text-gray-700">
//                   83,100+ Active Jobs
//                 </span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <Star className="w-4 h-4 text-yellow-500 fill-current" />
//                 <span className="text-sm font-medium text-gray-700">
//                   Top Companies
//                 </span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
//                 <span className="text-sm font-medium text-gray-700">
//                   Remote Options
//                 </span>
//               </div>
//             </div> */}

//             {/* Enhanced Job Domain Grid */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
//               {jobDomains.map((domain, index) => {
//                 const Icon = domain.icon;
//                 const isSelected = selectedDomains.includes(domain.id);
//                 const isHovered = hoveredDomain === domain.id;

//                 return (
//                   <div
//                     key={domain.id}
//                     className={`transform transition-all duration-300 delay-${
//                       index * 50
//                     }`}
//                     style={{
//                       transform: isVisible
//                         ? "translateY(0)"
//                         : "translateY(20px)",
//                       opacity: isVisible ? 1 : 0,
//                     }}
//                   >
//                     <button
//                       onClick={() => toggleDomain(domain.id)}
//                       onMouseEnter={() => setHoveredDomain(domain.id)}
//                       onMouseLeave={() => setHoveredDomain(null)}
//                       className={`
//                         relative w-full p-5 rounded-2xl border-2 text-left transition-all duration-300 group overflow-hidden
//                         ${
//                           isSelected
//                             ? `bg-gradient-to-r ${domain.gradient} text-white border-transparent shadow-2xl transform scale-105`
//                             : `${domain.bgColor} ${domain.borderColor} text-gray-700 hover:shadow-lg hover:transform hover:scale-102`
//                         }
//                         ${
//                           isHovered && !isSelected
//                             ? "shadow-lg transform scale-102"
//                             : ""
//                         }
//                       `}
//                     >
//                       {/* Subtle background pattern */}
//                       <div className="absolute inset-0 opacity-5">
//                         <div className="absolute top-0 right-0 w-24 h-24 bg-white rounded-full transform translate-x-8 -translate-y-8"></div>
//                         <div className="absolute bottom-0 left-0 w-16 h-16 bg-white rounded-full transform -translate-x-4 translate-y-4"></div>
//                       </div>

//                       {/* Popular/Trending badges */}
//                       {domain.popular && (
//                         <div className="absolute top-0 right-0 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs px-3 py-1.5 rounded-full font-semibold shadow-lg">
//                           <Star className="w-3 h-3 inline mr-1" />
//                           Popular
//                         </div>
//                       )}
//                       {domain.trending && (
//                         <div className="absolute top-0 right-0 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs px-3 py-1.5 rounded-full font-semibold animate-pulse shadow-lg">
//                           <Sparkles className="w-3 h-3 inline mr-1" />
//                           Trending
//                         </div>
//                       )}

//                       <div className="relative z-10">
//                         <div className="flex items-start justify-between mb-3">
//                           <div
//                             className={`
//                             p-3 rounded-xl transition-all duration-300 shadow-sm
//                             ${
//                               isSelected
//                                 ? "bg-white bg-opacity-20 shadow-lg"
//                                 : `bg-gradient-to-r ${domain.gradient} shadow-md`
//                             }
//                           `}
//                           >
//                             <Icon
//                               className={`w-6 h-6 ${
//                                 isSelected ? "text-white" : "text-white"
//                               }`}
//                             />
//                           </div>

//                           {isSelected && (
//                             <div className="w-7 h-7 bg-white bg-opacity-25 rounded-full flex items-center justify-center backdrop-blur-sm">
//                               <div className="w-3 h-3 bg-white rounded-full"></div>
//                             </div>
//                           )}
//                         </div>

//                         <h3 className="font-bold text-base lg:text-lg mb-2 leading-tight">
//                           {domain.title}
//                         </h3>

//                         <p
//                           className={`text-sm mb-3 ${
//                             isSelected
//                               ? "text-white text-opacity-90"
//                               : "text-gray-600"
//                           }`}
//                         >
//                           {domain.description}
//                         </p>

//                         <div className="flex items-center justify-between">
//                           <span
//                             className={`text-sm font-semibold ${
//                               isSelected
//                                 ? "text-white text-opacity-80"
//                                 : "text-gray-500"
//                             }`}
//                           >
//                             {domain.jobs}
//                           </span>

//                           <ArrowRight
//                             className={`w-4 h-4 transition-transform duration-300 ${
//                               isSelected ? "text-white" : "text-gray-400"
//                             } ${isHovered ? "transform translate-x-1" : ""}`}
//                           />
//                         </div>
//                       </div>
//                     </button>
//                   </div>
//                 );
//               })}
//             </div>

//             {/* Enhanced Selected domains CTA */}
//             {selectedDomains.length > 0 && (
//               <div className="p-6 bg-gradient-to-r from-purple-50 via-blue-50 to-purple-50 rounded-2xl border border-purple-200 animate-fade-in shadow-lg backdrop-blur-sm">
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center gap-4">
//                     <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
//                       <Sparkles className="w-6 h-6 text-white" />
//                     </div>
//                     <div>
//                       <p className="font-semibold text-gray-800">
//                         {selectedDomains.length} domain
//                         {selectedDomains.length > 1 ? "s" : ""} selected
//                       </p>
//                       <p className="text-sm text-gray-600 mt-1">
//                         Ready to explore personalized opportunities?
//                       </p>
//                     </div>
//                   </div>
//                   <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2 group">
//                     Explore Jobs
//                     <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
//                   </button>
//                 </div>
//               </div>
//             )}

//             {/* Additional CTA when no domains selected */}
//             {selectedDomains.length === 0 && (
//               <div className="text-center p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
//                 <p className="text-gray-600 mb-4">
//                   Select domains that interest you to get started
//                 </p>
//                 <div className="flex justify-center gap-2">
//                   <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
//                   <div
//                     className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"
//                     style={{ animationDelay: "0.2s" }}
//                   ></div>
//                   <div
//                     className="w-2 h-2 bg-green-400 rounded-full animate-bounce"
//                     style={{ animationDelay: "0.4s" }}
//                   ></div>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
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

//         @keyframes float-delayed {
//           0%,
//           100% {
//             transform: translateY(0px);
//           }
//           50% {
//             transform: translateY(-15px);
//           }
//         }

//         @keyframes bounce-slow {
//           0%,
//           100% {
//             transform: translateY(0) rotate(var(--rotation, 0deg));
//           }
//           50% {
//             transform: translateY(-10px) rotate(var(--rotation, 0deg));
//           }
//         }

//         @keyframes fade-in {
//           from {
//             opacity: 0;
//             transform: translateY(10px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .animate-float {
//           animation: float 6s ease-in-out infinite;
//         }

//         .animate-float-delayed {
//           animation: float-delayed 8s ease-in-out infinite;
//         }

//         .animate-bounce-slow {
//           animation: bounce-slow 4s ease-in-out infinite;
//         }

//         .animation-delay-1000 {
//           animation-delay: 1s;
//         }

//         .animation-delay-2000 {
//           animation-delay: 2s;
//         }

//         .animate-fade-in {
//           animation: fade-in 0.5s ease-out;
//         }

//         .hover\\:scale-102:hover {
//           transform: scale(1.02);
//         }
//       `}</style>
//     </section>
//   );
// };

// export default JobDomainsSection;

// jjjjjjjjjjj

// "use client";
// import React, { useState, useEffect } from "react";
// import {
//   Code,
//   Palette,
//   TrendingUp,
//   Briefcase,
//   Users,
//   Brain,
//   DollarSign,
//   Rocket,
//   GraduationCap,
//   Building,
//   Cog,
//   ArrowRight,
//   Star,
//   Sparkles,
//   Search,
//   Target,
//   Award,
// } from "lucide-react";

// const JobDomainsSection = () => {
//   const [selectedDomains, setSelectedDomains] = useState([]);
//   const [hoveredDomain, setHoveredDomain] = useState(null);
//   const [isVisible, setIsVisible] = useState(false);

//   const jobDomains = [
//     {
//       id: 1,
//       title: "Technology & Engineering",
//       icon: Code,
//       gradient: "from-blue-500 to-purple-600",
//       bgColor: "bg-blue-50 hover:bg-blue-100",
//       borderColor: "border-blue-200 hover:border-blue-400",
//       jobs: "15,000+ jobs",
//       popular: true,
//       description: "Software development, DevOps, Cybersecurity",
//     },
//     {
//       id: 2,
//       title: "Design & Creative",
//       icon: Palette,
//       gradient: "from-pink-500 to-rose-500",
//       bgColor: "bg-pink-50 hover:bg-pink-100",
//       borderColor: "border-pink-200 hover:border-pink-400",
//       jobs: "8,500+ jobs",
//       description: "UI/UX, Graphic design, Content creation",
//     },
//     // {
//     //   id: 3,
//     //   title: "Marketing & Growth",
//     //   icon: TrendingUp,
//     //   gradient: "from-green-500 to-emerald-500",
//     //   bgColor: "bg-green-50 hover:bg-green-100",
//     //   borderColor: "border-green-200 hover:border-green-400",
//     //   jobs: "12,000+ jobs",
//     //   popular: true,
//     //   description: "Digital marketing, SEO, Brand management",
//     // },
//     // {
//     //   id: 4,
//     //   title: "Business & Operations",
//     //   icon: Briefcase,
//     //   gradient: "from-orange-500 to-red-500",
//     //   bgColor: "bg-orange-50 hover:bg-orange-100",
//     //   borderColor: "border-orange-200 hover:border-orange-400",
//     //   jobs: "10,200+ jobs",
//     //   description: "Project management, Operations, Consulting",
//     // },
//     {
//       id: 5,
//       title: "Sales & Customer Success",
//       icon: Users,
//       gradient: "from-cyan-500 to-blue-500",
//       bgColor: "bg-cyan-50 hover:bg-cyan-100",
//       borderColor: "border-cyan-200 hover:border-cyan-400",
//       jobs: "9,800+ jobs",
//       description: "Account management, Customer support",
//     },
//     {
//       id: 6,
//       title: "AI, Data & Research",
//       icon: Brain,
//       gradient: "from-purple-500 to-indigo-600",
//       bgColor: "bg-purple-50 hover:bg-purple-100",
//       borderColor: "border-purple-200 hover:border-purple-400",
//       jobs: "7,500+ jobs",
//       trending: true,
//       description: "Machine learning, Data science, Analytics",
//     },
//   ];

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   const toggleDomain = (domainId) => {
//     setSelectedDomains((prev) =>
//       prev.includes(domainId)
//         ? prev.filter((id) => id !== domainId)
//         : [...prev, domainId]
//     );
//   };

//   return (
//     <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
//       {/* Background decorative elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
//         <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float-delayed"></div>
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
//           {/* Left side - New Professional Illustration */}
//           <div
//             className={`lg:w-1/2 flex justify-center transform transition-all duration-1000 ${
//               isVisible
//                 ? "translate-x-0 opacity-100"
//                 : "-translate-x-full opacity-0"
//             }`}
//           >
//             <div className="relative">
//               {/* Main container */}
//               <div className="w-80 h-80 lg:w-96 lg:h-96 relative">
//                 {/* Central search/target illustration */}
//                 <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-700 to-indigo-800 rounded-3xl shadow-2xl overflow-hidden">
//                   {/* Grid pattern background */}
//                   <div className="absolute inset-0 opacity-10">
//                     <div className="grid grid-cols-8 grid-rows-8 h-full w-full">
//                       {Array.from({ length: 64 }).map((_, i) => (
//                         <div key={i} className="border border-white"></div>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Central target/bullseye */}
//                   <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//                     <div className="w-32 h-32 rounded-full bg-gradient-to-r from-orange-400 to-red-500 flex items-center justify-center shadow-2xl animate-pulse">
//                       <div className="w-24 h-24 rounded-full bg-white bg-opacity-20 flex items-center justify-center backdrop-blur-sm">
//                         <div className="w-16 h-16 rounded-full bg-white bg-opacity-30 flex items-center justify-center">
//                           <Target className="w-8 h-8 text-white" />
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Floating job cards around the target */}
//                   <div className="absolute top-8 left-8 animate-bounce-slow">
//                     <div className="w-16 h-20 bg-white rounded-lg shadow-xl p-2 transform rotate-12">
//                       <div className="w-4 h-4 bg-blue-500 rounded mb-1"></div>
//                       <div className="space-y-1">
//                         <div className="w-10 h-1 bg-gray-300 rounded"></div>
//                         <div className="w-8 h-1 bg-gray-300 rounded"></div>
//                         <div className="w-12 h-1 bg-gray-300 rounded"></div>
//                       </div>
//                       <div className="mt-2 flex justify-center">
//                         <Code className="w-3 h-3 text-blue-500" />
//                       </div>
//                     </div>
//                   </div>

//                   <div className="absolute top-12 right-8 animate-bounce-slow animation-delay-1000">
//                     <div className="w-16 h-20 bg-white rounded-lg shadow-xl p-2 transform -rotate-12">
//                       <div className="w-4 h-4 bg-green-500 rounded mb-1"></div>
//                       <div className="space-y-1">
//                         <div className="w-10 h-1 bg-gray-300 rounded"></div>
//                         <div className="w-8 h-1 bg-gray-300 rounded"></div>
//                         <div className="w-12 h-1 bg-gray-300 rounded"></div>
//                       </div>
//                       <div className="mt-2 flex justify-center">
//                         <TrendingUp className="w-3 h-3 text-green-500" />
//                       </div>
//                     </div>
//                   </div>

//                   <div className="absolute bottom-8 left-6 animate-bounce-slow animation-delay-2000">
//                     <div className="w-16 h-20 bg-white rounded-lg shadow-xl p-2 transform rotate-6">
//                       <div className="w-4 h-4 bg-purple-500 rounded mb-1"></div>
//                       <div className="space-y-1">
//                         <div className="w-10 h-1 bg-gray-300 rounded"></div>
//                         <div className="w-8 h-1 bg-gray-300 rounded"></div>
//                         <div className="w-12 h-1 bg-gray-300 rounded"></div>
//                       </div>
//                       <div className="mt-2 flex justify-center">
//                         <Palette className="w-3 h-3 text-purple-500" />
//                       </div>
//                     </div>
//                   </div>

//                   <div className="absolute bottom-12 right-6 animate-bounce-slow animation-delay-3000">
//                     <div className="w-16 h-20 bg-white rounded-lg shadow-xl p-2 transform -rotate-6">
//                       <div className="w-4 h-4 bg-orange-500 rounded mb-1"></div>
//                       <div className="space-y-1">
//                         <div className="w-10 h-1 bg-gray-300 rounded"></div>
//                         <div className="w-8 h-1 bg-gray-300 rounded"></div>
//                         <div className="w-12 h-1 bg-gray-300 rounded"></div>
//                       </div>
//                       <div className="mt-2 flex justify-center">
//                         <Briefcase className="w-3 h-3 text-orange-500" />
//                       </div>
//                     </div>
//                   </div>

//                   {/* Search magnifying glass */}
//                   <div className="absolute top-20 right-20 animate-pulse">
//                     <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm">
//                       <Search className="w-6 h-6 text-white" />
//                     </div>
//                   </div>

//                   {/* Success indicators */}
//                   <div className="absolute bottom-20 left-20 animate-pulse animation-delay-1000">
//                     <div className="w-10 h-10 bg-green-400 bg-opacity-80 rounded-full flex items-center justify-center">
//                       <Award className="w-5 h-5 text-white" />
//                     </div>
//                   </div>

//                   {/* Connection lines */}
//                   <svg className="absolute inset-0 w-full h-full pointer-events-none">
//                     <defs>
//                       <linearGradient
//                         id="lineGradient"
//                         x1="0%"
//                         y1="0%"
//                         x2="100%"
//                         y2="100%"
//                       >
//                         <stop offset="0%" stopColor="rgba(255,255,255,0.3)" />
//                         <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
//                       </linearGradient>
//                     </defs>
//                     <path
//                       d="M 192 192 L 80 80"
//                       stroke="url(#lineGradient)"
//                       strokeWidth="2"
//                       strokeDasharray="5,5"
//                       className="animate-pulse"
//                     />
//                     <path
//                       d="M 192 192 L 304 80"
//                       stroke="url(#lineGradient)"
//                       strokeWidth="2"
//                       strokeDasharray="5,5"
//                       className="animate-pulse animation-delay-500"
//                     />
//                     <path
//                       d="M 192 192 L 80 304"
//                       stroke="url(#lineGradient)"
//                       strokeWidth="2"
//                       strokeDasharray="5,5"
//                       className="animate-pulse animation-delay-1000"
//                     />
//                     <path
//                       d="M 192 192 L 304 304"
//                       stroke="url(#lineGradient)"
//                       strokeWidth="2"
//                       strokeDasharray="5,5"
//                       className="animate-pulse animation-delay-1500"
//                     />
//                   </svg>
//                 </div>

//                 {/* Decorative elements around the main container */}
//                 <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-bounce"></div>
//                 <div className="absolute -top-2 -right-6 w-6 h-6 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-bounce animation-delay-1000"></div>
//                 <div className="absolute -bottom-4 -left-2 w-10 h-10 bg-gradient-to-r from-orange-400 to-red-500 rounded-full animate-bounce animation-delay-2000"></div>
//                 <div className="absolute -bottom-2 -right-4 w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-bounce animation-delay-3000"></div>
//               </div>
//             </div>
//           </div>

//           {/* Right side - Content remains the same */}
//           <div
//             className={`lg:w-1/2 transform transition-all duration-1000 delay-300 ${
//               isVisible
//                 ? "translate-x-0 opacity-100"
//                 : "translate-x-full opacity-0"
//             }`}
//           >
//             {/* Header with improved design */}
//             <div className="mb-10">
//               {/* <div className="flex items-center gap-2 mb-4">
//                 <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
//               </div> */}

//               <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
//                 Find the right job or internship with{" "}
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600 relative">
//                   trending domain
//                   <Sparkles className="absolute -top-2 -right-8 w-6 h-6 text-orange-500 animate-bounce" />
//                 </span>{" "}
//                 for you
//               </h2>

//               <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
//                 Explore diverse career paths across industries and find
//                 opportunities that match your skills, interests, and career
//                 goals.
//               </p>
//             </div>

//             {/* Enhanced Job Domain Grid */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
//               {jobDomains.map((domain, index) => {
//                 const Icon = domain.icon;
//                 const isSelected = selectedDomains.includes(domain.id);
//                 const isHovered = hoveredDomain === domain.id;

//                 return (
//                   <div
//                     key={domain.id}
//                     className={`transform transition-all duration-300 delay-${
//                       index * 50
//                     }`}
//                     style={{
//                       transform: isVisible
//                         ? "translateY(0)"
//                         : "translateY(20px)",
//                       opacity: isVisible ? 1 : 0,
//                     }}
//                   >
//                     <button
//                       onClick={() => toggleDomain(domain.id)}
//                       onMouseEnter={() => setHoveredDomain(domain.id)}
//                       onMouseLeave={() => setHoveredDomain(null)}
//                       className={`
//                         relative w-full p-5 rounded-2xl border-2 text-left transition-all duration-300 group overflow-hidden
//                         ${
//                           isSelected
//                             ? `bg-gradient-to-r ${domain.gradient} text-white border-transparent shadow-2xl transform scale-105`
//                             : `${domain.bgColor} ${domain.borderColor} text-gray-700 hover:shadow-lg hover:transform hover:scale-102`
//                         }
//                         ${
//                           isHovered && !isSelected
//                             ? "shadow-lg transform scale-102"
//                             : ""
//                         }
//                       `}
//                     >
//                       {/* Subtle background pattern */}
//                       <div className="absolute inset-0 opacity-5">
//                         <div className="absolute top-0 right-0 w-24 h-24 bg-white rounded-full transform translate-x-8 -translate-y-8"></div>
//                         <div className="absolute bottom-0 left-0 w-16 h-16 bg-white rounded-full transform -translate-x-4 translate-y-4"></div>
//                       </div>

//                       {/* Popular/Trending badges */}
//                       {domain.popular && (
//                         <div className="absolute top-0 right-0 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs px-3 py-1.5 rounded-full font-semibold shadow-lg">
//                           <Star className="w-3 h-3 inline mr-1" />
//                           Popular
//                         </div>
//                       )}
//                       {domain.trending && (
//                         <div className="absolute top-0 right-0 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs px-3 py-1.5 rounded-full font-semibold animate-pulse shadow-lg">
//                           <Sparkles className="w-3 h-3 inline mr-1" />
//                           Trending
//                         </div>
//                       )}

//                       <div className="relative z-10">
//                         <div className="flex items-start justify-between mb-3">
//                           <div
//                             className={`
//                             p-3 rounded-xl transition-all duration-300 shadow-sm
//                             ${
//                               isSelected
//                                 ? "bg-white bg-opacity-20 shadow-lg"
//                                 : `bg-gradient-to-r ${domain.gradient} shadow-md`
//                             }
//                           `}
//                           >
//                             <Icon
//                               className={`w-6 h-6 ${
//                                 isSelected ? "text-white" : "text-white"
//                               }`}
//                             />
//                           </div>

//                           {isSelected && (
//                             <div className="w-7 h-7 bg-white bg-opacity-25 rounded-full flex items-center justify-center backdrop-blur-sm">
//                               <div className="w-3 h-3 bg-white rounded-full"></div>
//                             </div>
//                           )}
//                         </div>

//                         <h3 className="font-bold text-base lg:text-lg mb-2 leading-tight">
//                           {domain.title}
//                         </h3>

//                         <p
//                           className={`text-sm mb-3 ${
//                             isSelected
//                               ? "text-white text-opacity-90"
//                               : "text-gray-600"
//                           }`}
//                         >
//                           {domain.description}
//                         </p>

//                         <div className="flex items-center justify-between">
//                           <span
//                             className={`text-sm font-semibold ${
//                               isSelected
//                                 ? "text-white text-opacity-80"
//                                 : "text-gray-500"
//                             }`}
//                           >
//                             {domain.jobs}
//                           </span>

//                           <ArrowRight
//                             className={`w-4 h-4 transition-transform duration-300 ${
//                               isSelected ? "text-white" : "text-gray-400"
//                             } ${isHovered ? "transform translate-x-1" : ""}`}
//                           />
//                         </div>
//                       </div>
//                     </button>
//                   </div>
//                 );
//               })}
//             </div>

//             {/* Enhanced Selected domains CTA */}
//             {selectedDomains.length > 0 && (
//               <div className="p-6 bg-gradient-to-r from-purple-50 via-blue-50 to-purple-50 rounded-2xl border border-purple-200 animate-fade-in shadow-lg backdrop-blur-sm">
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center gap-4">
//                     <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
//                       <Sparkles className="w-6 h-6 text-white" />
//                     </div>
//                     <div>
//                       <p className="font-semibold text-gray-800">
//                         {selectedDomains.length} domain
//                         {selectedDomains.length > 1 ? "s" : ""} selected
//                       </p>
//                       <p className="text-sm text-gray-600 mt-1">
//                         Ready to explore personalized opportunities?
//                       </p>
//                     </div>
//                   </div>
//                   <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2 group">
//                     Explore Jobs
//                     <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
//                   </button>
//                 </div>
//               </div>
//             )}

//             {/* Additional CTA when no domains selected */}
//             {selectedDomains.length === 0 && (
//               <div className="text-center p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
//                 <p className="text-gray-600 mb-4">
//                   Select domains that interest you to get started
//                 </p>
//                 <div className="flex justify-center gap-2">
//                   <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
//                   <div
//                     className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"
//                     style={{ animationDelay: "0.2s" }}
//                   ></div>
//                   <div
//                     className="w-2 h-2 bg-green-400 rounded-full animate-bounce"
//                     style={{ animationDelay: "0.4s" }}
//                   ></div>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
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

//         @keyframes float-delayed {
//           0%,
//           100% {
//             transform: translateY(0px);
//           }
//           50% {
//             transform: translateY(-15px);
//           }
//         }

//         @keyframes bounce-slow {
//           0%,
//           100% {
//             transform: translateY(0) rotate(var(--rotation, 0deg));
//           }
//           50% {
//             transform: translateY(-10px) rotate(var(--rotation, 0deg));
//           }
//         }

//         @keyframes fade-in {
//           from {
//             opacity: 0;
//             transform: translateY(10px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .animate-float {
//           animation: float 6s ease-in-out infinite;
//         }

//         .animate-float-delayed {
//           animation: float-delayed 8s ease-in-out infinite;
//         }

//         .animate-bounce-slow {
//           animation: bounce-slow 4s ease-in-out infinite;
//         }

//         .animation-delay-500 {
//           animation-delay: 0.5s;
//         }

//         .animation-delay-1000 {
//           animation-delay: 1s;
//         }

//         .animation-delay-1500 {
//           animation-delay: 1.5s;
//         }

//         .animation-delay-2000 {
//           animation-delay: 2s;
//         }

//         .animation-delay-3000 {
//           animation-delay: 3s;
//         }

//         .animate-fade-in {
//           animation: fade-in 0.5s ease-out;
//         }

//         .hover\\:scale-102:hover {
//           transform: scale(1.02);
//         }
//       `}</style>
//     </section>
//   );
// };

// export default JobDomainsSection;

// jjjjjjjjjjjjjj

// "use client";
// import React, { useState, useEffect } from "react";
// import {
//   Code,
//   Palette,
//   TrendingUp,
//   Briefcase,
//   Users,
//   Brain,
//   DollarSign,
//   Rocket,
//   GraduationCap,
//   Building,
//   Cog,
//   ArrowRight,
//   Star,
//   Sparkles,
//   Search,
//   Target,
//   Award,
// } from "lucide-react";

// const JobDomainsSection = () => {
//   const [selectedDomain, setSelectedDomain] = useState(null); // Changed to single selection
//   const [hoveredDomain, setHoveredDomain] = useState(null);
//   const [isVisible, setIsVisible] = useState(false);

//   const jobDomains = [
//     {
//       id: 1,
//       title: "Technology & Engineering",
//       icon: Code,
//       gradient: "from-blue-500 to-purple-600",
//       bgColor: "bg-blue-50 hover:bg-blue-100",
//       borderColor: "border-blue-200 hover:border-blue-400",
//       jobs: "15,000+ jobs",
//       popular: true,
//       description: "Software development, DevOps, Cybersecurity",
//     },
//     {
//       id: 2,
//       title: "Design & Creative",
//       icon: Palette,
//       gradient: "from-pink-500 to-rose-500",
//       bgColor: "bg-pink-50 hover:bg-pink-100",
//       borderColor: "border-pink-200 hover:border-pink-400",
//       jobs: "8,500+ jobs",
//       description: "UI/UX, Graphic design, Content creation",
//     },
//     {
//       id: 3,
//       title: "Marketing & Growth",
//       icon: TrendingUp,
//       gradient: "from-green-500 to-emerald-500",
//       bgColor: "bg-green-50 hover:bg-green-100",
//       borderColor: "border-green-200 hover:border-green-400",
//       jobs: "12,000+ jobs",
//       popular: true,
//       description: "Digital marketing, SEO, Brand management",
//     },
//     {
//       id: 4,
//       title: "Business & Operations",
//       icon: Briefcase,
//       gradient: "from-orange-500 to-red-500",
//       bgColor: "bg-orange-50 hover:bg-orange-100",
//       borderColor: "border-orange-200 hover:border-orange-400",
//       jobs: "10,200+ jobs",
//       description: "Project management, Operations, Consulting",
//     },
//     {
//       id: 5,
//       title: "Sales & Customer Success",
//       icon: Users,
//       gradient: "from-cyan-500 to-blue-500",
//       bgColor: "bg-cyan-50 hover:bg-cyan-100",
//       borderColor: "border-cyan-200 hover:border-cyan-400",
//       jobs: "9,800+ jobs",
//       description: "Account management, Customer support",
//     },
//     {
//       id: 6,
//       title: "AI, Data & Research",
//       icon: Brain,
//       gradient: "from-purple-500 to-indigo-600",
//       bgColor: "bg-purple-50 hover:bg-purple-100",
//       borderColor: "border-purple-200 hover:border-purple-400",
//       jobs: "7,500+ jobs",
//       trending: true,
//       description: "Machine learning, Data science, Analytics",
//     },
//   ];

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   const selectDomain = (domainId) => {
//     // If the same domain is clicked, deselect it, otherwise select the new one
//     setSelectedDomain(selectedDomain === domainId ? null : domainId);
//   };

//   return (
//     <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
//       {/* Background decorative elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
//         <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float-delayed"></div>
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
//           {/* Left side - Moved more to the left */}
//           <div
//             className={`lg:w-5/12 flex justify-start transform transition-all duration-1000 ${
//               isVisible
//                 ? "translate-x-0 opacity-100"
//                 : "-translate-x-full opacity-0"
//             }`}
//           >
//             <div className="relative">
//               {/* Main container */}
//               <div className="w-72 h-72 lg:w-80 lg:h-80 relative">
//                 {/* Central search/target illustration */}
//                 <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-700 to-indigo-800 rounded-3xl shadow-2xl overflow-hidden">
//                   {/* Grid pattern background */}
//                   <div className="absolute inset-0 opacity-10">
//                     <div className="grid grid-cols-8 grid-rows-8 h-full w-full">
//                       {Array.from({ length: 64 }).map((_, i) => (
//                         <div key={i} className="border border-white"></div>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Central target/bullseye */}
//                   <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//                     <div className="w-28 h-28 rounded-full bg-gradient-to-r from-orange-400 to-red-500 flex items-center justify-center shadow-2xl animate-pulse">
//                       <div className="w-20 h-20 rounded-full bg-white bg-opacity-20 flex items-center justify-center backdrop-blur-sm">
//                         <div className="w-12 h-12 rounded-full bg-white bg-opacity-30 flex items-center justify-center">
//                           <Target className="w-6 h-6 text-white" />
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Floating job cards around the target */}
//                   <div className="absolute top-6 left-6 animate-bounce-slow">
//                     <div className="w-14 h-16 bg-white rounded-lg shadow-xl p-2 transform rotate-12">
//                       <div className="w-3 h-3 bg-blue-500 rounded mb-1"></div>
//                       <div className="space-y-1">
//                         <div className="w-8 h-0.5 bg-gray-300 rounded"></div>
//                         <div className="w-6 h-0.5 bg-gray-300 rounded"></div>
//                         <div className="w-10 h-0.5 bg-gray-300 rounded"></div>
//                       </div>
//                       <div className="mt-1 flex justify-center">
//                         <Code className="w-2.5 h-2.5 text-blue-500" />
//                       </div>
//                     </div>
//                   </div>

//                   <div className="absolute top-8 right-6 animate-bounce-slow animation-delay-1000">
//                     <div className="w-14 h-16 bg-white rounded-lg shadow-xl p-2 transform -rotate-12">
//                       <div className="w-3 h-3 bg-green-500 rounded mb-1"></div>
//                       <div className="space-y-1">
//                         <div className="w-8 h-0.5 bg-gray-300 rounded"></div>
//                         <div className="w-6 h-0.5 bg-gray-300 rounded"></div>
//                         <div className="w-10 h-0.5 bg-gray-300 rounded"></div>
//                       </div>
//                       <div className="mt-1 flex justify-center">
//                         <TrendingUp className="w-2.5 h-2.5 text-green-500" />
//                       </div>
//                     </div>
//                   </div>

//                   <div className="absolute bottom-6 left-4 animate-bounce-slow animation-delay-2000">
//                     <div className="w-14 h-16 bg-white rounded-lg shadow-xl p-2 transform rotate-6">
//                       <div className="w-3 h-3 bg-purple-500 rounded mb-1"></div>
//                       <div className="space-y-1">
//                         <div className="w-8 h-0.5 bg-gray-300 rounded"></div>
//                         <div className="w-6 h-0.5 bg-gray-300 rounded"></div>
//                         <div className="w-10 h-0.5 bg-gray-300 rounded"></div>
//                       </div>
//                       <div className="mt-1 flex justify-center">
//                         <Palette className="w-2.5 h-2.5 text-purple-500" />
//                       </div>
//                     </div>
//                   </div>

//                   <div className="absolute bottom-8 right-4 animate-bounce-slow animation-delay-3000">
//                     <div className="w-14 h-16 bg-white rounded-lg shadow-xl p-2 transform -rotate-6">
//                       <div className="w-3 h-3 bg-orange-500 rounded mb-1"></div>
//                       <div className="space-y-1">
//                         <div className="w-8 h-0.5 bg-gray-300 rounded"></div>
//                         <div className="w-6 h-0.5 bg-gray-300 rounded"></div>
//                         <div className="w-10 h-0.5 bg-gray-300 rounded"></div>
//                       </div>
//                       <div className="mt-1 flex justify-center">
//                         <Briefcase className="w-2.5 h-2.5 text-orange-500" />
//                       </div>
//                     </div>
//                   </div>

//                   {/* Search magnifying glass */}
//                   <div className="absolute top-16 right-16 animate-pulse">
//                     <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm">
//                       <Search className="w-5 h-5 text-white" />
//                     </div>
//                   </div>

//                   {/* Success indicators */}
//                   <div className="absolute bottom-16 left-16 animate-pulse animation-delay-1000">
//                     <div className="w-8 h-8 bg-green-400 bg-opacity-80 rounded-full flex items-center justify-center">
//                       <Award className="w-4 h-4 text-white" />
//                     </div>
//                   </div>

//                   {/* Connection lines */}
//                   <svg className="absolute inset-0 w-full h-full pointer-events-none">
//                     <defs>
//                       <linearGradient
//                         id="lineGradient"
//                         x1="0%"
//                         y1="0%"
//                         x2="100%"
//                         y2="100%"
//                       >
//                         <stop offset="0%" stopColor="rgba(255,255,255,0.3)" />
//                         <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
//                       </linearGradient>
//                     </defs>
//                     <path
//                       d="M 160 160 L 70 70"
//                       stroke="url(#lineGradient)"
//                       strokeWidth="2"
//                       strokeDasharray="5,5"
//                       className="animate-pulse"
//                     />
//                     <path
//                       d="M 160 160 L 250 70"
//                       stroke="url(#lineGradient)"
//                       strokeWidth="2"
//                       strokeDasharray="5,5"
//                       className="animate-pulse animation-delay-500"
//                     />
//                     <path
//                       d="M 160 160 L 70 250"
//                       stroke="url(#lineGradient)"
//                       strokeWidth="2"
//                       strokeDasharray="5,5"
//                       className="animate-pulse animation-delay-1000"
//                     />
//                     <path
//                       d="M 160 160 L 250 250"
//                       stroke="url(#lineGradient)"
//                       strokeWidth="2"
//                       strokeDasharray="5,5"
//                       className="animate-pulse animation-delay-1500"
//                     />
//                   </svg>
//                 </div>

//                 {/* Decorative elements around the main container */}
//                 <div className="absolute -top-3 -left-3 w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-bounce"></div>
//                 <div className="absolute -top-2 -right-4 w-5 h-5 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-bounce animation-delay-1000"></div>
//                 <div className="absolute -bottom-3 -left-2 w-8 h-8 bg-gradient-to-r from-orange-400 to-red-500 rounded-full animate-bounce animation-delay-2000"></div>
//                 <div className="absolute -bottom-2 -right-3 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-bounce animation-delay-3000"></div>
//               </div>
//             </div>
//           </div>

//           {/* Right side - Content with smaller header */}
//           <div
//             className={`lg:w-7/12 transform transition-all duration-1000 delay-300 ${
//               isVisible
//                 ? "translate-x-0 opacity-100"
//                 : "translate-x-full opacity-0"
//             }`}
//           >
//             {/* Header with smaller size */}
//             <div className="mb-8">
//               <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-5 leading-tight">
//                 Find the right job or internship with{" "}
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-600 relative">
//                   trending domain
//                   {/* <Sparkles className="absolute -top-1 -right-6 w-5 h-5 text-orange-500 animate-bounce" /> */}
//                 </span>{" "}
//                 for you
//               </h2>

//               <p className="text-base text-gray-600 leading-relaxed max-w-2xl">
//                 Explore diverse career paths across industries and find
//                 opportunities that match your skills, interests, and career
//                 goals.
//               </p>
//             </div>

//             {/* Enhanced Job Domain Grid - 3 cards per row minimum */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
//               {jobDomains.map((domain, index) => {
//                 const Icon = domain.icon;
//                 const isSelected = selectedDomain === domain.id;
//                 const isHovered = hoveredDomain === domain.id;

//                 return (
//                   <div
//                     key={domain.id}
//                     className={`transform transition-all duration-300 delay-${
//                       index * 50
//                     }`}
//                     style={{
//                       transform: isVisible
//                         ? "translateY(0)"
//                         : "translateY(20px)",
//                       opacity: isVisible ? 1 : 0,
//                     }}
//                   >
//                     <button
//                       onClick={() => selectDomain(domain.id)}
//                       onMouseEnter={() => setHoveredDomain(domain.id)}
//                       onMouseLeave={() => setHoveredDomain(null)}
//                       className={`
//                         relative w-full p-4 rounded-2xl border-2 text-left transition-all duration-300 group overflow-hidden
//                         ${
//                           isSelected
//                             ? `bg-gradient-to-r ${domain.gradient} text-white border-transparent shadow-2xl transform scale-105`
//                             : `${domain.bgColor} ${domain.borderColor} text-gray-700 hover:shadow-lg hover:transform hover:scale-102`
//                         }
//                         ${
//                           isHovered && !isSelected
//                             ? "shadow-lg transform scale-102"
//                             : ""
//                         }
//                       `}
//                     >
//                       {/* Subtle background pattern */}
//                       <div className="absolute inset-0 opacity-5">
//                         <div className="absolute top-0 right-0 w-20 h-20 bg-white rounded-full transform translate-x-6 -translate-y-6"></div>
//                         <div className="absolute bottom-0 left-0 w-12 h-12 bg-white rounded-full transform -translate-x-3 translate-y-3"></div>
//                       </div>

//                       {/* Popular/Trending badges */}
//                       {domain.popular && (
//                         <div className="absolute top-0 right-0 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs px-2 py-1 rounded-full font-semibold shadow-lg">
//                           <Star className="w-2.5 h-2.5 inline mr-1" />
//                           Popular
//                         </div>
//                       )}
//                       {domain.trending && (
//                         <div className="absolute top-0 right-0 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs px-2 py-1 rounded-full font-semibold animate-pulse shadow-lg">
//                           <Sparkles className="w-2.5 h-2.5 inline mr-1" />
//                           Trending
//                         </div>
//                       )}

//                       <div className="relative z-10">
//                         <div className="flex items-start justify-between mb-3">
//                           <div
//                             className={`
//                             p-2.5 rounded-xl transition-all duration-300 shadow-sm
//                             ${
//                               isSelected
//                                 ? "bg-white bg-opacity-20 shadow-lg"
//                                 : `bg-gradient-to-r ${domain.gradient} shadow-md`
//                             }
//                           `}
//                           >
//                             <Icon
//                               className={`w-5 h-5 ${
//                                 isSelected ? "text-white" : "text-white"
//                               }`}
//                             />
//                           </div>

//                           {isSelected && (
//                             <div className="w-6 h-6 bg-white bg-opacity-25 rounded-full flex items-center justify-center backdrop-blur-sm">
//                               <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
//                             </div>
//                           )}
//                         </div>

//                         <h3 className="font-bold text-sm lg:text-base mb-2 leading-tight">
//                           {domain.title}
//                         </h3>

//                         <p
//                           className={`text-xs mb-3 ${
//                             isSelected
//                               ? "text-white text-opacity-90"
//                               : "text-gray-600"
//                           }`}
//                         >
//                           {domain.description}
//                         </p>

//                         <div className="flex items-center justify-between">
//                           <span
//                             className={`text-xs font-semibold ${
//                               isSelected
//                                 ? "text-white text-opacity-80"
//                                 : "text-gray-500"
//                             }`}
//                           >
//                             {domain.jobs}
//                           </span>

//                           <ArrowRight
//                             className={`w-3.5 h-3.5 transition-transform duration-300 ${
//                               isSelected ? "text-white" : "text-gray-400"
//                             } ${isHovered ? "transform translate-x-1" : ""}`}
//                           />
//                         </div>
//                       </div>
//                     </button>
//                   </div>
//                 );
//               })}
//             </div>

//             {/* Enhanced Selected domain CTA */}
//             {selectedDomain && (
//               <div className="p-5 bg-gradient-to-r from-purple-50 via-blue-50 to-purple-50 rounded-2xl border border-purple-200 animate-fade-in shadow-lg backdrop-blur-sm">
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center gap-3">
//                     <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
//                       <Sparkles className="w-5 h-5 text-white" />
//                     </div>
//                     <div>
//                       <p className="font-semibold text-gray-800">
//                         Domain selected
//                       </p>
//                       <p className="text-sm text-gray-600 mt-1">
//                         Ready to explore personalized opportunities?
//                       </p>
//                     </div>
//                   </div>
//                   <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2.5 rounded-xl font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2 group">
//                     Explore Jobs
//                     <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
//                   </button>
//                 </div>
//               </div>
//             )}

//             {/* Additional CTA when no domain selected */}
//             {!selectedDomain && (
//               <div className="text-center p-5 bg-white rounded-2xl border border-gray-100 shadow-sm">
//                 <p className="text-gray-600 mb-3">
//                   Select a domain that interests you to get started
//                 </p>
//                 <div className="flex justify-center gap-2">
//                   <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
//                   <div
//                     className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"
//                     style={{ animationDelay: "0.2s" }}
//                   ></div>
//                   <div
//                     className="w-2 h-2 bg-green-400 rounded-full animate-bounce"
//                     style={{ animationDelay: "0.4s" }}
//                   ></div>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
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

//         @keyframes float-delayed {
//           0%,
//           100% {
//             transform: translateY(0px);
//           }
//           50% {
//             transform: translateY(-15px);
//           }
//         }

//         @keyframes bounce-slow {
//           0%,
//           100% {
//             transform: translateY(0) rotate(var(--rotation, 0deg));
//           }
//           50% {
//             transform: translateY(-10px) rotate(var(--rotation, 0deg));
//           }
//         }

//         @keyframes fade-in {
//           from {
//             opacity: 0;
//             transform: translateY(10px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .animate-float {
//           animation: float 6s ease-in-out infinite;
//         }

//         .animate-float-delayed {
//           animation: float-delayed 8s ease-in-out infinite;
//         }

//         .animate-bounce-slow {
//           animation: bounce-slow 4s ease-in-out infinite;
//         }

//         .animation-delay-500 {
//           animation-delay: 0.5s;
//         }

//         .animation-delay-1000 {
//           animation-delay: 1s;
//         }

//         .animation-delay-1500 {
//           animation-delay: 1.5s;
//         }

//         .animation-delay-2000 {
//           animation-delay: 2s;
//         }

//         .animation-delay-3000 {
//           animation-delay: 3s;
//         }

//         .animate-fade-in {
//           animation: fade-in 0.5s ease-out;
//         }

//         .hover\\:scale-102:hover {
//           transform: scale(1.02);
//         }
//       `}</style>
//     </section>
//   );
// };

// export default JobDomainsSection;

// javeddd

// "use client";
// import React, { useState, useEffect } from "react";
// import {
//   Code,
//   Palette,
//   TrendingUp,
//   Briefcase,
//   Users,
//   Brain,
//   DollarSign,
//   Rocket,
//   GraduationCap,
//   Building,
//   Cog,
//   ArrowRight,
//   Star,
//   Sparkles,
//   Search,
//   Target,
//   Award,
// } from "lucide-react";

// const JobDomainsSection = () => {
//   const [selectedDomain, setSelectedDomain] = useState(null);
//   const [hoveredDomain, setHoveredDomain] = useState(null);
//   const [isVisible, setIsVisible] = useState(false);

//   const jobDomains = [
//     {
//       id: 1,
//       title: "Technology & Engineering",
//       icon: Code,
//       jobs: "15,000+ jobs",
//       popular: true,
//       description: "Software development, DevOps, Cybersecurity",
//     },
//     {
//       id: 2,
//       title: "Design & Creative",
//       icon: Palette,
//       jobs: "8,500+ jobs",
//       description: "UI/UX, Graphic design, Content creation",
//     },
//     {
//       id: 3,
//       title: "Marketing & Growth",
//       icon: TrendingUp,
//       jobs: "12,000+ jobs",
//       popular: true,
//       description: "Digital marketing, SEO, Brand management",
//     },
//     {
//       id: 4,
//       title: "Business & Operations",
//       icon: Briefcase,
//       jobs: "10,200+ jobs",
//       description: "Project management, Operations, Consulting",
//     },
//     {
//       id: 5,
//       title: "Sales & Customer Success",
//       icon: Users,
//       jobs: "9,800+ jobs",
//       description: "Account management, Customer support",
//     },
//     {
//       id: 6,
//       title: "AI, Data & Research",
//       icon: Brain,
//       jobs: "7,500+ jobs",
//       trending: true,
//       description: "Machine learning, Data science, Analytics",
//     },
//   ];

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   const selectDomain = (domainId) => {
//     setSelectedDomain(selectedDomain === domainId ? null : domainId);
//   };

//   return (
//     <section className="py-20 bg-gray-50 relative overflow-hidden">
//       {/* Subtle background decorative elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-20 left-10 w-72 h-72 bg-gray-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
//         <div className="absolute bottom-20 right-10 w-72 h-72 bg-slate-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
//           {/* Left side illustration */}
//           <div
//             className={`lg:w-5/12 flex justify-start transform transition-all duration-1000 ${
//               isVisible
//                 ? "translate-x-0 opacity-100"
//                 : "-translate-x-full opacity-0"
//             }`}
//           >
//             <div className="relative">
//               <div className="w-72 h-72 lg:w-80 lg:h-80 relative">
//                 {/* Main container with professional colors */}
//                 <div className="absolute inset-0 bg-gradient-to-br from-slate-700 via-gray-800 to-slate-900 rounded-3xl shadow-2xl overflow-hidden">
//                   {/* Grid pattern background */}
//                   <div className="absolute inset-0 opacity-5">
//                     <div className="grid grid-cols-8 grid-rows-8 h-full w-full">
//                       {Array.from({ length: 64 }).map((_, i) => (
//                         <div key={i} className="border border-white"></div>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Central target */}
//                   <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//                     <div className="w-28 h-28 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 flex items-center justify-center shadow-2xl">
//                       <div className="w-20 h-20 rounded-full bg-white bg-opacity-20 flex items-center justify-center backdrop-blur-sm">
//                         <div className="w-12 h-12 rounded-full bg-white bg-opacity-30 flex items-center justify-center">
//                           <Target className="w-6 h-6 text-white" />
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Professional job cards */}
//                   <div className="absolute top-6 left-6 animate-bounce-slow">
//                     <div className="w-14 h-16 bg-white rounded-lg shadow-xl p-2 transform rotate-12">
//                       <div className="w-3 h-3 bg-gray-400 rounded mb-1"></div>
//                       <div className="space-y-1">
//                         <div className="w-8 h-0.5 bg-gray-300 rounded"></div>
//                         <div className="w-6 h-0.5 bg-gray-300 rounded"></div>
//                         <div className="w-10 h-0.5 bg-gray-300 rounded"></div>
//                       </div>
//                       <div className="mt-1 flex justify-center">
//                         <Code className="w-2.5 h-2.5 text-gray-600" />
//                       </div>
//                     </div>
//                   </div>

//                   <div className="absolute top-8 right-6 animate-bounce-slow animation-delay-1000">
//                     <div className="w-14 h-16 bg-white rounded-lg shadow-xl p-2 transform -rotate-12">
//                       <div className="w-3 h-3 bg-gray-400 rounded mb-1"></div>
//                       <div className="space-y-1">
//                         <div className="w-8 h-0.5 bg-gray-300 rounded"></div>
//                         <div className="w-6 h-0.5 bg-gray-300 rounded"></div>
//                         <div className="w-10 h-0.5 bg-gray-300 rounded"></div>
//                       </div>
//                       <div className="mt-1 flex justify-center">
//                         <TrendingUp className="w-2.5 h-2.5 text-gray-600" />
//                       </div>
//                     </div>
//                   </div>

//                   <div className="absolute bottom-6 left-4 animate-bounce-slow animation-delay-2000">
//                     <div className="w-14 h-16 bg-white rounded-lg shadow-xl p-2 transform rotate-6">
//                       <div className="w-3 h-3 bg-gray-400 rounded mb-1"></div>
//                       <div className="space-y-1">
//                         <div className="w-8 h-0.5 bg-gray-300 rounded"></div>
//                         <div className="w-6 h-0.5 bg-gray-300 rounded"></div>
//                         <div className="w-10 h-0.5 bg-gray-300 rounded"></div>
//                       </div>
//                       <div className="mt-1 flex justify-center">
//                         <Palette className="w-2.5 h-2.5 text-gray-600" />
//                       </div>
//                     </div>
//                   </div>

//                   <div className="absolute bottom-8 right-4 animate-bounce-slow animation-delay-3000">
//                     <div className="w-14 h-16 bg-white rounded-lg shadow-xl p-2 transform -rotate-6">
//                       <div className="w-3 h-3 bg-gray-400 rounded mb-1"></div>
//                       <div className="space-y-1">
//                         <div className="w-8 h-0.5 bg-gray-300 rounded"></div>
//                         <div className="w-6 h-0.5 bg-gray-300 rounded"></div>
//                         <div className="w-10 h-0.5 bg-gray-300 rounded"></div>
//                       </div>
//                       <div className="mt-1 flex justify-center">
//                         <Briefcase className="w-2.5 h-2.5 text-gray-600" />
//                       </div>
//                     </div>
//                   </div>

//                   {/* Other elements remain the same */}
//                   <div className="absolute top-16 right-16 animate-pulse">
//                     <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm">
//                       <Search className="w-5 h-5 text-white" />
//                     </div>
//                   </div>

//                   <div className="absolute bottom-16 left-16 animate-pulse animation-delay-1000">
//                     <div className="w-8 h-8 bg-blue-600 bg-opacity-80 rounded-full flex items-center justify-center">
//                       <Award className="w-4 h-4 text-white" />
//                     </div>
//                   </div>

//                   {/* Connection lines */}
//                   <svg className="absolute inset-0 w-full h-full pointer-events-none">
//                     <defs>
//                       <linearGradient
//                         id="lineGradient"
//                         x1="0%"
//                         y1="0%"
//                         x2="100%"
//                         y2="100%"
//                       >
//                         <stop offset="0%" stopColor="rgba(255,255,255,0.3)" />
//                         <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
//                       </linearGradient>
//                     </defs>
//                     <path
//                       d="M 160 160 L 70 70"
//                       stroke="url(#lineGradient)"
//                       strokeWidth="2"
//                       strokeDasharray="5,5"
//                       className="animate-pulse"
//                     />
//                     <path
//                       d="M 160 160 L 250 70"
//                       stroke="url(#lineGradient)"
//                       strokeWidth="2"
//                       strokeDasharray="5,5"
//                       className="animate-pulse animation-delay-500"
//                     />
//                     <path
//                       d="M 160 160 L 70 250"
//                       stroke="url(#lineGradient)"
//                       strokeWidth="2"
//                       strokeDasharray="5,5"
//                       className="animate-pulse animation-delay-1000"
//                     />
//                     <path
//                       d="M 160 160 L 250 250"
//                       stroke="url(#lineGradient)"
//                       strokeWidth="2"
//                       strokeDasharray="5,5"
//                       className="animate-pulse animation-delay-1500"
//                     />
//                   </svg>
//                 </div>

//                 {/* Subtle decorative elements */}
//                 <div className="absolute -top-3 -left-3 w-6 h-6 bg-gray-400 rounded-full"></div>
//                 <div className="absolute -top-2 -right-4 w-5 h-5 bg-blue-600 rounded-full"></div>
//                 <div className="absolute -bottom-3 -left-2 w-8 h-8 bg-slate-500 rounded-full"></div>
//                 <div className="absolute -bottom-2 -right-3 w-6 h-6 bg-gray-500 rounded-full"></div>
//               </div>
//             </div>
//           </div>

//           {/* Right side - Content */}
//           <div
//             className={`lg:w-7/12 transform transition-all duration-1000 delay-300 ${
//               isVisible
//                 ? "translate-x-0 opacity-100"
//                 : "translate-x-full opacity-0"
//             }`}
//           >
//             {/* Header */}
//             <div className="mb-8">
//               <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-5 leading-tight">
//                 Find the right job or internship with{" "}
//                 <span className="text-blue-600 relative">
//                   trending domain for you
//                 </span>{" "}
//               </h2>

//               <p className="text-base text-gray-600 leading-relaxed max-w-2xl">
//                 Explore diverse career paths across industries and find
//                 opportunities that match your skills, interests, and career
//                 goals.
//               </p>
//             </div>

//             {/* Professional Job Domain Grid */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
//               {jobDomains.map((domain, index) => {
//                 const Icon = domain.icon;
//                 const isSelected = selectedDomain === domain.id;

//                 return (
//                   <div
//                     key={domain.id}
//                     className={`transform transition-all duration-300 delay-${
//                       index * 50
//                     }`}
//                     style={{
//                       transform: isVisible
//                         ? "translateY(0)"
//                         : "translateY(20px)",
//                       opacity: isVisible ? 1 : 0,
//                     }}
//                   >
//                     <button
//                       onClick={() => selectDomain(domain.id)}
//                       onMouseEnter={() => setHoveredDomain(domain.id)}
//                       onMouseLeave={() => setHoveredDomain(null)}
//                       className={`
//                         relative w-full cursor-pointer p-4 rounded-xl border text-left transition-all duration-300 group
//                         ${
//                           isSelected
//                             ? "bg-blue-600 text-white border-blue-600 shadow-lg"
//                             : "bg-white text-gray-700 border-gray-200 hover:border-gray-300 hover:shadow-md"
//                         }
//                       `}
//                     >
//                       {/* Professional badges */}
//                       {domain.popular && (
//                         <div className="absolute top-2 right-2 bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-medium">
//                           <Star className="w-2.5 h-2.5 inline mr-1" />
//                           Popular
//                         </div>
//                       )}
//                       {domain.trending && (
//                         <div className="absolute top-2 right-2 bg-orange-100 text-orange-700 text-xs px-2 py-1 rounded-full font-medium">
//                           <Sparkles className="w-2.5 h-2.5 inline mr-1" />
//                           Trending
//                         </div>
//                       )}

//                       <div className="relative z-10">
//                         <div className="flex items-start justify-between mb-3">
//                           <div
//                             className={`
//                             p-2.5 rounded-lg transition-all duration-300
//                             ${
//                               isSelected
//                                 ? "bg-white bg-opacity-20"
//                                 : "bg-gray-500"
//                             }
//                           `}
//                           >
//                             <Icon
//                               className={`w-5 h-5 ${
//                                 isSelected ? "text-blue-500" : "text-white"
//                               }`}
//                             />
//                           </div>

//                           {isSelected && (
//                             <div className="w-6 h-6 bg-gray-300 bg-opacity-25 rounded-full flex items-center justify-center">
//                               <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
//                             </div>
//                           )}
//                         </div>

//                         <h3 className="font-semibold text-sm lg:text-base mb-2 leading-tight">
//                           {domain.title}
//                         </h3>

//                         <p
//                           className={`text-xs mb-3 ${
//                             isSelected
//                               ? "text-white text-opacity-90"
//                               : "text-gray-500"
//                           }`}
//                         >
//                           {domain.description}
//                         </p>

//                         <div className="flex items-center justify-between">
//                           <span
//                             className={`text-xs font-medium ${
//                               isSelected
//                                 ? "text-white text-opacity-80"
//                                 : "text-gray-500"
//                             }`}
//                           >
//                             {domain.jobs}
//                           </span>

//                           <ArrowRight
//                             className={`w-3.5 h-3.5 transition-transform duration-300 ${
//                               isSelected ? "text-white" : "text-gray-400"
//                             }`}
//                           />
//                         </div>
//                       </div>
//                     </button>
//                   </div>
//                 );
//               })}
//             </div>

//             {/* Selected domain CTA */}
//             {selectedDomain && (
//               <div className="p-5 bg-white rounded-xl border border-gray-200 shadow-sm animate-fade-in">
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center gap-3">
//                     <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
//                       <Sparkles className="w-5 h-5 text-white" />
//                     </div>
//                     <div>
//                       <p className="font-semibold text-gray-800">
//                         Domain selected
//                       </p>
//                       <p className="text-sm text-gray-600 mt-1">
//                         Ready to explore personalized opportunities?
//                       </p>
//                     </div>
//                   </div>
//                   <button className="bg-blue-600 text-white px-6 py-2.5 rounded-lg cursor-pointer font-medium hover:bg-blue-700 transition-colors duration-300 flex items-center gap-2 group">
//                     Explore Jobs
//                     <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
//                   </button>
//                 </div>
//               </div>
//             )}

//             {/* No domain selected state */}
//             {!selectedDomain && (
//               <div className="text-center p-5 bg-white rounded-xl border border-gray-100 shadow-sm">
//                 <p className="text-gray-600 mb-3">
//                   Select a domain that interests you to get started
//                 </p>
//                 <div className="flex justify-center gap-2">
//                   <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
//                   <div
//                     className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"
//                     style={{ animationDelay: "0.2s" }}
//                   ></div>
//                   <div
//                     className="w-2 h-2 bg-gray-600 rounded-full animate-bounce"
//                     style={{ animationDelay: "0.4s" }}
//                   ></div>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes bounce-slow {
//           0%,
//           100% {
//             transform: translateY(0) rotate(var(--rotation, 0deg));
//           }
//           50% {
//             transform: translateY(-10px) rotate(var(--rotation, 0deg));
//           }
//         }

//         @keyframes fade-in {
//           from {
//             opacity: 0;
//             transform: translateY(10px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .animate-bounce-slow {
//           animation: bounce-slow 4s ease-in-out infinite;
//         }

//         .animation-delay-500 {
//           animation-delay: 0.5s;
//         }

//         .animation-delay-1000 {
//           animation-delay: 1s;
//         }

//         .animation-delay-1500 {
//           animation-delay: 1.5s;
//         }

//         .animation-delay-2000 {
//           animation-delay: 2s;
//         }

//         .animation-delay-3000 {
//           animation-delay: 3s;
//         }

//         .animate-fade-in {
//           animation: fade-in 0.5s ease-out;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default JobDomainsSection;

// jjjjjjjjjjjjjjj

"use client";
import React, { useState, useEffect } from "react";
import {
  Code,
  Palette,
  TrendingUp,
  Briefcase,
  Users,
  Brain,
  DollarSign,
  Rocket,
  GraduationCap,
  Building,
  Cog,
  ArrowRight,
  Star,
  Sparkles,
  Search,
  Target,
  Award,
} from "lucide-react";
import Image from "next/image";

const JobDomainsSection = () => {
  const [selectedDomain, setSelectedDomain] = useState(null);
  const [hoveredDomain, setHoveredDomain] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const jobDomains = [
    {
      id: 1,
      title: "Technology & Engineering",
      icon: Code,
      jobs: "15,000+ jobs",
      popular: true,
      description: "Software development, DevOps, Cybersecurity",
    },
    {
      id: 2,
      title: "Design & Creative",
      icon: Palette,
      jobs: "8,500+ jobs",
      description: "UI/UX, Graphic design, Content creation",
    },
    {
      id: 3,
      title: "Marketing & Growth",
      icon: TrendingUp,
      jobs: "12,000+ jobs",
      popular: true,
      description: "Digital marketing, SEO, Brand management",
    },
    {
      id: 4,
      title: "Business & Operations",
      icon: Briefcase,
      jobs: "10,200+ jobs",
      description: "Project management, Operations, Consulting",
    },
    {
      id: 5,
      title: "Sales & Customer Success",
      icon: Users,
      jobs: "9,800+ jobs",
      description: "Account management, Customer support",
    },
    {
      id: 6,
      title: "AI, Data & Research",
      icon: Brain,
      jobs: "7,500+ jobs",
      trending: true,
      description: "Machine learning, Data science, Analytics",
    },
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const selectDomain = (domainId) => {
    setSelectedDomain(selectedDomain === domainId ? null : domainId);
  };

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Subtle background decorative elements */}
      {/* <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gray-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-slate-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
      </div> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Left side image */}
          <div
            className={`lg:w-6/12  flex justify-start transform transition-all duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-full opacity-0"
            }`}
          >

            <img
              src="/intershipjobs.png"
              alt="Job domains illustration"
              className="w-[300px] h-[250px] md:w-[600px] md:h-[500px] lg:w-[900px] lg:h-[700px] object-contain rounded-sm"
            />

     
          </div>

          {/* Right side - Content */}
          <div
            className={`lg:w-6/12 transform transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-full opacity-0"
            }`}
          >
            {/* Header */}
            <div className="mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-5 leading-tight">
                Find the right job or internship with{" "}
                <span className="text-blue-600 relative">
                  trending domain for you
                </span>{" "}
              </h2>

              <p className="text-base text-gray-600 leading-relaxed max-w-2xl">
                Explore diverse career paths across industries and find
                opportunities that match your skills, interests, and career
                goals.
              </p>
            </div>

            {/* Professional Job Domain Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {jobDomains.map((domain, index) => {
                const Icon = domain.icon;
                const isSelected = selectedDomain === domain.id;
                return (
                  <div
                    key={domain.id}
                    className={`transform transition-all duration-300 delay-${
                      index * 50
                    }`}
                    style={{
                      transform: isVisible
                        ? "translateY(0)"
                        : "translateY(20px)",
                      opacity: isVisible ? 1 : 0,
                    }}
                  >
                    <button
                      onClick={() => selectDomain(domain.id)}
                      onMouseEnter={() => setHoveredDomain(domain.id)}
                      onMouseLeave={() => setHoveredDomain(null)}
                      className={`
                        relative w-full cursor-pointer p-4 rounded-xl border text-left transition-all duration-300 group
                        ${
                          isSelected
                            ? "bg-blue-600 text-white border-blue-600 shadow-lg"
                            : "bg-white text-gray-700 border-gray-200 hover:border-gray-300 hover:shadow-md"
                        }
                      `}
                    >
                      {/* Professional badges */}
                      {domain.popular && (
                        <div className="absolute top-2 right-2 bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-medium">
                          <Star className="w-2.5 h-2.5 inline mr-1" />
                          Popular
                        </div>
                      )}
                      {domain.trending && (
                        <div className="absolute top-2 right-2 bg-orange-100 text-orange-700 text-xs px-2 py-1 rounded-full font-medium">
                          <Sparkles className="w-2.5 h-2.5 inline mr-1" />
                          Trending
                        </div>
                      )}

                      <div className="relative z-10">
                        <div className="flex items-start justify-between mb-3">
                          <div
                            className={`
                            p-2.5 rounded-lg transition-all duration-300
                            ${
                              isSelected
                                ? "bg-white bg-opacity-20"
                                : "bg-blue-600"
                            }
                          `}
                          >
                            <Icon
                              className={`w-5 h-5 ${
                                isSelected ? "text-blue-500" : "text-white"
                              }`}
                            />
                          </div>

                          {isSelected && (
                            <div className="w-6 h-6 bg-gray-300 bg-opacity-25 rounded-full flex items-center justify-center">
                              <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                            </div>
                          )}
                        </div>

                        <h3 className="font-semibold text-sm lg:text-lg mb-2 leading-tight">
                          {domain.title}
                        </h3>

                        <p
                          className={`text-xs mb-3 ${
                            isSelected
                              ? "text-white text-opacity-90"
                              : "text-gray-500"
                          }`}
                        >
                          {domain.description}
                        </p>

                        <div className="flex items-center justify-between">
                          <span
                            className={`text-xs font-medium ${
                              isSelected
                                ? "text-white text-opacity-80"
                                : "text-gray-500"
                            }`}
                          >
                            {domain.jobs}
                          </span>

                          <ArrowRight
                            className={`w-3.5 h-3.5 transition-transform duration-300 ${
                              isSelected ? "text-white" : "text-gray-400"
                            }`}
                          />
                        </div>
                      </div>
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Selected domain CTA */}
            {selectedDomain && (
              <div className="p-5 bg-white rounded-xl border border-gray-200 shadow-sm animate-fade-in">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">
                        Domain selected
                      </p>
                      <p className="text-sm text-gray-600 mt-1">
                        Ready to explore personalized opportunities?
                      </p>
                    </div>
                  </div>
                  <button className="bg-blue-600 text-white px-6 py-2.5 rounded-lg cursor-pointer font-medium hover:bg-blue-700 transition-colors duration-300 flex items-center gap-2 group">
                    Explore Jobs
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            )}

            {/* No domain selected state */}
            {!selectedDomain && (
              <div className="text-center p-5 bg-white rounded-xl border border-gray-100 shadow-sm">
                <p className="text-gray-600 mb-3">
                  Select a domain that interests you to get started
                </p>
                <div className="flex justify-center gap-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div
                    className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-gray-600 rounded-full animate-bounce"
                    style={{ animationDelay: "0.4s" }}
                  ></div>
                </div>
              </div>
            )}
          </div>


        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </section>
  );
};

export default JobDomainsSection;
