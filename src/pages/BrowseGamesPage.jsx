// Imports
import { useLoaderData } from "react-router-dom";
import ApiService from "../hooks/apiService";
import { useState } from "react";

// Components
import BrowseAll from "../components/BrowseAll";
import BannerComponent from "../components/BannerComponent";

// Loaders
export async function loader({ params }) {
  const apiCaller = ApiService();
  const response = await apiCaller.getAllQuiz();
  const allQuiz = response.data.$values;
  return { allQuiz };
}

export default function BrowseGamesPage() {
  // Loader;
  // const { allQuiz } = useLoaderData();

  // States;
  // const [quizzes, setQuizzes] = useState(allQuiz || []);

  return (
    <>
      <div className="bg-gradient-to-br from-0 from-[#05060B] to-100 to-[#11284B] pt-[100px] pb-60">
        <section>
          <BannerComponent
            title={"Browse games"}
            imageUrl="../src/assets/images/browseBannerMixGames.png"
          />
        </section>

        <section className="flex items-center justify-center h-screen">
          <BrowseAll limit={undefined} />
        </section>
      </div>
    </>
  );
}
