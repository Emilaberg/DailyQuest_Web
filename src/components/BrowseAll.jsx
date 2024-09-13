import GameCard from "./GameCard";
import ApiService from "../hooks/apiService";
import { useState, useEffect } from "react";

function BrowseAll() {
  const apiService = ApiService();
  const [quizzes, setQuizzes] = useState([]);
  const [searchWord, setSearchWord] = useState("");
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    async function fetchQuizzes() {
      try {
        const response = await apiService.getAllQuiz();

        if (response.data.$values && response.data.$values.length > 0) {
          setQuizzes(response.data.$values.slice(0, 6));
          setFetchError(null);
        } else {
          setFetchError("fetch failed");
        }
      } catch (error) {
        setFetchError(response.data.message);
        // console.log(response.message);
        console.error("Error fetching all quiz", error);
      }
    }
    fetchQuizzes();
  }, []);

  const filterBrowser = quizzes.filter((quiz) =>
    quiz.quizName.toLowerCase().includes(searchWord.toLowerCase())
  );

  return (
    <>
      <div
        id="browse-games"
        className="flex flex-col ml-8 mr-8 mb-5 justify-start"
      >
        <div className="flex flex-col mb-5 justify-start pt-20">
          <div className="mr-6 mb-5 md:justify-start md:ml-3">
            <div className="mb-2">
              <h1 className="text-white text-xl uppercase font-bold tracking-wider lg:text-3xl">
                Browse all
              </h1>
            </div>

            <div className="relative w-full max-w-lg">
              <div className="relative flex items-center p-[2px] rounded-md bg-gradient-border">
                {/* Loading circle if data takes time */}
                {/* Remove search button */}
                <input
                  type="text"
                  placeholder="Search.."
                  className="flex-1 p-2 text-white bg-midnightBlue border-none rounded-md outline-none font-bold"
                  value={searchWord}
                  onChange={(e) => setSearchWord(e.target.value)}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="absolute right-0 mr-2 px-4 py-1 h-11 w-11 fill-current text-white"
                >
                  <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 md:grid-cols-3 xl:gap-6">
            {/* Error message if tags are empty */}
            {fetchError && (
              <div className="text-white font-bold text-xl col-span-full pt-10">
                {fetchError}
              </div>
            )}
            {!fetchError &&
              filterBrowser.map((quiz, index) => (
                <GameCard
                  key={index}
                  imageUrl={quiz.imageUrl}
                  gameName={quiz.quizName}
                  quizId={quiz.quizId}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default BrowseAll;
