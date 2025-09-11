// "use client";
// import React, { useState } from "react";
// import { FileText } from "lucide-react";
// import FormInput from "../components/FormInput";
// import Button from "../components/Button";

// // ✅ Reusable TextArea Component
// function TextAreaField({ label, value, onChange, placeholder, error }) {
//   return (
//     <div className="flex flex-col">
//       <label className="font-medium mb-1">{label}</label>
//       <textarea
//         className={`border rounded-lg p-2 focus:ring-2 outline-none ${
//           error ? "border-red-500 focus:ring-red-400" : "border-gray-400 focus:ring-blue-500"
//         }`}
//         rows={4}
//         placeholder={placeholder}
//         value={value}
//         onChange={onChange}
//       />
//       {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
//     </div>
//   );
// }

// export default function ProfessionalSummarySection({about}) {
//   const [formOpen, setFormOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     headline: "",
//     summary: "",
//     openToWork: false,
//   });
//   const [errors, setErrors] = useState({});

//   // ✅ Validation
//   const validateForm = () => {
//     let newErrors = {};
//     if (!formData.headline.trim())
//       newErrors.headline = "Career objective / headline is required";
//     if (!formData.summary.trim())
//       newErrors.summary = "Professional summary is required";
//     return newErrors;
//   };

//   // ✅ Handle Change
//   const handleChange = (key, value) => {
//     setFormData((prev) => ({ ...prev, [key]: value }));
//   };

//   // ✅ Submit
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const validationErrors = validateForm();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       return;
//     }
//     console.log("✅ Professional Summary:", formData);
//     setErrors({});
//     setFormOpen(false);
//   };

//   return (
//     <div className="p-5 rounded-lg bg-white shadow-md -shadow-md">
//       {/* Header */}
//       <div className="flex justify-between items-center">
//         <div className="flex items-center gap-2">
//           <FileText className="w-5 h-5 text-blue-600" />
//           <h3 className="text-lg font-semibold">Professional Summary</h3>
//         </div>
//         {!formOpen && (
//           <Button
//             onClick={() => setFormOpen(true)}
//             buttonclass="bg-white text-black border border-gray-500 rounded-2xl px-3 py-1"
//           >
//             + Add Summary
//           </Button>
//         )}
//       </div>
//     {summary ? (
//     <div className="mt-4">
//     <h4 className="font-medium text-gray-800">{summary}</h4>
//   </div>
// ) : (
//   <p className="mt-4 text-gray-600">
//     Add your professional summary to let employers know more about your skills, experience, and career goals.
//   </p>
// )}

//       {/* Form */}
//       {formOpen && (
//         <form onSubmit={handleSubmit} className="space-y-4 mt-4">
//           {/* Headline */}
//           <FormInput
//             label="Career Objective / Headline"
//             placeholder="e.g. Aspiring Data Scientist | Full Stack Developer"
//             value={formData.headline}
//             onChange={(e) => handleChange("headline", e.target.value)}
//             error={errors.headline}
//           />

//           {/* Summary */}
//           <TextAreaField
//             label="Professional Summary"
//             placeholder="Write a brief introduction about your skills, expertise and goals..."
//             value={formData.summary}
//             onChange={(e) => handleChange("summary", e.target.value)}
//             error={errors.summary}
//           />

//           {/* Open to work */}
//           <label className="flex items-center gap-2">
//             <input
//               type="checkbox"
//               checked={formData.openToWork}
//               onChange={(e) => handleChange("openToWork", e.target.checked)}
//             />
//             Open to new opportunities
//           </label>

//           {/* Buttons */}
//           <div className="flex gap-3 justify-end">
//             <Button type="submit" buttonclass="!bg-blue-700">Save Summary</Button>
//             <Button
//               type="button"
//               onClick={() => setFormOpen(false)}
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
import { FileText } from "lucide-react";
import Button from "../components/Button";
import TextAreaField from "../components/TextAreaField";

export default function ProfessionalSummarySection({ about }) {
  const [formOpen, setFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    summary: "",
  });
  const [errors, setErrors] = useState({});

  // ✅ Validation
  const validateForm = () => {
    let newErrors = {};
    if (!formData.summary.trim())
      newErrors.summary = "Professional summary is required";
    return newErrors;
  };

  // ✅ Handle Change
  const handleChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  // ✅ Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    console.log("✅ Professional Summary Saved:", formData);
    setErrors({});
    setFormOpen(false);
  };

  return (
    <div className="p-5 rounded-lg bg-white shadow-md">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <FileText className="w-5 h-5 text-blue-600" />
          <h3 className="text-lg font-semibold">Professional Summary</h3>
        </div>
        {!formOpen && (
          <Button
            onClick={() => setFormOpen(true)}
            buttonclass="bg-white text-black border border-gray-500 rounded-2xl px-3 py-1"
          >
            {formData.summary ? "✏️ Edit Summary" : "+ Add Summary"}
          </Button>
        )}
      </div>

      {/* ✅ Show Summary if Available */}
      {formData.summary && !formOpen && (
        <div className="mt-4">
          <p className="text-gray-700">{formData.summary}</p>
        </div>
      )}

      {/* ✅ Show Info if Empty */}
      {!formData.summary && !formOpen && (
        <p className="mt-4 text-gray-600">
          Add your professional summary to let employers know more about your
          skills, experience, and career goals.
        </p>
      )}

      {/* ✅ Form */}
      {formOpen && (
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          {/* Summary */}
          <TextAreaField
            label="Professional Summary"
            placeholder="Write a brief introduction about your skills, expertise and goals..."
            value={formData.summary}
            onChange={(e) => handleChange("summary", e.target.value)}
            error={errors.summary}
          />

          {/* Buttons */}
          <div className="flex gap-3 justify-end">
            <Button type="submit" buttonclass="!bg-blue-700 text-white">
              Save Summary
            </Button>
            <Button
              type="button"
              onClick={() => setFormOpen(false)}
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
