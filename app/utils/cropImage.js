// // src/utils/cropImage.js
// // Production-ready helper to crop (pixel crop), rotate (90° steps ok) and apply CSS filters.
// // Returns Promise<{ blob, url }>

// export default async function getCroppedImageBlobUrl({
//   imageSrc,
//   pixelCrop,           // { x, y, width, height } relative to source image pixels
//   outputWidth = null,  // final width in px (defaults to pixelCrop.width)
//   outputHeight = null, // final height in px (defaults to pixelCrop.height)
//   rotation = 0,        // degrees (works best for multiples of 90)
//   filters = "",        // CSS filter string (e.g. "brightness(110%) contrast(90%)")
//   mimeType = "image/jpeg",
//   quality = 0.9
// }) {
//   return new Promise((resolve, reject) => {
//     const img = new Image();
//     img.crossOrigin = "anonymous";
//     img.onload = () => {
//       try {
//         const srcW = img.naturalWidth;
//         const srcH = img.naturalHeight;

//         // Safety: clamp crop to image bounds
//         const sx = Math.max(0, Math.min(pixelCrop.x, srcW));
//         const sy = Math.max(0, Math.min(pixelCrop.y, srcH));
//         const sWidth = Math.max(1, Math.min(pixelCrop.width, srcW - sx));
//         const sHeight = Math.max(1, Math.min(pixelCrop.height, srcH - sy));

//         const outW = outputWidth || sWidth;
//         const outH = outputHeight || sHeight;

//         // create canvas same as output size
//         const canvas = document.createElement("canvas");
//         canvas.width = outW;
//         canvas.height = outH;
//         const ctx = canvas.getContext("2d");

//         // apply CSS filters
//         ctx.filter = filters || "none";

//         // We move origin to center to apply rotation, then draw the selected source area scaled to output
//         ctx.save();
//         ctx.translate(outW / 2, outH / 2);
//         ctx.rotate((rotation * Math.PI) / 180);
//         ctx.translate(-outW / 2, -outH / 2);

//         // drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
//         ctx.drawImage(img, sx, sy, sWidth, sHeight, 0, 0, outW, outH);

//         ctx.restore();

//         // produce Blob URL (memory-friendly)
//         canvas.toBlob((blob) => {
//           if (!blob) return reject(new Error("Canvas is empty"));
//           const url = URL.createObjectURL(blob);
//           resolve({ blob, url });
//         }, mimeType, quality);
//       } catch (err) {
//         reject(err);
//       }
//     };

//     img.onerror = (err) => reject(err);
//     img.src = imageSrc;
//   });
// }


// Production-ready helper to crop (pixel crop), rotate and apply CSS filters.
// Returns Promise<{ blob, url }>
export default async function getCroppedImageBlobUrl({
  imageSrc,
  pixelCrop,           // { x, y, width, height }
  outputWidth = null,
  outputHeight = null,
  rotation = 0,
  filters = "",
  mimeType = "image/jpeg",
  quality = 0.9,
}) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      try {
        const srcW = img.naturalWidth;
        const srcH = img.naturalHeight;

        // clamp crop area
        const sx = Math.max(0, Math.min(pixelCrop.x, srcW));
        const sy = Math.max(0, Math.min(pixelCrop.y, srcH));
        const sWidth = Math.max(1, Math.min(pixelCrop.width, srcW - sx));
        const sHeight = Math.max(1, Math.min(pixelCrop.height, srcH - sy));

        const outW = outputWidth || sWidth;
        const outH = outputHeight || sHeight;

        const canvas = document.createElement("canvas");
        canvas.width = outW;
        canvas.height = outH;
        const ctx = canvas.getContext("2d");

        ctx.filter = filters || "none";

        ctx.save();
        ctx.translate(outW / 2, outH / 2);
        ctx.rotate((rotation * Math.PI) / 180);
        ctx.translate(-outW / 2, -outH / 2);

        ctx.drawImage(img, sx, sy, sWidth, sHeight, 0, 0, outW, outH);

        ctx.restore();

        canvas.toBlob((blob) => {
          if (!blob) return reject(new Error("Canvas is empty"));
          const url = URL.createObjectURL(blob);
          resolve({ blob, url });
        }, mimeType, quality);
      } catch (err) {
        reject(err);
      }
    };
    img.onerror = (err) => reject(err);
    img.src = imageSrc;
  });
}
