import { useLoaderData } from "react-router-dom";
import ApiService from "../hooks/apiService";
import { useState } from "react";

// export async function loader({ params }) {
//   const apiCaller = ApiService();
//   const response = await apiCaller.getQuizbyId(params.quizId);
//   const quiz = response.data;
//   return { quiz };
// }

export async function loader() {
  const apiCaller = ApiService();
  const response = await apiCaller.getAllQuiz();

  const allQuiz = response.data.$values;
  return { allQuiz };
}

export default function BrowseGamesPage() {
  const { quiz } = useLoaderData();
  const { quizzes, setQuizzes } = useState(quiz.data.$values);

  return (
    <>
      <h1 className="text-3xl text-white">Hello from browse-games-page</h1>
    </>
  );
}
