// import Image from "next/image";
// import Link from "next/link";
// import Button from "../components/Button";
// import { FaUserPlus, FaRegCommentDots } from "react-icons/fa";

// const people = [
//   {
//     name: "Priya Sharma",
//     role: "React Developer",
//     type: "Job Seeker",
//     connections: 12,
//     image: "/profile.jpg",
//     mutualConnections: [
//       { name: "Rahul", image: "/avatars/rahul.png" },
//       { name: "Simran", image: "/avatars/simran.png" },
//       { name: "Vikas", image: "/avatars/vikas.png" },
//     ],
//   },
//   {
//     name: "Amit Singh",
//     role: "Senior Backend Developer",
//     type: "Recruiter",
//     connections: 8,
//     image: "/profile1.jpg",
//     mutualConnections: [
//       { name: "Rahul", image: "/avatars/rahul.png" },
//       { name: "Simran", image: "/avatars/simran.png" },
//       { name: "Vikas", image: "/avatars/vikas.png" },
//       { name: "Simran", image: "/avatars/simran.png" },
//       { name: "Vikas", image: "/avatars/vikas.png" },
//     ],
//   },
//   {
//     name: "Neha Gupta",
//     role: "UI/UX Designer",
//     type: "Student",
//     connections: 5,
//     image: "/profile.jpg",
//     mutualConnections: [
//       { name: "Rahul", image: "/avatars/rahul.png" },
//       { name: "Simran", image: "/avatars/simran.png" },
//       { name: "Vikas", image: "/avatars/vikas.png" },
//       { name: "Simran", image: "/avatars/simran.png" },
//       { name: "Vikas", image: "/avatars/vikas.png" },
//       { name: "Simran", image: "/avatars/simran.png" },
//       { name: "Vikas", image: "/avatars/vikas.png" },
//     ],
//   },
// ];

// export default function PeopleYouMayKnow() {
//   return (
//     <div className="p-3 shadow-md rounded-lg font-[inter] bg-white">
//       {/* Header */}
//       <div className="flex justify-between my-2">
//         <h2 className="text-gray-900 font-semibold text-lg">Profile Analytics</h2>
//         <Link
//           href="/#"
//           className="text-blue-700 font-medium hover:underline transition-underline duration-75"
//         >
//           View All
//         </Link>
//       </div>

//       {/* People List */}
//       <div className="space-y-5">
//         {people.slice(0, 3).map((person, idx) => (
//           <div key={idx}>
//             {/* Profile Info */}
//             <div className="flex items-center gap-3">
//               {person.image ? (
//                 <Image
//                   src={person.image}
//                   alt={person.name}
//                   width={60}
//                   height={60}
//                   className="rounded-full w-[60px] h-[60px] object-cover border"
//                 />
//               ) : (
//                 <div className="w-[60px] h-[60px] flex items-center justify-center bg-gray-200 text-gray-600 font-semibold rounded-full">
//                   {person.name.charAt(0)}
//                 </div>
//               )}

//               <div>
//                 <h4 className="font-semibold">{person.name}</h4>
//                 <p className="text-sm text-gray-500">{person.role}</p>
//                 <p className="text-xs text-gray-400">{person.type}</p>

//                 {/* Mutual Connections */}
//                 <div className="flex items-center gap-2 mt-1">
//                   <div className="flex -space-x-2">
//                     {person.mutualConnections.slice(0, 3).map((conn, i) => (
//                       <Image
//                         key={i}
//                         src={conn.image}
//                         alt={conn.name}
//                         width={24}
//                         height={24}
//                         className="w-6 h-6 rounded-full border-2 border-white object-cover"
//                       />
//                     ))}
//                     {person.mutualConnections.length > 3 && (
//                       <div className="w-6 h-6 flex items-center justify-center bg-gray-300 rounded-full text-xs text-gray-700 border-2 border-white">
//                         +{person.mutualConnections.length - 3}
//                       </div>
//                     )}
//                   </div>
//                   <p className="text-xs text-gray-400">
//                     {person.mutualConnections.length} mutual connections
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Action Buttons */}
//             <div className="flex gap-3 mt-2">
//               <Button
//                 icon={FaUserPlus}
//                 showIcon
//                 buttonclass="bg-blue-600 text-white hover:bg-blue-700"
//               >
//                 Connect
//               </Button>

//               <Button
//                 icon={FaRegCommentDots}
//                 showIcon
//                 buttonclass=" text-black  bg-white border-2 border-blue-300 hover:!bg-blue-600 hover:!text-white"
//               >
//                 Message
//               </Button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



import Image from "next/image";
import Link from "next/link";
import Button from "../components/Button";
import { FaUserPlus, FaRegCommentDots } from "react-icons/fa";
import { useState } from "react";

const people = [
  {
    name: "Priya Sharma",
    role: "React Developer",
    type: "Job Seeker",
    connections: 12,
    image: "/profile.jpg",
    mutualConnections: [
      { name: "Rahul", image: "/avatars/rahul.png" },
      { name: "Simran", image: "/avatars/simran.png" },
      { name: "Vikas", image: "/avatars/vikas.png" },
    ],
  },
  {
    name: "Amit Singh",
    role: "Senior Backend Developer",
    type: "Recruiter",
    connections: 8,
    image: "/profile1.jpg",
    mutualConnections: [
      { name: "Rahul", image: "/avatars/rahul.png" },
      { name: "Simran", image: "/avatars/simran.png" },
      { name: "Vikas", image: "/avatars/vikas.png" },
      { name: "Simran", image: "/avatars/simran.png" },
      { name: "Vikas", image: "/avatars/vikas.png" },
    ],
  },
  {
    name: "Neha Gupta",
    role: "UI/UX Designer",
    type: "Student",
    connections: 5,
    image: "", // ❌ intentionally blank
    mutualConnections: [
      { name: "Rahul", image: "/avatars/rahul.png" },
      { name: "Simran", image: "/avatars/simran.png" },
      { name: "Vikas", image: "/avatars/vikas.png" },
    ],
  },
];

// ✅ Small helper component for Profile Avatar
function ProfileAvatar({ name, image }) {
  const [imgError, setImgError] = useState(false);

  if (!image || imgError) {
    return (
      <div className="w-[60px] h-[60px] flex items-center justify-center bg-gray-200 text-gray-600 font-semibold rounded-full">
        {name.charAt(0)}
      </div>
    );
  }

  return (
    <Image
      src={image}
      alt={name}
      width={60}
      height={60}
      className="rounded-full w-[60px] h-[60px] object-cover border"
      onError={() => setImgError(true)} // ✅ fallback trigger
    />
  );
}

export default function PeopleYouMayKnow() {
  return (
    <div className="p-5 border rounded-[30px]  border-gray-200 pr-2 ">
      {/* Header */}
      <div className="flex justify-between my-2">
        <h2 className="text-white font-semibold text-lg">Profile Analytics</h2>
        <Link
          href="/#"
          className="text-blue-700 font-medium hover:underline transition-underline duration-75"
        >
          View All
        </Link>
      </div>
      {/* People List */}
      <div className="space-y-5">
        {people.slice(0, 3).map((person, idx) => (
          <div key={idx}>
            {/* Profile Info */}
            <div className="flex items-center gap-3">
              <ProfileAvatar name={person.name} image={person.image} />

              <div>
                <h4 className="font-semibold text-white">{person.name}</h4>
                <p className="text-sm text-gray-100">{person.role}</p>
                {/* <p className="text-xs text-gray-300">{person.type}</p> */}

                {/* Mutual Connections */}
                <div className="flex items-center gap-2 mt-2">
                  <div className="flex -space-x-2">
                    {person.mutualConnections.slice(0, 3).map((conn, i) => (
                      <Image
                        key={i}
                        src={conn.image}
                        alt={conn.name}
                        width={24}
                        height={24}
                        className="w-6 h-6 rounded-full border-2 border-white object-cover"
                      />
                    ))}
                    {person.mutualConnections.length > 3 && (
                      <div className="w-6 h-6 flex items-center justify-center bg-gray-300 rounded-full text-xs text-gray-300 border-2 border-white">
                        +{person.mutualConnections.length - 3}
                      </div>
                    )}
                  </div>
                  <p className="text-xs text-gray-200">
                    {person.mutualConnections.length} mutual connections
                  </p>
                </div>
              </div>
            </div>

          <Button
                icon={FaUserPlus}
                showIcon
                buttonclass=" !w-full !justify-center  mt-4 text-white  "
              >
                Connect
              </Button>

            {/* Action Buttons */}
            {/* <div className="flex gap-3 mt-2">
              <Button
                icon={FaUserPlus}
                showIcon
                buttonclass="bg-blue-600 text-white hover:bg-blue-700"
              >
                Connect
              </Button>

              <Button
                icon={FaRegCommentDots}
                showIcon
                buttonclass=" text-black  bg-white border-2 border-blue-300 hover:!bg-blue-600 hover:!text-white"
              >
                Message
              </Button>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
}

