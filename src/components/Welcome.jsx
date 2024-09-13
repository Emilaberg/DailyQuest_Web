import { Link } from "react-router-dom";

function Welcome() {
  return (
    <>
      <div className="p-6 flex flex-col justify-center items-center">
        <h1 className="text-center text-white text-6xl font-bold rotate-[-20deg] mb-20 opacity-85">
          Welcome to DailyQuest
        </h1>
        <h3 className="text-white text-xl mb-3 opacity-85">
          A new quiz every day, from games such as:
        </h3>
        <h2 className="text-white text-2xl font-bold mb-3 opacity-85">
          World of Warcraft
        </h2>
        <h2 className="text-white text-2xl font-bold mb-3 opacity-85">
          League of Legends
        </h2>
        <h2 className="text-white text-2xl font-bold opacity-85">
          and MANY more...
        </h2>
        <a href="#browse-games">
          <div className="flex justify-center items-center text-white mt-10 text-lg min-h-[50px] min-w-[151px] text-center rounded-[10px] bg-gradient-border cursor-pointer">
            <div className="flex items-center justify-center h-[46px] w-[147px] bg-midnightBlue rounded-[8px] hover:bg-transparent transition-all ease-in duration-150 ">
              <h3 className="text-center">Browse quizzes</h3>
            </div>
          </div>
        </a>
      </div>
    </>
  );
}

export default Welcome;
