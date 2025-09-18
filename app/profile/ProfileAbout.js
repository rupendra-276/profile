
// "use client";
// import React, { useState } from "react";
// import { FaRegEdit } from "react-icons/fa";
// import { MdOutlineAddComment } from "react-icons/md";
// import { IoDiamondOutline } from "react-icons/io5";
// import { GoDotFill } from "react-icons/go";
// import { X } from "lucide-react";
// import Button from "../components/Button";
// import TextAreaField from "../components/TextAreaField";
// import { AnimatedWrapper } from "../animation/animation";

// export default function AboutSection() {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [about, setAbout] = useState("");
//   const [skills, setSkills] = useState([]);
//   const [newSkill, setNewSkill] = useState("");
//   const [errors, setErrors] = useState({});
//   const [showSkillInput, setShowSkillInput] = useState(false);

//   // ✅ Validation
//   const validateForm = () => {
//     let newErrors = {};
//     if (!about.trim()) newErrors.about = "About section cannot be empty.";
//     return newErrors;
//   };

//   // ✅ Submit
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const validationErrors = validateForm();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       return;
//     }
//     console.log("✅ Saved Data:", { about, skills });
//     setErrors({});
//     setIsModalOpen(false);
//   };

//   // ✅ Add Skill (with validation)
//   const addSkill = () => {
//     if (!newSkill.trim()) return;
//     if (skills.includes(newSkill.trim())) {
//       alert("Skill already added!");
//       return;
//     }
//     if (skills.length >= 5) {
//       alert("You can add only up to 5 skills.");
//       return;
//     }
//     setSkills([...skills, newSkill.trim()]);
//     setNewSkill("");
//   };

//   // ✅ Enter key handling for skill input
//   const handleSkillKeyDown = (e) => {
//     if (e.key === "Enter") {
//       e.preventDefault();
//       addSkill();
//     }
//   };

//   // ✅ Remove Skill
//   const removeSkill = (skill) => {
//     setSkills(skills.filter((s) => s !== skill));
//   };

//   return (
//     <div className="p-6 mb-4 bg-[#ffffffda] border border-gray-200 rounded-xs custom-shadow transition-all">
//       {/* Header */}
//       <div className="flex justify-between items-center">
//         <h3 className="text-xl font-medium font-[jost]">About</h3>
//         <Button
//           onClick={() => setIsModalOpen(true)}
//           buttonclass="bg-white text-blue-600 px-3 text-sm py-1 flex items-center gap-1 hover:!bg-transparent hover:!text-blue-800"
//         >
//           {about ? (
//             <>
//               <FaRegEdit className="w-5 h-5 " /> Edit
//             </>
//           ) : (
//             <>
//               <MdOutlineAddComment className="w-6 h-6" /> Add
//             </>
//           )}
//         </Button>
//       </div>

//       {/* About Text */}
//       {about ? (
//         <div className="mt-4 text-gray-800 text-sm whitespace-pre-line">
//           {about}
//         </div>
//       ) : (
//         <p className="mt-4 text-gray-500">
//           Add a short introduction about yourself, your skills, and career goals.
//         </p>
//       )}

     
//       {/* ✅ Modal */}
//       {isModalOpen && (
//         <AnimatedWrapper className="fixed  inset-0 flex items-center justify-center bg-[#0b0b0b71] z-50">
//           <div className="bg-white m-3 rounded-sm w-full max-w-2xl">
//             {/* Header */}
//             <div className="relative border-b border-gray-300 py-3 px-6">
//               <h3 className="text-lg font-medium">Edit About & Skills</h3>
//               <button
//                 onClick={() => setIsModalOpen(false)}
//                 className="absolute top-3 right-3 p-2 text-gray-500 hover:text-black hover:cursor-pointer"
//               >
//                 <X className="w-5 h-5" />
//               </button>
//             </div>

//             <form onSubmit={handleSubmit} className=" p-4">
//               <h3 className="my-2 text-xl text-black font-semibold font-[inter]">A skill, habit, or personality trait that makes you unique.</h3>
//   {/* About */}
//   <TextAreaField
//     label="About You"
//     placeholder="Write about your experience, skills, and aspirations..."
//     value={about}
//     onChange={(e) => setAbout(e.target.value)}
//     error={errors.about}
//     rows={6}
//   />

 
//   {/* Buttons */}
//   <div className="flex gap-3 justify-end ">
//     <Button
//       type="button"
//       onClick={() => setIsModalOpen(false)}
//       buttonclass="bg-gray-300 text-black hover:bg-gray-400"
//     >
//       Cancel
//     </Button>
//     <Button
//       type="submit"
//       buttonclass="!bg-blue-700 text-white hover:bg-blue-800"
//     >
//       Save
//     </Button>
//   </div>
// </form>

//           </div>
//         </AnimatedWrapper>
//       )}
//     </div>
//   );
// }



"use client";
import React, { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineAddComment } from "react-icons/md";
import { IoDiamondOutline } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { X } from "lucide-react";
import Button from "../components/Button";
import TextAreaField from "../components/TextAreaField";
import { AnimatedWrapper } from "../animation/animation";

export default function AboutSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [about, setAbout] = useState("");
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState("");
  const [errors, setErrors] = useState({});
  const [showSkillInput, setShowSkillInput] = useState(false);

  // ✅ Validation
  const validateForm = () => {
    let newErrors = {};
    if (!about.trim()) newErrors.about = "About section cannot be empty.";
    return newErrors;
  };

  // ✅ Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    console.log("✅ Saved Data:", { about, skills });
    setErrors({});
    setIsModalOpen(false);
  };

  // ✅ Add Skill (with validation)
  const addSkill = () => {
    if (!newSkill.trim()) return;
    if (skills.includes(newSkill.trim())) {
      alert("Skill already added!");
      return;
    }
    if (skills.length >= 5) {
      alert("You can add only up to 5 skills.");
      return;
    }
    setSkills([...skills, newSkill.trim()]);
    setNewSkill("");
  };

  // ✅ Enter key handling for skill input
  const handleSkillKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addSkill();
    }
  };

  // ✅ Remove Skill
  const removeSkill = (skill) => {
    setSkills(skills.filter((s) => s !== skill));
  };

  return (
    <div className="px-4 mt-4 rounded-xs transition-all">
      {/* Header */}
      <div className="flex justify-between items-start">
        <h3 className="text-2xl font-sens font-medium font-[jost] text-[var(--gray-100)]">About</h3>
        <button
          onClick={() => setIsModalOpen(true)}
          className="border border-white rounded-2xl text-white  px-3 text-sm py-1 flex items-center gap-1 "
        >
          {about ? (
            <>
              <FaRegEdit className="w-5 h-5 " /> Edit
            </>
          ) : (
            <>
              <MdOutlineAddComment className="w-6 h-6" /> Add
            </>
          )}
        </button>
      </div>

      {/* About Text */}
      {about ? (
        <div className="mt-4 text-[var(--white)] text-sm whitespace-pre-line">
          {about}
        </div>
      ) : (
        <p className="mt-4 text-[var(--white)]">
          Add a short introduction about yourself, your skills, and career goals.
        </p>
      )}

     
      {/* ✅ Modal */}
      {isModalOpen && (
        <AnimatedWrapper className="fixed  inset-0 flex  items-center justify-center bg-[#0b0b0beb] z-50">
          <div className=" m-3 bg-[#01030b] border border-gray-100/50 rounded-sm w-full max-w-2xl">
            {/* Header */}
            <div className="relative border-b border-gray-300 py-3 px-6">
              <h3 className="text-lg font-medium text-[var(--white)]" >Edit About & Skills</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-3 right-3 p-2 text-gray-500 hover:cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className=" p-4">
              <h3 className="my-2 text-xl text-[var(--white)] font-semibold font-[inter]">A skill, habit, or personality trait that makes you unique.</h3>
  {/* About */}
      <TextAreaField
        label="About You"
        placeholder="Write about your experience, skills, and aspirations..."
        value={about}
        onChange={(e) => setAbout(e.target.value)}
        error={errors.about}
        rows={6}
      />

 
  {/* Buttons */}
  <div className="flex gap-3 justify-end ">
    <Button
      type="button"
      onClick={() => setIsModalOpen(false)}
      buttonclass="bg-gray-300 text-black hover:bg-gray-400"
    >
      Cancel
    </Button>
    <Button
      type="submit"
      buttonclass="!bg-blue-700 text-white hover:bg-blue-800"
    >
      Save
    </Button>
  </div>
</form>

          </div>
        </AnimatedWrapper>
      )}
    </div>
  );
}






















// "use client";
// import React, { useState } from "react";
// import { FaRegEdit } from "react-icons/fa";
// import { MdOutlineAddComment } from "react-icons/md";
// import { IoDiamondOutline } from "react-icons/io5";
// import { GoDotFill } from "react-icons/go";
// import { X } from "lucide-react";
// import Button from "../components/Button";
// import TextAreaField from "../components/TextAreaField";
// import { AnimatedWrapper } from "../animation/animation";

// export default function AboutSection() {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [about, setAbout] = useState("");
//   const [skills, setSkills] = useState([]);
//   const [newSkill, setNewSkill] = useState("");
//   const [errors, setErrors] = useState({});
//   const [showSkillInput, setShowSkillInput] = useState(false);

//   // ✅ Validation
//   const validateForm = () => {
//     let newErrors = {};
//     if (!about.trim()) newErrors.about = "About section cannot be empty.";
//     return newErrors;
//   };

//   // ✅ Submit
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const validationErrors = validateForm();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       return;
//     }
//     console.log("✅ Saved Data:", { about, skills });
//     setErrors({});
//     setIsModalOpen(false);
//   };

//   // ✅ Add Skill (with validation)
//   const addSkill = () => {
//     if (!newSkill.trim()) return;
//     if (skills.includes(newSkill.trim())) {
//       alert("Skill already added!");
//       return;
//     }
//     if (skills.length >= 5) {
//       alert("You can add only up to 5 skills.");
//       return;
//     }
//     setSkills([...skills, newSkill.trim()]);
//     setNewSkill("");
//   };


//   return (
//     <div className="p-6 mb-4 border border-gray-400 rounded-sm transition-all">
//       {/* Header */}
//       <div className="flex justify-between items-center">
//         <h3 className="text-xl font-medium font-[jost]">About</h3>
//         <Button
//           onClick={() => setIsModalOpen(true)}
//           buttonclass="bg-white text-blue-700 px-3 py-1 flex items-center gap-1 hover:!bg-transparent hover:!text-blue-800"
//         >
//           {about ? (
//             <>
//               <FaRegEdit className="w-6 h-6" /> Edit
//             </>
//           ) : (
//             <>
//               <MdOutlineAddComment className="w-6 h-6" /> Add
//             </>
//           )}
//         </Button>
//       </div>

//       {/* About Text */}
//       {about ? (
//         <div className="mt-4 text-gray-800  whitespace-pre-line">
//           {about}
//         </div>
//       ) : (
//         <p className="mt-4 text-gray-500">
//           Add a short introduction about yourself, your skills, and career goals.
//         </p>
//       )}

   
//       {/* ✅ Modal */}
//       {isModalOpen && (
//         <AnimatedWrapper className="fixed  inset-0 flex items-center justify-center bg-[#0b0b0b71] z-50">
//           <div className="bg-white m-3 rounded-sm w-full max-w-2xl">
//             {/* Header */}
//             <div className="relative border-b border-gray-300 py-3 px-6">
//               <h3 className="text-lg font-medium">Edit About & Skills</h3>
//               <button
//                 onClick={() => setIsModalOpen(false)}
//                 className="absolute top-3 right-3 p-2 text-gray-500 hover:text-black hover:cursor-pointer"
//               >
//                 <X className="w-5 h-5" />
//               </button>
//             </div>

//             <form onSubmit={handleSubmit} className=" p-4">
//               <h3 className="my-2 text-xl text-black font-semibold font-[inter]">A skill, habit, or personality trait that makes you unique.</h3>
//   {/* About */}
//   <TextAreaField
//     label="About You"
//     placeholder="Write about your experience, skills, and aspirations..."
//     value={about}
//     onChange={(e) => setAbout(e.target.value)}
//     error={errors.about}
//     rows={6}
//   />


//   {/* Buttons */}
//   <div className="flex gap-3 justify-end ">
//     <Button
//       type="button"
//       onClick={() => setIsModalOpen(false)}
//       buttonclass="bg-gray-300 text-black hover:bg-gray-400"
//     >
//       Cancel
//     </Button>
//     <Button
//       type="submit"
//       buttonclass="!bg-blue-700 text-white hover:bg-blue-800"
//     >
//       Save
//     </Button>
//   </div>
// </form>

//           </div>
//         </AnimatedWrapper>
//       )}
//     </div>
//   );
// }
