import QuizComponent from "../components/QuizComponent";
import Navbar from "../components/Navbar";
import TodaysQuest from "../components/Todaysquest";
import BannerComponent from "../components/BannerComponent";
import { useLoaderData, useLocation, useParams } from "react-router-dom";
import ApiService from "../hooks/apiService";
import { useEffect, useState } from "react";
import HelpingHand from "../components/HelpingHand";
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
    <div className="bg-gradient-to-br from-0 from-[#05060B] to-100 to-[#11284B] pt-[100px]">
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
      <section className="mx-auto bg-midnightBlue_V2 px-10 py-10 rounded-xl text-white mb-32 w-2/3">
        <h1 className="text-5xl text-center mb-10 font-semibold">
          {quiz.quizName}
        </h1>

        <div>
          <h2 className="font-bold mb-3 text-2xl">
            What is {quiz.quizName} for game?
          </h2>
          <p className="text-2xl">{quiz.quizDescription}</p>

          <h2 className="text-2xl mt-10 mb-3">
            <span className="font-bold">{quiz.quizName} Challenge</span>
          </h2>
          <p className="text-2xl">{quiz.quizChallenge}</p>
        </div>
        <a
          href="#quiz"
          className="text-xl mt-5 underline"
        >
          Lets Play!
        </a>
      </section>

      <section
        id="quiz"
        className="min-h-screen pt-32"
      >
        <QuizComponent
          quizQuestions={quizQuestions}
          questionTitle={quiz.quizName}
        />
      </section>

      <section className="w-full flex justify-center mt-20 pb-60">
        <div className="w-2/3">
          <HelpingHand />
        </div>
      </section>
    </div>
  );
}
