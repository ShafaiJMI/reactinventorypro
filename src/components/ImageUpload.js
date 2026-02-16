import React, { useState } from 'react';

const ImageUpload = () => {
  const [images, setImages] = useState([]);

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setImages([...images, ...selectedFiles]);
  };

  return (
    <div className="grid grid-cols-3 gap-2">
    {images.map((image, index) => (
        <div key={index} className="relative">
          <img
            src={URL.createObjectURL(image)}
            alt={`Uploaded Image ${index + 1}`}
            className="w-52 h-56 border-2 border-solid rounded-lg object-cover"
          />
        </div>
      ))}
    <div className="w-52 h-56 rounded-lg border-2 border-solid bg-gray-200 relative">
      <input type="file" className="absolute w-full opacity-0 h-full inset-0 z-10" accept="image/*" multiple onChange={handleFileChange}/>
      <div className="absolute inset-0 flex justify-center items-center text-gray-500">
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
        </svg>
      </div>
    </div>
    </div>
  );
};

export default ImageUpload;
