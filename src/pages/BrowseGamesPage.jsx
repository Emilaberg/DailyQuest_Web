// Imports
import { useLoaderData } from "react-router-dom";
import ApiService from "../hooks/apiService";
import { useState } from "react";

// Components
import BrowseAll from "../components/BrowseAll";

// Loaders
export async function loader({ params }) {
  const apiCaller = ApiService();
  const response = await apiCaller.getAllQuiz();
  const allQuiz = response.data.$values;
  return { allQuiz };
}

export default function BrowseGamesPage() {
  // Loader
  // const { allQuiz } = useLoaderData();

  // States
  // const [quizzes, setQuizzes] = useState(allQuiz || []);

  return (
    <>
      <div className="bg-[url(../src/assets/backgrounds/landing_page_blob.svg)] bg-no-repeat bg-center bg-cover">
        <section className="flex items-center justify-center h-screen">
          <BrowseAll limit={undefined} />
        </section>
      </div>
    </>
  );
}
