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
} from "lucide-react";
import LinkButton from "../button/Button";
import { AnimatedWrapper } from "../animation/animation";

const features = [
  { icon: FileText, title: "Resume Parser", description: "AI-powered parsing for structured resume insights.", category: "Automation" },
  { icon: Clock, title: "AI Interview Scheduler", description: "Seamlessly schedule interviews across time zones.", category: "Scheduling" },
  { icon: Users, title: "Collaborative Hiring", description: "Evaluate, share feedback & hire as a team.", category: "Collaboration" },
  { icon: Network, title: "Talent Pipeline", description: "Build & nurture long-term candidate relationships.", category: "Sourcing" },
  { icon: Search, title: "Smart Matching", description: "Find talent based on skills & potential, not just keywords.", category: "AI" },
  { icon: BarChart3, title: "Hiring Analytics", description: "Get insights with actionable hiring reports.", category: "Analytics" },
  { icon: MessageSquare, title: "Candidate Messages", description: "Engage with automated updates & in-app chat.", category: "Communication" },
  { icon: CheckCircle, title: "Automated Screening", description: "Filter applicants instantly with smart rules.", category: "Automation" },
];

function FeatureCard({ f, delay }) {
  const Icon = f.icon;
  return (
    <AnimatedWrapper
      direction="up"
      delay={delay}
      className=" backdrop-blur-lg p-6 bg-[#fff] rounded-2xl border border-gray-300 shadow-sm hover:shadow-sm hover:-translate-y-2 transition-all duration-300"
    >
      {/* Icon */}
      <div className="flex gap-3">
       <div className="w-14 h-14 rounded-xl 
          flex items-center justify-center bg-[#093adb] text-white  mb-4"> <Icon className="w-7 h-7 " />
      </div>
      <div>
       <h4 className="font-semibold text-lg text-gray-900">{f.title}</h4>
        <span className="text-xs font-medium px-2 py-0.5 bg-blue-100/70 text-blue-700 rounded-full">
          {f.category}
        </span>
      </div>
      </div>
      <p className="text-sm text-gray-600 leading-relaxed">{f.description}</p>
    </AnimatedWrapper>
  );
}

export default function FeaturesSection() 
{
  return (
    <section className="md:p-20 p-8 bg-[#f9f9f9] ">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Build Careers, Simplify Hiring
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          AI-powered job portal & learning platform to connect talent with opportunity — faster and smarter.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((f, i) => (
          <FeatureCard key={i} f={f} delay={i * 0.1} />
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-14">
        <LinkButton
          href="/login"
          name="Get Started"
        />
      </div>
    </section>
  );
}