// "use client";
// import Image from "next/image";
// import { useState } from "react";
// import { Pencil } from "lucide-react";
// import ImageEditorModal from "./ImageEditorModal";
// import ContactInfoModal from "./ContactInfoModal";
// import { Camera } from 'lucide-react';
// import { SquarePen } from 'lucide-react';
// import { MdLocationOn, MdEmail } from "react-icons/md";
// import { FaRegCalendarAlt } from "react-icons/fa";
// import { FaLinkedin, FaGithub, FaTwitter, FaGlobe } from "react-icons/fa";
// import { GoSidebarCollapse } from "react-icons/go";
// import { MdVerifiedUser } from "react-icons/md";


// export default function ProfileHeader({ user }) {
//   const [isFollowing, setIsFollowing] = useState(false);
//   const [followers, setFollowers] = useState(user.followers || 0);
//   const [connections, setConnections] = useState(user.connections || 0);
//   const [isEditorOpen, setIsEditorOpen] = useState(false);
//   const [editorMode, setEditorMode] = useState("cover"); // "cover" or "avatar"
//   const [cover, setCover] = useState(user.cover || "/profile-cover.jpg");
//   const [avatar, setAvatar] = useState(user.avatar || "/profiledefault.jpg");
//   const experience = user.experience || [];
//   const [infoModal, setInfoModal] = useState(false);
  
//   const [formData, setFormData] = useState({
//   name: user.name,
//   headline: user.headline,
//   location: user.location,
//   email: user.email || "rupendravishwarkam@gmail.com",
//   phoneNumbers: user.phoneNumbers || [],
//   joined: user.joined || "21, June 2025",

//   // 🔥 Social links
//   linkedin: user.linkedin || "https://linkedin.com/in/rupendra",
//   github: user.github || "https://github.com/rupendra",
//   twitter: user.twitter || "https://twitter.com/rupendra",
//   website: user.website || "https://rupendra.dev",
// });

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
//     <div className="bg-[#ffffffda] border mb-4 border-gray-200 custom-shadow  rounded-sm overflow-hidden">
//       {/* Cover */}
//       <div className="relative overflow-hidden w-full h-32 md:h-52 bg-gray-200">
//         <div className="absolute inset-0">
//           <SmartImage src={cover} alt="Cover" className="object-cover w-full h-full" />
//         </div>
//         {/* <button
//           onClick={() => openEditor("cover")}
//           className="absolute top-2 flex gap-1 items-center right-2 bg-[#fbfafa] py-1.5 px-2 rounded-sm shadow-md hover:bg-gray-50 hover:cursor-pointer"
//         >
//           <SquarePen size={16} /> 
//         </button> */}
//       </div>

//       {/* Avatar */}
//      <div className="relative flex justify-between p-6 my-2">
//   {/* Avatar */}
//   <div className="absolute z-10 -top-20 left-8 md:left-10 w-28 h-28 md:w-32 md:h-32 rounded-full shadow-md">
//     <div className="relative w-full h-full">
//       <SmartImage
//         src={avatar}
//         alt="Profile"
//         className="object-cover z-20 w-full h-full rounded-full "
//       />

//       {/* Camera Icon Overlay */}
//       <Camera
//         onClick={() => openEditor("avatar")}
//         size={30}
//         className="absolute bottom-2 right-2 bg-white  text-gray-900 p-1 rounded-full cursor-pointer z-40"
//       />
//     </div>
//   </div>

//   {/* Edit Button */}
//   {/* <button
//     onClick={() => setInfoModal(true)}
//     className="absolute right-5 flex gap-1 bottom-0  p-1 rounded-sm m-1 border border-blue-600 hover:cursor-pointer"
//     title="Edit contact info"
//   >
//     <SquarePen size={20} />
//   </button> */}
//     </div>


//       {/* Heading info */}
//       <div className="my-6 px-5 flex flex-col  md:flex-row justify-between gap-1 items-start">
//         <div className="-mt-2">
//           <h2 className="text-2xl sm:text-3xl font-semibold my-1">{formData.name}</h2>
//           <p className="text-sm sm:text-[16px] text-gray-600 font-medium">{formData.headline}</p>
        
//         <div className="flex flex-wrap items-center gap-5 text-gray-500 text-[13px] my-2">
//         {formData.location && (
//           <div className="flex items-center gap-1">
//             <MdLocationOn size={16} className="text-gray-400" />
//             <p>{formData.location}</p>
//           </div>
//         )}

//         {formData.email && (
//           <div className="flex items-center gap-1">
//             <MdEmail size={16} className="text-gray-400" />
//             <p>{formData.email}</p>
//           </div>
//         )}

//         {formData.joined && (
//           <div className="flex items-center gap-1">
//             <FaRegCalendarAlt size={16} className="text-gray-400" />
//             <p>Joined {formData.joined}</p>
//           </div>
//         )}
//       </div>

      
//       <div className="flex justify-between items-center mx-3 my-3">
//         <div className="flex gap-5">
//           <p className="flex flex-col justify-around items-center ">
//             <span className="text-lg font-semibold text-gray-900">{followers}</span>
//             <span className="text-sm text-gray-500">Followers</span>
//           </p>
//           <p className="flex flex-col items-center">
//             <span className="text-lg font-semibold text-gray-900">{connections}</span>
//             <span className="text-sm text-gray-500">Connections</span>
//           </p>
//         </div>

     
//         <div className="flex gap-4 text-gray-800">
//           {formData.linkedin && (
//             <a href={formData.linkedin} target="_blank" rel="noopener noreferrer">
//               <FaLinkedin size={20} className="hover:text-blue-600 transition" />
//             </a>
//           )}
//           {formData.github && (
//             <a href={formData.github} target="_blank" rel="noopener noreferrer">
//               <FaGithub size={20} className="hover:text-black transition" />
//             </a>
//           )}
//           {formData.twitter && (
//             <a href={formData.twitter} target="_blank" rel="noopener noreferrer">
//               <FaTwitter size={20} className="hover:text-sky-500 transition" />
//             </a>
//           )}
//           {formData.website && (
//             <a href={formData.website} target="_blank" rel="noopener noreferrer">
//               <FaGlobe size={20} className="hover:text-blue-600 transition" />
//             </a>
//           )}
//         </div>
//       </div>
          
          
//           <div>

//           </div>

//         </div>

//         {/* Experience */}
//         <div className="gap-6 mt-1 text-left text-sm text-blue-600">
//           {experience.length > 0 &&
//             experience.map((exp, idx) => (
//               <div key={idx} className="flex items-start gap-2">
//                 {exp.logo && (
//                   <Image
//                     src={exp.logo}
//                     alt={`${exp.company} logo`}
//                     width={24}
//                     height={24}
//                     className="inline-block rounded-sm object-contain"
//                   />
//                 )}
//                 <span className="font-medium text-gray-800">{exp.company}</span>
//               </div>
//             ))}
//         </div>
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
// // }

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
  const [avatar, setAvatar] = useState(user.avatar || "/profiledefault.jpg");
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

  // helper SmartImage
  const SmartImage = ({ src, alt, className, ...props }) => {
    const isObjectUrl = src && (src.startsWith("blob:") || src.startsWith("data:"));
    if (isObjectUrl) {
      return <img src={src} alt={alt} className={className} {...props} />;
    }
    return <Image src={src} alt={alt} fill className={className} {...props} />;
  };

  return (
    <div className="bg-transparent  border-gray-200 mt-5   overflow-hidden">
      {/* Cover */}
      <div className="relative overflow-hidden w-full h-32 md:h-56 ">
        <div className="absolute inset-0">
        <div className="bg-transparent w-full h-full border  border-gray-200 rounded-2xl">

        </div>
          {/* <SmartImage src={cover} alt="Cover" className="object-cover w-full h-full" /> */}
        </div>
        {/* <button
          onClick={() => openEditor("cover")}
          className="absolute top-2 flex gap-1 items-center right-2 bg-[#fbfafa] py-1.5 px-2 rounded-sm shadow-md hover:bg-gray-50 hover:cursor-pointer"
        >
          <SquarePen size={16} /> 
        </button> */}
      </div>

      {/* Avatar */}
     <div className="relative flex justify-between p-6 my-">
  {/* Avatar */}
        <div className="fixed z-10 top-[150px] left-8 md:left-16 w-28 h-28 md:w-48 md:h-48 rounded-full shadow-md">
          <div className="relative w-full h-full">
            {/* <SmartImage
              src={avatar}
              alt="Profile"
              className="object-cover z-20 w-full h-full rounded-full "
            /> */}
            <div className="w-full h-full border border-gray-200 rounded-full">

            </div>
            {/* Camera Icon Overlay */}
            
          </div>
        </div>

        <div className="mt-24  flex flex-col  md:flex-row justify-between gap-1 items-start">
        <div className="-mt-2">
          <h2 className="text-2xl sm:text-3xl font-semibold my-1 text-[var(--gray-100)] flex gap-1 items-center">{formData.name} <MdVerified className="text-blue-700" /></h2>
          <p className="text-sm sm:text-[16px] mt-2 text-[#ffffff] font-medium">Python is a versatile, high-level programming language known for simplicity, readability, and vast libraries. It powers web apps, AI, data science, automation, and more.</p>
        
        <div className="flex flex-wrap items-center gap-5 text-[#d9d3d396] text-[13px] my-2">
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

      
      <div className="flex justify-between items-center  mt-5">
        <div className="flex gap-16">
          <Link href='/follower' className="flex flex-col justify-around items-center ">
            <span className="text-[20px]  text-[#a7a2a2f1]">{followers} Followers</span>
            
          </Link>
          <Link href='following' className="flex flex-col items-center">
            <span className="text-[20px]  text-[#a7a2a2f1]">{connections} following</span>
          
          </Link>
        </div>

  
      </div>
          
          
          <div>

          </div>

        </div>

        {/* Experience / College */}
{/* Experience + College (Max 2 like LinkedIn) */}
       <div className="gap-6 mt-1 text-left text-sm text-blue-600">
              {[
                ...(user.experience || []),
                ...(user.college ? (Array.isArray(user.college) ? user.college : [user.college]) : []),
              ]
                .slice(0, 2)
                .map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    {item.logo && (
                      <Image
                        src={item.logo}
                        alt={`${item.company || item.name} logo`}
                        width={24}
                        height={24}
                        className="inline-block rounded-sm object-contain"
                      />
                    )}
                    <span className="font-medium text-gray-800">{item.company || item.name}</span>
                  </div>
                ))}
            </div>

      </div>

  {/* Edit Button */}
  {/* <button
    onClick={() => setInfoModal(true)}
    className="absolute right-5 flex gap-1 bottom-0  p-1 rounded-sm m-1 border border-blue-600 hover:cursor-pointer"
    title="Edit contact info"
  >
    <SquarePen size={20} />
  </button> */}
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
