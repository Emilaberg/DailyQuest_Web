import SideBar from "../components/SideBar.jsx";
import TrackedEmails from "../components/TrackedEmails.jsx";
import AvailableQuizzes from "../components/AvailableQuizzes.jsx";
import { redirect, useLocation } from "react-router-dom";
import { useEffect } from "react";
function AdminPage({ isAdmin, setIsAdmin }) {
  const location = useLocation();

  useEffect(() => {
    console.log("Location changed");
    if (location.pathname == "/admin") {
      setIsAdmin(true);
    } else {
    }
  }, [location]);
  return (
    <>
      <div>
        <div className="flex h-screen">
          <SideBar />
          {/* Main Content Holders */}
          <div className="w-9/12">
            <TrackedEmails />
            <AvailableQuizzes />
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminPage;
