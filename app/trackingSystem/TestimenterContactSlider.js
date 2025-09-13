// "use client";

// import { useEffect, useState } from "react";
// import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
// import Image from "next/image";
// import { RiDoubleQuotesL } from "react-icons/ri";
// const testimonials = [
//   {
//     name: "Priya Sharma",
//     title: "Head of Talent at Glotech",
//     quote:
//       "We reduced our time-to-hire by 57% in just one quarter. The AI screening is a game-changer.",
//     rating: 5,
//     img: "/profile.jpg",
//   },
//   {
//     name: "Ravi Mehta",
//     title: "Hiring Manager at FinEdge",
//     quote:
//       "The Smart ATS has completely revolutionized how we find and evaluate candidates.",
//     rating: 4,
//     img: "/profile1.jpeg",
//   },
//   {
//     name: "Anjali Kapoor",
//     title: "Lead Recruiter at TalentX",
//     quote:
//       "Highly intuitive platform. Our hiring speed has tripled since adopting this solution.",
//     rating: 5,
//     img: "/profile.jpg",
//   },
//   {
//     name: "Aman Verma",
//     title: "Co-Founder at HireStack",
//     quote:
//       "Our team cut down manual screening efforts by more than half with Smart ATS.",
//     rating: 4,
//     img: "/profile1.jpeg",
//   },
// ];

// export default function ResponsiveTestimonials() {
//   const [index, setIndex] = useState(0);
//   const [visibleCount, setVisibleCount] = useState(3);

//   useEffect(() => {
//     const handleResize = () => {
//       const width = window.innerWidth;
//       if (width >= 1024) setVisibleCount(3);
//       else if (width >= 768) setVisibleCount(2);
//       else setVisibleCount(1);
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const handlePrev = () => setIndex((prev) => Math.max(prev - 1, 0));
//   const handleNext = () =>
//     setIndex((prev) => Math.min(prev + 1, testimonials.length - visibleCount));

//   return (
//     <section className="py-16 px-4 bg-white">
//       <div className="max-w-6xl mx-auto text-center">
//         <h2 className="text-3xl md:text-5xl font-bold mb-4">
//           Hear From Those Who Hired Smart
//         </h2>
//         <p className="text-gray-600 text-xl mb-10">
//           Join hundreds of companies that transformed their hiring process with
//           our Smart ATS.
//         </p>

//         <div className="text-right mb-6 me-5 space-x-2">
//           <button
//             onClick={handlePrev}
//             className="bg-sky-700 hover:bg-sky-800 text-white p-2 disabled:opacity-30"
//             disabled={index === 0}
//           >
//             <ChevronLeft />
//           </button>
//           <button
//             onClick={handleNext}
//             className="bg-sky-700 hover:bg-sky-800 text-white p-2 disabled:opacity-30"
//             disabled={index + visibleCount >= testimonials.length}
//           >
//             <ChevronRight />
//           </button>
//         </div>

//         <div className="overflow-hidden">
//           <div
//             className="flex transition-transform duration-500 ease-in-out"
//             style={{
//               width: `${(testimonials.length * 100) / visibleCount}%`,
//               transform: `translateX(-${(index * 100) / testimonials.length}%)`,
//             }}
//           >
//             {testimonials.map((t, idx) => (
//               <div
//                 key={idx}
//                 className="px-4"
//                 style={{
//                   flex: `0 0 ${100 / testimonials.length}%`,
//                 }}
//               >
//                 <div className="border rounded-md shadow-sm text-center h-full hover:shadow-lg transition">
//                   <div className="p-4 flex flex-col items-center mb-4">
//                     <Image
//                       src={t.img}
//                       alt={t.name}
//                       width={100}
//                       height={100}
//                       className="rounded-full object-cover w-[100px] h-[100px]"
//                     />
//                     <h4 className="font-semibold text-lg mt-2">{t.name}</h4>
//                     <p className="text-gray-500 text-sm">{t.title}</p>
//                   </div>
//                   <hr className="mb-4" />
//                   <p className="italic text-sm px-4 mb-4">"{t.quote}"</p>

//                   <div className="mb-4 flex justify-between gap-4 px-6 text-sm">
//                     <p className="font-semibold">Rating:</p>
//                     <p>
//                       <span className="text-yellow-400 text-xl">
//                         {"★".repeat(t.rating)}
//                         <span className="text-gray-300">
//                           {"★".repeat(5 - t.rating)}
//                         </span>
//                       </span>
//                     </p>
//                   </div>

//                   <div className="flex items-center justify-end gap-1 text-gray-500 text-sm px-6 pb-4">
//                     <MapPin className="w-4 h-4" />
//                     <span>{t.title}</span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="flex flex-col lg:flex-row px-4 justify-center gap-6 mt-12 text-sm text-gray-700">
//           <p className="flex text-left md:items-center gap-2">
//             <span className="w-4 h-4 bg-blue-700 rounded-full inline-block"></span>
//             Trusted by 120+ growing companies and institutions
//           </p>
//           <p className="flex  text-left gap-2">
//             <span className="w-4 h-4 bg-green-500 rounded-full inline-block"></span>
//             3x faster placement rates in student hiring campaigns
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }



"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";

const testimonials = [
  {
    name: "Priya Sharma",
    title: "Head of Talent at Glotech",
    quote:
      "We reduced our time-to-hire by 57% in just one quarter. The AI screening is a game-changer.",
    rating: 5,
    img: "/profile.jpg",
  },
  {
    name: "Ravi Mehta",
    title: "Hiring Manager at FinEdge",
    quote:
      "The Smart ATS has completely revolutionized how we find and evaluate candidates.",
    rating: 4,
    img: "/profile1.jpeg",
  },
  {
    name: "Anjali Kapoor",
    title: "Lead Recruiter at TalentX",
    quote:
      "Highly intuitive platform. Our hiring speed has tripled since adopting this solution.",
    rating: 5,
    img: "/profile.jpg",
  },
  {
    name: "Aman Verma",
    title: "Co-Founder at HireStack",
    quote:
      "Our team cut down manual screening efforts by more than half with Smart ATS.",
    rating: 4,
    img: "/profile1.jpeg",
  },
];

export default function ResponsiveTestimonials() {
  const [index, setIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [paused, setPaused] = useState(false);

  // ✅ Handle responsiveness (1 card on mobile, 2 on tablet, 3 on desktop)
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1024) setVisibleCount(3);
      else if (width >= 768) setVisibleCount(2);
      else setVisibleCount(1);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Auto-slide every 5s (pauses on hover, resets on resize)
  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setIndex((prev) =>
        prev + 1 >= testimonials.length - visibleCount + 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval); // cleanup
  }, [visibleCount, paused]);

  // ✅ Manual Navigation
  const handlePrev = () => setIndex((prev) => Math.max(prev - 1, 0));
  const handleNext = () =>
    setIndex((prev) =>
      Math.min(prev + 1, testimonials.length - visibleCount)
    );

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Hear From Those Who Hired Smart
        </h2>
        <p className="text-gray-600 text-xl mb-10">
          Join hundreds of companies that transformed their hiring process with
          our Smart ATS.
        </p>

{/* hide the button */}
        {/* <div className="text-right mb-6 me-5 space-x-2">
          <button
            onClick={handlePrev}
            className="bg-sky-700 hover:bg-sky-800 text-white p-2 disabled:opacity-30"
            disabled={index === 0}
          >
            <ChevronLeft />
          </button>
          <button
            onClick={handleNext}
            className="bg-sky-700 hover:bg-sky-800 text-white p-2 disabled:opacity-30"
            disabled={index + visibleCount >= testimonials.length}
          >
            <ChevronRight />
          </button>
        </div> */}

        <div className="overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}>
          <div
            className="flex transition-transform my-5 duration-500 ease-in-out"
            style={{
              width: `${(testimonials.length * 100) / visibleCount}%`,
              transform: `translateX(-${(index * 100) / testimonials.length}%)`,
            }}
          >
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="px-4"
                style={{
                  flex: `0 0 ${100 / testimonials.length}%`,
                }}
              >
                <div className="bg-[#00000007] shadow-md p-3 rounded-md text-center h-full hover:shadow-lg transition">
                  {/* Profile */}
                  <div className="p-4 flex items-center ">
                    <Image
                      src={t.img}
                      alt={t.name}
                      width={60}
                      height={60}
                      className="rounded-full object-cover w-[60px] h-[60px]"
                    />
                    <div className="text-start ms-4">
                      <h4 className="font-semibold text-lg">{t.name}</h4>
                      <p className="text-gray-500 text-sm">{t.title}</p>
                    </div>
                  </div>
                  
                 
                  <p className="italic font-[inter] text-gray-900 text-left px-3"> {t.quote} </p>
                 
              

                  {/* ⭐ Rating */}
                  <p className="py-1">
                    <span className="text-yellow-400 text-2xl">
                      {"★".repeat(t.rating)}
                      <span className="text-gray-300">
                        {"★".repeat(5 - t.rating)}
                      </span>
                    </span>
                  </p>

                  
                </div>
              </div>
            ))}
          </div>
        </div>
 {/* Dots Indicator */}
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: testimonials.length - visibleCount + 1 }).map(
            (_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full transition ${
                  i === index ? "bg-black" : "bg-gray-400"
                }`}
              />
            )
          )}
        </div>
     
      </div>
    </section>
   
  );
}

