import SideBar from "../components/SideBar.jsx";
import TrackedEmails from "../components/TrackedEmails.jsx";
import AvailableQuizzes from "../components/AvailableQuizzes.jsx";
import CreateQuiz from "../components/CreateQuiz.jsx";
import AddNewQuestion from "../components/AddNewQuestion.jsx";

function AdminPage() {
  return (
    <>
      <div>
        <div className=" min-h-20">
          <h1 className="text-white">ADMINPAGE</h1>
        </div>
        <div className="flex h-screen">
          {/* Sidebar menu */}
          <SideBar />

          {/* Main Content Holders */}
          <div className="w-9/12">
            {/* Display for users/emails */}
            <TrackedEmails />

            {/* Display for all quizzes */}
            <AvailableQuizzes />

            {/* PLACEHOLDER DISPLAY FOR CREATE QUIZ*/}
            <CreateQuiz />
            <AddNewQuestion />
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminPage;
