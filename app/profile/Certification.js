"use client";
import React, { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import Button from "../components/Button";
import FormInput from "../components/FormInput";
import MonthYearSelect from "../components/MonthYearSelect";

export default function CertificationSection() {
  const [formOpen, setFormOpen] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [errors, setErrors] = useState({});
  const [certifications, setCertifications] = useState([
    {
      name: "AWS Certified Solutions Architect",
      organization: "Amazon Web Services",
      startDate: { month: "Jan", year: "2024" },
      endDate: { month: "Jan", year: "2027" },
      credentialId: "ABC12345XYZ",
      credentialUrl: "https://aws.amazon.com/certification/",
    },
  ]);

  function initialFormState() {
    return {
      name: "",
      organization: "",
      startDate: { month: "", year: "" },
      endDate: { month: "", year: "" },
      credentialId: "",
      credentialUrl: "",
    };
  }

  const [certification, setCertification] = useState(initialFormState());

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCertification((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (field, value) => {
    setCertification((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const validateForm = () => {
    let newErrors = {};
    if (!certification.name) newErrors.name = "Certification name is required.";
    if (!certification.organization)
      newErrors.organization = "Organization is required.";
    if (!certification.startDate.month || !certification.startDate.year)
      newErrors.startDate = "Start date is required.";
    if (!certification.endDate.month || !certification.endDate.year)
      newErrors.endDate = "End date is required.";
    if (!certification.credentialId)
      newErrors.credentialId = "Credential ID is required.";
    if (!certification.credentialUrl)
      newErrors.credentialUrl = "Credential URL is required.";
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
      const updated = [...certifications];
      updated[editIndex] = certification;
      setCertifications(updated);
      setEditIndex(null);
    } else {
      setCertifications((prev) => [...prev, certification]);
    }

    setCertification(initialFormState());
    setErrors({});
    setFormOpen(false);
  };

  const handleEdit = (index) => {
    setCertification(certifications[index]);
    setEditIndex(index);
    setFormOpen(true);
  };

  const handleDelete = (index) => {
    const filtered = certifications.filter((_, i) => i !== index);
    setCertifications(filtered);
  };

  return (
    <div className="p-5 rounded-lg bg-white shadow-md mt-4">
      {/* Heading */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Certifications</h3>
        {!formOpen && (
          <Button
            onClick={() => {
              setCertification(initialFormState());
              setEditIndex(null);
              setFormOpen(true);
            }}
            buttonclass="bg-white text-black border border-gray-500"
          >
            + Add Certification
          </Button>
        )}
      </div>

      {/* Show List */}
      {!formOpen && certifications.length > 0 && (
        <div className="space-y-4">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="p-4 rounded-lg border border-gray-600 shadow-sm"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-semibold text-lg text-gray-800">
                    {cert.name}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {cert.organization} | {cert.startDate.month}{" "}
                    {cert.startDate.year} - {cert.endDate.month}{" "}
                    {cert.endDate.year}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Credential ID: {cert.credentialId}
                  </p>
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    className="text-blue-600 text-sm underline"
                  >
                    Verify Credential
                  </a>
                </div>

                {/* Edit/Delete */}
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

      {/* Form */}
      {formOpen && (
        <form onSubmit={handleSubmit} className="space-y-4">
          <FormInput
            label="Certification Name *"
            name="name"
            value={certification.name}
            onChange={handleChange}
            error={errors.name}
          />

          <FormInput
            label="Issuing Organization *"
            name="organization"
            value={certification.organization}
            onChange={handleChange}
            error={errors.organization}
          />

          <MonthYearSelect
            label="Start Date *"
            value={certification.startDate}
            onChange={(val) => handleDateChange("startDate", val)}
          />
          {errors.startDate && (
            <p className="text-red-500 text-sm">{errors.startDate}</p>
          )}

          <MonthYearSelect
            label="End Date *"
            value={certification.endDate}
            onChange={(val) => handleDateChange("endDate", val)}
          />
          {errors.endDate && (
            <p className="text-red-500 text-sm">{errors.endDate}</p>
          )}

          <FormInput
            label="Credential ID *"
            name="credentialId"
            value={certification.credentialId}
            onChange={handleChange}
            error={errors.credentialId}
          />

          <FormInput
            label="Credential URL *"
            name="credentialUrl"
            value={certification.credentialUrl}
            onChange={handleChange}
            error={errors.credentialUrl}
          />

          <div className="flex justify-end gap-3">
            <Button type="submit" buttonclass="text-white">
              {editIndex !== null ? "Update Certification" : "Save Certification"}
            </Button>
            <Button
              type="button"
              onClick={() => {
                setFormOpen(false);
                setCertification(initialFormState());
                setEditIndex(null);
              }}
              buttonclass="bg-gray-300 !text-black"
            >
              Cancel
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}
