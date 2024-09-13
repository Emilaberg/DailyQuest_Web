import { Link } from "react-router-dom";

function TodaysQuest({ textPrompt, imageUrl, quizName, quiz }) {
  return (
    <>
      <div className="w-3/4">
        <div className="flex justify-center md:justify-start md:ml-3 lg:justify-start mb-10">
          <h1 className="text-white text-2xl uppercase font-bold mb-2 tracking-wider lg:text-3xl ">
            {quiz.quizName}
          </h1>
        </div>

        <div className="flex w-full h-56 items-center justify-center bg-gradient-border px-4 py-4 rounded-[27px] mb-24 md:h-96">
          <div
            className="relative w-full h-full bg-center bg-no-repeat bg-cover rounded-[13.5px]"
            style={{ backgroundImage: `url(${quiz.imageUrl})` }}
          >
            {/* overlay */}
            <div className="absolute w-full h-full bg-black rounded-[13.5px] opacity-50"></div>
            {/* overlay */}
            <div className="absolute justify-center flex flex-col w-full h-full items-center px-44">
              <h1 className="text-white -mt-5  text-lg text-center text-shadow-2xl font-bold leading-tight md:text-4xl lg:text-5xl">
                {quiz.quizName}
              </h1>
              {/* breaks box and everything, whole component need redesign */}
              <p className="text-white text-lg my-5 text-center text-shadow-2xl opacity-80 lg:text-xl text-ellipsis whitespace-nowrap overflow-hidden w-2/3">
                {quiz.quizChallenge}
              </p>
              <button className="text-white font-bold text-xs border-2 rounded-xl w-36 h-8 border-blue-600 bg-slateBlue hover:bg-blue-600 md:w-48 md:text-base md:mt-3 lg:w-60 lg:text-lg transition-colors ease-in duration-200">
                <Link to={`games/${quiz.quizId}`}>PLAY THE QUIZ NOW</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TodaysQuest;
