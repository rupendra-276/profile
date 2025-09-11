"use client";

import { useState, useEffect } from "react";
import { Quote, Star, ArrowRight, Users } from "lucide-react";

export default function VoicesFromCircleSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  const testimonials = [
    {
      id: 1,
      quote:
        "Finally, a platform that gets it! My voice and personality matter just as much as my portfolio. Spreads helped me showcase the real me, not just my resume.",
      name: "Priya Sharma",
      role: "UX Designer, Bangalore",
      company: "Tech Startup",
      avatar: "PS",
      color: "from-orange-400 to-pink-500",
      rating: 3,
    },
    {
      id: 2,
      quote:
        "From a Tier 2 city to global opportunities - Spreads made it possible. The AI matching is incredibly accurate, and the community is genuinely supportive.",
      name: "Arjun Patel",
      role: "Full-Stack Developer, Ahmedabad",
      company: "Remote First",
      avatar: "AP",
      color: "from-blue-400 to-cyan-500",
      rating: 5,
    },
    {
      id: 3,
      quote:
        "The microblogging feature changed everything for me. I can share my creative process, connect with like-minded people, and attract clients organically.",
      name: "Kavya Reddy",
      role: "Content Creator, Hyderabad",
      company: "Freelance",
      avatar: "KR",
      color: "from-purple-400 to-indigo-500",
      rating: 5,
    },
  ];

  const communityStats = [
    { icon: "👩‍💻", count: "10,000+" },
    { icon: "🚀", count: "500+" },
    { icon: "🌟", count: "95%" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[data-animate]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full opacity-20 animate-pulse" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-orange-200 to-pink-200 rounded-full opacity-15 animate-bounce"
          style={{ animationDuration: "6s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyan-200 to-blue-200 rounded-full opacity-10 animate-spin"
          style={{ animationDuration: "20s" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div
          id="header"
          data-animate
          className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible.header
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-gray-900">Voices from the </span>
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Circle
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real stories from talented individuals who are already part of our
            growing community. Their success is just the beginning.
          </p>
        </div>

        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                id={`testimonial-${index}`}
                data-animate
                className={`relative group transition-all duration-700 transform ${
                  isVisible[`testimonial-${index}`]
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0"
                } ${
                  activeTestimonial === index ? "scale-105 z-10" : "scale-100"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 relative overflow-hidden group-hover:-translate-y-2">
                  <div
                    className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${testimonial.color}`}
                  />

                  <div className="absolute top-6 right-6 opacity-10">
                    <Quote className="w-12 h-12 text-gray-400" />
                  </div>

                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>

                  <blockquote className="text-gray-700 leading-relaxed mb-6 text-lg relative z-10">
                    "{testimonial.quote}"
                  </blockquote>

                  <div className="flex items-center gap-4">
                    <div
                      className={`w-14 h-14 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-white font-bold text-lg shadow-lg`}
                    >
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-lg">
                        {testimonial.name}
                      </div>
                      <div className="text-gray-600 text-sm">
                        {testimonial.role}
                      </div>
                      <div className="text-blue-600 text-sm font-medium">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-50 opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-3xl" />
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeTestimonial === index
                    ? "bg-blue-600 scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        <div
          id="community-stats"
          data-animate
          className={`transition-all duration-1000 transform ${
            isVisible["community-stats"]
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-50" />

            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-8">
              <div className="flex -space-x-4">
                {communityStats.map((stat, index) => (
                  <div
                    key={index}
                    className={`w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-lg border-4 border-white shadow-lg transform transition-transform duration-500 hover:scale-110`}
                    style={{
                      animationDelay: `${index * 100}ms`,
                      zIndex: communityStats.length - index,
                    }}
                  >
                    {stat.icon}
                  </div>
                ))}
              </div>

              <div className="text-center sm:text-left">
                <div className="flex items-center gap-3">
                  <span className="text-gray-700 text-lg">Join </span>
                  <span className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent animate-pulse">
                    10,000+
                  </span>
                  <span className="text-gray-700 text-lg">
                    talented individuals
                  </span>
                </div>
                <div className="flex items-center gap-2 mt-2 justify-center sm:justify-start">
                  <Users className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-600">
                    Growing community • New opportunities daily
                  </span>
                </div>
              </div>

              <div className="group">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center cursor-pointer transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                  <ArrowRight className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="cta"
          data-animate
          className={`text-center mt-16 transition-all duration-1000 transform ${
            isVisible.cta
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-gray-900">
              Ready to share your voice?
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-10 py-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 relative overflow-hidden">
                <span className="relative z-10">Join the Circle</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </button>
              <button className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 font-semibold px-10 py-4 rounded-2xl transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
