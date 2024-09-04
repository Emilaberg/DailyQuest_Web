import { useEffect, useState } from "react";
import ApiService from "../hooks/apiService";
import { useLocation } from "react-router-dom";
import AnswerContainer from "./AnswerContainer";
function QuizComponent() {
  const apiService = ApiService();
  const [quiz, setQuiz] = useState([]);
  const [questions, setQuestions] = useState([]);

  //answerprops
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [answeredCorrect, setAnsweredCorrect] = useState(false);
  const [answered, setAnswered] = useState(false);

  //get state from route
  let { state } = useLocation();

  //för att styra om det finns en bild från db eller inte, detta ersätts sedan med image variabeln för varje question
  // const image = "../src/assets/images/zeldaChillin.png";
  const image = "../src/assets/images/cards/Super_mario.png";
  // const image = "";
  const styles = "mx-auto object-contain object-center";

  useEffect(() => {
    async function fetchData() {
      var res = await apiService.getQuizbyId(state.quizId);
      console.log(res);
      setQuiz(res);
    }

    // fetchData();
  }, []);

  //sätter den valda frågan som användaren valt.
  function question(id) {
    if (answered) return;
    switch (id) {
      case 1:
        selectedQuestion == 1
          ? setSelectedQuestion(null)
          : setSelectedQuestion(1);

        break;

      case 2:
        selectedQuestion == 2
          ? setSelectedQuestion(null)
          : setSelectedQuestion(2);
        break;

      case 3:
        selectedQuestion == 3
          ? setSelectedQuestion(null)
          : setSelectedQuestion(3);
        break;

      case 4:
        selectedQuestion == 4
          ? setSelectedQuestion(null)
          : setSelectedQuestion(4);
        break;

      default:
        setSelectedQuestion(null);
        break;
    }
  }

  //sätter att usern har svarat på en fråga och validerar sedan svaret.
  function checkAnswer() {
    if (selectedQuestion == null) {
      alert("PICK A FUCKING ANSWER");
      return;
    }
    setAnswered(true);
    selectedQuestion === 1
      ? setAnsweredCorrect(true)
      : setAnsweredCorrect(false);
  }

  //återställer alla variabler och laddar nästa fråga
  function loadNextQuestion() {
    setAnswered(false);
    setAnsweredCorrect(false);
    setSelectedQuestion(null);

    //logik för att ladda nästa fråga
  }
  return (
    <div className="flex flex-col items-center justify-center">
      {/* quiz container */}
      <div className="relative w-full px-5 md:w-4/6 lg:w-3/5 xl:w-1/2 md:px-0 mt-20 ">
        <img
          className={image ? `w-full` : styles}
          src={
            image ? image : "../src/assets/images/cards/No_image_available.png"
          }
          alt=""
        />
        {/* buttons container */}
        <div className="py-4 px-2 md:px-3 w-full flex justify-between items-center bg-slateBlue text-lightSlateGray">
          <div className="flex flex-col-reverse lg:flex-row lg:min-w-fit items-center cursor-pointer">
            <img
              className="scale-50 lg:scale-75 "
              src="..\src\assets\icons\arrow_left.svg"
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
          <div
            onClick={loadNextQuestion}
            className="flex flex-col lg:flex-row lg:min-w-fit  items-center cursor-pointer"
          >
            <span className="font-semibold text-xs md:text-sm lg:text-lg lg:min-w-0">
              next
            </span>
            <img
              className="rotate-180 scale-50 lg:scale-75"
              src="..\src\assets\icons\arrow_left.svg"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* answer alternativs */}
      {/* <AnswerContainer /> */}
      <div className="w-full md:w-4/6 lg:w-3/5 xl:w-[45%]">
        <div className="grid grid-cols-2 gap-3 px-5 md:px-0 font-semibold text-lg   xl:text-2xl capitalize  text-white mt-5">
          <div
            onClick={() => question(1)}
            className={`${
              selectedQuestion === 1 ? "bg-primaryblue" : "bg-slateBlue"
            } py-3 xl:py-5 rounded-2xl text-center cursor-pointer hover:opacity-80 hover:-translate-y-1 transition-all ease-in duration-200`}
          >
            lanky kong
          </div>
          <div
            onClick={() => question(2)}
            className={`${
              selectedQuestion === 2 ? "bg-primaryblue" : "bg-slateBlue"
            } py-3 xl:py-5 rounded-2xl text-center cursor-pointer hover:opacity-80 hover:-translate-y-1 transition-all ease-in duration-200`}
          >
            zelda
          </div>
          <div
            onClick={() => question(3)}
            className={`${
              selectedQuestion === 3 ? "bg-primaryblue" : "bg-slateBlue"
            } py-3 xl:py-5 rounded-2xl text-center cursor-pointer hover:opacity-80 hover:-translate-y-1 transition-all ease-in duration-200`}
          >
            link
          </div>
          <div
            onClick={() => question(4)}
            className={`${
              selectedQuestion === 4 ? "bg-primaryblue" : "bg-slateBlue"
            } py-3 xl:py-5 rounded-2xl text-center cursor-pointer hover:opacity-80 hover:-translate-y-1 transition-all ease-in duration-200`}
          >
            nashor
          </div>
        </div>
        <div className="text-white mt-3 text-center">
          <button
            className="px-4 py-2 border-green-500 border-solid border-2 rounded-xl font-bold text-lg"
            onClick={checkAnswer}
          >
            check answer
          </button>
        </div>

        <div>
          {answered == true ? (
            answeredCorrect ? (
              <div className="text-white">you answered correct</div>
            ) : (
              <div className="text-white">you answered incorrect</div>
            )
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default QuizComponent;
