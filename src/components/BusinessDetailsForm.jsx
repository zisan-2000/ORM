import React, { useState } from "react";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";

const BusinessDetailsForm = ({ onNext }) => {
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
      onNext("/brand-assets");
      navigate("/brand-assets");
    }, 2000); // Redirect after 2 seconds
  };

  return (
    <div className="bg-white dark:bg-gray-900 p-4 md:p-8 shadow-md w-full max-w-[968px] mx-auto mt-16 md:mt-24 rounded-md">
      <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 dark:text-white">
        Business Details
      </h2>
      <p className="mb-4 md:mb-6 text-gray-700 dark:text-gray-300">
        Add your business details so our team has the correct information for
        creating local business listings through directory submissions. Use the
        search function by typing and selecting your business location. Search
        is powered by Google Places API and only returns profiles with a visible
        street address. You can also add your details manually.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="mb-4 md:mb-6">
          <label className="block text-gray-700 dark:text-gray-300 mb-2">
            Search For Your Business on Google Maps (Recommended)
          </label>
          <input
            type="text"
            placeholder="ABC Company Inc Newport Beach"
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded dark:bg-gray-800 dark:text-gray-300"
          />
        </div>
        <h3 className="text-lg font-bold mb-4 dark:text-white">
          Add Your Business Manually
        </h3>
        <p className="mb-4 md:mb-6 text-gray-700 dark:text-gray-300">
          Use the fields below to enter as many details as possible about your
          business. These should match your Google profile and what you want to
          display to the general public.
        </p>
        <div className="mb-4">
          <button
            type="button"
            className="w-full text-left p-4 border border-gray-300 dark:border-gray-600 rounded flex justify-between items-center dark:bg-gray-800 dark:text-gray-300"
          >
            General Information <span className="text-gray-500">▼</span>
          </button>
        </div>
        <div className="mb-4">
          <button
            type="button"
            className="w-full text-left p-4 border border-gray-300 dark:border-gray-600 rounded flex justify-between items-center dark:bg-gray-800 dark:text-gray-300"
          >
            Hours of Operation <span className="text-gray-500">▼</span>
          </button>
        </div>
        <div className="mb-4">
          <button
            type="button"
            className="w-full text-left p-4 border border-gray-300 dark:border-gray-600 rounded flex justify-between items-center dark:bg-gray-800 dark:text-gray-300"
          >
            More About the Business <span className="text-gray-500">▼</span>
          </button>
        </div>
        <div className="mb-4">
          <button
            type="button"
            className="w-full text-left p-4 border border-gray-300 dark:border-gray-600 rounded flex justify-between items-center dark:bg-gray-800 dark:text-gray-300"
          >
            Social Profile Links <span className="text-gray-500">▼</span>
          </button>
        </div>
        <div className="flex flex-col md:flex-row justify-between mt-4 md:mt-8">
          <button
            type="button"
            className="text-gray-700 dark:text-gray-300 mb-4 md:mb-0"
          >
            Save & Finish Later
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="bg-green-500 text-white py-2 px-6 rounded animate-bounce"
          >
            Next
          </button>
        </div>
      </form>
      <Modal
        isOpen={showAlert}
        onRequestClose={() => setShowAlert(false)}
        className="fixed inset-0 flex items-center justify-center p-4 bg-transparent"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        <div className="bg-white dark:bg-gray-800 p-6 rounded shadow-lg">
          <h3 className="text-lg font-bold mb-4 dark:text-white">
            Form is completed!
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Let's go to the next form!
          </p>
          <button
            onClick={() => setShowAlert(false)}
            className="bg-green-500 text-white py-2 px-4 rounded"
          >
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default BusinessDetailsForm;
