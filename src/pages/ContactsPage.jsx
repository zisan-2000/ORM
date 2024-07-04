import React from "react";
import AccountForm from "../components/AccountForm";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const ContactsPage = ({ onNext }) => {
  const [showAlert, setShowAlert] = React.useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  const alertMessage = {
    title: "Let's Create Your Account!",
    message: "Please follow the prompts below to complete account setup.",
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
        alertStyle="bg-pink-100 dark:bg-pink-800 border border-pink-300 dark:border-pink-600 text-pink-600 dark:text-pink-300"
        onToggleSidebar={handleToggleSidebar}
      />
      <Sidebar isOpen={isSidebarOpen} activePage="/contacts" />
      <div className="flex-grow mt-[80px] md:ml-[226px] md:mt-[100px] flex justify-center items-center w-full h-auto md:h-[980px] dark:bg-gray-900">
        <AccountForm onNext={onNext} />
      </div>
    </div>
  );
};

export default ContactsPage;
