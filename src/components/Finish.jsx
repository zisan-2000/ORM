import React, { useState } from "react";

const Finish = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleEnterDashboard = () => {
    setShowAlert(true);
    setTimeout(() => {
      // Here you can add the logic to navigate to the dashboard if needed
      // navigate("/dashboard");
    }, 2000); // Keep the alert for 2 seconds before navigating or doing something else
  };

  return (
    <div className="bg-white dark:bg-gray-900 p-4 md:p-8 shadow-md w-full max-w-[968px] mx-auto mt-16 md:mt-24 rounded-md text-center">
      <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 dark:text-white">
        Setup Complete!
      </h2>
      <p className="mb-4 md:mb-6 text-gray-700 dark:text-gray-300">
        Let’s take a 1 minute tour of your SEO dashboard. Click the button below
        to begin.
      </p>
      <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
        <button className="bg-gradient-to-b from-[#0FD03B] to-[#0B9229] text-white py-2 px-6 rounded">
          Begin 1 Minute Tour
        </button>
        <button
          className="bg-gradient-to-b from-[#00ADEF] to-[#2B3D8E] text-white py-2 px-6 rounded"
          onClick={handleEnterDashboard}
        >
          Enter Dashboard
        </button>
      </div>
      {showAlert && (
        <div className="bg-green-100 dark:bg-green-800 border border-green-300 dark:border-green-600 text-green-600 dark:text-green-300 p-4 rounded mt-4">
          All have been submitted. Thank you!
        </div>
      )}
    </div>
  );
};

export default Finish;
