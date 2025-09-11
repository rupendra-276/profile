"use client";
import { useState } from "react";
import * as Yup from "yup";

export default function ProjectForm() {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    technologies: "",
    startMonth: "",
    startYear: "",
    endMonth: "",
    endYear: "",
    teamSize: "",
    role: "",
    liveDemo: "",
    sourceCode: "",
    documentation: "",
    achievements: "",
    images: null,
  });

  const [errors, setErrors] = useState({});

  // ✅ Validation schema
  const schema = Yup.object().shape({
    title: Yup.string().required("Project title is required"),
    category: Yup.string().required("Category is required"),
    description: Yup.string().required("Description is required"),
    teamSize: Yup.number().typeError("Must be a number").required("Team size required"),
    role: Yup.string().required("Role is required"),
    liveDemo: Yup.string().url("Invalid URL").nullable(),
    sourceCode: Yup.string().url("Invalid URL").nullable(),
    documentation: Yup.string().url("Invalid URL").nullable(),
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({ ...formData, [name]: files ? files : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await schema.validate(formData, { abortEarly: false });
      setErrors({});
      alert("✅ Project submitted successfully!");
      console.log("Form Data:", formData);
    } catch (err) {
      const newErrors = {};
      err.inner.forEach((e) => {
        newErrors[e.path] = e.message;
      });
      setErrors(newErrors);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6"
    >
      <h2 className="text-xl font-bold mb-4">Add Project</h2>

      <InputField
        label="Project Title"
        name="title"
        value={formData.title}
        onChange={handleChange}
        error={errors.title}
      />

      <SelectField
        label="Category"
        name="category"
        value={formData.category}
        onChange={handleChange}
        error={errors.category}
        options={[
          { label: "Web App", value: "web" },
          { label: "Mobile App", value: "mobile" },
          { label: "AI/ML", value: "ai" },
        ]}
      />

      <TextAreaField
        label="Description"
        name="description"
        value={formData.description}
        onChange={handleChange}
        error={errors.description}
      />

      <InputField
        label="Technologies Used"
        name="technologies"
        value={formData.technologies}
        onChange={handleChange}
      />

      {/* Start Date */}
      <div className="grid grid-cols-2 gap-4">
        <SelectField
          label="Start Month"
          name="startMonth"
          value={formData.startMonth}
          onChange={handleChange}
          options={months.map((m) => ({ label: m, value: m }))}
        />
        <SelectField
          label="Start Year"
          name="startYear"
          value={formData.startYear}
          onChange={handleChange}
          options={years.map((y) => ({ label: y, value: y }))}
        />
      </div>

      {/* End Date */}
      <div className="grid grid-cols-2 gap-4">
        <SelectField
          label="End Month"
          name="endMonth"
          value={formData.endMonth}
          onChange={handleChange}
          options={months.map((m) => ({ label: m, value: m }))}
        />
        <SelectField
          label="End Year"
          name="endYear"
          value={formData.endYear}
          onChange={handleChange}
          options={years.map((y) => ({ label: y, value: y }))}
        />
      </div>

      <InputField
        label="Team Size"
        name="teamSize"
        value={formData.teamSize}
        onChange={handleChange}
        error={errors.teamSize}
      />

      <InputField
        label="Your Role"
        name="role"
        value={formData.role}
        onChange={handleChange}
        error={errors.role}
      />

      <InputField
        label="Live Demo URL"
        name="liveDemo"
        value={formData.liveDemo}
        onChange={handleChange}
        error={errors.liveDemo}
      />

      <InputField
        label="Source Code URL"
        name="sourceCode"
        value={formData.sourceCode}
        onChange={handleChange}
        error={errors.sourceCode}
      />

      <InputField
        label="Documentation URL"
        name="documentation"
        value={formData.documentation}
        onChange={handleChange}
        error={errors.documentation}
      />

      <FormField label="Project Images">
        <input
          type="file"
          name="images"
          multiple
          accept="image/*"
          onChange={handleChange}
        />
      </FormField>

      <TextAreaField
        label="Key Achievements"
        name="achievements"
        value={formData.achievements}
        onChange={handleChange}
      />

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
      >
        + Add Project
      </button>
    </form>
  );
}
