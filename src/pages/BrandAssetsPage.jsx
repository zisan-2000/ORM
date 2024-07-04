import React, { useEffect, useState } from "react";
import BrandAssetsForm from "../components/BrandAssetsForm";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const BrandAssetsPage = ({ onNext }) => {
  const [showAlert, setShowAlert] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const alertMessage = {
    title: "You're halfway there!",
    message: "Moving right along. Making awesome progress.",
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
        alertStyle="bg-blue-100 dark:bg-blue-800 border border-blue-300 dark:border-blue-600 text-blue-600 dark:text-blue-300"
        onCloseAlert={handleCloseAlert}
        onToggleSidebar={handleToggleSidebar}
      />
      <Sidebar isOpen={isSidebarOpen} activePage="/brand-assets" />
      <div className="flex-grow mt-[80px] md:ml-[226px] md:mt-[100px] flex justify-center items-center w-full h-auto md:h-[980px] dark:bg-gray-900">
        <BrandAssetsForm onNext={onNext} />
      </div>
    </div>
  );
};

export default BrandAssetsPage;
