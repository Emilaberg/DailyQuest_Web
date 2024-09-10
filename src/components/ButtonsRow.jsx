// src/components/ButtonsRow.jsx
import React from "react";

const ButtonsRow = () => {
  return (
    <div className="flex justify-between w-full mt-14 px-8">
      {/* Deckards Dilemma Button */}
      <div className="flex-none w-[600px] h-[80px] flex justify-center items-center text-white text-xl rounded-[14px] bg-gradient-border border-4 border-transparent cursor-pointer mx-2 overflow-hidden">
        <div className="flex items-center justify-center w-full h-full bg-midnightBlue rounded-[12px] p-4 hover:bg-transparent transition-all ease-in duration-150 border border-transparent">
          <h3 className="text-center">Deckards Dilemma</h3>
        </div>
      </div>

      {/* Browse Quizzes Button */}
      <div className="flex-none w-[600px] h-[80px] flex justify-center items-center text-white text-xl rounded-[14px] bg-gradient-border border-4 border-transparent cursor-pointer mx-2 overflow-hidden">
        <div className="flex items-center justify-center w-full h-full bg-midnightBlue rounded-[12px] p-4 hover:bg-transparent transition-all ease-in duration-150 border border-transparent">
          <h3 className="text-center">Browse Quizzes</h3>
        </div>
      </div>

      {/* League of Quizzes Button */}
      <div className="flex-none w-[600px] h-[80px] flex justify-center items-center text-white text-xl rounded-[14px] bg-gradient-border border-4 border-transparent cursor-pointer mx-2 overflow-hidden">
        <div className="flex items-center justify-center w-full h-full bg-midnightBlue rounded-[12px] p-4 hover:bg-transparent transition-all ease-in duration-150 border border-transparent">
          <h3 className="text-center">League of Quizzes</h3>
        </div>
      </div>
    </div>
  );
};

export default ButtonsRow;
