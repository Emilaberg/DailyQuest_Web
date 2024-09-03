import Welcome from "../components/Welcome";
import TodaysQuest from "../components/Todaysquest";
import Navbar from "../components/Navbar";
import ApiService from "../hooks/apiService";
import { useEffect, useState } from "react";
function HomePage() {
  const apiService = ApiService();

  const [quiz, setQuiz] = useState([]);
  useEffect(() => {
    async function fetchData() {
      let res = await apiService.getAllQuiz();
      setQuiz(res);
    }
    fetchData();
  }, []);

  // useEffect(() => {
  //   console.log(quiz);
  // }, [quiz]);

  return (
    <>
      <Navbar />
      <section className="flex items-center justify-center min-h-screen">
        <Welcome />
      </section>
      <section className="flex items-center justify-center ">
        <TodaysQuest />
      </section>
      {quiz.length < 1 ? (
        <div className="text-white">loading...</div>
      ) : (
        quiz.map((quiz) => (
          <div
            key={quiz.quizId}
            className="text-white"
          >
            {quiz.quizName}
          </div>
        ))
      )}
    </>
  );
}

export default HomePage;
