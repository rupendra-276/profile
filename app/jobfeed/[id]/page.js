// "use client";
// import { useParams } from "next/navigation";
// import Image from "next/image";
// import Link from "next/link";
// import { jobs } from "../page";
// import { FaLinkedinIn, FaMapMarkerAlt } from "react-icons/fa";
// import { MdBusiness, MdDateRange, MdWork } from "react-icons/md";
// import { FaUser, FaBriefcase, FaBell, FaEnvelope } from "react-icons/fa";
// import { FaUsers, FaInstagram, FaTwitter, FaLinkedin, FaGlobe } from "react-icons/fa";

// import { BsFillPeopleFill } from "react-icons/bs";
// const navItems = [
//   { name: "Profile", icon: <FaUser />, href: "/profile" },
//   { name: "My Jobs", icon: <FaBriefcase />, href: "/my-jobs" },
//   { name: "Notifications", icon: <FaBell />, href: "/notifications" },
//   { name: "Messages", icon: <FaEnvelope />, href: "/messages" },
// ];


// export default function JobDetail() {
// //   const { id } = useParams();
// //   const job = jobs.find((job) => job.id === id);
// // console.log("jobs data 👉", job);
// //   if (!job) return <p className="p-10">Job not found!</p>;

// const job = {
//   id: "2",
//   logo: "/google.svg",
//   title: "Senior Frontend Developer",
//   company: "Google India",
//   industry: "Technology & Software",
//   rating: "4.8",
//   location: "Bangalore, India",
//   type: "Full-time",
//   salary: "₹30L - ₹45L",
//   experience: "Senior (5-8 years)",
//   description:
//     "Looking for a skilled React + TypeScript developer to design scalable frontend architectures for global products.",
//   skills: ["React", "TypeScript", "Next.js", "Redux", "GraphQL"],
//   posted: "3 days ago • 25 days left",
//   applicants: 142,
//   likes: 210,

//   // Hiring Manager
//   hiringManager: {
//     name: "Amit Sharma",
//     img: "/profile1.jpeg",
//     role: "Tech Lead",
//     linkedin: "https://linkedin.com/in/amit-sharma",
//   },

//   // Requirements & Responsibilities
//   requirements: [
//     "5+ years frontend dev experience",
//     "Expertise in React + TypeScript",
//     "Strong knowledge of design systems",
//   ],
//   responsibilities: [
//     "Architect scalable frontend solutions",
//     "Mentor junior engineers",
//     "Collaborate with product & design teams",
//   ],
//   niceToHave: ["Experience with WebAssembly", "Micro-frontend architecture"],

//   employmentMode: "Hybrid",

//   // Company Details
//   companyDetails: {
//     location: "Bangalore, India",
//     founded: 2019,
//     employees: "50 + employees",
//     stage: "Public Company",
//   },

//   // Social Links
//   socialLinks: [
//     {
//       name: "Website",
//       icon: "FaGlobe",
//       url: "https://about.google",
//       isFollowing: false,
//     },
//     {
//       name: "LinkedIn",
//       icon: "FaLinkedin",
//       url: "https://linkedin.com/company/google",
//       isFollowing: true,
//     },
//     {
//       name: "Twitter",
//       icon: "FaTwitter",
//       url: "https://twitter.com/google",
//       isFollowing: false,
//     },
//     {
//       name: "Instagram",
//       icon: "FaInstagram",
//       url: "https://instagram.com/google",
//       isFollowing: true,
//     },
//   ],

//   // Other Jobs by Company
//   otherJobs: [
//     { id: "3", title: "Backend Developer" },
//     { id: "4", title: "UI/UX Designer" },
//     { id: "5", title: "Cloud Engineer" },
//   ],
// };

//   return (
//     <>
//     <div className="flex font-[inter] w-full min-h-screen bg-gray-50 p-6 gap-6">
//       {/* LEFT SIDEBAR */}
//       <div className="w-1/4 bg-white rounded-2xl shadow p-4 space-y-6">
//         {/* Company Info */}
      
//       <div className="text-start flex items-center gap-2">
//         <Image
//           src={job.logo}
//           alt="logo"
//           width={60}
//           height={60}
//           className="object-cover"
//         />
//        <div>
//          <h2 className="text-xl font-semibold">{job.companyDetails.company}</h2>
//         <p className="text-sm text-gray-500">{job.companyDetails.industry}</p>
//        </div>
//       </div>

//       {/* Details with Icons */}
//       <div className="mt-4 m space-y-2 text-sm text-gray-600">
//         <p className="flex items-center gap-2">
//           <FaMapMarkerAlt className="text-blue-500" /> {job.location}
//         </p>
//         <p className="flex items-center gap-2">
//           <MdDateRange className="text-blue-500" /> Founded {job.companyDetails.founded || "2015"}
//         </p>
//         <p className="flex items-center gap-2">
//           <BsFillPeopleFill className="text-blue-500" /> {job.companyDetails.employees || "500-1000 employees"}
//         </p>
//         <p className="flex items-center gap-2">
//           <MdBusiness className="text-blue-500" /> {job.companyDetails.stage || "Series B Startup"}
//         </p>
//       </div>

// <div className="flex  gap-3 mt-4">
//         {job?.socialLinks?.map((link, index) => (
//           <a
//             key={index}
//             href={link.url}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="p-2 rounded-2xl bg-blue-600 text-white flex items-center gap-1 hover:bg-blue-400 transition"
//           >
//             {/* Render icon dynamically */}
//             {link.icon === "FaGlobe" && <FaGlobe size={18} />}
//             {link.icon === "FaLinkedin" && <FaLinkedin size={18} />}
//             {link.icon === "FaTwitter" && <FaTwitter size={18} />}
//             {link.icon === "FaInstagram" && <FaInstagram size={18} />}
            
//             {/* <span className="text-xs">
//               {link.isFollowing ? "Following" : "Follow"}
//             </span> */}
//           </a>
//         ))}
//       </div>

//         {/* Quick Navigation */}
//         <div>
//       <h3 className="font-semibold text-sm text-gray-700 mb-2">Quick Navigation</h3>
//       <ul className=" text-sm text-gray-600">
//         {navItems.map((item, index) => (
//           <li key={index}>
//             <Link
//               href={item.href}
//               className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 transition"
//             >
//               <span className="text-gray-600">{item.icon}</span>
//               <span>{item.name}</span>
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>

//         {/* Other Jobs */}
//         <div>
//           <h3 className="font-semibold text-sm text-gray-700 mb-2">Other Jobs by {jobs.company}</h3>
//           <div className="text-sm text-gray-600 border p-2 rounded-lg">Backend Developer</div>
//           <div className="text-sm text-gray-600 border p-2 rounded-lg mt-2">UI/UX Designer</div>
//         </div>
//       </div>

//       {/* MIDDLE SECTION */}
//       <div className="flex-1 bg-white rounded-2xl shadow p-6">
//         {/* Job Header */}
//         <div className="flex items-center gap-4">
//           <Image src={job.logo} alt="logo" width={50} height={50} />
//           <div>
//             <h1 className="text-xl font-semibold">{job.title}</h1>
//             <p className="text-sm text-gray-600">{job.company} • {job.location}</p>
//           </div>
//         </div>

//         <div className="mt-4 flex gap-6 text-sm text-gray-600">
//           <span className="flex items-center gap-1"><MdWork /> {job.type}</span>
//           <span>{job.experience}</span>
//           <span>{job.salary}</span>
//         </div>

//         <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg">Apply Now</button>

//         {/* About Role */}
//         <div className="mt-6">
//           <h2 className="text-lg font-semibold mb-2">About This Role</h2>
//           <p className="text-sm text-gray-600">{job.description}</p>
//         </div>

//         {/* Responsibilities */}
//         <div className="mt-6">
//           <h2 className="text-lg font-semibold mb-2">Key Responsibilities</h2>
//           <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
//              {job?.responsibilities?.map((r, i) => (
//             <li key={i}>{r}</li>
//           ))}
//           </ul>
//         </div>

//         {/* Requirements */}
//         <div className="mt-6">
//           <h2 className="text-lg font-semibold mb-2">Requirements</h2>
//           <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
//             {job.requirements.map((req, i) => (
//               <li key={i}>{req}</li>
//             ))}
//           </ul>
//         </div>

//         {/* Nice to Have */}
//         <div className="mt-6">
//           <h2 className="text-lg font-semibold mb-2">Nice to Have</h2>
//           <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
//             {job.niceToHave.map((nice, i) => (
//               <li key={i}>{nice}</li>
//             ))}
//           </ul>
//         </div>
//       </div>

//       {/* RIGHT SIDEBAR */}
//       <div className="w-1/4 space-y-6">
//         {/* Hiring Manager */}
//         <div className="bg-white rounded-2xl shadow p-4">
//           <h3 className="font-semibold mb-3">Hiring Manager</h3>
//           <div className="flex items-center gap-3">
//             <Image src={job.hiringManager.img} alt="manager" width={40} height={40} className="rounded-full" />
//             <div>
//               <p className="font-medium">{job.hiringManager.name}</p>
//               <p className="text-sm text-gray-500">{job.hiringManager.role}</p>
//               <a href={job.hiringManager.linkedin} target="_blank" className="text-blue-600 text-sm flex items-center gap-1">
//                 <FaLinkedinIn /> View LinkedIn
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Similar Jobs */}
//         <div className="bg-white rounded-2xl shadow p-4">
//           <h3 className="font-semibold mb-3">Similar Jobs</h3>
//           <div className="text-sm text-gray-600 border p-2 rounded-lg">Frontend Developer – Startup</div>
//           <div className="text-sm text-gray-600 border p-2 rounded-lg mt-2">UI Engineer – SaaS</div>
//         </div>

//         {/* Recently Viewed */}
//         <div className="bg-white rounded-2xl shadow p-4">
//           <h3 className="font-semibold mb-3">Recently Viewed</h3>
//           <div className="text-sm text-gray-600 border p-2 rounded-lg">DevOps Engineer</div>
//           <div className="text-sm text-gray-600 border p-2 rounded-lg mt-2">Product Manager</div>
//         </div>
//       </div>
//     </div>
    
//     </>

//   );
// }

"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { jobs } from "../page";
import { FaLinkedinIn, FaMapMarkerAlt } from "react-icons/fa";
import { MdBusiness, MdDateRange, MdWork } from "react-icons/md";
import { FaUser, FaBriefcase, FaBell, FaEnvelope } from "react-icons/fa";
import { FaUsers, FaInstagram, FaTwitter, FaLinkedin, FaGlobe } from "react-icons/fa";


import { BsFillPeopleFill } from "react-icons/bs";
const navItems = [
  { name: "Profile", icon: <FaUser />, href: "/profile" },
  { name: "My Jobs", icon: <FaBriefcase />, href: "/my-jobs" },
  { name: "Notifications", icon: <FaBell />, href: "/notifications" },
  { name: "Messages", icon: <FaEnvelope />, href: "/messages" },
];


const similarJobs = [
  {
    id: 1,
    logo: "/pay.svg",
    title: "Frontend Developer",
    company: "StartupX",
    location: "Mumbai",
    salary: "₹12–18 LPA",
    posted: "3 days ago",
  },
  {
    id: 2,
    logo: "/pay.svg",
    title: "Frontend Developer",
    company: "StartupX",
    location: "Mumbai",
    salary: "₹12–18 LPA",
    posted: "3 days ago",
  },
  {
    id: 3,
    logo: "/pay.svg",
    title: "Frontend Developer",
    company: "StartupX",
    location: "Mumbai",
    salary: "₹12–18 LPA",
    posted: "3 days ago",
  },
  {
    id: 4,
    logo: "/pay.svg",
    title: "Frontend Developer",
    company: "StartupX",
    location: "Mumbai",
    salary: "₹12–18 LPA",
    posted: "3 days ago",
  },
];

export default function JobDetail() {
//   const { id } = useParams();
//   const job = jobs.find((job) => job.id === id);
// console.log("jobs data 👉", job);
//   if (!job) return <p className="p-10">Job not found!</p>;

const job = {
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

  // Hiring Manager
  hiringManager: {
    name: "Amit Sharma",
    img: "/profile1.jpeg",
    role: "Tech Lead",
    linkedin: "https://linkedin.com/in/amit-sharma",
  },

  // Requirements & Responsibilities
  requirements: [
    "5+ years frontend dev experience",
    "Expertise in React + TypeScript",
    "Strong knowledge of design systems",
  ],
  responsibilities: [
    "Architect scalable frontend solutions",
    "Mentor junior engineers",
    "Collaborate with product & design teams",
  ],
  niceToHave: ["Experience with WebAssembly", "Micro-frontend architecture"],

  employmentMode: "Hybrid",

  // Company Details
  companyDetails: {
    location: "Bangalore, India",
    founded: 2019,
    employees: "50 + employees",
    stage: "Public Company",
  },

  // Social Links
  socialLinks: [
    {
      name: "Website",
      icon: "FaGlobe",
      url: "https://about.google",
      isFollowing: false,
    },
    {
      name: "LinkedIn",
      icon: "FaLinkedin",
      url: "https://linkedin.com/company/google",
      isFollowing: true,
    },
    {
      name: "Twitter",
      icon: "FaTwitter",
      url: "https://twitter.com/google",
      isFollowing: false,
    },
    {
      name: "Instagram",
      icon: "FaInstagram",
      url: "https://instagram.com/google",
      isFollowing: true,
    },
  ],

  // Other Jobs by Company
  otherJobs: [
    { id: "3", title: "Backend Developer" },
    { id: "4", title: "UI/UX Designer" },
    { id: "5", title: "Cloud Engineer" },
  ],
};

  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-4 font-[inter] w-full min-h-screen  gap-6">
      {/* LEFT SIDEBAR */}
      <div className=" border-r-2 px-3 mx-3   border-gray-300 rounded-2xl ">
        {/* Company Info */}
      <div className="py-6 md:py-10 space-y-6">
        <div className=" border border-gray-600 rounded-sm p-4">
       <div className="text-start flex items-center gap-2">
        <Image
          src={job.logo}
          alt="logo"
          width={60}
          height={60}
          className="object-cover"
        />
       <div>
         <h2 className="text-xl font-semibold">{job.company}</h2>
        <p className="text-sm text-gray-500">{job.industry}</p>
       </div>
      </div>

      {/* Details with Icons */}
      <div className="mt-4 m space-y-2 text-sm text-gray-600">
        <p className="flex items-center gap-2">
          <FaMapMarkerAlt className="text-blue-500" /> {job.location}
        </p>
        <p className="flex items-center gap-2">
          <MdDateRange className="text-blue-500" /> Founded {job.companyDetails.founded || "2015"}
        </p>
        <p className="flex items-center gap-2">
          <BsFillPeopleFill className="text-blue-500" /> {job.companyDetails.employees || "500-1000 employees"}
        </p>
        <p className="flex items-center gap-2">
          <MdBusiness className="text-blue-500" /> {job.companyDetails.stage || "Series B Startup"}
        </p>
      </div>

       <div className="flex  gap-3 mt-4">
        {job?.socialLinks?.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-2xl bg-blue-600 text-white flex items-center gap-1 hover:bg-blue-400 transition"
          >
            {/* Render icon dynamically */}
            {link.icon === "FaGlobe" && <FaGlobe size={18} />}
            {link.icon === "FaLinkedin" && <FaLinkedin size={18} />}
            {link.icon === "FaTwitter" && <FaTwitter size={18} />}
            {link.icon === "FaInstagram" && <FaInstagram size={18} />}
            
            {/* <span className="text-xs">
              {link.isFollowing ? "Following" : "Follow"}
            </span> */}
          </a>
        ))}
      </div>
        </div>


        {/* Quick Navigation */}
        <div className="border border-gray-600 rounded-sm p-4">
      <h3 className="font-semibold text-sm text-gray-700 mb-2">Quick Navigation</h3>
      <ul className=" text-sm text-gray-600">
        {navItems.map((item, index) => (
          <li key={index}>
            <Link
              href={item.href}
              className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 transition"
            >
              <span className="text-gray-600">{item.icon}</span>
              <span>{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>

        {/* Other Jobs */}
       <div className="border border-gray-600 rounded-sm p-4">
   <h3 className="font-semibold text-sm text-gray-700 mb-2">
  Other Jobs by {job.company}</h3>

<div className="space-y-2">
  {job?.otherJobs?.map((other) => (
    <Link
      key={other.id}
      href={`/jobs/${other.id}`}
      className="block text-sm text-gray-600 border p-2 rounded-lg hover:bg-gray-50 transition"
    >
      {other.title}
    </Link>
  ))}
</div>
      </div>

     


      </div>
      </div>
      

      {/* MIDDLE SECTION */}
      <div className="md:col-span-2 border-r-2 px-3  md:py-6 border-gray-500">
              <div className="py-6 md:py-10 space-y-6">
 {/* Job Header */}
        <div className="flex items-center gap-4">
          <Image src={job.logo} alt="logo" width={50} height={50} />
          <div>
            <h1 className="text-xl font-semibold">{job.title}</h1>
            <p className="text-sm text-gray-600">{job.company} • {job.location}</p>
          </div>
        </div>
         <div className="mt-4 flex gap-6 text-sm text-gray-600">
          <span className="flex items-center gap-1"><MdWork /> {job.type}</span>
          <span>{job.experience}</span>
          <span>{job.salary}</span>
        </div>

        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg">Apply Now</button>

        {/* About Role */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-2">About This Role</h2>
          <p className="text-sm text-gray-600">{job.description}</p>
        </div>

        {/* Responsibilities */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-2">Key Responsibilities</h2>
          <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
             {job?.responsibilities?.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
          </ul>
        </div>

        {/* Requirements */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-2">Requirements</h2>
          <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
            {job.requirements.map((req, i) => (
              <li key={i}>{req}</li>
            ))}
          </ul>
        </div>

        {/* Nice to Have */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-2">Nice to Have</h2>
          <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
            {job.niceToHave.map((nice, i) => (
              <li key={i}>{nice}</li>
            ))}
          </ul>
        </div>
      </div>
              </div>
       

       

      {/* RIGHT SIDEBAR */}
      <div className="py-6 md:py-10 space-y-6">
        {/* Hiring Manager */}
        <div className="bg-white rounded-2xl shadow p-4">
          <h3 className="font-semibold text-lg mb-3">Hiring Manager</h3>
          <div className="flex items-center gap-3">
            <Image src={job.hiringManager.img} alt="manager" width={40} height={40} className=" w-20 h-20 rounded-full object-cover" />
            <div>
              <p className="font-medium">{job.hiringManager.name}</p>
              <p className="text-sm text-gray-500">{job.hiringManager.role}</p>
              <a href={job.hiringManager.linkedin} target="_blank" className="text-blue-600 text-sm flex items-center gap-1">
                <FaLinkedin /> View LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Similar Jobs */}
        <div className="bg-white rounded-2xl shadow p-4">
          <h3 className="font-semibold mb-3">Similar Jobs</h3>
          <div className="text-sm text-gray-600 border p-2 rounded-lg">Frontend Developer – Startup</div>
          <div className="text-sm text-gray-600 border p-2 rounded-lg mt-2">UI Engineer – SaaS</div>
        </div>

        {/* Recently Viewed */}
        <div className="bg-white rounded-2xl shadow p-4">
          <h3 className="font-semibold mb-3">Recently Viewed</h3>
          <div className="text-sm text-gray-600 border p-2 rounded-lg">DevOps Engineer</div>
          <div className="text-sm text-gray-600 border p-2 rounded-lg mt-2">Product Manager</div>
        </div>
      </div>
    </div>
    
    </>

  );
}
