import React, { useRef, useState } from "react";
import { importForklifts } from "../api/ForkliftApi";

interface Props {
  onUpload: () => void;
}

const ForkliftUploader: React.FC<Props> = ({ onUpload }) => {
  const fileInput = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<string>("");

  const handleFileChange = () => {
    if (fileInput.current?.files && fileInput.current.files[0]) {
      setSelectedFile(fileInput.current.files[0].name);
    } else {
      setSelectedFile("");
    }
  };

  const handleUpload = async () => {
    if (fileInput.current?.files && fileInput.current.files[0]) {
      try {
        await importForklifts(fileInput.current.files[0]);
        onUpload();
        fileInput.current.value = "";
        setSelectedFile("");
      } catch {
        alert("Failed to upload forklift data.");
      }
    }
  };

  return (
    <div className="mb-10 flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-md w-full max-w-md mx-auto">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Upload Forklift Data
      </h2>

      {/* Hidden File Input */}
      <input
        id="fileInput"
        type="file"
        accept=".csv,.json"
        ref={fileInput}
        onChange={handleFileChange}
        className="hidden"
      />

      {/* Custom Upload Label */}
      <label
        htmlFor="fileInput"
        className="cursor-pointer border-2 border-dashed border-gray-300 rounded-xl p-6 w-full text-center hover:border-blue-500 hover:bg-blue-50 transition"
      >
        <span className="text-gray-600">
          Click here to select a CSV or JSON file
        </span>
      </label>

      {/* Show selected file name */}
      {selectedFile && (
        <p className="mt-2 text-sm text-gray-700">Selected file: {selectedFile}</p>
      )}

      {/* Upload Button */}
      <button
        type="button"
        onClick={handleUpload}
        disabled={!selectedFile}
        className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition disabled:bg-gray-300"
      >
        Upload
      </button>
    </div>
  );
};

export default ForkliftUploader;

