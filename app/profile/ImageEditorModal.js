"use client";
import React from "react";
import { X } from "lucide-react";
import ImageEditor from "./ImageEditor";

export default function ImageEditorModal({
  isOpen,
  onClose,
  initialImage,
  mode = "cover",            // "cover" | "avatar" | custom
  onSave,
  aspectPresets,
  outputSizeMap
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto p-6 bg-black/50">
      <div className="bg-white w-full max-w-5xl rounded-lg  shadow-lg">
        
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="font-semibold">
            {mode === "avatar" ? "Edit Profile Photo" : "Edit Cover"}
          </h3>
          <button
            className="px-3 py-1 hover:cursor-pointer"
            onClick={onClose}
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="p-4 !overflow-y-auto">
          <ImageEditor
            initialImage={initialImage}
            mode={mode}
            onCancel={onClose}
            onSave={onSave}
            aspectPresets={aspectPresets}
            outputSizeMap={outputSizeMap}
          />
        </div>
      </div>
    </div>
  );
}

