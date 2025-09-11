export default function TalentSpeaksSection() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-gray-900">Where Talent Speaks.</span>
                <br />
                <span className="text-blue-600">And the World Listens.</span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-lg">
                A new-age talent platform where your voice becomes your resume,
                and your work finds the world it deserves.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Get Started
              </button>
              <button className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-semibold px-8 py-3 rounded-lg transition-all duration-200 hover:shadow-md">
                Learn More
              </button>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
                <div className="bg-gray-50 rounded-xl p-6 mb-6 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-20">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-full h-px bg-gray-300"
                        style={{ top: `${20 * i}%` }}
                      />
                    ))}
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute h-full w-px bg-gray-300"
                        style={{ left: `${16.66 * i}%` }}
                      />
                    ))}
                  </div>

                  <svg
                    className="w-full h-32 relative z-10"
                    viewBox="0 0 300 120"
                  >
                    <polyline
                      fill="none"
                      stroke="#3B82F6"
                      strokeWidth="3"
                      points="20,80 60,60 100,40 140,50 180,30 220,35 260,25"
                      className="drop-shadow-sm"
                    />

                    {[
                      { x: 20, y: 80 },
                      { x: 60, y: 60 },
                      { x: 100, y: 40 },
                      { x: 140, y: 50 },
                      { x: 180, y: 30 },
                      { x: 220, y: 35 },
                      { x: 260, y: 25 },
                    ].map((point, i) => (
                      <circle
                        key={i}
                        cx={point.x}
                        cy={point.y}
                        r="4"
                        fill="#3B82F6"
                        className="drop-shadow-sm"
                      />
                    ))}

                    <polyline
                      fill="none"
                      stroke="#8B5CF6"
                      strokeWidth="3"
                      points="20,90 60,85 100,70 140,75 180,65 220,60 260,50"
                      className="drop-shadow-sm"
                    />

                    {[
                      { x: 20, y: 90 },
                      { x: 60, y: 85 },
                      { x: 100, y: 70 },
                      { x: 140, y: 75 },
                      { x: 180, y: 65 },
                      { x: 220, y: 60 },
                      { x: 260, y: 50 },
                    ].map((point, i) => (
                      <circle
                        key={i}
                        cx={point.x}
                        cy={point.y}
                        r="4"
                        fill="#8B5CF6"
                        className="drop-shadow-sm"
                      />
                    ))}
                  </svg>
                </div>

                <div className="flex items-center justify-center">
                  <div className="relative">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-gradient-to-b from-orange-200 to-orange-300 rounded-full mb-2 relative">
                        <div className="absolute -top-2 left-1 w-10 h-8 bg-gray-800 rounded-full" />
                      </div>

                      <div className="w-16 h-20 bg-gradient-to-b from-yellow-100 to-yellow-200 rounded-lg relative">
                        <div className="absolute -left-3 top-4 w-6 h-2 bg-gradient-to-r from-orange-200 to-orange-300 rounded-full transform -rotate-12" />
                        <div className="absolute -right-3 top-4 w-6 h-2 bg-gradient-to-l from-orange-200 to-orange-300 rounded-full transform rotate-12" />

                        <div className="absolute -right-4 top-2 w-8 h-5 bg-gray-700 rounded transform rotate-12">
                          <div className="w-full h-3 bg-blue-600 rounded-t" />
                        </div>

                        <div className="absolute -left-6 top-1 w-4 h-1 bg-gray-400 rounded-full transform -rotate-45" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full opacity-20 animate-bounce" />
              <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-purple-500 rounded-full opacity-30 animate-pulse" />
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-yellow-400 rounded-full opacity-25 animate-ping" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
