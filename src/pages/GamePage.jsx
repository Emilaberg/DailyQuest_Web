import QuizComponent from "../components/QuizComponent";
import Navbar from "../components/Navbar";
import TodaysQuest from "../components/Todaysquest";
import BannerComponent from "../components/BannerComponent";
import { useLoaderData, useLocation, useParams } from "react-router-dom";
import ApiService from "../hooks/apiService";
import { useEffect, useState } from "react";

//hämta data
//loaders (om det används) måste returnera något. om det inte ska returnera något, returnera null
export async function loader({ params }) {
  const apiCaller = ApiService();
  const response = await apiCaller.getQuizbyId(params.quizId);
  const quiz = response.data;
  return { quiz };
}

//hantera form actions
//actions (om det används) måste returnera något. om det inte ska returnera något, returnera null
export async function action() {
  return null;
}

export default function GamePage() {
  const { quiz } = useLoaderData();
  const [quizQuestions, setQuizQuestions] = useState(
    quiz.quizQuestions.$values
  );

  return (
    <div
      style={{
        backgroundImage: `url(../src/assets/backgrounds/landing_page_blob.svg)`,
      }}
      className="bg-no-repeat bg-center bg-cover"
    >
      <BannerComponent
        title={quiz.quizName}
        imageUrl={quiz.imageUrl}
      />
      <section className="flex items-center justify-center lg:mx-72 my-10">
        <TodaysQuest
          imageUrl={"../src/assets/images/Image-missing.jpg"}
          textPrompt="THIS IS WHERE AWESOME TEXT SHOULD BE "
          quiz={quiz}
        />
      </section>
      <section className="mx-auto bg-midnightBlue_V2 px-5 py-2 text-white mb-32 w-2/3">
        <h1 className="text-5xl text-center">{quiz.quizName}</h1>

        <div>
          <h2 className="font-bold mb-3 text-2xl">
            What is {quiz.quizName} for game?
          </h2>
          <p className="text-2xl">{quiz.quizDescription}</p>

          <p className="text-2xl mt-10">
            <span className="font-bold">{quiz.quizName} Challenge</span>
            <br />
            {quiz.quizChallenge}
          </p>
        </div>
      </section>

      <section className="min-h-screen">
        <QuizComponent
          quizQuestions={quizQuestions}
          questionTitle={quiz.quizName}
        />
      </section>
    </div>
  );
}
