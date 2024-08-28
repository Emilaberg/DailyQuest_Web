import SideBar from "../components/SideBar.jsx";
import TrackedEmails from "../components/TrackedEmails.jsx";
import AvailableQuizzes from "../components/AvailableQuizzes.jsx";

function AdminPage() {
  return (
    <>
      <div>
        <div className=" min-h-20">
          <h1 className="text-white">ADMINPAGE</h1>
        </div>
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
