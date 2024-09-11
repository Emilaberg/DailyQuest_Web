import { useEffect, useState } from "react";
import ApiService from "../hooks/apiService";
import { useLocation } from "react-router-dom";
import AnswerContainer from "./AnswerContainer";
function QuizComponent({ quizQuestions }) {
  const [index, setIndex] = useState(0);
  //answerprops
  const [allQuestions, setAllQuestions] = useState(quizQuestions);

  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answeredCorrect, setAnsweredCorrect] = useState(false);
  const [lockAnswer, setLockAnswer] = useState(false);

  const [answeredQuestions, setAnsweredQuestions] = useState([]);

  //get state from route (ANVÄNDS INTE)
  let { state } = useLocation();

  //för att styra om det finns en bild från db eller inte, detta ersätts sedan med image variabeln för varje question  (ANVÄNDS INTE)
  let image = allQuestions[0].question.image;
  const [isValid, setIsValid] = useState(true); // (ANVÄNDS INTE)
  let styles = "mx-auto object-contain object-center"; //  (ANVÄNDS INTE)

  useEffect(() => {
    isQuestionAnswered();
    // console.log(allQuestions);
    // console.log(allQuestions[0].question.answers);

    // console.log("load next question");
    console.log(answeredQuestions);
  }, [index]);

  //sätter den valda frågan som användaren valt.
  function question(id, isCorrect) {
    console.log("answer is " + isCorrect);

    if (lockAnswer) return;

    switch (id) {
      case 0:
        selectedAnswer == 0 ? setSelectedAnswer(null) : setSelectedAnswer(0);
        break;

      case 1:
        selectedAnswer == 1 ? setSelectedAnswer(null) : setSelectedAnswer(1);
        break;

      case 2:
        selectedAnswer == 2 ? setSelectedAnswer(null) : setSelectedAnswer(2);
        break;

      case 3:
        selectedAnswer == 3 ? setSelectedAnswer(null) : setSelectedAnswer(3);
        break;

      default:
        setSelectedAnswer(null);
        break;
    }
    setAnsweredCorrect(isCorrect);
  }

  //sätter att usern har svarat på en fråga och validerar sedan svaret.
  function checkAnswer() {
    if (selectedAnswer == null) {
      alert("PICK A FUCKING ANSWER");
      return;
    }
    let answerObject = {
      questionId: index,
      lockedAnswer:
        allQuestions[index].question.answers.$values[selectedAnswer],
      alternative: selectedAnswer,
    };

    setAnsweredQuestions((oldAnswers) => [...oldAnswers, answerObject]);

    setLockAnswer(true);
  }

  function isQuestionAnswered() {
    //om index finns i answered arrayen, då vill jag gå in i if satsen och låsa svaren och sätta svaret till den korrekta, annars returna
    // if()
    answeredQuestions.filter((o) => {
      if (o.questionId == index) {
        //lås svaren och sätt rätt svar till det av lockedAnswer
        setSelectedAnswer(o.alternative);
        setLockAnswer(true);
        if (o.lockedAnswer.isCorrect) {
          setAnsweredCorrect(true);
        }
      }
    });
    console.log(index);
  }

  //reset to previous questions
  function loadPrevQuestion() {
    //logik för att ladda nästa fråga
    if (index - 1 < 0) {
      console.log("yes");
      return;
    }

    setAnsweredCorrect(false);
    setSelectedAnswer(null);
    setLockAnswer(false);
    setIndex(index - 1);
  }

  //återställer alla variabler och laddar nästa fråga
  function loadNextQuestion() {
    if (index + 1 == allQuestions.length) {
      console.log("yes");
      return;
    }
    setAnsweredCorrect(false);
    setSelectedAnswer(null);
    setLockAnswer(false);
    //logik för att ladda nästa fråga
    setIndex(index + 1);
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <span className="text-white">
        {index + 1} / {allQuestions.length}
      </span>
      {/* quiz container */}
      <div className="relative w-full px-5 md:w-4/6 lg:w-3/5 xl:w-1/2 md:px-0 mt-20 ">
        <div className="min-w-full min-h-80 max-h-fit ">
          <img
            className="z-10 object-cover w-full"
            src={allQuestions[index].question.image}
            alt=""
          />
          {/* <img
            className={
              "z-10 mx-auto object-contain object-center relative"
            }
            src="../src/assets/images/cards/No_image_available1.png"
            alt=""
          /> */}
          <img
            className={
              "z-0 mx-auto object-contain object-center absolute top-0 left-1/2 -translate-x-1/2 bg-gray-500"
            }
            src="../src/assets/images/cards/No_image_available.png"
            alt=""
          />
        </div>

        {/* buttons container */}
        <div className="py-4 px-2 md:px-3 w-full flex justify-between items-center bg-slateBlue text-lightSlateGray">
          <div
            onClick={loadPrevQuestion}
            className="flex flex-col-reverse lg:flex-row lg:min-w-fit items-center cursor-pointer"
          >
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
              {allQuestions[index].question.question}
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
          {allQuestions[index].question.answers.$values.map(
            (alternative, index) => (
              <div
                key={alternative.$id}
                onClick={() => question(index, alternative.isCorrect)}
                className={`${
                  selectedAnswer === index ? "bg-primaryblue" : "bg-slateBlue"
                } py-3 xl:py-5 rounded-2xl text-center cursor-pointer hover:bg-primaryblue hover:opacity-80 hover:-translate-y-1 transition-all ease-in duration-200`}
              >
                {alternative.answer}
              </div>
            )
          )}

          {/* <div
            onClick={() => question(2)}
            className={`${
              selectedAnswer === 2 ? "bg-primaryblue" : "bg-slateBlue"
            } py-3 xl:py-5 rounded-2xl text-center cursor-pointer hover:opacity-80 hover:-translate-y-1 transition-all ease-in duration-200`}
          >
            zelda
          </div>
          <div
            onClick={() => question(3)}
            className={`${
              selectedAnswer === 3 ? "bg-primaryblue" : "bg-slateBlue"
            } py-3 xl:py-5 rounded-2xl text-center cursor-pointer hover:opacity-80 hover:-translate-y-1 transition-all ease-in duration-200`}
          >
            link
          </div>
          <div
            onClick={() => question(4)}
            className={`${
              selectedAnswer === 4 ? "bg-primaryblue" : "bg-slateBlue"
            } py-3 xl:py-5 rounded-2xl text-center cursor-pointer hover:opacity-80 hover:-translate-y-1 transition-all ease-in duration-200`}
          >
            nashor
          </div> */}
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
          {lockAnswer ? (
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
