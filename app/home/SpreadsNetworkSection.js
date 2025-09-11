"use client";

import React, { useState, useEffect } from "react";
import {
  Users,
  Mic,
  Zap,
  Target,
  Search,
  MessageCircle,
  Bot,
  Globe,
  Brain,
  Network,
  Sparkles,
  Play,
} from "lucide-react";

const SpreadsNetworkSection = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const features = [
    {
      icon: <Brain className="w-7 h-7" />,
      title: "Human + AI Synergy",
      description:
        "Our AI understands context, but humans make the final decisions. The perfect blend of efficiency and empathy.",
      color: "from-emerald-500 to-teal-600",
      bgColor: "from-emerald-50 to-teal-50",
    },
    {
      icon: <Mic className="w-7 h-7" />,
      title: "Voice-First Platform",
      description:
        "Your voice tells your story better than any text. Express personality, passion, and potential through authentic communication.",
      color: "from-purple-500 to-indigo-600",
      bgColor: "from-purple-50 to-indigo-50",
    },
    {
      icon: <Network className="w-7 h-7" />,
      title: "Community-Led Growth",
      description:
        "Built by the community, for the community. Every feature is designed based on real feedback from talented individuals like you.",
      color: "from-pink-500 to-rose-600",
      bgColor: "from-pink-50 to-rose-50",
    },
    {
      icon: <Sparkles className="w-7 h-7" />,
      title: "Real-Time Matching",
      description:
        "Our intelligent algorithms work 24/7 to find opportunities that align with your skills, preferences, and career goals.",
      color: "from-amber-500 to-orange-600",
      bgColor: "from-amber-50 to-orange-50",
    },
  ];

  const floatingElements = [
    {
      icon: <MessageCircle />,
      color: "text-blue-500",
      size: "w-8 h-8",
      delay: 0,
    },
    { icon: <Search />, color: "text-purple-500", size: "w-6 h-6", delay: 1 },
    { icon: <Bot />, color: "text-green-500", size: "w-10 h-10", delay: 0.5 },
    { icon: <Zap />, color: "text-yellow-500", size: "w-7 h-7", delay: 2 },
    { icon: <Target />, color: "text-red-500", size: "w-8 h-8", delay: 1.5 },
    { icon: <Globe />, color: "text-indigo-500", size: "w-9 h-9", delay: 0.8 },
    { icon: <Play />, color: "text-pink-500", size: "w-6 h-6", delay: 2.2 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 relative">
            Stay Updated With{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                Spreads
              </span>
              <div className="absolute -top-2 -right-3 w-3 h-3 bg-cyan-400 rounded-full animate-ping"></div>
              <div className="absolute -top-2 -right-3 w-3 h-3 bg-cyan-400 rounded-full"></div>
            </span>{" "}
            Network
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Connect, collaborate, and grow with the power of intelligent
            networking
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div
            className={`relative h-[600px] transition-all duration-1200 delay-300 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
            onMouseMove={handleMouseMove}
          >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center shadow-2xl relative">
                  <Network className="w-12 h-12 text-white" />
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-ping opacity-20"></div>
                </div>

                <div
                  className="absolute inset-0 animate-spin"
                  style={{ animationDuration: "20s" }}
                >
                  <div className="w-32 h-32 border-2 border-cyan-300/30 rounded-full absolute -top-4 -left-4"></div>
                </div>
                <div
                  className="absolute inset-0 animate-spin"
                  style={{
                    animationDuration: "15s",
                    animationDirection: "reverse",
                  }}
                >
                  <div className="w-40 h-40 border border-purple-300/20 rounded-full absolute -top-8 -left-8"></div>
                </div>
              </div>
            </div>

            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <defs>
                <linearGradient
                  id="line-gradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.2" />
                </linearGradient>
              </defs>
              {floatingElements.map((_, index) => (
                <line
                  key={index}
                  x1="50%"
                  y1="50%"
                  x2={`${30 + index * 10}%`}
                  y2={`${20 + index * 12}%`}
                  stroke="url(#line-gradient)"
                  strokeWidth="2"
                  className="animate-pulse"
                  style={{ animationDelay: `${index * 0.3}s` }}
                />
              ))}
            </svg>

            {floatingElements.map((element, index) => {
              const angle = (index * 360) / floatingElements.length;
              const radius = 180 + Math.sin(Date.now() * 0.001 + index) * 20;
              const x = 50 + Math.cos((angle * Math.PI) / 180) * radius * 0.3;
              const y = 50 + Math.sin((angle * Math.PI) / 180) * radius * 0.3;

              return (
                <div
                  key={index}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10 transition-all duration-300 hover:scale-125 cursor-pointer"
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    animation: `float-${index} ${
                      3 + index * 0.5
                    }s ease-in-out infinite`,
                    animationDelay: `${element.delay}s`,
                  }}
                >
                  <div
                    className={`${element.size} bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center shadow-lg border border-white/20 hover:bg-white/20 transition-all duration-300`}
                  >
                    <div className={element.color}>
                      {React.cloneElement(element.icon, {
                        className: "w-5 h-5",
                      })}
                    </div>
                  </div>

                  <div
                    className={`absolute inset-0 ${element.size} bg-white/5 rounded-xl animate-ping`}
                  ></div>
                </div>
              );
            })}

            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60 animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 2}s`,
                }}
              />
            ))}
          </div>

          <div
            className={`space-y-6 transition-all duration-1000 delay-700 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group cursor-pointer transform transition-all duration-500 ${
                  activeFeature === index ? "scale-105" : "hover:scale-102"
                }`}
                onMouseEnter={() => setActiveFeature(index)}
              >
                <div
                  className={`relative p-8 rounded-3xl backdrop-blur-sm border transition-all duration-500 ${
                    activeFeature === index
                      ? "bg-white/15 border-white/30 shadow-2xl"
                      : "bg-white/5 border-white/10 shadow-lg hover:bg-white/10"
                  }`}
                >
                  {activeFeature === index && (
                    <div
                      className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${feature.color} rounded-l-3xl`}
                    ></div>
                  )}

                  <div className="flex items-start space-x-6">
                    <div
                      className={`flex-shrink-0 p-4 rounded-2xl bg-gradient-to-br ${
                        feature.color
                      } text-white transform transition-all duration-300 ${
                        activeFeature === index
                          ? "scale-110 rotate-3 shadow-lg"
                          : "group-hover:scale-105"
                      }`}
                    >
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h3
                        className={`text-2xl font-bold mb-4 transition-all duration-300 ${
                          activeFeature === index
                            ? "text-white"
                            : "text-slate-200"
                        }`}
                      >
                        {feature.title}
                      </h3>
                      <p className="text-slate-400 leading-relaxed text-lg">
                        {feature.description}
                      </p>
                    </div>
                  </div>

                  <div
                    className={`absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 ${
                      activeFeature === index
                        ? "opacity-20"
                        : "group-hover:opacity-10"
                    } bg-gradient-to-r ${feature.color}`}
                  ></div>
                </div>
              </div>
            ))}

            <div className="flex justify-center space-x-3 mt-12">
              {features.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeFeature === index
                      ? "bg-gradient-to-r from-cyan-400 to-blue-500 scale-125 shadow-lg"
                      : "bg-white/20 hover:bg-white/40"
                  }`}
                  onClick={() => setActiveFeature(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        ${floatingElements
          .map(
            (_, index) => `
          @keyframes float-${index} {
            0%, 100% { 
              transform: translateY(0px) translateX(0px) rotate(0deg);
            }
            25% { 
              transform: translateY(-${5 + index * 2}px) translateX(${
              3 - index
            }px) rotate(${2 - index}deg);
            }
            50% { 
              transform: translateY(-${3 + index}px) translateX(-${
              2 + index
            }px) rotate(-${1 + index}deg);
            }
            75% { 
              transform: translateY(-${8 + index * 2}px) translateX(${
              1 + index
            }px) rotate(${3 - index}deg);
            }
          }
        `
          )
          .join("")}
      `}</style>
    </div>
  );
};

export default SpreadsNetworkSection;
