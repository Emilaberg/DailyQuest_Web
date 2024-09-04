import SideBar from "../components/SideBar.jsx";
import TrackedEmails from "../components/TrackedEmails.jsx";
import AvailableQuizzes from "../components/AvailableQuizzes.jsx";
import { redirect, useLoaderData, useLocation } from "react-router-dom";

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
