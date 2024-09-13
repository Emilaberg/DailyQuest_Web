import GradiantButton from "./GradiantButtonComponent";
import ApiService from "../hooks/apiService";
import { useState, useEffect } from "react";

function RecentlyAdded() {
  const [quizzes, setQuizzes] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const apiService = ApiService();

  useEffect(() => {
    async function fetchRecentQuiz() {
      try {
        var response = await apiService.getAllQuiz();

        if (response.data.$values && response.data.$values.length > 0) {
          setQuizzes(response.data.$values.slice(-3));
          setFetchError(null);
        } else {
          setFetchError("Fetch error, no quiz found!");
        }
      } catch (error) {
        setFetchError(response.data.message);
        console.error("Error fetching all quiz", error);
      }
    }
    fetchRecentQuiz();
  }, []);

  // useEffect(() => {
  //   async function fetchRecentQuiz() {
  //     var response = await apiService.getAllQuiz();
  //     if (response.$values === 0) {
  //       setFetchError(true);
  //     } else {
  //       const latestQuizzes = response.$values.slice(-3);
  //       setQuizzes(latestQuizzes);
  //     }
  //   }
  //   fetchRecentQuiz();
  // }, []);

  return (
    <>
      <div>
        <div className=" flex justify-center mb-4 md:justify-start">
          <h1 className="text-white text-xl uppercase font-bold tracking-wider lg:text-3xl">
            Recently added
          </h1>
        </div>
        <div className=" flex flex-row justify-between md:gap-4 lg:gap-10 xl:gap-16 ">
          {fetchError && (
            <div className="text-white font-bold text-xl col-span-full pt-10">
              {fetchError}
            </div>
          )}
          {!fetchError &&
            quizzes.map((quiz, index) => (
              <GradiantButton buttonText={quiz.quizName} key={index} />
            ))}
        </div>
      </div>
    </>
  );
}

export default RecentlyAdded;
