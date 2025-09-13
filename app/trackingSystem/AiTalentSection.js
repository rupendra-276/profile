
import { BarChart2, Target, UserCheck } from "lucide-react";
import { StaggeredContainer, AnimatedWrapper } from "../animation/animation";
const features = [
  {
    title: "Semantic Resume Matching",
    description:
      "Our AI analyzes candidate resumes and profiles to match the best talent with your job openings, going beyond keywords to understand skills, experience, and achievements.",
    icon: BarChart2,
  },
  {
    title: "AI-Powered Candidate Insights",
    description:
      "Get actionable insights into candidates’ strengths, career growth potential, and cultural fit to make smarter hiring decisions quickly.",
    icon: Target,
  },
  {
    title: "Team Collaboration & Workflow",
    description:
      "Streamline your hiring process with real-time collaboration tools. Share candidate profiles, feedback, and schedule interviews efficiently.",
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
           AI-Powered Talent Solutions for Smarter Hiring
          </AnimatedWrapper>
          <AnimatedWrapper
            direction="left"
            delay={0.1}
            className="text-white text-opacity-90 mb-6"
          >
            Unlock the full potential of your recruitment process with our AI-driven platform. 
            Discover top candidates faster with semantic resume matching, AI insights, and collaborative hiring tools
          </AnimatedWrapper>
            </div>
          <StaggeredContainer className=" max-w-6xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-3  gap-12 items-center">
            {features.map((item, index) => (
              <AnimatedWrapper
                direction="up"
                delay={index * 0.2}
                key={index}
                className="flex flex-col items-center justify-between p-4 border bg-[#ca6e31] border-white rounded-sm hover:scale-103 transition-scale duration-75 gap-4"
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
