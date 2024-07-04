import React, { useEffect, useState } from "react";
import Finish from "../components/Finish";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const FinishPage = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const alertMessage = {
    title: "Woohoo! You did it.",
    message: "Thank you for completing your account setup. Let's go!",
  };

  useEffect(() => {
    setShowAlert(true);
  }, []);

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col md:flex-row">
      <Navbar
        showAlert={showAlert}
        alertMessage={alertMessage}
        alertStyle="bg-green-100 dark:bg-green-800 border border-green-300 dark:border-green-600 text-green-600 dark:text-green-300"
        onCloseAlert={handleCloseAlert}
        onToggleSidebar={handleToggleSidebar}
      />
      <Sidebar isOpen={isSidebarOpen} activePage="/finish" />
      <div className="flex-grow mt-[80px] md:ml-[226px] md:mt-[100px] flex justify-center items-center w-full h-auto md:h-[980px] dark:bg-gray-900">
        <Finish />
      </div>
    </div>
  );
};

export default FinishPage;
