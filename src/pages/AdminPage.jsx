import SideBar from "../components/SideBar.jsx";
import AdminLoginOverlay from "../components/AdminLoginOverlay.jsx";
import { Outlet, redirect, useLoaderData, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

//hämta data
//loaders (om det används)  måste returnera något. om det inte ska returnera något, returnera null
export async function loader() {
  return null;
}

//hantera form actions
//actions (om det används) måste returnera något. om det inte ska returnera något, returnera null
export async function action() {
  return null;
}

function getCookie(name) {
  const nameEQ = name + "=";
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

export default function AdminPage() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check for admin cookie on component mount
    const adminCookie = getCookie("adminLoggedIn");
    if (adminCookie) {
      setIsLoggedIn(true); // Set logged in if cookie exists
    }
  }, []);

  const handleLogin = () => {
    // Set cookie when the user logs in
    setCookie("adminLoggedIn", "true", 1); // 1 day expiry
    setIsLoggedIn(true); // Hide overlay after successful login
  };

  return (
    <div className="min-h-screen relative">
      {/* Conditionally render the overlay if not logged in */}
      {!isLoggedIn && (
        <div className="absolute top-0 left-0 w-full h-full z-50">
          <AdminLoginOverlay onLogin={handleLogin} />
        </div>
      )}

      {/* Page Content */}
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <div className="w-64">
          <SideBar isOpen={isSidebarOpen} />
        </div>

        {/* Main Content Holders */}
        <div
          className={`flex-grow transition-all duration-300 ${
            isSidebarOpen ? "ml-10" : "-ml-64 md:ml-10"
          }`}
        >
          {/* Hamburger Menu for smaller screens */}
          <button
            className="p-2.5 z-50 top-0 left-6 border border-lavender bg-adminGray text-lavender rounded absolute md:invisible"
            onClick={() => setSidebarOpen(!isSidebarOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          {/* Main content rendered via Outlet */}
          <Outlet />
        </div>
      </div>
    </div>
  );
}
