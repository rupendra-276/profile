// import React from "react";
// import { StaggeredContainer, AnimatedWrapper } from "../animation/animation";

// const whyChooseUsData = [
//   {
//     img: "/Community.png",
//     title: "Built-in Career Community",
//     desc: "Join real discussions with students, mentors, recruiters, and alumni.",
//   },
//   {
//     img: "/monetization.png",
//     title: "Monetization Made Easy",
//     desc: "Earn through branded content, creator ads, premium content, or referrals. We reward meaningful contribution.",
//   },
//   {
//     img: "/circle-based.png",
//     title: "Circle-based Community",
//     desc: "Create or join circles around interests, colleges, jobs, or industries. Stay connected. Stay inspired.",
//   },
//   {
//     img: "/built-in-ats.png",
//     title: "Built-in ATS & Hiring Engine",
//     desc: "AI-optimized job matches, auto-apply, and recruiter tools that simplify hiring.",
//   },
// ];

// export default function WhyChooseUs() {
//   return (
//     <section className="w-full px-4 md:px-16 py-12 bg-white">
//       <div className="flex flex-col lg:flex-row justify-between items-center py-8 gap-10">
//         <div className="w-full lg:w-[45%] space-y-4">
//           <h3 className="text-3xl md:text-5xl  font-bold">Why Choose US ?</h3>
//           <p className="  font-semibold font-jost text-gray-500 text-lg leading-tight">
//             India’s Career, Creator & Community Platform for the Next Generation
//           </p>
//           <p className="text-gray-500 font-jost font-medium text-lg">
//             Because your voice deserves more than likes — it deserves legacy.
//             <br />
//             Spreads is where creators, job seekers, and communities come to
//             grow, connect, and rise.
//             <br />
//             From your first resume to your next big story, this is where your
//             journey begins.
//           </p>

//           <button className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 hover:cursor-pointer text-white py-2 px-4 md:py-4 md:px-8  rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center space-x-2">
//                 <span>Grow with Your Circle</span>
//                 <div className="transform group-hover:translate-x-1 transition-transform duration-300">
//                   →
//                 </div>
//               </button>
//         </div>

//         <div className=" w-full lg:w-[890px] h-[370px] lg:h-[500px] relative">
//           <video
//             src="/testing.mp4"
//             autoPlay
//             muted
//             loop
//             playsInline
//             className="w-full h-full object-cover"
//           />
//         </div>
//       </div>

//       <StaggeredContainer className="mt-12 px-3.5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 xl:gap-12">
//         {whyChooseUsData.map((item, index) => (
//           <AnimatedWrapper
//             delay={index * 0.4}
//             direction="up"
//             key={index}
//             className="rounded-4xl bg-[#eaf3ff80]  hover:shadow-sm hover:translate-y-2  p-4 transition duration-300"
//           >
//             <img
//               src={item.img}
//               alt={item.title}
//               className="w-full h-52 object-cover rounded-4xl mb-4"
//             />
//             <h3 className="font-semibold text-lg mt-3 mb-2 text-gray-800">
//               {item.title}
//             </h3>
//             <p className=" text-[#565656] text-sm">{item.desc}</p>
//           </AnimatedWrapper>
//         ))}
//       </StaggeredContainer>
//     </section>
//   );
// }

import React from "react";
import { StaggeredContainer, AnimatedWrapper } from "../animation/animation";
import LinkButton from "../button/Button";


const whyChooseUsData = [
  {
    img: "/Community.png",
    title: "Built-in Career Community",
    desc: "Engage with students, mentors, recruiters, and alumni in a dynamic career-focused community. Share knowledge, build networks, and grow together.",
  },
  {
    img: "/monetization.png",
    title: "Seamless Monetization Opportunities",
    desc: "Turn your expertise into income through branded content, creator ads, premium learning resources, and referral programs — rewarding every contribution.",
  },
  {
    img: "/built-in-ats.png",
    title: "AI-Powered ATS & Hiring Engine",
    desc: "Streamline recruitment with AI-driven job matching, automated applications, and smart recruiter tools designed for faster and smarter hiring.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className=" space-y-20  px-10 md:px-28 md:py-20  mx-auto ">
      <div className="max-w-5xl space-y-12 py-16  mx-auto text-start md:text-center">
        <AnimatedWrapper direction="left">
        <h3 className="text-4xl  md:text-[64px]  font-bold">
          Choose Your Circle Choose your Destiney
        </h3>
        </AnimatedWrapper>
        <AnimatedWrapper direction="right"  className="text-[#373840] font-[jost]  text-xl space-y-3">
          India’s Career, Creator & Community Platform for the Next Generation.
          Because your voice deserves more than likes — it deserves legacy.
          Spreads is where creators, job seekers, and communities come to grow,
          connect, and rise. 
        </AnimatedWrapper>
        <AnimatedWrapper direction="up">
        <LinkButton href="/signup" name="Grow with Your Circle"  />

        </AnimatedWrapper>
      </div>

      <div className="overflow-hidden max-w-7xl my-10 w-full md:h-[400px] lg:h-[600px] mx-auto relative rounded-2xl">
  <video
    src="/Section.mp4"
    autoPlay
    muted
    loop
    playsInline
    className="w-full h-full object-cover "
  />
</div>

<div className="max-w-6xl mx-auto">
   <StaggeredContainer className="mt-12 px-3.5 py-14
       grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
        {whyChooseUsData.map((item, index) => (
          <AnimatedWrapper
            delay={index * 0.4}
            direction="up"
            key={index}
            className="rounded-4xl   hover:translate-y-2  p-4 transition duration-300"
          >  
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-[260px]  object-cover rounded-md mb-4"
            />
            <h3 className="font-semibold mt-3 text-lg mb-2 text-gray-800">
              {item.title}
            </h3>
            <p className=" text-[#565656] font-[jost] ">{item.desc}</p>
          </AnimatedWrapper>
        ))}
      </StaggeredContainer>
</div>
   
    </section>
  );
}
