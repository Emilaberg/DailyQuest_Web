//src / utils / CheckConsentStatus.js;
export const checkCookieConsent = () => {
  return localStorage.getItem("cookieConsent");
};

//CookieConsent.jsx;
import React, { useState, useEffect } from "react";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Check if the user has already given consent on initial render
  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  // Function to handle consent acceptance
  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
  };

  // Function to handle consent rejection
  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) {
    return null; // Do not render the component if not visible
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 flex flex-col md:flex-row justify-between items-center shadow-md gap-4 md:gap-6">
      <p className="text-sm md:text-base">
        We use cookies to improve your experience. By using our site, you agree
        to our use of cookies.
      </p>
      <div className="flex flex-col md:flex-row justify-center gap-4 w-full md:w-auto">
        <button
          onClick={handleAccept}
          className="w-full md:w-auto px-6 py-3 border-[3px] rounded-[12px] border-primaryblue bg-slateBlue text-lightSlateGray text-[14px] font-semibold hover:bg-hoverBlueHelp md:px-8 md:py-4 lg:px-10 lg:py-5"
        >
          Accept
        </button>
        <button
          onClick={handleDecline}
          className="w-full md:w-auto px-6 py-3 border-[3px] rounded-[12px] border-primaryblue bg-slateBlue text-lightSlateGray text-[14px] font-semibold hover:bg-hoverBlueHelp md:px-8 md:py-4 lg:px-10 lg:py-5"
        >
          Decline
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
