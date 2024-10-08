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
    <div className="bg-[url(../src/assets/backgrounds/landing_page_blob.svg)] bg-no-repeat bg-center bg-cover">
      <BannerComponent
        title={quiz.quizName}
        imageUrl={quiz.image_url}
      />
      <section className="flex items-center justify-center lg:mx-72 my-10">
        <TodaysQuest
          imageUrl={"../src/assets/images/Image-missing.jpg"}
          textPrompt="THIS IS WHERE AWESOME TEXT SHOULD BE "
        />
      </section>
      <section className="mx-auto bg-midnightBlue_V2 px-5 py-2 text-white mb-32 w-2/3">
        <h1 className="text-5xl text-center">{quiz.quizName.slice(0, 17)}</h1>

        <div>
          <h2 className="font-bold mb-3 text-2xl">
            What is {quiz.quizName.slice(0, 17)} for game?
          </h2>
          <p className="text-2xl">
            World of Warcraft (WoW) is a massively multiplayer online
            role-playing game (MMORPG) developed by Blizzard Entertainment. Set
            in the fantasy world of Azeroth, players create characters and
            embark on epic quests, battling monsters, exploring dungeons, and
            engaging in player-versus-player combat. The game is known for its
            rich lore, expansive world, and vibrant community. Players can
            choose from various races and classes, each with unique abilities
            and storylines, making every adventure unique.
          </p>

          <p className="text-2xl mt-10">
            <span className="font-bold">
              {quiz.quizName.slice(0, 17)} Challenge
            </span>
            <br />
            Test your knowledge of the World of Warcraft universe with this
            engaging quiz! This quiz contains 10 questions that cover various
            aspects of the game, including its history, characters, locations,
            and gameplay mechanics. Whether you're a seasoned WoW player or new
            to the game, this quiz will challenge your understanding and provide
            a fun way to revisit the world of Azeroth.
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
