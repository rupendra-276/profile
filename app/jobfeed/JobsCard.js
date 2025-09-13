"use client";
// import Button  from "../components/Button"; 
import LinkButton, { NavLinkButton } from "../button/Button";

import {
  CheckCircle,
  Star,
  Briefcase,
  MapPin,
  Share2,
  Bookmark,
  Users,
  ThumbsUp,
  Gift,
  Clock,
} from "lucide-react";

export default function JobCard({ job }) {
  return (
    <div className="relative  bg-white shadow-sm rounded-2xl mb-4 hover:shadow-md transition p-5 font-[inter]">
      {/* Bookmark + Share */}
      <div className="flex justify-between gap-4 ">
          <div className="flex gap-2">
         <div className="w-16 h-16 flex items-center justify-center p-3 rounded-xl">
        <img src={job.logo} alt={job.company} className="w-full h-full object-cover" />
          </div>
          <div>
        <div className="flex items-center gap-2">
          <h2 className="text-base sm:text-lg font-semibold">{job.title}</h2>
          <CheckCircle className="w-4 h-4 text-blue-500" />
        </div>   
          <div className="flex items-center gap-2 text-sm text-gray-600">
          <span >{job.company}</span>
          <Star className="w-4 h-4 text-yellow-500" />
          <span className="font-medium">{job.rating}</span>
        </div>
        <div className="flex items-center gap-4 text-xs text-gray-500 mt-1">
          <MapPin className="w-4 h-4" />
          <span>{job.location}</span>
          <Briefcase className="w-4 h-4" />
          <span>{job.type}</span>
        </div>

          </div>
          </div>
     
       <div className=" flex gap-3 text-gray-500">
        <Bookmark className="w-5 h-5 cursor-pointer hover:text-blue-600" />
        <Share2 className="w-5 h-5 cursor-pointer hover:text-blue-600" />
      </div>
      </div>
 
      <div className="my-2">
          <div className="flex items-center gap-6 text-sm mt-2">
          <span className="text-gray-700 font-medium">
            ${job.salary}
          </span>
          <div className="flex items-center gap-2 text-gray-700">
            <Gift className="w-4 h-4" />
            <span>{job.experience}</span>
          </div>
        </div>
        <p className="text-sm text-gray-800 mt-2 line-clamp-2">
          {job.description}
        </p>
        {/* Skills */}
        <div className="flex flex-wrap gap-2 mt-3">
          {job.skills.slice(0, 4).map((skill, i) => (
            <span
              key={i}
              className="text-xs  px-2 py-1 rounded-3xl border border-gray-400"
            >
              {skill}
            </span>
          ))}
          {job.skills.length > 4 && (
            <span className="text-xs  px-2 py-1 border border-gray-400 rounded-3xl">
              + {job.skills.length - 4} more
            </span>
          )}
        </div>

      </div>

{/* Meta Info */}
        <div className="flex items-center gap-5 text-xs text-gray-500 mt-3">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4 text-red-500" />
            <span>{job.posted}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{job.applicants}</span>
          </div>
          <div className="flex items-center gap-1">
            <ThumbsUp className="w-4 h-4" />
            <span>{job.likes}</span>
          </div>
        </div>

        {/* bottom button */}
      <div className="flex justify-end gap-3 ">
          <LinkButton href={`jobfeed/${job.id}`} name="View Details"  showIcon={false} linkclassname="!bg-transparent  !text-sm !text-black border border-blue-500 hover:!bg-blue-600 hover:!text-white" />
          <LinkButton href={`/${job.id}}`} name="Apply Now" showIcon={false}  linkclassname="!py-0.5"/>
          
        </div>
      


  
    </div>
  );
}
