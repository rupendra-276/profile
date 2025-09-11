"use client";
import React, { useState } from "react";
import { X, Plus } from "lucide-react";
import FormInput from "../components/FormInput";
import Button from "../components/Button";

export default function ContactInfoModal({ isOpen, onClose, user, onSave }) {
  const [formData, setFormData] = useState({
    name: user?.name || "",
    headline: user?.headline || "",
    location: user?.location || "",
    email: user?.email || "",
    phoneNumbers: user?.phoneNumbers || [],
    socialLinks: user?.socialLinks || {
      github: "",
      linkedin: "",
      instagram: "",
      youtube: "",
    },
  });

  const handleChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handlePhoneChange = (index, value) => {
    const updatedPhones = [...formData.phoneNumbers];
    updatedPhones[index] = value;
    setFormData((prev) => ({ ...prev, phoneNumbers: updatedPhones }));
  };

  const addPhoneNumber = () => {
    setFormData((prev) => ({
      ...prev,
      phoneNumbers: [...prev.phoneNumbers, ""],
    }));
  };

  const handleSocialChange = (platform, value) => {
    setFormData((prev) => ({
      ...prev,
      socialLinks: { ...prev.socialLinks, [platform]: value },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 p-6 overflow-y-auto">
      <div className="bg-white w-full max-w-2xl rounded-lg shadow-lg">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="font-semibold text-lg">Edit Contact Info</h3>
          <button onClick={onClose} className="p-1 hover:bg-gray-200 rounded-full">
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          <FormInput
            label="Full Name"
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
          />

          {/* Email is visible but not editable */}
          <FormInput label="Email" value={formData.email} disabled />

          <FormInput
            label="Headline"
            value={formData.headline}
            onChange={(e) => handleChange("headline", e.target.value)}
          />

          <FormInput
            label="Location"
            value={formData.location}
            onChange={(e) => handleChange("location", e.target.value)}
          />

          {/* Phone Numbers */}
          <div>
            <label className="block text-sm font-medium mb-1">Phone Numbers</label>
            {formData.phoneNumbers.map((phone, idx) => (
              <FormInput
                key={idx}
                value={phone}
                placeholder={`Phone ${idx + 1}`}
                onChange={(e) => handlePhoneChange(idx, e.target.value)}
              />
            ))}
            <button
              type="button"
              onClick={addPhoneNumber}
              className="mt-2 flex items-center text-blue-600 text-sm hover:underline"
            >
              <Plus size={16} className="mr-1" /> Add Phone Number
            </button>
          </div>

          {/* Social Links */}
          <div className="space-y-2">
            <label className="block text-sm font-medium">Social Links</label>
            <FormInput
              label="GitHub"
              value={formData.socialLinks.github}
              onChange={(e) => handleSocialChange("github", e.target.value)}
              placeholder="https://github.com/username"
            />
            <FormInput
              label="LinkedIn"
              value={formData.socialLinks.linkedin}
              onChange={(e) => handleSocialChange("linkedin", e.target.value)}
              placeholder="https://linkedin.com/in/username"
            />
            <FormInput
              label="Instagram"
              value={formData.socialLinks.instagram}
              onChange={(e) => handleSocialChange("instagram", e.target.value)}
              placeholder="https://instagram.com/username"
            />
            <FormInput
              label="YouTube"
              value={formData.socialLinks.youtube}
              onChange={(e) => handleSocialChange("youtube", e.target.value)}
              placeholder="https://youtube.com/@channel"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 pt-4">
            <Button type="button" onClick={onClose} buttonclass="bg-gray-300 text-black">
              Cancel
            </Button>
            <Button type="submit" buttonclass="!bg-blue-600 text-white">
              Save
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
