// "use client";
// import React, { useState } from "react";
// import Button from "../components/Button";
// import FormInput from "../components/FormInput";
// import TextAreaField from "../components/TextAreaField";
// import CheckboxField from "../components/CheckboxField";
// import MonthYearSelect from "../components/MonthYearSelect";
// import SelectField from "../components/FormSelect"; // ✅ dropdown use
// import { CiEdit } from "react-icons/ci";
// import { MdDelete } from "react-icons/md";

// // ✅ Education Levels Dropdown
// const educationLevels = [
//   { value: "10", label: "10th / Secondary School" },
//   { value: "12", label: "12th / Higher Secondary" },
//   { value: "diploma", label: "Diploma" },
//   { value: "ug", label: "Undergraduate (Bachelor’s)" },
//   { value: "pg", label: "Postgraduate (Master’s)" },
//   { value: "phd", label: "Doctorate / PhD" },
//   { value: "other", label: "Other" },
// ];

// // ✅ Degree Dropdown (based on level usually)
// const degreeOptions = [
//   { value: "ssc", label: "SSC / 10th" },
//   { value: "hsc", label: "HSC / 12th" },
//   { value: "ba", label: "BA" },
//   { value: "bsc", label: "BSc" },
//   { value: "bcom", label: "BCom" },
//   { value: "btech", label: "B.Tech / BE" },
//   { value: "mba", label: "MBA" },
//   { value: "mtech", label: "M.Tech" },
//   { value: "msc", label: "MSc" },
//   { value: "phd", label: "PhD" },
//   { value: "other", label: "Other" },
// ];

// export default function EducationSection() {
//   const [formOpen, setFormOpen] = useState(false);
//   const [errors, setErrors] = useState({});
//   const [editIndex, setEditIndex] = useState(null);
//   const [educations, setEducations] = useState([]);

//   const initialFormState = () => ({
//     institution: "",
//     university: "",
//     educationLevel: "",
//     degree: "",
//     fieldOfStudy: "",
//     specialization: "",
//     location: "",
//     startDate: { month: "", year: "" },
//     endDate: { month: "", year: "" },
//     currentlyStudying: false,
//     grade: "",
//     achievements: "",
//   });

//   const [education, setEducation] = useState(initialFormState());

//   // ✅ Input change (text/checkbox)
//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setEducation((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   // ✅ MonthYear change
//   const handleDateChange = (field, { type, value }) => {
//     setEducation((prev) => ({
//       ...prev,
//       [field]: { ...prev[field], [type]: value },
//     }));
//   };

//   // ✅ Validation
//   const validateForm = () => {
//     let newErrors = {};
//     if (!education.institution) newErrors.institution = "Institution name is required.";
//     if (!education.educationLevel) newErrors.educationLevel = "Education level is required.";
//     if (!education.degree) newErrors.degree = "Degree/Course is required.";
//     if (!education.fieldOfStudy) newErrors.fieldOfStudy = "Field of study is required.";

//     if (!education.startDate.month || !education.startDate.year) {
//       newErrors.startDate = "Start Month & Year required.";
//     }

//     if (!education.currentlyStudying) {
//       if (!education.endDate.month || !education.endDate.year) {
//         newErrors.endDate = "End Month & Year required.";
//       } else {
//         const start = parseInt(education.startDate.year) * 12 + parseInt(education.startDate.month);
//         const end = parseInt(education.endDate.year) * 12 + parseInt(education.endDate.month);
//         if (end < start) newErrors.endDate = "End date must be after Start date.";
//       }
//     }
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

//     if (editIndex !== null) {
//       const updated = [...educations];
//       updated[editIndex] = education;
//       setEducations(updated);
//       setEditIndex(null);
//     } else {
//       setEducations((prev) => [...prev, education]);
//     }

//     setEducation(initialFormState());
//     setErrors({});
//     setFormOpen(false);
//   };

//   // ✅ Edit
//   const handleEdit = (index) => {
//     setEducation(educations[index]);
//     setEditIndex(index);
//     setFormOpen(true);
//   };

//   // ✅ Delete
//   const handleDelete = (index) => {
//     setEducations((prev) => prev.filter((_, i) => i !== index));
//   };

//   return (
//     <div className="p-5 rounded-lg bg-white shadow-md">
//       {/* Heading */}
//       <div className="flex justify-between items-center mb-4">
//         <h3 className="text-lg font-semibold">Education</h3>
//         {!formOpen && (
//           <Button
//             onClick={() => {
//               setEducation(initialFormState());
//               setEditIndex(null);
//               setFormOpen(true);
//             }}
//             buttonclass="bg-white text-black border border-gray-500"
//           >
//             + Add Education
//           </Button>
//         )}
//       </div>

//       {/* ✅ If no education */}
//       {!formOpen && educations.length === 0 && (
//         <p className="text-gray-600 italic">
//           Add your education details to showcase your academic background.
//         </p>
//       )}

//       {/* ✅ Education List */}
//       {!formOpen && educations.length > 0 && (
//         <div className="space-y-4">
//           {educations.map((edu, idx) => (
//             <div key={idx} className="p-4 rounded-lg border border-gray-600 shadow-sm">
//               <div className="flex justify-between items-start">
//                 <div>
//                   <h4 className="font-semibold text-lg text-gray-800">
//                     {edu.degree} in {edu.fieldOfStudy}
//                   </h4>
//                   <p className="text-sm text-gray-600">
//                     {edu.institution} {edu.university && `, ${edu.university}`} - {edu.location}
//                   </p>
//                   <p className="text-sm text-gray-600">
//                     {edu.startDate.month}/{edu.startDate.year} -{" "}
//                     {edu.currentlyStudying
//                       ? "Present"
//                       : `${edu.endDate.month}/${edu.endDate.year}`}
//                   </p>
//                   {edu.specialization && (
//                     <p className="text-sm text-gray-600">Specialization: {edu.specialization}</p>
//                   )}
//                   {edu.grade && <p className="text-sm text-gray-600">Grade: {edu.grade}</p>}
//                   {edu.achievements && (
//                     <p className="mt-2 text-gray-700">Achievements: {edu.achievements}</p>
//                   )}
//                 </div>

//                 {/* Edit/Delete */}
//                 <div className="flex gap-2">
//                   <Button
//                     type="button"
//                     onClick={() => handleEdit(idx)}
//                     buttonclass="!bg-transparent !text-black border border-blue-300"
//                   >
//                     <CiEdit />
//                   </Button>
//                   <Button
//                     type="button"
//                     onClick={() => handleDelete(idx)}
//                     buttonclass="!bg-transparent !text-red-700 border border-red-300"
//                   >
//                     <MdDelete />
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* ✅ Form */}
//       {formOpen && (
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <FormInput
//             label="Institution Name *"
//             name="institution"
//             value={education.institution}
//             onChange={handleChange}
//             error={errors.institution}
//           />

//           <FormInput
//             label="University / Board"
//             name="university"
//             value={education.university}
//             onChange={handleChange}
//           />

//           {/* ✅ Education Level Dropdown */}
//           <SelectField
//             label="Education Level *"
//             name="educationLevel"
//             value={education.educationLevel}
//             onChange={handleChange}
//             options={educationLevels}
//             error={errors.educationLevel}
//           />

//           {/* ✅ Degree Dropdown */}
//           <SelectField
//             label="Degree / Course *"
//             name="degree"
//             value={education.degree}
//             onChange={handleChange}
//             options={degreeOptions}
//             error={errors.degree}
//           />

//           <FormInput
//             label="Field of Study *"
//             name="fieldOfStudy"
//             value={education.fieldOfStudy}
//             onChange={handleChange}
//             error={errors.fieldOfStudy}
//             placeholder="e.g., Computer Science"
//           />

//           <FormInput
//             label="Specialization (Optional)"
//             name="specialization"
//             value={education.specialization}
//             onChange={handleChange}
//             placeholder="e.g., AI & ML"
//           />

//           <FormInput
//             label="Location"
//             name="location"
//             value={education.location}
//             onChange={handleChange}
//             placeholder="City, Country"
//           />

//           {/* ✅ Month + Year (Start) */}
//           <MonthYearSelect
//             label="Start Date *"
//             value={education.startDate}
//             onChange={(val) => handleDateChange("startDate", val)}
//           />
//           {errors.startDate && <p className="text-red-500 text-sm">{errors.startDate}</p>}

//           {/* ✅ Checkbox */}
//           <CheckboxField
//             label="Currently Studying Here"
//             name="currentlyStudying"
//             checked={education.currentlyStudying}
//             onChange={handleChange}
//           />

//           {/* ✅ Month + Year (End) */}
//           {!education.currentlyStudying && (
//             <>
//               <MonthYearSelect
//                 label="End Date"
//                 value={education.endDate}
//                 onChange={(val) => handleDateChange("endDate", val)}
//               />
//               {errors.endDate && <p className="text-red-500 text-sm">{errors.endDate}</p>}
//             </>
//           )}

//           <FormInput
//             label="Grade (CGPA/%)"
//             name="grade"
//             value={education.grade}
//             onChange={handleChange}
//             placeholder="e.g., 8.2 CGPA or 82%"
//           />

//           <TextAreaField
//             label="Achievements"
//             name="achievements"
//             value={education.achievements}
//             onChange={handleChange}
//             placeholder="Upto 500 characters"
//           />

//           <div className="flex justify-end gap-3">
//             <Button type="submit">
//               {editIndex !== null ? "Update Education" : "Save Education"}
//             </Button>
//             <Button
//               type="button"
//               onClick={() => {
//                 setFormOpen(false);
//                 setEducation(initialFormState());
//                 setEditIndex(null);
//               }}
//               buttonclass="bg-gray-300 text-black"
//             >
//               Cancel
//             </Button>
//           </div>
//         </form>
//       )}
//     </div>
//   );
// }


"use client";
import React, { useState } from "react";
import Button from "../components/Button";
import FormInput from "../components/FormInput";
import TextAreaField from "../components/TextAreaField";
import CheckboxField from "../components/CheckboxField";
import MonthYearSelect from "../components/MonthYearSelect"; // ✅ reuse component
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";

export default function EducationSection() {
  const [formOpen, setFormOpen] = useState(false);
  const [errors, setErrors] = useState({});
  const [editIndex, setEditIndex] = useState(null);

  const [educations, setEducations] = useState([]);

  const initialFormState = () => ({
    institution: "",
    university: "",
    educationLevel: "", // ✅ only education level now
    fieldOfStudy: "",
    specialization: "",
    location: "",
    startDate: { month: "", year: "" },
    endDate: { month: "", year: "" },
    currentlyStudying: false,
    grade: "",
    achievements: "",
  });

  const [education, setEducation] = useState(initialFormState());

  // ✅ Input change (text/checkbox)
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEducation((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // ✅ MonthYear change
  const handleDateChange = (field, { type, value }) => {
    setEducation((prev) => ({
      ...prev,
      [field]: { ...prev[field], [type]: value },
    }));
  };

  // ✅ Validation
  const validateForm = () => {
    let newErrors = {};
    if (!education.institution) newErrors.institution = "Institution name is required.";
    if (!education.educationLevel) newErrors.educationLevel = "Education level is required.";
    if (!education.fieldOfStudy) newErrors.fieldOfStudy = "Field of study is required.";
    if (!education.grade) newErrors.grade = "Grade/Percentage is required.";

    if (!education.startDate.month || !education.startDate.year) {
      newErrors.startDate = "Start Month & Year required.";
    }

    if (!education.currentlyStudying) {
      if (!education.endDate.month || !education.endDate.year) {
        newErrors.endDate = "End Month & Year required.";
      } else {
        // check logical order
        const start = parseInt(education.startDate.year) * 12 + parseInt(education.startDate.month);
        const end = parseInt(education.endDate.year) * 12 + parseInt(education.endDate.month);
        if (end < start) newErrors.endDate = "End date must be after Start date.";
      }
    }
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

    if (editIndex !== null) {
      const updated = [...educations];
      updated[editIndex] = education;
      setEducations(updated);
      setEditIndex(null);
    } else {
      setEducations((prev) => [...prev, education]);
    }

    console.log("Education Data:", [...educations, education]); // ✅ console log

    setEducation(initialFormState()); // ✅ reset form
    setErrors({});
    setFormOpen(false);
  };

  // ✅ Edit
  const handleEdit = (index) => {
    setEducation(educations[index]);
    setEditIndex(index);
    setFormOpen(true);
  };

  // ✅ Delete
  const handleDelete = (index) => {
    setEducations((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="p-5 rounded-lg bg-white shadow-md">
      {/* Heading */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Education</h3>
        {!formOpen && (
          <Button
            onClick={() => {
              setEducation(initialFormState());
              setEditIndex(null);
              setFormOpen(true);
            }}
            buttonclass="bg-white text-black border border-gray-500"
          >
            + Add Education
          </Button>
        )}
      </div>

      {/* ✅ If no education */}
      {!formOpen && educations.length === 0 && (
        <p className="text-gray-600 italic">
          Add your education details to showcase your academic background.
        </p>
      )}

      {/* ✅ Education List */}
      {!formOpen && educations.length > 0 && (
        <div className="space-y-4">
          {educations.map((edu, idx) => (
            <div key={idx} className="p-4 rounded-lg border border-gray-600 shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-semibold text-lg text-gray-800">
                    {edu.educationLevel} in {edu.fieldOfStudy}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {edu.institution} {edu.university && `, ${edu.university}`} - {edu.location}
                  </p>
                  <p className="text-sm text-gray-600">
                    {edu.startDate.month}/{edu.startDate.year} -{" "}
                    {edu.currentlyStudying
                      ? "Present"
                      : `${edu.endDate.month}/${edu.endDate.year}`}
                  </p>
                  {edu.specialization && (
                    <p className="text-sm text-gray-600">Specialization: {edu.specialization}</p>
                  )}
                  {edu.grade && <p className="text-sm text-gray-600">Grade: {edu.grade}</p>}
                  {edu.achievements && (
                    <p className="mt-2 text-gray-700">Achievements: {edu.achievements}</p>
                  )}
                </div>

                {/* Edit/Delete */}
                <div className="flex gap-2">
                  <Button
                    type="button"
                    onClick={() => handleEdit(idx)}
                    buttonclass="!bg-transparent !text-black border border-blue-300"
                  >
                    <CiEdit />
                  </Button>
                  <Button
                    type="button"
                    onClick={() => handleDelete(idx)}
                    buttonclass="!bg-transparent !text-red-700 border border-red-300"
                  >
                    <MdDelete />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ✅ Form */}
      {formOpen && (
        <form onSubmit={handleSubmit} className="space-y-4">
          <FormInput
            label="Institution Name *"
            name="institution"
            value={education.institution}
            onChange={handleChange}
            error={errors.institution}
          />
          <FormInput
            label="University / Board"
            name="university"
            value={education.university}
            onChange={handleChange}
          />

          <FormInput
            label="Education Level *"
            name="educationLevel"
            value={education.educationLevel}
            onChange={handleChange}
            error={errors.educationLevel}
            placeholder="High School, 12th, B.Tech, MBA..."
          />

          <FormInput
            label="Field of Study *"
            name="fieldOfStudy"
            value={education.fieldOfStudy}
            onChange={handleChange}
            error={errors.fieldOfStudy}
            placeholder="e.g., Computer Science"
          />
          <FormInput
            label="Specialization (Optional)"
            name="specialization"
            value={education.specialization}
            onChange={handleChange}
            placeholder="e.g., AI & ML"
          />
          <FormInput
            label="Location"
            name="location"
            value={education.location}
            onChange={handleChange}
            placeholder="City, Country"
          />

          {/* ✅ Month + Year (Start) */}
          <MonthYearSelect
            label="Start Date *"
            value={education.startDate}
            onChange={(val) => handleDateChange("startDate", val)}
          />
          {errors.startDate && <p className="text-red-500 text-sm">{errors.startDate}</p>}

          {/* ✅ Checkbox */}
          <CheckboxField
            label="Currently Studying Here"
            name="currentlyStudying"
            checked={education.currentlyStudying}
            onChange={handleChange}
          />

          {/* ✅ Month + Year (End) */}
          {!education.currentlyStudying && (
            <>
              <MonthYearSelect
                label="End Date"
                value={education.endDate}
                onChange={(val) => handleDateChange("endDate", val)}
              />
              {errors.endDate && <p className="text-red-500 text-sm">{errors.endDate}</p>}
            </>
          )}

          <FormInput
            label="Grade (CGPA/%) *"
            name="grade"
            value={education.grade}
            onChange={handleChange}
            error={errors.grade}
            placeholder="e.g., 8.2 CGPA or 82%"
          />

          <TextAreaField
            label="Achievements"
            name="achievements"
            value={education.achievements}
            onChange={handleChange}
            placeholder="Upto 500 characters"
          />

          <div className="flex justify-end gap-3">
            <Button type="submit">
              {editIndex !== null ? "Update Education" : "Save Education"}
            </Button>
            <Button
              type="button"
              onClick={() => {
                setFormOpen(false);
                setEducation(initialFormState());
                setEditIndex(null);
              }}
              buttonclass="bg-gray-300 text-black"
            >
              Cancel
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}
