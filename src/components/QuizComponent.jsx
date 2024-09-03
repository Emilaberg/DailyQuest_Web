import { useEffect, useState } from "react";
import ApiService from "../hooks/apiService";
import { useLocation } from "react-router-dom";

function QuizComponent() {
  const apiService = ApiService();
  const [quiz, setQuiz] = useState([]);
  const [questions, setQuestion] = useState([]);
  //get state from route
  let { state } = useLocation();

  useEffect(() => {
    async function fetchData() {
      var res = await apiService.getQuizbyId(state.quizId);
      console.log(res);
      setQuiz(res);
    }

    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      {/* quiz container */}
      <div className="relative w-full px-5 md:w-4/6 lg:w-3/5 xl:w-1/2 md:px-0 mt-20">
        <img
          className="w-full"
          src="../src/assets/images/zeldaChillin.png"
          alt=""
        />
        {/* buttons container */}
        <div className="py-4 px-2 md:px-3 w-full flex justify-between items-center bg-slateBlue text-lightSlateGray">
          <div className="flex flex-col-reverse lg:flex-row lg:min-w-fit items-center cursor-pointer">
            <img
              className="scale-50 lg:scale-75 "
              src="src\assets\icons\arrow_left.svg"
              alt=""
            />
            <span className="font-semibold text-xs md:text-sm lg:text-lg ">
              previous
            </span>
          </div>
          <div className="flex font-semibold items-center text-sm mx-3 md:mx-1 lg:mx-10 lg:text-lg max-w-[calc(screen/3)]">
            <span className="min-w-0">
              What is the name of this handsome boy of this handsome boy of this
              handsome boy of this handsome boy of this handsome boy of this
              handsome boy of this handsome boy
            </span>
          </div>
          <div className="flex flex-col lg:flex-row lg:min-w-fit  items-center cursor-pointer">
            <span className="font-semibold text-xs md:text-sm lg:text-lg lg:min-w-0">
              next
            </span>
            <img
              className="rotate-180 scale-50 lg:scale-75"
              src="src\assets\icons\arrow_left.svg"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* answer alternativs */}
      <div className="w-full md:w-4/6 lg:w-3/5 xl:w-[45%]">
        <div className="grid grid-cols-2 gap-3 px-5 md:px-0 font-semibold text-lg   xl:text-2xl capitalize  text-white mt-5">
          <div className="py-3 xl:py-5 rounded-2xl text-center bg-slateBlue cursor-pointer hover:bg-primaryblue hover:-translate-y-1 transition-all ease-in duration-200">
            lanky kong
          </div>
          <div className="py-3 xl:py-5 rounded-2xl text-center bg-slateBlue cursor-pointer hover:bg-primaryblue hover:-translate-y-1 transition-all ease-in duration-200">
            zelda
          </div>
          <div className="py-3 xl:py-5 rounded-2xl text-center bg-slateBlue cursor-pointer hover:bg-primaryblue hover:-translate-y-1 transition-all ease-in duration-200">
            link
          </div>
          <div className="py-3 xl:py-5 rounded-2xl text-center bg-slateBlue cursor-pointer hover:bg-primaryblue hover:-translate-y-1 transition-all ease-in duration-200">
            nashor
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuizComponent;
