"use client";
import Image from "next/image";
import { useState } from "react";
import { Pencil } from "lucide-react";
import ImageEditorModal from "./ImageEditorModal";
import ContactInfoModal from "./ContactInfoModal";

export default function ProfileHeader({ user }) {
  const [isFollowing, setIsFollowing] = useState(false);
  const [followers, setFollowers] = useState(user.followers || 0);
  const [connections, setConnections] = useState(user.connections || 0);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [editorMode, setEditorMode] = useState("cover"); // "cover" or "avatar"
  const [cover, setCover] = useState(user.cover || "/profile-cover.jpg");
  const [avatar, setAvatar] = useState(user.avatar || "/profiledefault.jpg");
  const experience = user.experience || [];
  const [infoModal, setInfoModal] = useState(false);
  const [formData, setFormData] = useState({
    name: user.name,
    headline: user.headline,
    location: user.location,
    email: user.email,
    phoneNumbers: user.phoneNumbers || [],
  });

  // toggle follow
  const handleFollow = () => {
    setFollowers((prev) => (isFollowing ? prev - 1 : prev + 1));
    setIsFollowing(!isFollowing);
  };

  // open editor
  const openEditor = (mode) => {
    setEditorMode(mode);
    setIsEditorOpen(true);
  };

  // save image
  const handleEditorSave = ({ url }) => {
    if (editorMode === "cover") setCover(url);
    else setAvatar(url);
    setIsEditorOpen(false);
  };

  // helper SmartImage
  const SmartImage = ({ src, alt, className, ...props }) => {
    const isObjectUrl = src && (src.startsWith("blob:") || src.startsWith("data:"));
    if (isObjectUrl) {
      return <img src={src} alt={alt} className={className} {...props} />;
    }
    return <Image src={src} alt={alt} fill className={className} {...props} />;
  };

  return (
    <div className="bg-white my-6 shadow-md overflow-hidden">
      {/* Cover */}
      <div className="relative overflow-hidden w-full h-36 md:h-64 bg-gray-200">
        <div className="absolute inset-0">
          <SmartImage src={cover} alt="Cover" className="object-cover w-full h-full" />
        </div>
        <button
          onClick={() => openEditor("cover")}
          className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
        >
          <Pencil size={16} />
        </button>
      </div>

      {/* Avatar */}
      <div className="relative flex justify-between p-6 my-2">
        <div className="absolute -top-20 left-16 md:left-24 w-32 h-32 rounded-full overflow-hidden shadow-md">
          <div className="relative w-full h-full">
            <SmartImage
              src={avatar}
              alt="Profile"
              onClick={() => openEditor("avatar")}
              className="object-cover w-full h-full rounded-full hover:cursor-pointer"
            />
          </div>
        </div>

        <button
          onClick={() => setInfoModal(true)}
          className="absolute right-5 bottom-0 bg-[#e0e0e0] p-1 rounded-full m-1 shadow hover:cursor-pointer"
          title="Edit contact info"
        >
          <Pencil size={20} />
        </button>
      </div>

      {/* Heading info */}
      <div className="my-5 px-5 flex justify-between items-start">
        <div className="-mt-2">
          <h2 className="text-xl sm:text-[24px] font-semibold">{formData.name}</h2>
          <p className="text-sm sm:text text-gray-900 font-medium">{formData.headline}</p>
          <p className="text-[13px] text-gray-500">{formData.location}</p>

          {/* Followers & Connections */}
          <div className="flex gap-4 mt-2 text-sm text-gray-700">
            <span>{followers} Followers</span>
            <span>{connections} Connections</span>
          </div>
        </div>

        {/* Experience */}
        <div className="gap-6 mt-1 text-left text-sm text-blue-600">
          {experience.length > 0 &&
            experience.map((exp, idx) => (
              <div key={idx} className="flex items-start gap-2">
                {exp.logo && (
                  <Image
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    width={24}
                    height={24}
                    className="inline-block rounded-sm object-contain"
                  />
                )}
                <span className="font-medium text-gray-800">{exp.company}</span>
              </div>
            ))}
        </div>
      </div>

      {/* Contact Info Modal */}
      {infoModal && (
        <ContactInfoModal
          isOpen={infoModal}
          onClose={() => setInfoModal(false)}
          user={formData}
          onSave={(updated) => setFormData(updated)}
        />
      )}

      {/* Image Editor Modal */}
      {isEditorOpen && (
        <div className="overflow-auto">
          <ImageEditorModal
            isOpen={isEditorOpen}
            onClose={() => setIsEditorOpen(false)}
            initialImage={editorMode === "cover" ? cover : avatar}
            mode={editorMode}
            onSave={handleEditorSave}
          />
        </div>
      )}
    </div>
  );
}
