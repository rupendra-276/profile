// // app/jobfeed/page.js
// "use client";
// import { useSelector } from "react-redux";
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";

// export default function JobFeed() {
//   const { user } = useSelector((state) => state.auth);
//   const router = useRouter();

//   useEffect(() => {
//     if (!user) {
//       router.push("/signin");
//     }
//   }, [user, router]);

//   if (!user) return null;

//   return (
//     <div className="min-h-screen flex items-center justify-center">
//       <div className="bg-white p-8 rounded-lg shadow-lg">
//         <h1 className="text-2xl font-bold">Job Feed</h1>
//         <p>Welcome to the job feed, {user.fullName}!</p>
//       </div>
//     </div>
//   );
// }
"use client";
import React, { useState } from "react";
import { CiFilter } from "react-icons/ci";
import FilterSidebar from "./FilterJobsSidebar";
import JobCard from "./JobsCard";
import TrendingTags from "./TrendingTags";
import CompanySuggestions from "./CompanySuggestion";
import { AnimatedWrapper } from "../animation/animation";

export const jobs = [
  {
    id: "1",
    logo: "/amazon.png",
    title: "Machine Learning Engineer",
    company: "Tech Innovations Inc",
    industry: "AI & Cloud Solutions",
    rating: "4.6",
    location: "Remote",
    type: "Full-time",
    salary: "$130,000 - $200,000",
    experience: "Mid-level (3-5 years)",
    description:
      "We're looking for a passionate Machine Learning Engineer to build scalable AI solutions and deploy ML models in production.",
    skills: ["Python", "TensorFlow", "PyTorch", "Kubernetes", "MLOps"],
    posted: "1 day ago • 20 days left",
    applicants: 89,
    likes: 85,
    hiringManager: {
      name: "Sarah Johnson",
      img:"/profile.jpg",
      role: "Engineering Manager",
      linkedin: "https://linkedin.com/in/sarah-johnson"
    },
    requirements: [
      "3+ years experience in ML/AI projects",
      "Strong coding skills in Python",
      "Experience with cloud platforms (AWS/GCP)"
    ],
    responsibilities: [
      "Develop, train and optimize ML models",
      "Work with data engineers to improve pipelines",
      "Deploy and monitor models in production"
    ],
    niceToHave: ["Open source contributions", "MLOps experience"],
    employmentMode: "Remote"
  },
  {
    id: "2",
    logo: "/google.svg",
    title: "Senior Frontend Developer",
    company: "Google India",
    industry: "Technology & Software",
    rating: "4.8",
    location: "Bangalore, India",
    type: "Full-time",
    salary: "₹30L - ₹45L",
    experience: "Senior (5-8 years)",
    description:
      "Looking for a skilled React + TypeScript developer to design scalable frontend architectures for global products.",
    skills: ["React", "TypeScript", "Next.js", "Redux", "GraphQL"],
    posted: "3 days ago • 25 days left",
    applicants: 142,
    likes: 210,
    hiringManager: {
      name: "Amit Sharma",
      img:'/profile1.jpeg',
      role: "Tech Lead",
      linkedin: "https://linkedin.com/in/amit-sharma"
    },
    requirements: [
      "5+ years frontend dev experience",
      "Expertise in React + TypeScript",
      "Strong knowledge of design systems"
    ],
    responsibilities: [
      "Architect scalable frontend solutions",
      "Mentor junior engineers",
      "Collaborate with product & design teams"
    ],
    niceToHave: ["Experience with WebAssembly", "Micro-frontend architecture"],
    employmentMode: "Hybrid"
  },
];


export default function JobFeed() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [filteredJobs, setFilteredJobs] = useState(jobs);


  // Helper function

  
  

// handle apply jobs
const handleApplyFilters = (filters) => {
  let result = jobs;

  // Location filter
  if (filters.location) {
    result = result.filter((job) =>
      job.location.toLowerCase().includes(filters.location.toLowerCase())
    );
  }

  const parseSalary = (salaryStr) => {
    if (!salaryStr) return 0;
    // Extract first number
    const match = salaryStr.match(/(\d+)/g);
    if (!match) return 0;
    return parseInt(match[0]); // take min salary
  };
  // Salary filter
  result = result.filter(
    (job) => parseSalary(job.salary) <= filters.salary[1] * 100000 // converting LPA to INR approx
  );

  // Job type filter
  const activeJobTypes = Object.keys(filters.jobType).filter(
    (key) => filters.jobType[key]
  );
  if (activeJobTypes.length > 0) {
    result = result.filter((job) =>
      activeJobTypes.some((type) =>
        job.type.toLowerCase().includes(type.toLowerCase())
      )
    );
  }

  // Experience filter
  if (filters.experienceLevel) {
    result = result.filter((job) =>
      job.experience.toLowerCase().includes(filters.experienceLevel)
    );
  }

  // Work Mode filter
  if (filters.workMode) {
    result = result.filter(
      (job) =>
        job.employmentMode &&
        job.employmentMode.toLowerCase().includes(filters.workMode.toLowerCase())
    );
  }

  // Industry filter
  if (filters.industry) {
    result = result.filter((job) =>
      job.industry.toLowerCase().includes(filters.industry.toLowerCase())
    );
  }

  setFilteredJobs(result);
};



  // 📌 Clear Filters logic
  const handleClearFilters = () => {
    setFilteredJobs(jobs);
  };

  return (
    <div>
      {/* ✅ Mobile Top Navbar */}
      <div className="flex items-center justify-between md:hidden px-4 py-3 bg-white shadow">
        <h1 className="text-lg font-semibold">Filters</h1>
        <button onClick={() => setIsSidebarOpen(true)}>
          <CiFilter className="w-6 h-6 text-gray-700" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 bg-gray-50 min-h-screen">
        {/* ✅ Left Sidebar (desktop only) */}
        <div className="hidden md:block px-3 md:px-6 py-5 md:py-6 border-r-2 border-gray-300">
          <FilterSidebar
            onApplyFilters={handleApplyFilters}
            onClearFilters={handleClearFilters}
          />
        </div>

        {/* ✅ Main Feed */}
        <div className="md:col-span-2 border-r-2 px-3 py-5 md:py-6 border-gray-300">
          <TrendingTags />
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => <JobCard key={job.id} job={job} />)
          ) : (
            <p className="text-gray-600 text-sm">No jobs found.</p>
          )}
        </div>

        {/* ✅ Right Sidebar */}
        <div className="hidden md:block px-3 md:px-6 py-5 md:py-6">
          <CompanySuggestions />
        </div>
      </div>

      {/* ✅ Mobile Sidebar Drawer */}
    {isSidebarOpen && (
  <div direction="left">

    <div
      className="fixed top-0 left-0 h-full  max-w-sm bg-white shadow-lg z-50 transform animate-slideIn"
      onClick={(e) => e.stopPropagation()} // ✅ prevent close on inside click
    >
      <div className="p-4 border-b flex justify-between items-center">
        <h2 className="font-semibold text-lg">Filters</h2>
        <button
          onClick={() => setIsSidebarOpen(false)}
          className="text-gray-500 hover:text-gray-800"
        >
          ✕
        </button>
      </div>
      <div className="p-4 overflow-y-auto h-[calc(100%-60px)]">
        <FilterSidebar
          onApplyFilters={handleApplyFilters}
          onClearFilters={handleClearFilters}
        />
      </div>
    </div>
  </div>
)}

    </div>
  );
}
