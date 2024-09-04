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
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 flex justify-between items-center shadow-md">
      <p className="text-sm">
        We use cookies to improve your experience. By using our site, you agree
        to our use of cookies.
      </p>
      <div className="space-x-4">
        <button
          onClick={handleAccept}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
        >
          Accept
        </button>
        <button
          onClick={handleDecline}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
        >
          Decline
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
