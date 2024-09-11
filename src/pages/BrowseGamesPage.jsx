import { useLoaderData } from "react-router-dom";
import ApiService from "../hooks/apiService";
import { useState } from "react";
import GameCard from "../components/GameCard";
import { Link } from "react-router-dom";
// import BigBrowseComponent from "../components/BigBrowseComponent";
import BrowseAll from "../components/BrowseAll";

// export async function loader({ params }) {
//   const apiCaller = ApiService();
//   const response = await apiCaller.getQuizbyId(params.quizId);
//   const quiz = response.data;
//   return { quiz };
// }

export async function loader({ params }) {
  const apiCaller = ApiService();
  const response = await apiCaller.getAllQuiz();
  const allQuiz = response.data.$values;
  return { allQuiz };
}

export default function BrowseGamesPage() {
  const { allQuiz } = useLoaderData();
  console.log(allQuiz);
  const [quizzes, setQuizzes] = useState(allQuiz || []);
  console.log("quizzes", quizzes);

  return (
    <>
      <div className="bg-[url(../src/assets/backgrounds/landing_page_blob.svg)] bg-no-repeat bg-center bg-cover">
        <section>
          <BrowseAll />
          {/* <BigBrowseComponent/> */}
        </section>
      </div>
      {/* <div className="grid grid-cols-3 gap-6">
        {quizzes.map((quiz, index) => (
          <div className="h-auto w-full">
            <Link
              className="cursor-pointer transition-transform transform hover:scale-105 duration-300 ease-in-out border-b-4 border-transparent hover:border-primaryblue"
              to={`/games/${quiz.quizId}`}
            >
              <div className="flex flex-col justify-end">
                <img
                  className=" bg-center bg-no-repeat bg-contain"
                  src={`${quiz.imageUrl}`}
                />
              </div>
              <div className="flex items-center w-full justify-start py-1 bg-slateBlue lg:py-2 ">
                <h3 className="text-white font-medium text-xs pl-2 md:text-sm lg:text-base xl:text-lg ">
                  {quiz.quizName}
                </h3>
              </div>
            </Link>
          </div>
        ))}
      </div> */}
    </>
  );
}
