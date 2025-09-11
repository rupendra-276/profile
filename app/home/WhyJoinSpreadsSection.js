import { Users, Zap, MessageCircle, Globe } from "lucide-react";

export default function WhyJoinSpreadsSection() {
  const features = [
    {
      icon: Users,
      title: "Build Your Digital Identity",
      description:
        "You're more than a resume. You're a voice, a vision, and a journey. Craft your profile, post your thoughts, and let your work echo across borders.",
    },
    {
      icon: Zap,
      title: "AI-Powered Opportunity Match",
      description:
        "Let intelligent matchmaking connect you with the right startups, companies, collaborators, and communities—based on who you truly are.",
    },
    {
      icon: MessageCircle,
      title: "Microblog Your Talent",
      description:
        "Share daily wins, work updates, creative sparks, or learnings. Transform your work into a living story.",
    },
    {
      icon: Globe,
      title: "Global Opportunity Network",
      description:
        "From PSUs to unicorns, internships to freelance gigs—discover opportunities built for the global stage.",
    },
  ];

  return (
    <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="relative">
            <div className="absolute -top-4 -left-4 text-6xl text-teal-500 font-bold opacity-50">
              "
            </div>

            <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-medium text-gray-600 leading-relaxed max-w-5xl mx-auto px-8">
              Your Circle. Your Voice. Your Career.
              <br />
              <span className="text-gray-700">
                Where Communities Rise, Voices Echo, and Futures Begin.
              </span>
            </blockquote>

            <div className="absolute -bottom-8 -right-4 text-6xl text-teal-500 font-bold opacity-50 transform rotate-180">
              "
            </div>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
            <span className="text-gray-900">Why Join </span>
            <span className="text-blue-600">Spreads</span>
            <span className="text-blue-600 ml-2">?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <IconComponent
                      className="w-8 h-8 text-white"
                      strokeWidth={2}
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 leading-tight">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-1 bg-blue-600 rounded-full" />
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ready to amplify your voice and accelerate your career? Join
              thousands of professionals already building their future on
              Spreads.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Start Your Journey
              </button>
              <button className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-md">
                Explore Features
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
