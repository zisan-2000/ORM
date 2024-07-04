import React, { useState } from "react";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";

const GrantAccessForm = ({ onNext }) => {
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
      onNext("/finish");
      navigate("/finish");
    }, 2000); // Redirect after 2 seconds
  };

  return (
    <div className="bg-white dark:bg-gray-900 p-4 md:p-8 shadow-md w-full max-w-[964px] mx-auto mt-16 md:mt-24 rounded-md">
      <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 dark:text-white">
        Access & Permissions
      </h2>
      <p className="mb-4 md:mb-6 text-gray-700 dark:text-gray-300">
        <em>
          “Woah Woah! Slow your role brochacho! We just met and you’re already
          asking for access to my website?”
        </em>
      </p>
      <p className="mb-4 md:mb-6 text-gray-700 dark:text-gray-300">
        Yes, our team will need access to your website to do things like
        optimize content, resolve errors, improve PageSpeed, and a hundred other
        things. If you’d prefer to wait and provide us access later, that’s ok
        too. You can provide your account manager a login from the dashboard.
      </p>
      <p className="mb-4 md:mb-6 text-gray-700 dark:text-gray-300">
        To get this done now (recommended) use the secure area below to provide
        access.
      </p>
      <p className="mb-4 md:mb-6 text-gray-700 dark:text-gray-300">
        For best results, we recommend giving us access to the following:
      </p>
      <ul className="mb-4 md:mb-6 list-disc list-inside text-gray-700 dark:text-gray-300">
        <li>Website CMS (ie: Wordpress)</li>
        <li>Google Business Profile</li>
        <li>Google Analytics (optional)</li>
        <li>Search Console (optional)</li>
      </ul>
      <p className="mb-4 md:mb-6 text-gray-700 dark:text-gray-300">
        <strong>Delegating Access</strong>
        <br />
        If you are delegating access, please assign admin or manager permissions
        to{" "}
        <a
          href="mailto:agent@ocseo.com"
          className="text-blue-600 dark:text-blue-400"
        >
          agent@ocseo.com
        </a>
      </p>
      <form onSubmit={handleSubmit}>
        <div className="mb-4 md:mb-6">
          <label className="block text-gray-700 dark:text-gray-300 mb-2">
            Provide Login
          </label>
          <select className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded mb-4 dark:bg-gray-800 dark:text-gray-300">
            <option>Select Type</option>
            <option>Website CMS</option>
            <option>Google Business Profile</option>
            <option>Google Analytics</option>
            <option>Search Console</option>
          </select>
          <input
            type="text"
            placeholder="Username"
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded mb-4 dark:bg-gray-800 dark:text-gray-300"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded mb-4 dark:bg-gray-800 dark:text-gray-300"
          />
          <input
            type="text"
            placeholder="Note or other info"
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded mb-4 dark:bg-gray-800 dark:text-gray-300"
          />
          <button
            type="button"
            className="w-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 py-2 rounded border border-gray-300 dark:border-gray-600"
          >
            + Add Login
          </button>
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
            Finish
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

export default GrantAccessForm;
