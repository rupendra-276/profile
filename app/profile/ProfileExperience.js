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

export default function ExperienceSection() {
  const [formOpen, setFormOpen] = useState(false);
  const [errors, setErrors] = useState({});
  const [editIndex, setEditIndex] = useState(null);

  const [experiences, setExperiences] = useState([
    {
      jobTitle: "Software Engineer",
      company: "Tech Solutions Pvt Ltd",
      employmentType: "full-time",
      location: "Bangalore, India",
      startDate: { month: "Jan", year: "2023" },
      endDate: { month: "", year: "" },
      currentlyWorking: true,
      responsibilities:
        "Developed and maintained scalable web applications using MERN stack. Improved performance by 30% by optimizing backend APIs.",
      skills: ["React", "Node.js", "MongoDB", "TypeScript"],
      salary: "1200000",
      currency: "INR",
      period: "yearly",
    },
  ]);

  function initialFormState() {
    return {
      jobTitle: "",
      company: "",
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
    <div className="p-5 rounded-lg bg-white shadow-md">
      {/* Heading */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Experience</h3>
        {!formOpen && (
          <Button
            onClick={() => {
              setExperience(initialFormState());
              setEditIndex(null);
              setFormOpen(true);
            }}
            buttonclass="bg-white text-black border border-gray-500"
          >
            + Add Experience
          </Button>
        )}
      </div>

      {/* ✅ If no experience */}
      {!formOpen && experiences.length === 0 && (
        <p className="text-gray-600 italic">
          Add your experience to showcase your work history and achievements.
        </p>
      )}

      {/* ✅ If have experiences → show list */}
      {!formOpen && experiences.length > 0 && (
        <div className="space-y-4">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="p-4 rounded-lg border border-gray-600 shadow-sm"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-semibold text-lg text-gray-800">
                    {exp.jobTitle} @ {exp.company}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {exp.startDate.month} {exp.startDate.year} -{" "}
                    {exp.currentlyWorking
                      ? "Present"
                      : `${exp.endDate.month} ${exp.endDate.year}`}
                  </p>
                  <p className="mt-2 text-gray-700">{exp.responsibilities}</p>

                  {exp.skills?.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {exp.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 border border-gray-600 text-sm rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}

                  {exp.salary && (
                    <p className="mt-2 text-gray-600 text-sm">
                      Salary: {exp.currency} {exp.salary} / {exp.period}
                    </p>
                  )}
                </div>

                {/* Edit/Delete buttons */}
                <div className="flex gap-2">
                  <Button
                    type="button"
                    onClick={() => handleEdit(idx)}
                    buttonclass="!bg-transparent !text-black text-lg border border-blue-300"
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

          <div className="flex justify-end gap-3">
            <Button type="submit"  buttonclass="text-white">
              {editIndex !== null ? "Update Experience" : "Save Experience"}
            </Button>
            <Button
              type="button"
              onClick={() => {
                setFormOpen(false);
                setExperience(initialFormState());
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
