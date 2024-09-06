import GameCard from "./GameCard";
import ApiService from "../hooks/apiService";
import { useState, useEffect } from "react";

function BrowseAll() {
  const apiService = ApiService();
  const [quizzes, setQuizzes] = useState([]);
  const [searchWord, setSearchWord] = useState("");

  useEffect(() => {
    async function fetchQuizzes() {
      var response = await apiService.getAllMetaTags();
      setQuizzes(response);
    }
    fetchQuizzes();
  }, []);

  const filterBrowser = quizzes.filter((quiz) =>
    quiz.tagName.toLowerCase().includes(searchWord.toLowerCase())
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
                <input
                  type="text"
                  placeholder="Search.."
                  className="flex-1 p-2 text-white bg-midnightBlue border-none rounded-md outline-none font-bold"
                  value={searchWord}
                  onChange={(e) => setSearchWord(e.target.value)}
                />
                <button className="absolute right-0 mr-2 px-4 py-1 text-white bg-primaryblue rounded-md hover:bg-oceanBlue">
                  Search
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 md:gap-6 md:grid-cols-3">
            {filterBrowser.map((tag, index) => (
              <GameCard
                key={index}
                imageUrl={"src/assets/images/cards/world-of-warcraft.png"}
                gameName={tag.tagName}
              />
            ))}
            {/* <GameCard
              imageUrl={"src/assets/images/cards/world-of-warcraft.png"}
              gameName={"World of Warcraft"}
            />
            <GameCard
              imageUrl={"src/assets/images/cards/league.png"}
              gameName={"League of Legends"}
            />
            <GameCard
              imageUrl={"src/assets/images/cards/Super_mario.png"}
              gameName={"Super-Mario"}
            />
            <GameCard
              imageUrl={"src/assets/images/cards/diablo.png"}
              gameName={"Diablo"}
            />
            <GameCard
              imageUrl={"src/assets/images/cards/counterstrike.png"}
              gameName={"Counter-strike"}
            />
            <GameCard
              imageUrl={"src/assets/images/cards/GTA_5.png"}
              gameName={"Grand Theft Auto 5"}
            /> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default BrowseAll;
