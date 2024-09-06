import SideBar from "../components/SideBar.jsx";
import { Outlet, redirect, useLoaderData, useLocation } from "react-router-dom";
import { useState } from "react";

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

export default function AdminPage() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div className="min-h-screen flex relative">
        <div className="w-64">
          {/* Sidebar */}
          <SideBar isOpen={isSidebarOpen} />
        </div>

        {/* Main Content Holders */}
        <div
          className={`flex-grow transition-all duration-300 ${
            isSidebarOpen ? "ml-0" : "-ml-64"
          }`}
        >
          {/* Hamburger Menu for smaller screens */}
          <button
            className="p-2.5 z-50 top-0 left-6 border border-lavender bg-adminGray text-lavender rounded absolute"
            onClick={() => setSidebarOpen(!isSidebarOpen)}
          >
            {/* Hamburger icon */}
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
          <div className="mr-20">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
