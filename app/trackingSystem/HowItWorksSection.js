import React, { useState, useEffect } from "react";
import {
  FileText,
  Users,
  Send,
  CheckCircle,
  ArrowRight,
  Clock,
  Calendar,
  MessageSquare,
  Star,
} from "lucide-react";

const HowItWorksSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const steps = [
    {
      id: 1,
      icon: <FileText className="w-7 h-7" />,
      title: "Create Job Listings",
      description:
        "Design professional job postings with our intuitive editor. Add custom fields, requirements, and instantly publish across multiple platforms.",
      color: "#2563eb",
      bgColor: "#eff6ff",
      features: ["Template Library", "Multi-platform Sync", "Custom Fields"],
    },
    {
      id: 2,
      icon: <Users className="w-7 h-7" />,
      title: "Manage Applications",
      description:
        "Streamline candidate evaluation with automated screening, team collaboration tools, and centralized application tracking.",
      color: "#7c3aed",
      bgColor: "#f3f4f6",
      features: ["Smart Filtering", "Team Reviews", "Status Tracking"],
    },
    {
      id: 3,
      icon: <Send className="w-7 h-7" />,
      title: "Hire & Onboard",
      description:
        "Send professional offers, track acceptances, and seamlessly onboard new team members with automated workflows.",
      color: "#059669",
      bgColor: "#ecfdf5",
      features: ["Digital Offers", "E-signatures", "Onboarding Flow"],
    },
  ];

  const bonusFeatures = [
    {
      icon: <MessageSquare className="w-5 h-5" />,
      text: "Team Communication",
      color: "#3b82f6",
    },
    {
      icon: <Calendar className="w-5 h-5" />,
      text: "Interview Scheduling",
      color: "#8b5cf6",
    },
    {
      icon: <Clock className="w-5 h-5" />,
      text: "Time Tracking",
      color: "#10b981",
    },
  ];

  return (
    <div className="bg-white py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div
          className={`text-center mb-12 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            How It Works
          </h2>
          <p className="text-base text-gray-600 max-w-xl mx-auto">
            Streamline your hiring process in three simple steps
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-10">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`group cursor-pointer transition-all duration-500 ${
                activeStep === index
                  ? "transform scale-105"
                  : "hover:transform hover:scale-102"
              }`}
              onMouseEnter={() => setActiveStep(index)}
            >
              <div
                className={`relative bg-white rounded-lg border-2 p-6 h-full transition-all duration-300 ${
                  activeStep === index
                    ? "border-gray-300 shadow-lg"
                    : "border-gray-100 shadow-md hover:shadow-lg"
                }`}
              >
                <div className="absolute -top-3 left-6">
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-lg transition-colors duration-300`}
                    style={{
                      backgroundColor:
                        activeStep === index ? step.color : "#9ca3af",
                    }}
                  >
                    {step.id}
                  </div>
                </div>

                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-all duration-300`}
                  style={{
                    backgroundColor:
                      activeStep === index ? step.bgColor : "#f9fafb",
                    color: activeStep === index ? step.color : "#6b7280",
                  }}
                >
                  {step.icon}
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>

                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {step.description}
                </p>

                <div className="space-y-1">
                  {step.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-xs">
                      <div
                        className={`w-1 h-1 rounded-full mr-2 transition-colors duration-300`}
                        style={{
                          backgroundColor:
                            activeStep === index ? step.color : "#d1d5db",
                        }}
                      ></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {activeStep === index && (
                  <div className="absolute bottom-4 right-4">
                    <ArrowRight
                      className="w-4 h-4 animate-pulse"
                      style={{ color: step.color }}
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div
          className={`transform transition-all duration-1000 delay-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Complete Hiring Toolkit
              </h3>
              <p className="text-gray-600 text-sm">
                Additional features for efficient collaboration
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {bonusFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-4 border border-gray-200 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-center space-x-3">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{
                        backgroundColor: `${feature.color}15`,
                        color: feature.color,
                      }}
                    >
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">
                        {feature.text}
                      </h4>
                      <div className="flex items-center mt-1">
                        <CheckCircle className="w-3 h-3 text-green-500 mr-1" />
                        <span className="text-xs text-gray-600">Included</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksSection;
