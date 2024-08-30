
import QuizComponent from "../components/QuizComponent";
import Navbar from "../components/Navbar";


function GamePage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <h1 className="text-white">GAMEPAGE</h1>
        <QuizComponent />
      </div>
    </>
  );
}

export default GamePage;
