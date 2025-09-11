// import Link from "next/link";
// import { footerLinks, footerPolicies, socials } from "../constents/constents";

// export default function Footer() {
//   return (
//     <div className="bg-[#f9fafc] ">
//       <hr className="text-gray-300 " />
//       <footer className="max-w-7xl lg:mx-auto sm:mx-25  text-gray-800 px-5 py-10  ">
//         <div className="border-b-2 pb-2 border-gray-300">
//           <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-3">
//             <div className="space-y-4 p-2">
//               <div className="text-center">
//                 <img
//                   src="Finalloo.svg"
//                   alt="Spreads Logo"
//                   className="w-16 h-16 m-auto"
//                 />
//                 <h1 className="text-xl my-2 font-bold">Spreads</h1>
//               </div>

//               <div className="flex items-center justify-center space-x-2 mt-4 me-4">
//                 {socials.map((item, index) => (
//                   <a
//                     key={index}
//                     href={item.href}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className={`text-white ${item.bg} p-1 rounded-md text-xl hover:scale-110 transition`}
//                   >
//                     {item.icon}
//                   </a>
//                 ))}
//               </div>
//             </div>

//             {/* Dynamic Footer Sections with Routing */}
//             {footerLinks.map((section, index) => (
//               <div key={index}>
//                 <h5 className="font-semibold text-lg font-['Inter'] mb-2">
//                   {section.title}
//                 </h5>
//                 <ul className="space-y-1">
//                   {section.links.map((link, i) => (
//                     <li key={i}>
//                       <Link
//                         href={link.href}
//                         className="font-['Inter'] text-sm hover:underline "
//                       >
//                         {link.name}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//           <div className="flex flex-wrap mt-2 justify-center gap-3">
//             {footerPolicies.map((item, i) => (
//               <span key={i}>
//                 <Link href={item.href} className="text-[12px] hover:underline">
//                   {item.name}
//                 </Link>
//                 {i < footerPolicies.length - 1 && " | "}
//               </span>
//             ))}
//           </div>
//         </div>

//         {/* Bottom Links */}
//         <div className=" mt-3">
//           <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
//             {/* Left Side */}
//             <div className="text-center  text-[12px] md:text-left">
//               <p>Spreads © 2025 — All rights reserved.</p>
//               <p className="mt-1">Made in Bharat, Built for the World.</p>
//             </div>

//             {/* Right Side */}
//             <div className="text-center text-[12px] md:text-right">
//               <p className=" ">
//                 Contact Us:{" "}
//                 <a href="mailto:support@spreads.in" className="hover:underline">
//                   support@spreads.in
//                 </a>{" "}
//                 | Rewa HQ
//               </p>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

// finallyyyy

// "use client";

// import Link from "next/link";
// import { footerLinks, footerPolicies, socials } from "../constents/constents";

// export default function Footer() {
//   return (
//     <footer className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
//       {/* Background Pattern */}
//       <div className="absolute inset-0 opacity-5">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
//         <div className="absolute top-0 left-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
//         <div className="absolute bottom-0 right-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
//       </div>

//       <div className="relative max-w-7xl mx-auto text-gray-800 px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
//         {/* Main Footer Content */}
//         <div className="border-b border-gray-200 pb-6 sm:pb-8 mb-6 sm:mb-8">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 sm:gap-8">
//             {/* Logo Section */}
//             <div className="col-span-1 sm:col-span-2 lg:col-span-1 space-y-4 sm:space-y-6 p-2 group">
//               <div className="text-center transform transition-all duration-500 hover:scale-105">
//                 <div className="relative inline-block">
//                   <img
//                     src="Finalloo.svg"
//                     alt="Spreads Logo"
//                     className="w-12 h-12 sm:w-16 sm:h-16 m-auto transition-all duration-700  group-hover:scale-110 drop-shadow-lg"
//                   />
//                   <div className="absolute inset-0 bg-blue-400 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 animate-ping"></div>
//                 </div>
//                 <h1 className="text-xl sm:text-2xl my-2 sm:my-3 font-bold bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent">
//                   Spreads
//                 </h1>
//               </div>

//               {/* Social Icons */}
//               <div className="flex items-center justify-center space-x-2 sm:space-x-3 mt-4 sm:mt-6">
//                 {socials.map((item, index) => (
//                   <a
//                     key={index}
//                     href={item.href}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className={`text-white ${item.bg} p-2 sm:p-2.5 rounded-lg sm:rounded-xl text-base sm:text-lg transform transition-all duration-300 hover:scale-125 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-200 animate-fade-in-up`}
//                     style={{ animationDelay: `${index * 100}ms` }}
//                   >
//                     {item.icon}
//                   </a>
//                 ))}
//               </div>
//             </div>

//             {/* Dynamic Footer Sections */}
//             {footerLinks.map((section, index) => (
//               <div
//                 key={index}
//                 className="animate-fade-in-up group text-center sm:text-left"
//                 style={{ animationDelay: `${(index + 1) * 150}ms` }}
//               >
//                 <h5 className="font-bold text-base sm:text-lg font-['Inter'] mb-3 sm:mb-4 text-gray-800 relative">
//                   {section.title}
//                   <div className="absolute bottom-0 left-1/2 sm:left-0 transform -translate-x-1/2 sm:translate-x-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-500 transition-all duration-500 group-hover:w-full sm:group-hover:w-full group-hover:w-12"></div>
//                 </h5>
//                 <ul className="space-y-2 sm:space-y-3">
//                   {section.links.map((link, i) => (
//                     <li
//                       key={i}
//                       className="transform transition-all duration-300 sm:hover:translate-x-2"
//                     >
//                       <Link
//                         href={link.href}
//                         className="font-['Inter'] text-sm text-gray-600 hover:text-blue-600 transition-all duration-300 relative group/link inline-block"
//                       >
//                         <span className="relative z-10">{link.name}</span>
//                         <div className="absolute inset-0 bg-blue-50 rounded-md scale-0 group-hover/link:scale-100 transition-transform duration-300 -z-10"></div>
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>

//           {/* Footer Policies */}
//           <div
//             className="flex flex-wrap mt-8 justify-center gap-1 animate-fade-in-up"
//             style={{ animationDelay: "800ms" }}
//           >
//             {footerPolicies.map((item, i) => (
//               <span key={i} className="group">
//                 <Link
//                   href={item.href}
//                   className="text-xs text-gray-500 hover:text-blue-600 transition-all duration-300 px-2 py-1 rounded-md hover:bg-blue-50"
//                 >
//                   {item.name}
//                 </Link>
//                 {i < footerPolicies.length - 1 && (
//                   <span className="text-gray-300 mx-1">|</span>
//                 )}
//               </span>
//             ))}
//           </div>
//         </div>

//         {/* Bottom Section */}
//         <div
//           className="animate-fade-in-up"
//           style={{ animationDelay: "1000ms" }}
//         >
//           <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
//             {/* Left Side */}
//             <div className="text-center text-sm md:text-left group">
//               <p className="text-gray-600 font-medium">
//                 Spreads © 2025 — All rights reserved.
//               </p>
//               <p className="mt-2 text-gray-500 font-['Inter'] tracking-wide">
//                 Made in{" "}
//                 <span className="text-orange-500 font-semibold">Bharat</span>,
//                 Built for the{" "}
//                 <span className="text-blue-600 font-semibold">World</span>.
//               </p>
//             </div>

//             {/* Right Side */}
//             <div className="text-center text-sm md:text-right">
//               <p className="text-gray-600">
//                 Contact Us:{" "}
//                 <a
//                   href="mailto:support@spreads.in"
//                   className="text-blue-600 hover:text-blue-800 transition-colors duration-300 font-medium hover:underline decoration-2 underline-offset-2"
//                 >
//                   support@spreads.in
//                 </a>
//                 <span className="text-gray-400 mx-2">|</span>
//                 <span className="text-gray-500 font-medium">Rewa HQ</span>
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Floating Elements */}
//         <div className="hidden sm:block absolute top-10 right-10 w-2 h-2 bg-blue-400 rounded-full animate-bounce opacity-60"></div>
//         <div className="hidden sm:block absolute bottom-20 left-10 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-40"></div>
//         {/* Mobile floating elements */}
//         <div className="sm:hidden absolute top-5 right-5 w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce opacity-60"></div>
//         <div className="sm:hidden absolute bottom-10 left-5 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-40"></div>
//       </div>

//       {/* Custom Styles */}
//       <style jsx>{`
//         @keyframes fade-in-up {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .animate-fade-in-up {
//           animation: fade-in-up 0.8s ease-out forwards;
//           opacity: 0;
//         }

//         .animation-delay-2000 {
//           animation-delay: 2s;
//         }

//         /* Hover effect for the entire footer */
//         footer:hover .absolute.inset-0.opacity-5 > div:first-child {
//           opacity: 0.1;
//           transition: opacity 0.5s ease;
//         }
//       `}</style>
//     </footer>
//   );
// }

import Link from "next/link";
import { footerLinks, footerPolicies, socials } from "../constents/constents";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-[#f9fafc] ">
      <hr className="text-gray-300 " />
      <footer className="max-w-7xl lg:mx-auto sm:mx-25  text-gray-800 px-5 py-10  ">
        <div className="border-b-2 pb-2 border-gray-300">
          <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-3">
            <div className="space-y-4 p-2">
              <div className="text-center">
                <Image
                  src="/spreads.svg"
                  alt="Spreads Logo"
                  width={64}
                  height={64}
                  className="object-cover m-auto"
                />
                <h1 className="text-xl my-2 font-bold">Spreads</h1>
              </div>

              <div className="flex items-center justify-center space-x-3 mt-4 me-2">
                {socials.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`rounded-md hover:scale-110 transition`}
                  >
                    <span className={`${item.bg}`}>{item.icon}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Dynamic Footer Sections with Routing */}
            {footerLinks.map((section, index) => (
              <div key={index}>
                <h5 className="font-semibold text-lg text-black font-['Inter'] mb-2">
                  {section.title}
                </h5>
                <ul className="space-y-1">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <Link
                        href={link.href}
                        className="font-['Inter'] text-sm hover:underline "
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap mt-2 justify-center gap-3">
            {footerPolicies.map((item, i) => (
              <span key={i}>
                <Link href={item.href} className="text-[12px] hover:underline">
                  {item.name}
                </Link>
                {i < footerPolicies.length - 1 && " | "}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Links */}
        <div className=" mt-3">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Left Side */}
            <div className="text-center  text-[12px] md:text-left">
              <p>Spreads © 2025 — All rights reserved.</p>
              <p className="mt-1">Made in Bharat, Built for the World.</p>
            </div>

            {/* Right Side */}
            <div className="text-center text-[12px] md:text-right">
              <p className=" ">
                Contact Us:{" "}
                <a href="mailto:support@spreads.in" className="hover:underline">
                  support@spreads.in
                </a>{" "}
                | Rewa HQ
              </p>
            </div>
          </div>
        </div>
        
      </footer>
    </div>
  );
}
