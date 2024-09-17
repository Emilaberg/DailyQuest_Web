import { Link } from "react-router-dom";
import React from "react";

function GameCard({ imageUrl, gameName, quizId }) {
  return (
    <>
      <Link
        data-testid="quizId"
        className="cursor-pointer transition-transform transform hover:scale-105 duration-300 ease-in-out border-b-4 border-transparent hover:border-primaryblue"
        to={`/games/${quizId}`}
      >
        <div className="flex flex-col justify-end ">
          <img
            data-testid="imageUrl"
            className="w-full h-[150px] object-cover object-center"
            src={`${imageUrl}`}
          />
        </div>
        <div className="flex items-center w-full justify-start py-1 bg-slateBlue lg:py-2 ">
          <h3
            data-testid="gameName"
            className="text-white font-medium text-xs pl-2 md:text-sm lg:text-base xl:text-lg "
          >
            {gameName} - Quiz
          </h3>
        </div>
      </Link>
    </>
  );
}

export default GameCard;
