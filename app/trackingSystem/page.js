"use client";
import React from "react";
import AiTalentInsights from "./AiTalentInsights";
import SmarterHiringSection from "./SmarterHiringSection";
import HowItWorksSection from "./HowItWorksSection";
import AITalentSection from "./AiTalentSection";
import HeroCTASection from "./HeroCTASection";
import ResponsiveTestimonials from "./TestimenterContactSlider";
import FeaturesSection from "./hirebetter";

const page = () => {
  return (
    <>
      <AiTalentInsights />
      <SmarterHiringSection />
      <HowItWorksSection />
      <AITalentSection />
      <ResponsiveTestimonials />
      <FeaturesSection />
      <HeroCTASection />
    </>
  );
};

export default page;
