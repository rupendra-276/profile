// import { BarChart2, Target, UserCheck } from "lucide-react";
// import { StaggeredContainer, AnimatedWrapper } from "../animation/animation";

// const features = [
//   {
//     title: "Semantic Search",
//     description:
//       "Match intent, not just words. Match intent, not just words. Match intent, not just words.",
//     icon: BarChart2,
//   },
//   {
//     title: "Semantic Search",
//     description:
//       "Match intent, not just words. Match intent, not just words. Match intent, not just words.",
//     icon: Target,
//   },
//   {
//     title: "Semantic Search",
//     description:
//       "Match intent, not just words. Match intent, not just words. Match intent, not just words.",
//     icon: UserCheck,
//   },
// ];

// export default function AITalentSection() {
//   return (
//     <section className="bg-[#ab6231] py-20 px-6">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//         <div>
//           <AnimatedWrapper
//             direction="left"
//             delay={0.1}
//             className="inline-block text-xs px-3 py-1 bg-white text-black rounded-full font-semibold mb-4"
//           >
//             Advanced AI
//           </AnimatedWrapper>
//           <AnimatedWrapper
//             direction="left"
//             delay={0.1}
//             className="text-white text-3xl md:text-4xl font-bold mb-4"
//           >
//             AI That Understands Talent
//           </AnimatedWrapper>
//           <AnimatedWrapper
//             direction="left"
//             delay={0.1}
//             className="text-white text-opacity-90 mb-6"
//           >
//             Our engine doesn’t just search for keywords—it understands the
//             context behind a candidate’s skills, experience, and achievements.
//           </AnimatedWrapper>

//           <StaggeredContainer className="space-y-5">
//             {features.map((item, index) => (
//               <AnimatedWrapper
//                 direction="left"
//                 delay={index * 0.2}
//                 key={index}
//                 className="flex text-white items-center gap-4"
//               >
//                 <div className="bg-[#734d21] p-3 rounded-md">
//                   <item.icon size={20} color="white" />
//                 </div>
//                 <div>
//                   <h4 className=" font-semibold">{item.title}</h4>
//                   <p className=" text-sm text-opacity-90">{item.description}</p>
//                 </div>
//               </AnimatedWrapper>
//             ))}
//           </StaggeredContainer>
//         </div>

//         <AnimatedWrapper
//           direction="right"
//           delay={0.3}
//           className="flex justify-center"
//         >
//           <img
//             src="/aitalent-solution.png"
//             alt="AI Circuit"
//             className="w-full rounded-lg shadow-lg"
//           />
//         </AnimatedWrapper>
//       </div>
//     </section>
//   );
// }

import { BarChart2, Target, UserCheck } from "lucide-react";
import { StaggeredContainer, AnimatedWrapper } from "../animation/animation";

const features = [
  {
    title: "Semantic Search",
    description:
      "Match intent, not just words. Match intent, not just words. Match intent, not just words.",
    icon: BarChart2,
  },
  {
    title: "Semantic Search",
    description:
      "Match intent, not just words. Match intent, not just words. Match intent, not just words.",
    icon: Target,
  },
  {
    title: "Semantic Search",
    description:
      "Match intent, not just words. Match intent, not just words. Match intent, not just words.",
    icon: UserCheck,
  },
];

export default function AITalentSection() {
  return (
    <section className="bg-[#ab6231] py-20 px-6">
      <div className="max-w-8xl mx-auto p-8 ">
        <div className="max-w-2xl ">
          <AnimatedWrapper
            direction="left"
            delay={0.1}
            className="text-white text-3xl md:text-4xl font-bold mb-4"
          >
            AI That Understands Talent
          </AnimatedWrapper>
          <AnimatedWrapper
            direction="left"
            delay={0.1}
            className="text-white text-opacity-90 mb-6"
          >
            Our engine doesn’t just search for keywords—it understands the
            context behind a candidate’s skills, experience, and achievements.
          </AnimatedWrapper>
            </div>
          <StaggeredContainer className=" max-w-6xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-3  gap-12 items-center">
            {features.map((item, index) => (
              <AnimatedWrapper
                direction="up"
                delay={index * 0.2}
                key={index}
                className="flex flex-col items-center justify-between p-4 border border-white rounded-sm hover:scale-103 transition-scale duration-75 gap-4"
              >
                <div className="bg-[#ffffff]  p-3 rounded-md">
                  <item.icon size={20} color="black" />
                </div>
                 <h4 className=" font-semibold text-white text-xl">{item.title}</h4>
                  <p className=" text-sm text-opacity-90 text-white">{item.description}</p>
                <div>
                 
                </div>
              </AnimatedWrapper>
            ))}
          </StaggeredContainer>
        

      </div>
    </section>
  );
}
