import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { ThemeContext } from "./context/ThemeContext";
import BrandAssetsPage from "./pages/BrandAssetsPage";
import BusinessDetails from "./pages/BusinessDetails";
import ContactsPage from "./pages/ContactsPage";
import FinishPage from "./pages/FinishPage";
import GrantAccessPage from "./pages/GrantAccessPage";

const App = () => {
  const [activePage, setActivePage] = useState("/contacts");

  const handleNext = (nextPage) => {
    setActivePage(nextPage);
  };

  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <div className={`flex ${theme}`}>
          <Sidebar activePage={activePage} />
          <div className="flex-grow">
            <Navbar />
            <Routes>
              <Route
                path="/contacts"
                element={
                  <ContactsPage
                    onNext={() => handleNext("/business-details")}
                  />
                }
              />
              <Route
                path="/business-details"
                element={
                  <BusinessDetails onNext={() => handleNext("/brand-assets")} />
                }
              />
              <Route
                path="/brand-assets"
                element={
                  <BrandAssetsPage onNext={() => handleNext("/grant-access")} />
                }
              />
              <Route
                path="/grant-access"
                element={
                  <GrantAccessPage onNext={() => handleNext("/finish")} />
                }
              />
              <Route path="/finish" element={<FinishPage />} />
              <Route
                path="/"
                exact
                element={
                  <ContactsPage
                    onNext={() => handleNext("/business-details")}
                  />
                }
              />
            </Routes>
          </div>
        </div>
      )}
    </ThemeContext.Consumer>
  );
};

export default App;
