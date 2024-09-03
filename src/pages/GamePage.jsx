import QuizComponent from "../components/QuizComponent";
import Navbar from "../components/Navbar";

function GamePage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <QuizComponent />
      </div>
    </>
  );
}

export default GamePage;
