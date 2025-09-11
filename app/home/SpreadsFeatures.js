"use client";
import { useState, useEffect } from "react";
import {
  ArrowRight,
  Users,
  Briefcase,
  Brain,
  MessageCircle,
  Share2,
  Zap,
} from "lucide-react";

export default function SpreadsFeatures() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      id: 1,
      icon: Briefcase,
      title: "Post roles, manage applicants, and showcase your brand culture.",
      description:
        "Streamline your hiring process with comprehensive applicant management and brand showcase tools.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      delay: "0.2s",
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      id: 2,
      icon: Share2,
      title:
        "Share, discover, and connect through reels, updates, and messaging.",
      description:
        "Build meaningful professional relationships through engaging content and direct communication.",
      image:
        "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      delay: "0.4s",
      gradient: "from-purple-500 to-pink-600",
    },
    {
      id: 3,
      icon: Brain,
      title:
        "Let our intelligent engine match you with the right roles and people.",
      description:
        "Advanced AI algorithms ensure precise matching based on skills, experience, and career goals.",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      delay: "0.6s",
      gradient: "from-emerald-500 to-teal-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 py-16 lg:py-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-40 right-20 w-64 h-64 bg-gradient-to-r from-blue-200 to-indigo-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-40 left-20 w-64 h-64 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Side - Mobile App Image with Increased Height */}
          <div
            className={`relative transform transition-all duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            <div className="relative max-w-sm mx-auto lg:max-w-md">
              {/* Phone Frame - Increased Height */}
              <div className="relative bg-slate-900 rounded-[3rem] p-3 shadow-2xl">
                <div className="bg-black rounded-[2.5rem] overflow-hidden">
                  {/* Status Bar */}
                  <div className="bg-black h-8 flex items-center justify-center">
                    <div className="w-20 h-1 bg-white rounded-full opacity-50"></div>
                  </div>

                  {/* App Content - Further Increased Height */}
                  <div className="relative bg-white">
                    <img
                      src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                      alt="Professional woman smiling"
                      className="w-full h-[600px] object-cover"
                    />

                    {/* App UI Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                    {/* Profile Info */}
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">👤</span>
                      </div>
                      <span className="text-white text-sm font-medium">
                        @priya.dev
                      </span>
                    </div>

                    {/* Engagement Icons */}
                    <div className="absolute bottom-4 right-4 flex flex-col gap-3">
                      <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <MessageCircle className="w-5 h-5 text-white" />
                      </div>
                      <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <Share2 className="w-5 h-5 text-white" />
                      </div>
                      <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
                        <span className="text-white text-lg">❤️</span>
                      </div>
                    </div>

                    {/* Comment Bar */}
                    <div className="absolute bottom-4 left-4 right-20">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                        <span className="text-white text-sm opacity-75">
                          Add a comment...
                        </span>
                      </div>
                    </div>

                    {/* Additional Status Indicators */}
                    <div className="absolute top-16 left-4 right-4">
                      <div className="bg-gradient-to-r from-green-400 to-blue-500 rounded-lg px-3 py-1 w-fit">
                        <span className="text-white text-xs font-medium">
                          ✨ Featured Developer
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-xl animate-bounce">
                <Zap className="w-8 h-8 text-white" />
              </div>

              <div className="absolute -bottom-4 -left-4 w-14 h-14 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center shadow-xl animate-pulse">
                <Users className="w-7 h-7 text-white" />
              </div>
            </div>
          </div>

          {/* Right Side - Professional Content */}
          <div
            className={`space-y-8 transform transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            {/* Main Heading - Reduced Size */}
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
                <span className="text-slate-900">Find your </span>
                <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
                  digital home
                </span>
                <span className="text-slate-900">
                  {" "}
                  for career stories, AI-matched jobs, and meaningful
                  connections.
                </span>
              </h2>
            </div>

            {/* Professional Feature Cards - Grid Layout */}
            <div className="grid grid-cols-1 gap-6">
              {features.map((feature, index) => (
                <div
                  key={feature.id}
                  className={`group relative bg-white rounded-2xl p-6 border border-slate-200 hover:border-slate-300 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-slideUp cursor-pointer overflow-hidden`}
                  style={{ animationDelay: feature.delay }}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Professional gradient overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  ></div>

                  <div className="relative z-10">
                    {/* Card Content Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-start">
                      {/* Left - Icon and Title */}
                      <div className="sm:col-span-2 space-y-3">
                        {/* Header Section */}
                        <div className="flex items-start gap-4">
                          {/* Professional Icon */}
                          <div className="flex-shrink-0">
                            <div
                              className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                            >
                              <feature.icon className="w-6 h-6 text-white" />
                            </div>
                          </div>

                          {/* Title */}
                          <div className="flex-1 min-w-0">
                            <h3 className="text-lg font-semibold text-slate-900 group-hover:text-slate-800 transition-colors duration-300 leading-tight">
                              {feature.title}
                            </h3>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-slate-600 text-sm leading-relaxed group-hover:text-slate-700 transition-colors duration-300 ml-16">
                          {feature.description}
                        </p>
                      </div>

                      {/* Right - Image and Arrow */}
                      <div className="space-y-3">
                        {/* Professional Feature Image */}
                        <div className="relative w-full h-24 rounded-xl overflow-hidden shadow-md">
                          <img
                            src={feature.image}
                            alt={`Feature ${feature.id}`}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div
                            className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
                          ></div>
                        </div>

                        {/* Professional Arrow Button */}
                        <div className="flex justify-end">
                          <div className="w-10 h-10 rounded-full bg-slate-100 group-hover:bg-slate-200 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                            <ArrowRight className="w-5 h-5 text-slate-600 group-hover:text-slate-800 group-hover:translate-x-0.5 transition-all duration-300" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Professional Badge */}
                    <div className="absolute top-4 right-4">
                      <div
                        className={`px-2 py-1 rounded-full bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                      >
                        <span className="text-white text-xs font-medium">
                          Explore
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Professional CTA Button */}
            <div className="pt-6">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-slate-800 to-slate-900 text-white rounded-xl font-semibold hover:from-slate-900 hover:to-black transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl shadow-lg overflow-hidden w-full sm:w-auto">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Explore All Features
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slideUp {
          animation: slideUp 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}
