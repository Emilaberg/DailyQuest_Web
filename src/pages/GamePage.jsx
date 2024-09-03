import QuizComponent from "../components/QuizComponent";
import { useEffect } from "react";

// function useScrollToTop() {
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);
// }

function GamePage() {
  // useScrollToTop();
  return (
    <>
      <div className="min-h-screen">
        <QuizComponent />
      </div>
    </>
  );
}

export default GamePage;
