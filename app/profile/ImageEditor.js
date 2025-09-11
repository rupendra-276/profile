// "use client";
// import React, { useCallback, useMemo, useState } from "react";
// import dynamic from "next/dynamic";
// import debounce from "lodash.debounce";
// import {
//   RotateCcw,
//   RotateCw,
//   ArrowUp,
//   ArrowDown,
//   Upload,
// } from "lucide-react";
// import getCroppedImageBlobUrl from "../utils/cropImage";

// // Lazy load Cropper
// const Cropper = dynamic(() => import("react-easy-crop"), { ssr: false });

// // 🔹 Reusable Slider
// function CustomSlider({ label, value, min, max, step, onChange, gradient }) {
//   return (
//     <div className="flex flex-col space-y-1 w-full">
//       <label className="text-sm font-medium">{label}</label>
//       <input
//         type="range"
//         min={min}
//         max={max}
//         step={step}
//         value={value}
//         onChange={(e) => onChange(Number(e.target.value))}
//         className={`w-full accent-blue-600 cursor-pointer ${gradient}`}
//       />
//       <span className="text-xs text-gray-500">{value}</span>
//     </div>
//   );
// }

// // 🔹 Reusable Button
// function RotateButton({ onClick, Icon, label }) {
//   return (
//     <button
//       onClick={onClick}
//       className="p-2 hover:cursor-pointer bg-gray-100 rounded flex flex-col items-center"
//     >
//       <Icon className="w-5 h-5" />
//       <span className="text-xs">{label}</span>
//     </button>
//   );
// }

// export default function ImageEditor({
//   initialImage = null,
//   mode = "cover",
//   onCancel = () => {},
//   onSave = () => {},
//   aspectPresets = [
//     { key: "square", label: "1:1", aspect: 1 },
//     { key: "standard", label: "4:3", aspect: 4 / 3 },
//     { key: "landscape", label: "16:9", aspect: 16 / 9 },
//     { key: "cover", label: "3:1", aspect: 3 / 1 },
//   ],
// }) {
//   const [activeTab, setActiveTab] = useState("crop");
//   const [imageSrc, setImageSrc] = useState(initialImage);
//   const [crop, setCrop] = useState({ x: 0, y: 0 });
//   const [zoom, setZoom] = useState(1);
//   const [rotation, setRotation] = useState(0);
//   const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

//   // Aspect ratio
//   const [aspectKey, setAspectKey] = useState(mode === "avatar" ? "square" : "cover");
//   const [aspect, setAspect] = useState(
//     mode === "avatar" ? 1 : aspectPresets.find((p) => p.key === "cover")?.aspect || 3 / 1
//   );

//   // Filters
//   const [brightness, setBrightness] = useState(100);
//   const [contrast, setContrast] = useState(100);
//   const [saturation, setSaturation] = useState(100);
//   const [grayscale, setGrayscale] = useState(0);

//   // Debounced filters
//   const debouncedSetBrightness = useMemo(() => debounce(setBrightness, 60), []);
//   const debouncedSetContrast = useMemo(() => debounce(setContrast, 60), []);
//   const debouncedSetSaturation = useMemo(() => debounce(setSaturation, 60), []);
//   const debouncedSetGrayscale = useMemo(() => debounce(setGrayscale, 60), []);

//   const filterString = useMemo(
//     () =>
//       `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturation}%) grayscale(${grayscale}%)`,
//     [brightness, contrast, saturation, grayscale]
//   );

//   const rotateLeft = () => setRotation((r) => (r - 90) % 360);
//   const rotateRight = () => setRotation((r) => (r + 90) % 360);
//   const flipVertical = () => setRotation((r) => (r + 180) % 360); // top
//   const flipHorizontal = () => setRotation((r) => (r + 270) % 360); // bottom

//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = () => setImageSrc(reader.result);
//       reader.readAsDataURL(file);
//     }
//   };

//  const handleSave = useCallback(async () => {
//   if (!imageSrc || !croppedAreaPixels) return;

//   let outputW, outputH;

// if (mode === "avatar") {
//   outputW = 800;  // sharp avatar
//   outputH = 800;
// } else if (mode === "cover") {
//   outputW = 1584; // LinkedIn recommended
//   outputH = 396;
// } else {
//   outputW = croppedAreaPixels.width;
//   outputH = croppedAreaPixels.height;
// }


//   try {
//     const { blob, url } = await getCroppedImageBlobUrl({
//       imageSrc,
//       pixelCrop: croppedAreaPixels,
//       outputWidth: outputW,
//       outputHeight: outputH,
//       rotation,
//       filters: filterString,
//       mimeType: mode === "avatar" ? "image/png" : "image/jpeg",
//       quality: 0.92,
//     });
//     onSave({ blob, url, type: aspectKey });
//   } catch (err) {
//     console.error("Failed to export image:", err);
//   }
// }, [imageSrc, croppedAreaPixels, rotation, filterString, onSave, aspectKey, mode]);

//   return (
//     <div className="p-4 flex flex-col gap-6 !overflow-y-auto">
//       {/* Image Editor */}
//       <div className="relative w-full h-96 bg-black/60 rounded !overflow-y-auto">
//         {imageSrc ? (
//           <Cropper
//             image={imageSrc}
//             crop={crop}
//             zoom={zoom}
//             rotation={rotation}
//             aspect={aspect}
//             onCropChange={setCrop}
//             onZoomChange={setZoom}
//             onCropComplete={setCroppedAreaPixels}
//             style={{
//               containerStyle: { filter: filterString },
//             }}
//           />
//         ) : (
//           <div className="flex items-center justify-center h-full text-gray-400">
//             Upload or drag an image
//           </div>
//         )}
//       </div>
//       <div className="flex justify-end">
//         <label className="flex justify-end items-center gap-2 text-blue-600 hover:cursor-pointer w-fit">
//           <Upload className="w-5 h-5" />
//           <span>Change Cover Image</span>
//           <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
//         </label>
//       </div>

//       {/* Tabs */}
//       <div className="flex border-b">
//         {["crop", "filters", "adjust"].map((tab) => (
//           <button
//             key={tab}
//             onClick={() => setActiveTab(tab)}
//             className={`px-4 py-2 text-sm font-medium hover:cursor-pointer ${
//               activeTab === tab
//                 ? "border-b-2 border-blue-600 text-blue-600"
//                 : "text-gray-500 hover:text-gray-700 hover:cursor-pointer"
//             }`}
//           >
//             {tab.charAt(0).toUpperCase() + tab.slice(1)}
//           </button>
//         ))}
//       </div>

//       {/* Crop Tab */}
//       {activeTab === "crop" && (
//         <div className="space-y-4">
//           <div className="flex flex-col md:flex-row md:items-center md:justify-between">
//             {/* Aspect Ratio */}
//             <div className="flex gap-2">
//               {aspectPresets.map((p) => (
//                 <button
//                   key={p.key}
//                   onClick={() => {
//                     setAspectKey(p.key);
//                     setAspect(p.aspect);
//                   }}
//                   className={`px-3 py-1 rounded hover:cursor-pointer ${
//                     aspectKey === p.key ? "bg-blue-600 text-white" : "bg-gray-100"
//                   }`}
//                 >
//                   {p.label}
//                 </button>
//               ))}
//             </div>

//             {/* Rotate Controls */}
//             <div className="flex gap-3">
//               <RotateButton onClick={rotateLeft} Icon={RotateCcw} label="Left" />
//               <RotateButton onClick={rotateRight} Icon={RotateCw} label="Right" />
//               <RotateButton onClick={flipVertical} Icon={ArrowUp} label="Top" />
//               <RotateButton onClick={flipHorizontal} Icon={ArrowDown} label="Bottom" />
//             </div>
//           </div>

//           {/* Zoom */}
//           <CustomSlider label="Zoom" value={zoom} min={1} max={3} step={0.01} onChange={setZoom} />
//         </div>
//       )}

//       {/* Filters Tab */}
//       {activeTab === "filters" && (
//         <div className="flex flex-wrap gap-6">
//           {[
//             { name: "Original", filter: "" },
//             { name: "Studio", filter: "contrast(120%) brightness(105%)" },
//             { name: "Spotlight", filter: "brightness(120%) saturate(110%)" },
//             { name: "Prime", filter: "contrast(110%) saturate(120%)" },
//             { name: "Classic", filter: "grayscale(50%)" },
//             { name: "Edge", filter: "contrast(150%)" },
//           ].map((f, i) => (
//             <button
//               key={i}
//               className="flex flex-col items-center"
//               onClick={() => {
//                 setBrightness(100);
//                 setContrast(100);
//                 setSaturation(100);
//                 if (f.filter.includes("contrast"))
//                   setContrast(parseInt(f.filter.match(/\d+/)[0]));
//                 if (f.filter.includes("brightness"))
//                   setBrightness(parseInt(f.filter.match(/\d+/)[0]));
//                 if (f.filter.includes("saturate"))
//                   setSaturation(parseInt(f.filter.match(/\d+/)[0]));
//               }}
//             >
//               <img
//                 src={imageSrc}
//                 className="w-16 h-16 object-cover rounded shadow"
//                 style={{ filter: f.filter }}
//               />
//               <span className="text-xs mt-1">{f.name}</span>
//             </button>
//           ))}
//         </div>
//       )}

//       {/* Adjust Tab */}
//       {activeTab === "adjust" && (
//         <div className="space-y-4">
//           <CustomSlider
//             label="Brightness"
//             value={brightness}
//             min={50}
//             max={150}
//             step={1}
//             onChange={setBrightness}
//             gradient="bg-gradient-to-r from-black via-gray-500 to-white"
//           />
//           <CustomSlider
//             label="Contrast"
//             value={contrast}
//             min={50}
//             max={150}
//             step={1}
//             onChange={setContrast}
//             gradient="bg-gradient-to-r from-gray-200 to-gray-900"
//           />
//           <CustomSlider
//             label="Saturation"
//             value={saturation}
//             min={50}
//             max={200}
//             step={1}
//             onChange={setSaturation}
//             gradient="bg-gradient-to-r from-gray-400 via-green-400 to-red-500"
//           />
//           <CustomSlider
//             label="Grayscale"
//             value={grayscale}
//             min={0}
//             max={100}
//             step={1}
//             onChange={setGrayscale}
//             gradient="bg-gradient-to-r from-gray-100 to-black"
//           />
//         </div>
//       )}

//       {/* Actions */}
//       <div className="flex gap-2 mt-4">
//         <button
//           onClick={onCancel}
//           className="flex-1 py-2 rounded-3xl hover:cursor-pointer bg-gray-200 text-gray-700"
//         >
//           Cancel
//         </button>
//         <button
//           onClick={handleSave}
//           className="flex-1 py-2 rounded-3xl hover:cursor-pointer bg-blue-600 text-white"
//         >
//           Save
//         </button>
//       </div>
//     </div>
//   );
// }



"use client";
import React, { useCallback, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import debounce from "lodash.debounce";
import {
  RotateCcw,
  RotateCw,
  ArrowUp,
  ArrowDown,
  Upload,
} from "lucide-react";
import getCroppedImageBlobUrl from "../utils/cropImage";

// Lazy load Cropper
const Cropper = dynamic(() => import("react-easy-crop"), { ssr: false });

// 🔹 Reusable Slider
function CustomSlider({ label, value, min, max, step, onChange, gradient }) {
  return (
    <div className="flex flex-col space-y-1 w-full">
      <label className="text-sm font-medium">{label}</label>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className={`w-full accent-blue-600 cursor-pointer ${gradient}`}
      />
      <span className="text-xs text-gray-500">{value}</span>
    </div>
  );
}

// 🔹 Reusable Button
function RotateButton({ onClick, Icon, label }) {
  return (
    <button
      onClick={onClick}
      className="p-2 bg-gray-100 rounded flex flex-col items-center hover:cursor-pointer"
    >
      <Icon className="w-5 h-5" />
      <span className="text-xs">{label}</span>
    </button>
  );
}

export default function ImageEditor({
  initialImage = null,
  mode = "cover",
  onCancel = () => {},
  onSave = () => {},
  aspectPresets = [
    { key: "square", label: "1:1", aspect: 1 },
    { key: "standard", label: "4:3", aspect: 4 / 3 },
    { key: "landscape", label: "16:9", aspect: 16 / 9 },
    { key: "cover", label: "3:1", aspect: 3 / 1 },
  ],
}) {
  const [activeTab, setActiveTab] = useState("crop");
  const [imageSrc, setImageSrc] = useState(initialImage);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  // Aspect ratio
  const [aspectKey, setAspectKey] = useState(mode === "avatar" ? "square" : "cover");
  const [aspect, setAspect] = useState(
    mode === "avatar" ? 1 : aspectPresets.find((p) => p.key === "cover")?.aspect || 3 / 1
  );

  // Filters
  const [brightness, setBrightness] = useState(100);
  const [contrast, setContrast] = useState(100);
  const [saturation, setSaturation] = useState(100);
  const [grayscale, setGrayscale] = useState(0);

  const debouncedSetBrightness = useMemo(() => debounce(setBrightness, 60), []);
  const debouncedSetContrast = useMemo(() => debounce(setContrast, 60), []);
  const debouncedSetSaturation = useMemo(() => debounce(setSaturation, 60), []);
  const debouncedSetGrayscale = useMemo(() => debounce(setGrayscale, 60), []);

  const filterString = useMemo(
    () =>
      `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturation}%) grayscale(${grayscale}%)`,
    [brightness, contrast, saturation, grayscale]
  );

  const rotateLeft = () => setRotation((r) => (r - 90 + 360) % 360);
  const rotateRight = () => setRotation((r) => (r + 90) % 360);
  const flipVertical = () => setRotation((r) => (r + 180) % 360);
  const flipHorizontal = () => setRotation((r) => (r + 270) % 360);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setImageSrc(reader.result);
      reader.readAsDataURL(file);
    }
  };

  // 🔹 Main Save
  const handleSave = useCallback(async () => {
    if (!imageSrc || !croppedAreaPixels) return;

    let outputW, outputH;

    if (mode === "avatar") {
      outputW = 800;
      outputH = 800;
    } else if (mode === "cover") {
      outputW = 1584;
      outputH = 396;
    } else {
      // auto size = just crop
      outputW = croppedAreaPixels.width;
      outputH = croppedAreaPixels.height;
    }

    try {
      const { blob, url } = await getCroppedImageBlobUrl({
        imageSrc,
        pixelCrop: croppedAreaPixels,
        outputWidth: outputW,
        outputHeight: outputH,
        rotation,
        filters: filterString,
        mimeType: mode === "avatar" ? "image/png" : "image/jpeg",
        quality: 0.92,
      });
      onSave({ blob, url, type: aspectKey });
    } catch (err) {
      console.error("Failed to export image:", err);
    }
  }, [imageSrc, croppedAreaPixels, rotation, filterString, onSave, aspectKey, mode]);

  return (
    <div className="p-4 flex flex-col gap-6">
      {/* Image Editor */}
      <div className="relative w-full h-96 bg-black/60 rounded">
        {imageSrc ? (
          <Cropper
            image={imageSrc}
            crop={crop}
            zoom={zoom}
            rotation={rotation}
            aspect={aspect}
            onCropChange={setCrop}
            onZoomChange={setZoom}
            onCropComplete={(_, pixels) => setCroppedAreaPixels(pixels)}
            style={{
              containerStyle: { filter: filterString },
            }}
          />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-400">
            Upload or drag an image
          </div>
        )}
      </div>

      <div className="flex justify-end">
        <label className="flex items-center gap-2 text-blue-600 cursor-pointer">
          <Upload className="w-5 h-5" />
          <span>Change Image</span>
          <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
        </label>
      </div>

      {/* Tabs */}
      <div className="flex border-b">
        {["crop", "filters", "adjust"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 text-sm font-medium ${
              activeTab === tab
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Crop Tab */}
      {activeTab === "crop" && (
        <div className="space-y-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex gap-2">
              {aspectPresets.map((p) => (
                <button
                  key={p.key}
                  onClick={() => {
                    setAspectKey(p.key);
                    setAspect(p.aspect);
                  }}
                  className={`px-3 py-1 rounded ${
                    aspectKey === p.key ? "bg-blue-600 text-white" : "bg-gray-100"
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>
            <div className="flex gap-3">
              <RotateButton onClick={rotateLeft} Icon={RotateCcw} label="Left" />
              <RotateButton onClick={rotateRight} Icon={RotateCw} label="Right" />
              <RotateButton onClick={flipVertical} Icon={ArrowUp} label="Top" />
              <RotateButton onClick={flipHorizontal} Icon={ArrowDown} label="Bottom" />
            </div>
          </div>
          <CustomSlider label="Zoom" value={zoom} min={1} max={3} step={0.01} onChange={setZoom} />
        </div>
      )}

      {/* Filters Tab */}
      {activeTab === "filters" && (
        <div className="flex flex-wrap gap-6">
          {[
            { name: "Original", filter: "" },
            { name: "Studio", filter: "contrast(120%) brightness(105%)" },
            { name: "Spotlight", filter: "brightness(120%) saturate(110%)" },
            { name: "Prime", filter: "contrast(110%) saturate(120%)" },
            { name: "Classic", filter: "grayscale(50%)" },
            { name: "Edge", filter: "contrast(150%)" },
          ].map((f, i) => (
            <button
              key={i}
              className="flex flex-col items-center"
              onClick={() => {
                setBrightness(100);
                setContrast(100);
                setSaturation(100);
                if (f.filter.includes("contrast"))
                  setContrast(parseInt(f.filter.match(/\d+/)[0]));
                if (f.filter.includes("brightness"))
                  setBrightness(parseInt(f.filter.match(/\d+/)[0]));
                if (f.filter.includes("saturate"))
                  setSaturation(parseInt(f.filter.match(/\d+/)[0]));
              }}
            >
              <img
                src={imageSrc}
                className="w-16 h-16 object-cover rounded shadow"
                style={{ filter: f.filter }}
              />
              <span className="text-xs mt-1">{f.name}</span>
            </button>
          ))}
        </div>
      )}

      {/* Adjust Tab */}
      {activeTab === "adjust" && (
        <div className="space-y-4">
          <CustomSlider
            label="Brightness"
            value={brightness}
            min={50}
            max={150}
            step={1}
            onChange={setBrightness}
            gradient="bg-gradient-to-r from-black via-gray-500 to-white"
          />
          <CustomSlider
            label="Contrast"
            value={contrast}
            min={50}
            max={150}
            step={1}
            onChange={setContrast}
            gradient="bg-gradient-to-r from-gray-200 to-gray-900"
          />
          <CustomSlider
            label="Saturation"
            value={saturation}
            min={50}
            max={200}
            step={1}
            onChange={setSaturation}
            gradient="bg-gradient-to-r from-gray-400 via-green-400 to-red-500"
          />
          <CustomSlider
            label="Grayscale"
            value={grayscale}
            min={0}
            max={100}
            step={1}
            onChange={setGrayscale}
            gradient="bg-gradient-to-r from-gray-100 to-black"
          />
        </div>
      )}

      {/* Actions */}
      <div className="flex gap-2 mt-4">
        <button
          onClick={onCancel}
          className="flex-1 py-2 rounded-3xl bg-gray-200 text-gray-700"
        >
          Cancel
        </button>
        <button
          onClick={handleSave}
          className="flex-1 py-2 rounded-3xl bg-blue-600 text-white"
        >
          Save
        </button>
      </div>
    </div>
  );
}
