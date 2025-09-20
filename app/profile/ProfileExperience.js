// "use client";
// import React, { useState } from "react";
// import Button from "../components/Button";
// import FormInput from "../components/FormInput";
// import TextAreaField from "../components/TextAreaField";
// import SelectField from "../components/FormSelect";
// import FormAchievements from "../components/FormAchievements";
// import CheckboxField from "../components/CheckboxField";
// import { CiEdit } from "react-icons/ci";
// import { MdDelete } from "react-icons/md";
// import MonthYearSelect from "../components/MonthYearSelect"; // ✅ reuse component
// import { FaRegEdit } from "react-icons/fa";
// import { MdOutlineAddComment } from "react-icons/md";
// import { AnimatedWrapper } from "../animation/animation";
// import { X } from "lucide-react";

// export default function ExperienceSection() {

//   const [errors, setErrors] = useState({});
//   const [editIndex, setEditIndex] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [imgError, setImgError] = useState(false);


//   const [experiences, setExperiences] = useState([
//     {
//       jobTitle: "Software Engineer",
//       company: "Tech Solutions Pvt Ltd",
//       employmentType: "full-time",
//       logo: '',
//       location: "Bangalore, India",
//       startDate: { month: "Jan", year: "2023" },
//       endDate: { month: "", year: "" },
//       currentlyWorking: true,
//       responsibilities:
//         "Developed and maintained scalable web applications using MERN stack. Improved performance by 30% by optimizing backend APIs.",
//       skills: ["React", "Node.js", "MongoDB", "TypeScript"],
//       salary: "1200000",
//       currency: "INR",
//       period: "yearly",
//     },
//   ]);

//   function initialFormState() {
//     return {
//       jobTitle: "",
//       company: "",
//       logo:'/logo', //optianal
//       employmentType: "",
//       location: "",
//       startDate: { month: "", year: "" },
//       endDate: { month: "", year: "" },
//       currentlyWorking: false,
//       responsibilities: "",
//       skills: [],
//       salary: "",
//       currency: "",
//       period: "",
//     };
//   }

//   const [experience, setExperience] = useState(initialFormState());

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setExperience((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   const handleSkillsChange = (newSkills) => {
//     setExperience((prev) => ({ ...prev, skills: newSkills }));
//   };

//   const handleDateChange = (field, value) => {
//     setExperience((prev) => ({
//       ...prev,
//       [field]: value,
//     }));
//   };

//   const validateForm = () => {
//     let newErrors = {};
//     if (!experience.jobTitle) newErrors.jobTitle = "Job Title is required.";
//     if (!experience.company) newErrors.company = "Company name is required.";
//     if (!experience.employmentType)
//       newErrors.employmentType = "Select employment type.";
//     if (!experience.startDate.month || !experience.startDate.year)
//       newErrors.startDate = "Start date is required.";
//     if (!experience.responsibilities)
//       newErrors.responsibilities = "Job description is required.";
//     if (
//       !experience.currentlyWorking &&
//       (!experience.endDate.month || !experience.endDate.year)
//     ) {
//       newErrors.endDate = "End date is required if not currently working.";
//     }
//     return newErrors;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const validationErrors = validateForm();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       return;
//     }

//     if (editIndex !== null) {
//       // ✅ update existing
//       const updated = [...experiences];
//       updated[editIndex] = experience;
//       setExperiences(updated);
//       setEditIndex(null);
//     } else {
//       // ✅ add new
//       setExperiences((prev) => [...prev, experience]);
//     }

//     console.log("✅ Saved Experience:", experience);
//     setExperience(initialFormState());
//     setErrors({});
//     setFormOpen(false);
//       setIsModalOpen(false);
//   };

//   const handleEdit = (index) => {
//     setExperience(experiences[index]);
//     setEditIndex(index);
//     setFormOpen(true);
//   };

//   const handleDelete = (index) => {
//     const filtered = experiences.filter((_, i) => i !== index);
//     setExperiences(filtered);
//   };

//   return (
//     <div className="p-5 rounded-lg bg-white shadow-md">
//       {/* Heading */}
      

//      <div className="flex justify-between items-center mb-2">
//         <h3 className="text-2xl font-medium font-[jost] my-2">Experience</h3>
//         <Button
//           onClick={() => setIsModalOpen(true)}
//           buttonclass="bg-white text-blue-700 px-3 py-1 flex items-center gap-1 hover:!bg-transparent hover:!text-blue-800"
//         >
//           {experience ? (
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


//       {/* ✅ If no experience */}
//       {
//       !isModalOpen && experiences.length === 0 && (
//         <p className="text-gray-600">
//           Add your experience to showcase your work history and achievements.
//         </p>
//       )}

//       {/* ✅ If have experiences → show list */}
//      {!isModalOpen && experiences.length > 0 && (
//   <div className="relative border-l-2 border-gray-300 ml-2 space-y-8">
//     {experiences.map((exp, idx) => (
//       <div key={idx} className="relative pl-6">
//         {/* Timeline Icon instead of Dot */}
//         <div className="absolute -left-[14px] top-0 w-5 h-5 ms-1 rounded-full bg-gray-200 flex items-center justify-center ">
//           {exp.logo ? (
//             <Image
//               src={exp.logo}
//               alt={exp.company}
//               width={15}
//               height={15}
//               className="rounded-full"
//             />
//           ) : (
//             <span className="text-gray-700 text-center text-sm font-bold">
//               {exp.company?.charAt(0)}
//             </span>
//           )}
//         </div>

//         {/* Content */}
//         <div className="flex justify-between items-start">
//           <div>
//             {/* Logo + Title + Company inline */}
//             <div className="flex items-center gap-2">
//               {exp.logo ? (
//                 <Image
//                   src={exp.logo}
//                   alt={exp.company}
//                   width={50}
//                   height={50}
//                   className="rounded-full w-[50px] h-[50px] object-cover"
//                 />
//               ) : (
//                 <span className=" w-[50px] h-[50px] flex items-center justify-center bg-gray-400 text-white rounded-full text-sm font-bold">
//                   {exp.company?.charAt(0)}
//                 </span>
//               )}
//               <div>
//                 <h4 className="font-semibold text-lg text-gray-800">
//                   {exp.jobTitle}
//                 </h4>
//                 <p className="text-gray-700 text-xs">{exp.company}</p>
//               </div>
//             </div>

//             {/* Date */}
//             <p className="text-sm  text-gray-600 mt-2">
//               {exp.startDate.month} {exp.startDate.year} -{" "}
//               {exp.currentlyWorking
//                 ? "Present"
//                 : `${exp.endDate.month} ${exp.endDate.year}`}
//             </p>

//             {/* Responsibilities */}
//             <p className="mt-1 text-gray-700">{exp.responsibilities}</p>

//             {/* Skills */}
//            {exp.skills?.length > 0 && (
//   <div className="flex flex-wrap gap-2 mt-2">
//     {exp.skills.slice(0, 3).map((skill, i) => (
//       <span
//         key={i}
//         className="px-2   border border-gray-400 text-xs rounded-full"
//       >
//         {skill}
//       </span>
//     ))}

//     {/* More skills indicator */}
//     {exp.skills.length > 3 && (
//       <span className="px-2 py-0.5 bg-gray-200 text-gray-600 border text-sm rounded-full cursor-pointer">
//         +{exp.skills.length - 3} more
//       </span>
//     )}
//   </div>
// )}

//             {/* Salary */}
//             {exp.salary && (
//               <p className="mt-2 text-gray-600 text-sm">
//                 Salary: {exp.currency} {exp.salary} / {exp.period}
//               </p>
//             )}
//           </div>

//           {/* Actions */}
//           <div className="flex gap-2">
//             <Button
//               type="button"
//               onClick={() => handleEdit(idx)}
//               buttonclass="!bg-transparent !text-black text-lg border border-blue-300"
//             >
//               <CiEdit />
//             </Button>
//             <Button
//               type="button"
//               onClick={() => handleDelete(idx)}
//               buttonclass="!bg-transparent !text-red-700 border border-red-300"
//             >
//               <MdDelete />
//             </Button>
//           </div>
//         </div>
//       </div>
//     ))}
//   </div>
// )}


//      {
//   isModalOpen && (
//     <AnimatedWrapper className="fixed inset-0 flex items-center justify-center bg-[#0b0b0b71] z-50">
//       <div className="bg-white m-4 rounded-lg w-full max-w-2xl shadow-lg flex flex-col">
//         {/* Header */}
//         <div className="relative border-b border-gray-300 py-3 px-6 flex justify-between items-center">
//           <h3 className="text-lg font-medium">Edit Experience</h3>
//           <button
//             onClick={() => setIsModalOpen(false)}
//             className="p-2 text-gray-500 hover:text-black hover:cursor-pointer"
//           >
//             <X className="w-5 h-5" />
//           </button>
//         </div>

//         {/* Body with scroll */}
//         <div className="px-6 py-4 overflow-y-auto max-h-[75vh]">
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <h3 className="my-2 text-xl text-black font-medium font-sans">
//               A skill, habit, or personality trait that makes you unique.
//             </h3>

//             <FormInput
//               label="Job Title *"
//               name="jobTitle"
//               value={experience.jobTitle}
//               onChange={handleChange}
//               error={errors.jobTitle}
//             />
//             <FormInput
//               label="Company *"
//               name="company"
//               value={experience.company}
//               onChange={handleChange}
//               error={errors.company}
//             />

//             <SelectField
//               label="Employment Type *"
//               name="employmentType"
//               value={experience.employmentType}
//               onChange={handleChange}
//               error={errors.employmentType}
//               options={[
//                 { value: "", label: "Please Select" },
//                 { value: "full-time", label: "Full-Time" },
//                 { value: "part-time", label: "Part-Time" },
//                 { value: "internship", label: "Internship" },
//                 { value: "contract", label: "Contract" },
//                 { value: "freelance", label: "Freelance" },
//               ]}
//             />

//             <FormInput
//               label="Location"
//               name="location"
//               value={experience.location}
//               onChange={handleChange}
//               placeholder="City, Country (or Remote)"
//             />

//             {/* Start Date */}
//             <MonthYearSelect
//               label="Start Date *"
//               value={experience.startDate}
//               onChange={(val) => handleDateChange("startDate", val)}
//             />
//             {errors.startDate && (
//               <p className="text-red-500 text-sm">{errors.startDate}</p>
//             )}

//             {/* Currently Working */}
//             <CheckboxField
//               label="Currently Working Here"
//               name="currentlyWorking"
//               checked={experience.currentlyWorking}
//               onChange={handleChange}
//             />

//             {/* End Date */}
//             {!experience.currentlyWorking && (
//               <>
//                 <MonthYearSelect
//                   label="End Date *"
//                   value={experience.endDate}
//                   onChange={(val) => handleDateChange("endDate", val)}
//                 />
//                 {errors.endDate && (
//                   <p className="text-red-500 text-sm">{errors.endDate}</p>
//                 )}
//               </>
//             )}

//             <TextAreaField
//               label="Job Description *"
//               name="responsibilities"
//               placeholder="Responsibilities & Achievements..."
//               value={experience.responsibilities}
//               onChange={handleChange}
//               error={errors.responsibilities}
//             />

//             <FormAchievements
//               label="Skills"
//               values={experience.skills}
//               onChange={handleSkillsChange}
//             />

//             <FormInput
//               label="Salary Amount"
//               name="salary"
//               type="number"
//               placeholder="e.g., 60000"
//               value={experience.salary}
//               onChange={handleChange}
//             />

//             <div className="grid grid-cols-2 gap-3">
//               <SelectField
//                 label="Currency"
//                 name="currency"
//                 value={experience.currency}
//                 onChange={handleChange}
//                 options={[
//                   { value: "", label: "Please Select" },
//                   { value: "INR", label: "INR ₹" },
//                   { value: "USD", label: "USD $" },
//                   { value: "EUR", label: "EUR €" },
//                 ]}
//               />
//               <SelectField
//                 label="Period"
//                 name="period"
//                 value={experience.period}
//                 onChange={handleChange}
//                 options={[
//                   { value: "", label: "Please Select" },
//                   { value: "immediate", label: "Immediate Joiner" },
//                   { value: "7_days", label: "7 Days" },
//                   { value: "15_days", label: "15 Days" },
//                   { value: "1_month", label: "1 Month" },
//                   { value: "2_months", label: "2 Months" },
//                   { value: "3_months", label: "3 Months" },
//                   { value: "6_months", label: "6 Months" },
//                 ]}
//               />
//             </div>
//           </form>
//         </div>

//         {/* Footer */}
//         <div className="flex justify-end gap-3 border-t border-gray-200 px-6 py-3">
//           <Button
//             type="button"
//             onClick={() => {
//               setFormOpen(false);
//               setExperience(initialFormState());
//               setEditIndex(null);
//               setIsModalOpen(false);
//             }}
//             buttonclass="bg-gray-300 text-black"
//           >
//             Cancel
//           </Button>
//           <Button type="submit" buttonclass="text-white">
//             {editIndex !== null ? "Update Experience" : "Save Experience"}
//           </Button>
//         </div>
//       </div>
//     </AnimatedWrapper>
//   )
// }

//       {/* ✅ Form */}
     
//     </div>
//   );
// }

"use client";
import React, { useState } from "react";
import Button from "../components/Button";
import FormInput from "../components/FormInput";
import TextAreaField from "../components/TextAreaField";
import SelectField from "../components/FormSelect";
import FormAchievements from "../components/FormAchievements";
import CheckboxField from "../components/CheckboxField";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import MonthYearSelect from "../components/MonthYearSelect"; // ✅ reuse component
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineAddComment } from "react-icons/md";
import { AnimatedWrapper } from "../animation/animation";
import { X } from "lucide-react";
import { Calendar1 } from 'lucide-react';
import { MapPin } from 'lucide-react';

export default function ExperienceSection() {

  const [errors, setErrors] = useState({});
  const [editIndex, setEditIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imgError, setImgError] = useState(false);


  // const [experiences, setExperiences] = useState([
  //   {
  //     jobTitle: "Software Engineer",
  //     company: "Tech Solutions Pvt Ltd",
  //     employmentType: "full-time",
  //     logo: '',
  //     location: "Bangalore, India",
  //     startDate: { month: "Jan", year: "2023" },
  //     endDate: { month: "", year: "" },
  //     currentlyWorking: true,
  //     responsibilities:
  //       "Developed and maintained scalable web applications using MERN stack. Improved performance by 30% by optimizing backend APIs.",
  //     skills: ["React", "Node.js", "MongoDB", "TypeScript"],
  //     salary: "1200000",
  //     currency: "INR",
  //     period: "yearly",
  //   },
  // ]);

   const [experiences, setExperiences] = useState([
    {
      jobTitle: "Senior Software Engineer",
      company: "Tech Solutions Inc.",
      employmentType: "Full-time",
      logo: "",
      location: "San Francisco, CA",
      startDate: { month: "Jan", year: "2022" },
      endDate: { month: "", year: "" },
      currentlyWorking: true,
      responsibilities:
        "Lead development of scalable web applications using React, Node.js, and AWS. Mentored junior developers and improved team productivity by 40%.",
      skills: ["React", "Node.js", "AWS", "Leadership"],
    },
    {
      jobTitle: "Frontend Developer",
      company: "Innovation Labs",
      employmentType: "Full-time",
      logo: "",
      location: "Remote",
      startDate: { month: "Mar", year: "2020" },
      endDate: { month: "Dec", year: "2021" },
      currentlyWorking: false,
      responsibilities:
        "Developed responsive web applications and improved user experience across multiple products. Collaborated with design teams to implement pixel-perfect UIs.",
      skills: ["JavaScript", "TailwindCSS", "UI/UX", "React"],

    },
    {
      jobTitle: "Junior Developer",
      company: "StartupCo",
      employmentType: "Full-time",
      logo: "",
      location: "San Jose, CA",
      startDate: { month: "Jun", year: "2018" },
      endDate: { month: "Feb", year: "2020" },
      currentlyWorking: false,
      responsibilities:
        "Worked on various web development projects, learned modern JavaScript frameworks, and contributed to both frontend and backend development.",
      skills: ["Vue.js", "Node.js", "MongoDB", "Testing"],
    },
    {
      jobTitle: "Intern",
      company: "Tech Academy",
      employmentType: "Internship",
      logo: "",
      location: "Bangalore, India",
      startDate: { month: "Jan", year: "2017" },
      endDate: { month: "May", year: "2017" },
      currentlyWorking: false,
      responsibilities:
        "Assisted in developing small modules and fixing bugs for internal projects.",
      skills: ["HTML", "CSS", "JavaScript"],
    },
  ]);

  const [showAll, setShowAll] = useState(false);


  function initialFormState() {
    return {
      jobTitle: "",
      company: "",
      logo:'/logo', //optianal
      employmentType: "",
      location: "",
      startDate: { month: "", year: "" },
      endDate: { month: "", year: "" },
      currentlyWorking: false,
      responsibilities: "",
      skills: [],
      salary: "",
      currency: "",
      period: "",
    };
  }

  const [experience, setExperience] = useState(initialFormState());

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setExperience((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSkillsChange = (newSkills) => {
    setExperience((prev) => ({ ...prev, skills: newSkills }));
  };

  const handleDateChange = (field, value) => {
    setExperience((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const validateForm = () => {
    let newErrors = {};
    if (!experience.jobTitle) newErrors.jobTitle = "Job Title is required.";
    if (!experience.company) newErrors.company = "Company name is required.";
    if (!experience.employmentType)
      newErrors.employmentType = "Select employment type.";
    if (!experience.startDate.month || !experience.startDate.year)
      newErrors.startDate = "Start date is required.";
    if (!experience.responsibilities)
      newErrors.responsibilities = "Job description is required.";
    if (
      !experience.currentlyWorking &&
      (!experience.endDate.month || !experience.endDate.year)
    ) {
      newErrors.endDate = "End date is required if not currently working.";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    if (editIndex !== null) {
      // ✅ update existing
      const updated = [...experiences];
      updated[editIndex] = experience;
      setExperiences(updated);
      setEditIndex(null);
    } else {
      // ✅ add new
      setExperiences((prev) => [...prev, experience]);
    }

    console.log("✅ Saved Experience:", experience);
    setExperience(initialFormState());
    setErrors({});
    setFormOpen(false);
      setIsModalOpen(false);
  };

  const handleEdit = (index) => {
    setExperience(experiences[index]);
    setEditIndex(index);
    setFormOpen(true);
  };

  const handleDelete = (index) => {
    const filtered = experiences.filter((_, i) => i !== index);
    setExperiences(filtered);
  };

  return (
    <div className="p-5 rounded-lg  shadow-md">
      {/* Heading */}
      

     <div className="flex justify-between items-center mb-2">
        <h3 className="text-2xl font-medium font-[jost] text-white my-2">Experience</h3>
        <Button
          onClick={() => setIsModalOpen(true)}
          buttonclass="bg-white text-blue-700 px-3 py-1 flex items-center gap-1 hover:!bg-transparent hover:!text-blue-800"
        >
          {experience ? (
            <>
              <FaRegEdit className="w-6 h-6" /> Edit
            </>
          ) : (
            <>
              <MdOutlineAddComment className="w-6 h-6" /> Add
            </>
          )}
        </Button>
      </div>


      {/* ✅ If no experience */}
      {
      !isModalOpen && experiences.length === 0 && (
        <p className="text-gray-600">
          Add your experience to showcase your work history and achievements.
        </p>
      )}

      {/* ✅ If have experiences → show list */}
     {!isModalOpen && experiences.length > 0 && (
      <div>
         <div className="relative border-l-2 border-gray-300 ml-2 space-y-8">
        {(showAll ? experiences : experiences.slice(0, 3)).map((exp, idx) => (
          <div key={idx} className="relative pl-6">
            {/* Timeline dot */}
            <div className="absolute -left-[30px]   ms-1 rounded-2xl flex items-center justify-center ">
              {exp.logo ? (
                <Image
                  src={exp.logo}
                  alt={exp.company}
                  width={50}
                  height={50}
                  className="rounded-2xl w-[50px] h-[50px] object-cover"
                />
              ) : (
                <span className=" w-[50px] h-[50px] flex items-center justify-center bg-[#077bda] text-white rounded-2xl text-sm font-bold">
                  {exp.company?.charAt(0)}
                </span>
              )}
            </div>

            {/* Content */}
            <div className="flex justify-between gap-10 items-start">
              <div className="ms-6">
                  <h4 className="font-semibold text-lg text-white">
                  {exp.jobTitle}
                </h4>
                <p className="text-gray-200 text-xs">{exp.company}</p>
                {/* Date + Location */}
                
                <p className="text-sm mt-2 flex items-center">
                  <span className="border rounded-2xl border-gray-100 text-[10px] me-3  py-0.5 px-1 text-white">{exp.employmentType}</span>
                  <span className="text-gray-100 text-[12px] flex gap-2 items-center"><Calendar1 className="w-5 h-5"/> {exp.startDate.month} {exp.startDate.year} -{" "}
                  {exp.currentlyWorking
                    ? "Present"
                    : `${exp.endDate.month} ${exp.endDate.year}`}{" "}</span>
                  
                 <span className="flex mx-1 gap-1 text-gray-100 text-[12px]"> <MapPin className="w-5 h-5" /> {exp.location}</span>
                </p>

                {/* Responsibilities */}
                <p className=" text-white my-2 text-sm">{exp.responsibilities}</p>

                {/* Skills */}
                {exp.skills?.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {exp.skills.slice(0, 3).map((skill, i) => (
                      <span
                        key={i}
                        className="px-2 border border-gray-400 pt-1 text-white  text-[10px] rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                    {exp.skills.length > 3 && (
                      <span className="px-2 py-0.5 bg-gray-100 text-gray-700 border text-sm rounded-full cursor-pointer">
                        +{exp.skills.length - 3} more
                      </span>
                    )}
                  </div>
                )}

                {/* key */}
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(idx)}
                  className="p-1 border rounded-lg border-blue-300 text-black hover:bg-blue-100"
                >
                  <CiEdit />
                </button>
                <button
                  onClick={() => handleDelete(idx)}
                  className="p-1 border rounded-lg border-red-300 text-red-700 hover:bg-red-100"
                >
                  <MdDelete />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View More / Less */}
      {experiences.length > 3 && (
        <div className="text-center mt-4">
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-blue-600 font-semibold hover:underline"
          >
            {showAll ? "Show less" : `Show all ${experiences.length} experiences`}
          </button>
        </div>
      )}
      </div>
 
)}


     {
  isModalOpen && (
    <AnimatedWrapper className="fixed inset-0 flex items-center justify-center bg-[#0b0b0b71] z-50">
      <div className="bg-white m-4 rounded-lg w-full max-w-2xl shadow-lg flex flex-col">
        {/* Header */}
        <div className="relative border-b border-gray-300 py-3 px-6 flex justify-between items-center">
          <h3 className="text-lg font-medium">Edit Experience</h3>
          <button
            onClick={() => setIsModalOpen(false)}
            className="p-2 text-gray-500 hover:text-black hover:cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body with scroll */}
        <div className="px-6 py-4 overflow-y-auto max-h-[75vh]">
          <form onSubmit={handleSubmit} className="space-y-4">
            <h3 className="my-2 text-xl text-black font-medium font-sans">
              A skill, habit, or personality trait that makes you unique.
            </h3>

            <FormInput
              label="Job Title *"
              name="jobTitle"
              value={experience.jobTitle}
              onChange={handleChange}
              error={errors.jobTitle}
            />
            <FormInput
              label="Company *"
              name="company"
              value={experience.company}
              onChange={handleChange}
              error={errors.company}
            />

            <SelectField
              label="Employment Type *"
              name="employmentType"
              value={experience.employmentType}
              onChange={handleChange}
              error={errors.employmentType}
              options={[
                { value: "", label: "Please Select" },
                { value: "full-time", label: "Full-Time" },
                { value: "part-time", label: "Part-Time" },
                { value: "internship", label: "Internship" },
                { value: "contract", label: "Contract" },
                { value: "freelance", label: "Freelance" },
              ]}
            />

            <FormInput
              label="Location"
              name="location"
              value={experience.location}
              onChange={handleChange}
              placeholder="City, Country (or Remote)"
            />

            {/* Start Date */}
            <MonthYearSelect
              label="Start Date *"
              value={experience.startDate}
              onChange={(val) => handleDateChange("startDate", val)}
            />
            {errors.startDate && (
              <p className="text-red-500 text-sm">{errors.startDate}</p>
            )}

            {/* Currently Working */}
            <CheckboxField
              label="Currently Working Here"
              name="currentlyWorking"
              checked={experience.currentlyWorking}
              onChange={handleChange}
            />

            {/* End Date */}
            {!experience.currentlyWorking && (
              <>
                <MonthYearSelect
                  label="End Date *"
                  value={experience.endDate}
                  onChange={(val) => handleDateChange("endDate", val)}
                />
                {errors.endDate && (
                  <p className="text-red-500 text-sm">{errors.endDate}</p>
                )}
              </>
            )}

            <TextAreaField
              label="Job Description *"
              name="responsibilities"
              placeholder="Responsibilities & Achievements..."
              value={experience.responsibilities}
              onChange={handleChange}
              error={errors.responsibilities}
            />

            <FormAchievements
              label="Skills"
              values={experience.skills}
              onChange={handleSkillsChange}
            />

            <FormInput
              label="Salary Amount"
              name="salary"
              type="number"
              placeholder="e.g., 60000"
              value={experience.salary}
              onChange={handleChange}
            />

            <div className="grid grid-cols-2 gap-3">
              <SelectField
                label="Currency"
                name="currency"
                value={experience.currency}
                onChange={handleChange}
                options={[
                  { value: "", label: "Please Select" },
                  { value: "INR", label: "INR ₹" },
                  { value: "USD", label: "USD $" },
                  { value: "EUR", label: "EUR €" },
                ]}
              />
              <SelectField
                label="Period"
                name="period"
                value={experience.period}
                onChange={handleChange}
                options={[
                  { value: "", label: "Please Select" },
                  { value: "immediate", label: "Immediate Joiner" },
                  { value: "7_days", label: "7 Days" },
                  { value: "15_days", label: "15 Days" },
                  { value: "1_month", label: "1 Month" },
                  { value: "2_months", label: "2 Months" },
                  { value: "3_months", label: "3 Months" },
                  { value: "6_months", label: "6 Months" },
                ]}
              />
            </div>
          </form>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 border-t border-gray-200 px-6 py-3">
          <Button
            type="button"
            onClick={() => {
              setFormOpen(false);
              setExperience(initialFormState());
              setEditIndex(null);
              setIsModalOpen(false);
            }}
            buttonclass="bg-gray-300 text-black"
          >
            Cancel
          </Button>
          <Button type="submit" buttonclass="text-white">
            {editIndex !== null ? "Update Experience" : "Save Experience"}
          </Button>
        </div>
      </div>
    </AnimatedWrapper>
  )
}

      {/* ✅ Form */}
     
    </div>
  );
}

