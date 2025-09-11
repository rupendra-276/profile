"use client";
import React, { useState } from "react";
import Button from "../components/Button";
import FormInput from "../components/FormInput";
import TextAreaField from "../components/TextAreaField";
import SelectField from "../components/FormSelect";
import MonthYearSelect from "../components/MonthYearSelect";
import FormAchievements from "../components/FormAchievements";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { FaExternalLinkAlt, FaGithub, FaBook } from "react-icons/fa";

export default function ProjectSection() {
  const [formOpen, setFormOpen] = useState(false);
  const [errors, setErrors] = useState({});
  const [editIndex, setEditIndex] = useState(null);
  const [customCategory, setCustomCategory] = useState("");
  const [showAll, setShowAll] = useState(false);

  // ✅ Dummy Projects
  const [projects, setProjects] = useState([
    {
      title: "Portfolio Website",
      category: "Web App",
      description:
        "A personal portfolio website to showcase projects and achievements. Built with React, Tailwind CSS, and deployed on Vercel.",
      technologies: ["HTML", "CSS", "JavaScript", "React", "Tailwind", "Vercel"],
      startDate: { month: "Jan", year: "2024" },
      endDate: { month: "Feb", year: "2024" },
      teamSize: "1",
      role: "Frontend Developer",
      liveDemo: "https://myportfolio.com",
      sourceCode: "https://github.com/username/portfolio",
      documentation: "",
      image: "https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
      achievements: ["Designed responsive UI", "Optimized performance"],
    },
    {
      title: "Movie Recommendation System",
      category: "Data Science",
      description:
        "A ML-based movie recommendation engine using collaborative filtering.",
      technologies: ["Python", "Pandas", "Scikit-learn"],
      startDate: { month: "Mar", year: "2023" },
      endDate: { month: "Jun", year: "2023" },
      teamSize: "3",
      role: "Data Scientist",
      liveDemo: "",
      sourceCode: "https://github.com/username/movierec",
      documentation: "",
      image: "",
      achievements: ["Handled large datasets", "Improved accuracy by 15%"],
    },
  ]);

  // ✅ Initial Form State
  function initialFormState() {
    return {
      title: "",
      category: "",
      description: "",
      technologies: [],
      startDate: "",
      endDate: "",
      teamSize: "",
      role: "",
      liveDemo: "",
      sourceCode: "",
      documentation: "",
      image: "",
      achievements: [],
    };
  }
  const [project, setProject] = useState(initialFormState());

  // ✅ Handlers
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProject((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleTechnologiesChange = (newTech) => {
    setProject((prev) => ({ ...prev, technologies: newTech }));
  };

  const handleAchievementsChange = (newAch) => {
    setProject((prev) => ({ ...prev, achievements: newAch }));
  };

  const validateForm = () => {
    let newErrors = {};
    if (!project.title) newErrors.title = "Project Title is required.";
    if (!project.category) newErrors.category = "Category is required.";
    if (!project.description) newErrors.description = "Description is required.";
    if (!project.startDate) newErrors.startDate = "Start date is required.";
    if (!project.role) newErrors.role = "Your role is required.";
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
      const updated = [...projects];
      updated[editIndex] = project;
      setProjects(updated);
      setEditIndex(null);
    } else {
      setProjects((prev) => [...prev, project]);
    }

    setProject(initialFormState());
    setErrors({});
    setFormOpen(false);
    setCustomCategory("");
  };

  const handleEdit = (index) => {
    setProject(projects[index]);
    setEditIndex(index);
    setFormOpen(true);
  };

  const handleDelete = (index) => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      const filtered = projects.filter((_, i) => i !== index);
      setProjects(filtered);
    }
  };

  return (
    <div className="p-5 rounded-lg bg-white shadow-md">
      {/* Heading */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Projects</h3>
        {!formOpen && (
          <Button
            onClick={() => {
              setProject(initialFormState());
              setEditIndex(null);
              setFormOpen(true);
            }}
            buttonclass="bg-white text-black border border-gray-500"
          >
            + Add Project
          </Button>
        )}
      </div>

      {/* No projects */}
      {!formOpen && projects.length === 0 && (
        <p className="text-gray-600 italic">
          Add your projects to showcase your work and achievements.
        </p>
      )}

{/* ✅ Projects List */}
{!formOpen && projects.length > 0 && (
  <div className="mt-6">
    {/* Project Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {projects.slice(0, 3).map((proj, idx) => {
        const techToShow = proj.technologies?.slice(0, 3) || [];
        const techRemaining = proj.technologies?.length - 3;

        return (
          <div
            key={idx}
            className="p-4 rounded-xl border border-gray-300 shadow-md bg-white hover:shadow-lg transition"
          >
            {/* 🔹 Header Row: Title + Category + Date + Actions */}
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-semibold text-lg text-gray-800">
                  {proj.title}{" "}
                  <span className="text-gray-500 text-sm">
                    ({proj.category})
                  </span>
                </h4>
                <p className="text-sm text-gray-600">
                  {proj.startDate.month} {proj.startDate.year} –{" "}
                  {proj.endDate
                    ? `${proj.endDate.month} ${proj.endDate.year}`
                    : "Ongoing"}
                </p>
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

            {/* 🔹 Project Image */}
            {proj.image && (
              <div className="mt-3 text-center">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-40 object-cover rounded-lg border"
                />
              </div>
            )}

            {/* 🔹 Description */}
            <p className="mt-3 text-sm text-gray-700">{proj.description}</p>

            {/* 🔹 Technologies */}
            {proj.technologies?.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2 text-sm">
                {techToShow.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 border text-sm border-gray-400 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
                {techRemaining > 0 && (
                  <span className="px-2 py-0.5 text-sm border border-gray-400 rounded-full  text-gray-600 cursor-pointer hover:underline">
                    +{techRemaining} more
                  </span>
                )}
              </div>
            )}

            {/* 🔹 Achievements */}
            {proj.achievements?.length > 0 && (
              <ul className="list-disc list-inside mt-2 text-sm text-gray-700">
                {proj.achievements.map((ach, i) => (
                  <li key={i}>{ach}</li>
                ))}
              </ul>
            )}

            {/* 🔹 Links */}
            <div className="mt-3 flex flex-wrap gap-4 text-sm text-blue-600">
              {proj.liveDemo && (
                <a
                  href={proj.liveDemo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 hover:underline"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              )}
              {proj.sourceCode && (
                <a
                  href={proj.sourceCode}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 hover:underline"
                >
                  <FaGithub /> Source
                </a>
              )}
              {proj.documentation && (
                <a
                  href={proj.documentation}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 hover:underline"
                >
                  <FaBook /> Docs
                </a>
              )}
            </div>
          </div>
        );
      })}
    </div>

    {/* ✅ Show "+ more" if > 3 projects */}
    {projects.length > 3 && (
      <div className="mt-4 text-center">
        <button
          onClick={() => setShowAll((prev) => !prev)}
          className="text-blue-600 font-medium hover:underline"
        >
          {showAll ? "Show Less" : `+${projects.length - 3} more`}
        </button>
      </div>
    )}

    {/* ✅ Extra Projects if showAll */}
    {showAll && (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {projects.slice(3).map((proj, idx) => (
          <div
            key={idx}
            className="p-4 rounded-xl border border-gray-300 shadow-md bg-white hover:shadow-lg transition"
          >
            <h4 className="font-semibold text-lg text-gray-800">
              {proj.title} ({proj.category})
            </h4>
            <p className="text-sm text-gray-600">
              {proj.startDate.month} {proj.startDate.year} –{" "}
              {proj.endDate
                ? `${proj.endDate.month} ${proj.endDate.year}`
                : "Ongoing"}
            </p>
            <p className="mt-2 text-gray-700">{proj.description}</p>
          </div>
        ))}
      </div>
    )}
  </div>
)}

      {/* Project Form */}
      {formOpen && (
        <form onSubmit={handleSubmit} className="space-y-4">
          <FormInput
            label="Project Title *"
            name="title"
            value={project.title}
            onChange={handleChange}
            error={errors.title}
          />

          {/* Category with Other */}
          <SelectField
            label="Category *"
            name="category"
            value={project.category}
            onChange={(e) => {
              const { value } = e.target;
              setProject((prev) => ({ ...prev, category: value }));
              if (value !== "Other") setCustomCategory("");
            }}
            error={errors.category}
            options={[
              { value: "", label: "Please Select" },
              { value: "Web App", label: "Web App" },
              { value: "Mobile App", label: "Mobile App" },
              { value: "Data Science", label: "Data Science" },
              { value: "AI/ML", label: "AI/ML" },
              { value: "Desktop App", label: "Desktop Application" },
              { value: "GameDev", label: "Game Development" },
              { value: "Cloud", label: "Cloud / DevOps Project" },
              { value: "IoT", label: "IoT / Hardware Project" },
              { value: "OpenSource", label: "Open Source Contribution" },
              { value: "Research", label: "Research / Academic Project" },
              { value: "Other", label: "Other" },
            ]}
          />
          {project.category === "Other" && (
            <FormInput
              label="Custom Category"
              name="customCategory"
              value={customCategory}
              onChange={(e) => {
                setCustomCategory(e.target.value);
                setProject((prev) => ({ ...prev, category: e.target.value }));
              }}
              placeholder="Enter your custom category"
            />
          )}

          <TextAreaField
            label="Description *"
            name="description"
            value={project.description}
            onChange={handleChange}
            error={errors.description}
          />

          <FormAchievements
            label="Technologies Used"
            values={project.technologies}
            onChange={handleTechnologiesChange}
          />

          <MonthYearSelect
            label="Start Date *"
            value={project.startDate}
            onChange={(val) =>
              setProject((prev) => ({ ...prev, startDate: val }))
            }
          />
          {errors.startDate && (
            <p className="text-red-500 text-sm">{errors.startDate}</p>
          )}

          <MonthYearSelect
            label="End Date"
            value={project.endDate}
            onChange={(val) =>
              setProject((prev) => ({ ...prev, endDate: val }))
            }
          />

          <FormInput
            label="Team Size"
            name="teamSize"
            value={project.teamSize}
            onChange={handleChange}
          />

          <FormInput
            label="Your Role *"
            name="role"
            value={project.role}
            onChange={handleChange}
            error={errors.role}
          />

          <FormInput
            label="Live Demo URL"
            name="liveDemo"
            value={project.liveDemo}
            onChange={handleChange}
          />
          <FormInput
            label="Source Code URL"
            name="sourceCode"
            value={project.sourceCode}
            onChange={handleChange}
          />
          <FormInput
            label="Documentation URL"
            name="documentation"
            value={project.documentation}
            onChange={handleChange}
          />

          <FormInput
            label="Project Image (URL)"
            name="image"
            value={project.image}
            onChange={handleChange}
          />

          <FormAchievements
            label="Key Achievements"
            values={project.achievements}
            onChange={handleAchievementsChange}
          />

          <div className="flex justify-end gap-3">
            <Button type="submit"  buttonclass="text-white" >
              {editIndex !== null ? "Update Project" : "Save Project"}
            </Button>
            <Button
              type="button"
              onClick={() => {
                setFormOpen(false);
                setProject(initialFormState());
                setEditIndex(null);
                setCustomCategory("");
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
