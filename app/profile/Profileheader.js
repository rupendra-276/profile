

"use client";
import Image from "next/image";
import { useState } from "react";
import { Pencil } from "lucide-react";
import ImageEditorModal from "./ImageEditorModal";
import ContactInfoModal from "./ContactInfoModal";
import { Camera } from 'lucide-react';
import { SquarePen } from 'lucide-react';
import { MdLocationOn, MdEmail } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaLinkedin, FaGithub, FaTwitter, FaGlobe } from "react-icons/fa";
import { GoSidebarCollapse } from "react-icons/go";
import { MdVerifiedUser } from "react-icons/md";
import { MdVerified } from "react-icons/md";
import Link from "next/link";

export const dummyUser = {
  name: "Rupendra Vishwakarma",
  headline: "Full Stack Developer",
  location: "India",
  email: "rupendravishwarkam@gmail.com",
  joined: "21, June 2025",
  followers: 200,
  connections: 180,
  experience: [
    {
      company: "Google",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    },
    {
      company: "Microsoft",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    },
    {
      company: "Amazon",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    },
  ],
  college: [
    {
      name: "IIT Bombay",
      logo: "https://upload.wikimedia.org/wikipedia/en/0/0a/IIT_Bombay_Logo.svg",
    },
    {
      name: "NIT Trichy",
      logo: "https://upload.wikimedia.org/wikipedia/en/0/04/NIT_Trichy_Logo.png",
    },
  ],
};

export default function ProfileHeader({ user }) {
  const [isFollowing, setIsFollowing] = useState(false);
  const [followers, setFollowers] = useState(user.followers || 0);
  const [connections, setConnections] = useState(user.connections || 0);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [editorMode, setEditorMode] = useState("cover"); // "cover" or "avatar"
  const [cover, setCover] = useState(user.cover || "/profile-cover.jpg");
  const [avatar, setAvatar] = useState(user.avatar || "/profiledefault.png");
  const experience = user.experience || [{

  }];

  // Dummy user data for testing

  const [infoModal, setInfoModal] = useState(false);
  const [formData, setFormData] = useState({
  name: user.name,
  headline: user.headline,
  location: user.location,
  email: user.email || "rupendravishwarkam@gmail.com",
  phoneNumbers: user.phoneNumbers || [],
  joined: user.joined || "21, June 2025",

  // 🔥 Social links
  linkedin: user.linkedin || "https://linkedin.com/in/rupendra",
  github: user.github || "https://github.com/rupendra",
  twitter: user.twitter || "https://twitter.com/rupendra",
  website: user.website || "https://rupendra.dev",
});

  // toggle follow
  const handleFollow = () => {
    setFollowers((prev) => (isFollowing ? prev - 1 : prev + 1));
    setIsFollowing(!isFollowing);
  };

  // open editor
  const openEditor = (mode) => {
    setEditorMode(mode);
    setIsEditorOpen(true);
  };

  // save image
  const handleEditorSave = ({ url }) => {
    if (editorMode === "cover") setCover(url);
    else setAvatar(url);
    setIsEditorOpen(false);
  };


  return (
    <div className=" border-gray-200 mt-5  overflow-hidden">
      {/* Cover */}
      <div className="relative overflow-hidden w-full h-32 md:h-52 ">
        <img src={cover} alt="Cover" className="h-full border  border-gray-200 rounded-[30px] object-cover w-full" />      
      </div>

      {/* Avatar */}

     <div className="relative">
        <img src={avatar} alt="avtar" className="absolute z-30 bg-white border-4 border-gray-500 -top-32 left-8 md:left-14 w-24 h-24 md:w-44 md:h-44 rounded-full" />   
        {/* <div className="absolute z-30 bg-white -top-32 left-8 md:left-14 w-24 h-24 md:w-44 md:h-44 rounded-full"></div>    */}
    </div>


    {/* info */}
       <div className="mt-16  flex flex-col   md:flex-row  gap-10 ">
        <div className="mt-2 w-full md:w-[70%] ">
          <h2 className="text-2xl sm:text-3xl font-semibold my-1  text-white flex gap-1 items-center">{formData.name} <MdVerified className="text-blue-700" /></h2>
          <p className="text-sm  sm:text-[16px] my-3 text-[#ffffff] font-medium">Python is a versatile, high-level programming language known for simplicity, readability, and vast libraries. It powers web apps, AI, data science, automation, and more.</p>
        
        <div className="flex flex-wrap items-center gap-5 text-[#edecec] text-xs font-medium font-[jost]  my-2">
        {formData.location && (
          <div className="flex items-center gap-1">
            <MdLocationOn size={16} className="" />
            <p>{formData.location}</p>
          </div>
        )}

        {formData.email && (
          <div className="flex items-center gap-1">
            <MdEmail size={16} className="" />
            <p>{formData.email}</p>
          </div>
        )}

        {formData.joined && (
          <div className="flex items-center gap-1">
            <FaRegCalendarAlt size={16} className="" />
            <p>Joined {formData.joined}</p>
          </div>
        )}
      </div>

      
      <div className="flex justify-between items-center  mt-4">
        <div className="flex gap-10">
          <Link href='/follower' className="flex flex-col justify-around items-center ">
            <span className="text-[20px]  text-gray-100 hover:text-gray-200">{followers} Followers</span>
            
          </Link>
          <Link href='following' className="flex flex-col items-center">
            <span className="text-[20px]  text-gray-100 hover:text-gray-200">{connections} following</span>
          
          </Link>
        </div>

  
      </div>
          
          
          <div>

          </div>

        </div>

        {/* Experience / College */}

       <div className="gap-6 mt-1 w-full md:w-[30%]">
              {[
                ...(user.experience || []),
                ...(user.college ? (Array.isArray(user.college) ? user.college : [user.college]) : []),
              ]
                .slice(0, 2)
                .map((item, idx) => (
                  <div key={idx} className=" flex items-center   gap-4 my-4">
                   <div className="w-[40px] h-[40px] border-3 ms-8 md:ms-16 m-1 border-gray-400 rounded-[10px] overflow-hidden ">
                    <img
                      src={item.logo}
                      alt={`${item.company || item.name} logo`}
                      className="w-full h-full object-contain"
                    />
                    
                  </div>
                    <div className="font-medium text-white">{item.company || item.name}</div>
                    
                  </div>
                ))}
            </div>

      </div>


   

      {/* Contact Info Modal */}
      {infoModal && (
        <ContactInfoModal
          isOpen={infoModal}
          onClose={() => setInfoModal(false)}
          user={formData}
          onSave={(updated) => setFormData(updated)}
        />
      )}

      {/* Image Editor Modal */}
      {isEditorOpen && (
        <div className="overflow-auto">
          <ImageEditorModal
            isOpen={isEditorOpen}
            onClose={() => setIsEditorOpen(false)}
            initialImage={editorMode === "cover" ? cover : avatar}
            mode={editorMode}
            onSave={handleEditorSave}
          />
        </div>
      )}
    </div>
  );
}


// "use client";
// import Image from "next/image";
// import { useState } from "react";
// import { Pencil } from "lucide-react";
// import ImageEditorModal from "./ImageEditorModal";
// import ContactInfoModal from "./ContactInfoModal";
// import { Camera, SquarePen } from 'lucide-react';
// import { MdLocationOn, MdEmail, MdVerified, MdVerifiedUser } from "react-icons/md";
// import { FaRegCalendarAlt } from "react-icons/fa";
// import { FaLinkedin, FaGithub, FaTwitter, FaGlobe } from "react-icons/fa";
// import { GoSidebarCollapse } from "react-icons/go";
// import Link from "next/link";

// // 🔹 Dummy data (testing ke liye)
// // Isko component ke bahar rakho
// export const dummyUser = {
//   name: "Rupendra Vishwakarma",
//   headline: "Full Stack Developer",
//   location: "India",
//   email: "rupendravishwarkam@gmail.com",
//   joined: "21, June 2025",
//   followers: 200,
//   connections: 180,
//   experience: [
//     {
//       company: "Google",
//       logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
//     },
//     {
//       company: "Microsoft",
//       logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
//     },
//     {
//       company: "Amazon",
//       logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
//     },
//   ],
//   college: [
//     {
//       name: "IIT Bombay",
//       logo: "https://upload.wikimedia.org/wikipedia/en/0/0a/IIT_Bombay_Logo.svg",
//     },
//     {
//       name: "NIT Trichy",
//       logo: "https://upload.wikimedia.org/wikipedia/en/0/04/NIT_Trichy_Logo.png",
//     },
//   ],
// };

// export default function ProfileHeader({ user }) {
//   const [isFollowing, setIsFollowing] = useState(false);
//   const [followers, setFollowers] = useState(user.followers || 0);
//   const [connections, setConnections] = useState(user.connections || 0);
//   const [isEditorOpen, setIsEditorOpen] = useState(false);
//   const [editorMode, setEditorMode] = useState("cover"); // "cover" or "avatar"
//   const [cover, setCover] = useState(user.cover || "/profile-cover.jpg");
//   const [avatar, setAvatar] = useState(user.avatar || "/profiledefault.jpg");
//   const [infoModal, setInfoModal] = useState(false);

//   const [formData, setFormData] = useState({
//     name: user.name,
//     headline: user.headline,
//     location: user.location,
//     email: user.email || "rupendravishwarkam@gmail.com",
//     phoneNumbers: user.phoneNumbers || [],
//     joined: user.joined || "21, June 2025",
//     linkedin: user.linkedin || "https://linkedin.com/in/rupendra",
//     github: user.github || "https://github.com/rupendra",
//     twitter: user.twitter || "https://twitter.com/rupendra",
//     website: user.website || "https://rupendra.dev",
//   });

//   // toggle follow
//   const handleFollow = () => {
//     setFollowers((prev) => (isFollowing ? prev - 1 : prev + 1));
//     setIsFollowing(!isFollowing);
//   };

//   // open editor
//   const openEditor = (mode) => {
//     setEditorMode(mode);
//     setIsEditorOpen(true);
//   };

//   // save image
//   const handleEditorSave = ({ url }) => {
//     if (editorMode === "cover") setCover(url);
//     else setAvatar(url);
//     setIsEditorOpen(false);
//   };

//   // helper SmartImage
//   const SmartImage = ({ src, alt, className, ...props }) => {
//     const isObjectUrl = src && (src.startsWith("blob:") || src.startsWith("data:"));
//     if (isObjectUrl) {
//       return <img src={src} alt={alt} className={className} {...props} />;
//     }
//     return <Image src={src} alt={alt} fill className={className} {...props} />;
//   };

//   return (
//     <div className="bg-transparent mb-4 border-gray-200 mt-5 overflow-hidden">
//       {/* Cover */}
//       <div className="relative overflow-hidden w-full h-32 md:h-56">
//         <div className="absolute inset-0">
//           <div className="bg-transparent w-full h-full border border-gray-200 rounded-2xl"></div>
//         </div>
//       </div>

//       {/* Avatar */}
//       <div className="relative flex justify-between p-6 my-">
       
//         </div>

//         <div className="mt-24 flex flex-col md:flex-row justify-between gap-1 items-start">
//           <div className="-mt-2 flex flex-col md:flex-row">
//             <div>
//             <h2 className="text-2xl sm:text-3xl font-semibold my-1 text-[#efeeff] flex gap-1 items-center">
//               {formData.name} <MdVerified className="text-blue-700" />
//             </h2>
//             <p className="text-sm sm:text-[16px] mt-2 text-[#ffffff] font-medium">
//               Python is a versatile, high-level programming language known for simplicity, readability, and vast libraries. It powers web apps, AI, data science, automation, and more.
//             </p>

//             {/* Location / Email / Joined */}
//             <div className="flex flex-wrap items-center gap-5 text-[#d9d3d396] text-[13px] my-2">
//               {formData.location && (
//                 <div className="flex items-center gap-1">
//                   <MdLocationOn size={16} />
//                   <p>{formData.location}</p>
//                 </div>
//               )}
//               {formData.email && (
//                 <div className="flex items-center gap-1">
//                   <MdEmail size={16} />
//                   <p>{formData.email}</p>
//                 </div>
//               )}
//               {formData.joined && (
//                 <div className="flex items-center gap-1">
//                   <FaRegCalendarAlt size={16} />
//                   <p>Joined {formData.joined}</p>
//                 </div>
//               )}
//             </div>

//             {/* Followers / Following */}
//             <div className="flex justify-between items-center my-5">
//               <div className="flex gap-16">
//                 <Link href="/follower" className="flex flex-col justify-around items-center">
//                   <span className="text-[20px] text-[#a7a2a2f1]">{followers} Followers</span>
//                 </Link>
//                 <Link href="/following" className="flex flex-col items-center">
//                   <span className="text-[20px] text-[#a7a2a2f1]">{connections} following</span>
//                 </Link>
//               </div>
//             </div>
//             </div>
//             <div className="gap-6 mt-1 text-left text-sm text-blue-600">
//               {[
//                 ...(user.experience || []),
//                 ...(user.college ? (Array.isArray(user.college) ? user.college : [user.college]) : []),
//               ]
//                 .slice(0, 2)
//                 .map((item, idx) => (
//                   <div key={idx} className="flex items-start gap-2">
//                     {item.logo && (
//                       <Image
//                         src={item.logo}
//                         alt={`${item.company || item.name} logo`}
//                         width={24}
//                         height={24}
//                         className="inline-block rounded-sm object-contain"
//                       />
//                     )}
//                     <span className="font-medium text-gray-800">{item.company || item.name}</span>
//                   </div>
//                 ))}
//             </div>
            

//             {/* Experience + College (Max 2 like LinkedIn) */}
           
//           </div>

//         </div>
//         <div>
           
//           </div>
//       </div>

//       {/* Contact Info Modal */}
//       {infoModal && (
//         <ContactInfoModal
//           isOpen={infoModal}
//           onClose={() => setInfoModal(false)}
//           user={formData}
//           onSave={(updated) => setFormData(updated)}
//         />
//       )}

//       {/* Image Editor Modal */}
//       {isEditorOpen && (
//         <div className="overflow-auto">
//           <ImageEditorModal
//             isOpen={isEditorOpen}
//             onClose={() => setIsEditorOpen(false)}
//             initialImage={editorMode === "cover" ? cover : avatar}
//             mode={editorMode}
//             onSave={handleEditorSave}
//           />
//         </div>
//       )}
//     </div>
//   );
// }
