"use client";
import React, { useState } from "react";
import { X, Plus, Trash } from "lucide-react";
import Button from "../components/Button";
import FormInput from "../components/FormInput";

export default function ContactInfoModal({ isOpen, onClose, initialData, onSave }) {
  const [formData, setFormData] = useState(
    initialData || { sections: [] }
  );

  // add new section
  const addSection = () => {
    setFormData({
      ...formData,
      sections: [...formData.sections, { heading: "New Section", items: [] }],
    });
  };

  // update section heading
  const updateSectionHeading = (index, value) => {
    const updated = [...formData.sections];
    updated[index].heading = value;
    setFormData({ ...formData, sections: updated });
  };

  // add new item in a section
  const addItem = (sectionIndex, type = "phone") => {
    const updated = [...formData.sections];
    updated[sectionIndex].items.push({ type, value: "" });
    setFormData({ ...formData, sections: updated });
  };

  // update item value
  const updateItem = (sectionIndex, itemIndex, value) => {
    const updated = [...formData.sections];
    updated[sectionIndex].items[itemIndex].value = value;
    setFormData({ ...formData, sections: updated });
  };

  // delete item
  const deleteItem = (sectionIndex, itemIndex) => {
    const updated = [...formData.sections];
    updated[sectionIndex].items.splice(itemIndex, 1);
    setFormData({ ...formData, sections: updated });
  };

  // submit
  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto p-6 bg-black/50">
      <div className="bg-white w-full max-w-2xl rounded-lg shadow-lg">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="font-semibold">Edit Contact Info</h3>
          <button onClick={onClose} className="px-3 py-1 hover:cursor-pointer">
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <form onSubmit={handleSubmit} className="p-4 space-y-6">
          {formData.sections.map((section, secIndex) => (
            <div key={secIndex} className="border rounded-lg p-4 space-y-3">
              {/* Section Heading */}
              <FormInput
                label="Subheading"
                value={section.heading}
                onChange={(e) =>
                  updateSectionHeading(secIndex, e.target.value)
                }
              />

              {/* Items */}
              {section.items.map((item, itemIndex) => (
                <div key={itemIndex} className="flex items-center gap-2">
                  <FormInput
                    label={item.type === "phone" ? "Phone" : "Email"}
                    value={item.value}
                    onChange={(e) =>
                      updateItem(secIndex, itemIndex, e.target.value)
                    }
                  />
                  <button
                    type="button"
                    onClick={() => deleteItem(secIndex, itemIndex)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash size={18} />
                  </button>
                </div>
              ))}

              {/* Add Item Buttons */}
              <div className="flex gap-2">
                <Button
                  type="button"
                  onClick={() => addItem(secIndex, "phone")}
                  buttonclass="bg-gray-200 text-black"
                >
                  + Phone
                </Button>
                <Button
                  type="button"
                  onClick={() => addItem(secIndex, "email")}
                  buttonclass="bg-gray-200 text-black"
                >
                  + Email
                </Button>
              </div>
            </div>
          ))}

          {/* Add Section Button */}
          <Button
            type="button"
            onClick={addSection}
            buttonclass="bg-blue-100 text-blue-700"
          >
            + Add Subheading
          </Button>

          {/* Footer */}
          <div className="flex justify-end gap-3 mt-6">
            <Button type="button" onClick={onClose} buttonclass="bg-gray-300 text-black">
              Cancel
            </Button>
            <Button type="submit" buttonclass="!bg-blue-700 text-white">
              Save
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
