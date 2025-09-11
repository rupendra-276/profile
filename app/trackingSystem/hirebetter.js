"use client";

import {
  FileText,
  Clock,
  Users,
  Network,
  Search,
  BarChart3,
  MessageSquare,
  CheckCircle,
  Sparkles,} from "lucide-react";
import LinkButton from "../button/Button";
import  {StaggeredContainer, AnimatedWrapper  }  from "../animation/animation";

const features = [
  {
    icon: FileText,
    title: "Resume Parser",
    description:
      "Automatically extract and organize candidate information from resumes with AI-powered analysis",
    category: "Automation",
    popular: true,
  },
  {
    icon: Clock,
    title: "AI Interview Scheduler",
    description:
      "Smart scheduling that finds the perfect time for all participants across different time zones",
    category: "Scheduling",
    popular: false,
  },
  {
    icon: Users,
    title: "Collaborative Hiring",
    description:
      "Enable seamless team collaboration with shared feedback, evaluations, and decision-making tools",
    category: "Collaboration",
    popular: true,
  },
  {
    icon: Network,
    title: "Talent Pipeline",
    description:
      "Build and maintain long-term relationships with potential candidates for future opportunities",
    category: "Sourcing",
    popular: false,
  },
  {
    icon: Search,
    title: "Smart Candidate Matching",
    description:
      "AI-powered matching algorithm to find the perfect fit for your specific role requirements",
    category: "AI-Powered",
    popular: true,
  },
  {
    icon: BarChart3,
    title: "Hiring Analytics",
    description:
      "Comprehensive data-driven insights to optimize and improve your recruitment process",
    category: "Analytics",
    popular: false,
  },
  {
    icon: MessageSquare,
    title: "Candidate Communication",
    description:
      "Streamlined communication hub with automated updates, messaging, and status tracking",
    category: "Communication",
    popular: true,
  },
  {
    icon: CheckCircle,
    title: "Automated Screening",
    description:
      "Intelligent screening process with customizable criteria to identify top candidates quickly",
    category: "Automation",
    popular: false,
  },
];
const stats = [
  { value: "95%", label: "Match Accuracy" },
  { value: "60%", label: "Time Saved" },
  { value: "10K+", label: "Candidates" }
];
const FeaturesSection = () => {
  return (
    <section className="md:p-20 p-8 bg-[#358185] ">

   
        <div className="text-center text-white mb-16 animate-fade-in">   
          <h2 className="text-3xl md:text-5xl font-bold mb-6 ">
            Everything You Need to Hire Better
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Comprehensive tools designed to streamline every step of your hiring process with cutting-edge technology
          </p>
        </div>

        {/* Featured Large Card */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div  className="lg:col-span-2 animate-slide-up">
            <AnimatedWrapper direction="down" delay={0.2} className="h-full py-3 group bg-[#2B797D] text-white relative overflow-hidden border-1 border-white hover:bg-[#205b5e] transition-all duration-500 hover:shadow-2xl ">
                            
                  <div className=" flex flex-col md:flex-row p-5 items-center md:items-start gap-4 ">
                    <div className="w-16 h-16 bg-[#033C3F] rounded-2xl flex items-center  justify-center group-hover:scale-110 transition-transform duration-300">
                      <Search className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                        <h3 className="text-2xl font-bold text-primary">Smart Candidate Matching</h3>
                       <p className="text-muted-foreground mt-2 text-lg leading-relaxed">
                        Revolutionary AI-powered matching algorithm that analyzes candidate profiles, skills, experience, and cultural fit to find the perfect match for your specific role requirements.
                      </p>
                      
                     
                    </div>
                  </div>

                    <div className=" grid grid-cols-3 gap-4 py-6 border-t border-b-foreground">
                    {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                    ))}
                    </div>
          
            </AnimatedWrapper>
          </div>

          {/* Side Cards (First 2) */}
          <StaggeredContainer className="space-y-6 ">
            {features.slice(0, 2).map((feature, index) => (
              <AnimatedWrapper direction="down" delay={index * 0.2} key={index} className="group border text-white p-6 border-white hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                
                  <div className=" flex  items-center gap-4 mb-4">
                    <div className=" bg-[#033C3F] py-1 px-0.5 rounded-sm  group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-12 h-12 " />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl ">{feature.title}</h3>
                      <div  className="text-xs mt-1 border border-white rounded-4xl inline-block px-2">{feature.category}</div>
                    </div>

                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </AnimatedWrapper>
            ))}
          </StaggeredContainer>
        </div>

        {/* Grid for Remaining Features */}
        <StaggeredContainer className="grid md:grid-cols-2 mb-3 lg:grid-cols-3 gap-6 " >
          {features.slice(2).map((feature, index) => (
            <AnimatedWrapper direction="down" delay={index * 0.2} key={index} className="group relative overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-white">
              {feature.popular && (
                <div className=" bg-[#033C3F] text-white rounded-4xl px-2  flex items-center absolute top-4 right-4 z-10">                 
                    <Sparkles className="h-3 w-3 mr-1" />
                    Popular                  
                </div>
              )}
              <div className="p-6  text-white">
               <div className="w-14 h-14 bg-[#033C3F] mb-4  rounded-sm flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <feature.icon className="h-7 w-7 text-white" />
                </div>
                 <div className="mb-3">
                    <h3 className="text-xl font-bold mb-2 text-primary group-hover:text-feature-bg transition-colors duration-300">{feature.title}</h3>
                    <div  className="text-xs border-1 border-[#14e0eb] px-2 inline-block  rounded-4xl">{feature.category}</div>
                  <p className=" mt-3 ">{feature.description}</p>

                  </div>

          
              </div>
            </AnimatedWrapper>
          ))}
        </StaggeredContainer>

        {/* CTA Button */}
          <div className="text-center my-6">
          <LinkButton href='/login' name = "Explore All Featured" linkclassname=" !bg-transparent border  border-white hover:!cursor-pointer hover:bg-[#033C3F] hover:scale-110  transition-all duration-300" />

          </div>

    </section>
  );
};

export default FeaturesSection;
