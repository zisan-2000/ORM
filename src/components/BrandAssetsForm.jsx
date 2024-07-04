import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const BrandAssetsForm = ({ onNext }) => {
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
  };

  const handleNext = () => {
    setShowAlert(true);
    setTimeout(() => {
      onNext("/grant-access");
      navigate("/grant-access");
    }, 2000); // Redirect after 2 seconds
  };

  return (
    <div className="bg-white dark:bg-gray-900 p-4 md:p-8 shadow-md w-full max-w-[964px] mx-auto mt-16 md:mt-24 rounded-md">
      <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 dark:text-white">
        Brand Assets
      </h2>
      <p className="mb-4 md:mb-6 text-gray-700 dark:text-gray-300">
        Use this area to provide our team content assets for your marketing. You
        can provide a logo, images, videos, text, and links to content. Feel
        free to upload files directly. More material helps us perform better
        work, and deliver better results.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="mb-4 md:mb-6">
          <label className="block text-gray-700 dark:text-gray-300 mb-2">
            Media Library
          </label>
          <div className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded h-32 flex justify-center items-center">
            <button
              type="button"
              className="text-2xl text-gray-400 dark:text-gray-600"
            >
              +
            </button>
          </div>
        </div>
        <div className="mb-4 md:mb-6">
          <label className="block text-gray-700 dark:text-gray-300 mb-2">
            Resource Links
          </label>
          <input
            type="text"
            placeholder="URL Input Field"
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded dark:bg-gray-800 dark:text-gray-300"
          />
          <button
            type="button"
            className="mt-2 w-full text-left p-2 border border-gray-300 dark:border-gray-600 rounded flex justify-center items-center dark:bg-gray-800 dark:text-gray-300"
          >
            Add Link
          </button>
        </div>
        <div className="mb-4 md:mb-6">
          <label className="block text-gray-700 dark:text-gray-300 mb-2">
            Additional Information
          </label>
          <textarea
            placeholder="Please provide any additional details or information we should know or have access to."
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded dark:bg-gray-800 dark:text-gray-300"
          />
        </div>
        <div className="flex flex-col md:flex-row justify-between mt-4 md:mt-8">
          <button
            type="button"
            className="text-gray-700 dark:text-gray-300 mb-4 md:mb-0"
          >
            Skip & Finish Later
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="bg-green-500 text-white py-2 px-6 rounded animate-bounce"
          >
            Next
          </button>
        </div>
        {showAlert && (
          <div className="bg-green-100 dark:bg-green-800 border border-green-300 dark:border-green-600 text-green-600 dark:text-green-300 p-4 rounded mt-4">
            Form is completed, Let's go next form!
          </div>
        )}
      </form>
    </div>
  );
};

export default BrandAssetsForm;
