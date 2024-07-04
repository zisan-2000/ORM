import React from "react";
import BusinessDetailsForm from "../components/BusinessDetailsForm";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const BusinessDetails = ({ onNext }) => {
  const [showAlert, setShowAlert] = React.useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  const alertMessage = {
    title: "Great job. Keep going!",
    message: "Just a few more steps before our team can get to work.",
  };

  React.useEffect(() => {
    setShowAlert(true);
  }, []);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col md:flex-row">
      <Navbar
        showAlert={showAlert}
        alertMessage={alertMessage}
        alertStyle="bg-yellow-100 dark:bg-yellow-800 border border-yellow-300 dark:border-yellow-600 text-yellow-600 dark:text-yellow-300"
        onToggleSidebar={handleToggleSidebar}
      />
      <Sidebar isOpen={isSidebarOpen} activePage="/business-details" />
      <div className="flex-grow mt-[80px] md:ml-[226px] md:mt-[100px] flex justify-center items-center w-full h-auto md:h-[980px] dark:bg-gray-900">
        <BusinessDetailsForm onNext={onNext} />
      </div>
    </div>
  );
};

export default BusinessDetails;
