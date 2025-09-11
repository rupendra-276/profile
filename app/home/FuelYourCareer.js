import React from "react";
import Button from "../button/Button";
import { Brain, Activity, UserCog } from "lucide-react";
import { StaggeredContainer, AnimatedWrapper } from "../animation/animation";
import LinkButton from "../button/Button";

const skillData = [
  {
    icon: <Brain size={32} />,
    title: "Skill Carousel",
    description:
      "Explore top skills in tech, product, design, business, and marketing — rotating based on market data",
  },
  {
    icon: <Activity size={32} />,
    title: "Skill Demand Heatmap",
    description:
      "Explore top skills in tech, product, design, business, and marketing — rotating based on market data",
  },
  {
    icon: <UserCog size={32} />,
    title: "Role-to-Skill Clustering",
    description:
      "Explore top skills in tech, product, design, business, and marketing — rotating based on market data",
  },
];

export default function FuelYourCareer() {
  return (
    <section className="bg-[#A66565] text-white px-6 py-12 sm:px-12 md:px-20 lg:px-32">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
        {/* Left Section */}
        <div className="lg:w-[40%] w-full">
          <h2 className="text-3xl  md:text-4xl font-bold mb-3 leading-snug">
            Fuel Your Career with <br /> Skills That Matter
          </h2>
          <p className="mb-6 text-sm md:text-base">
            Don’t just learn more — learn right
          </p>
        <LinkButton
          href="/skills"
          name="Start Your Skill Journey"
          linkclassname="border border-white !bg-[#A66565] hover:!bg-white hover:!text-[#A66565] transition"
        />

        </div>

        {/* Right Section */}
        <div className="lg:w-[60%] w-full">
          <p className="text-[20px]  mb-6">
            At Spreads, our AI-powered system helps you discover the perfect
            skill combination for your next career move. Whether you're diving
            into design, jumping into AI, or growing in product management — we
            match real-time hiring data with your interests.
          </p>
          <StaggeredContainer className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {skillData.map((item, index) => (
              <AnimatedWrapper
                direction="down"
                key={index}
                delay={index * 0.3}
                className=" bg-[#D48B8B8C] p-4  rounded-lg shadow hover:shadow-lg hover:translate-y-2 transition"
              >
                <div className="text-3xl mb-3 flex justify-center items-center text-white">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm">{item.description}</p>
                </div>
              </AnimatedWrapper>
            ))}
          </StaggeredContainer>
        </div>
      </div>
    </section>
  );
}
