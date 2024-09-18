import { useEffect, useState } from "react";
import ApiService from "../hooks/apiService";
import { useLocation } from "react-router-dom";
import AnswerContainer from "./AnswerContainer";

//utils mailfunction
import mailResultTo from "../Utils/mailToFunction";

function QuizComponent({ quizQuestions, questionTitle }) {
  const [quizSessionId, setQuizSessionId] = useState(
    Math.floor(Math.random() * 16777215).toString(16)
  );
  const [index, setIndex] = useState(0);
  //answerprops
  const [allQuestions, setAllQuestions] = useState(quizQuestions);

  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answeredCorrect, setAnsweredCorrect] = useState(false);
  const [lockAnswer, setLockAnswer] = useState(false);

  const [answeredQuestions, setAnsweredQuestions] = useState([]);

  const [correctAnswer, setCorrectAnswer] = useState("");

  const [quizResultHasBeenAdded, setQuizResultHasBeenAdded] = useState(false);

  //get state from route (ANVÄNDS INTE)
  let { state } = useLocation();

  //för att styra om det finns en bild från db eller inte, detta ersätts sedan med image variabeln för varje question  (ANVÄNDS INTE)
  let image = allQuestions[0].question.image;
  const [isValid, setIsValid] = useState(true); // (ANVÄNDS INTE)
  let styles = "mx-auto object-contain object-center"; //  (ANVÄNDS INTE)

  function shuffle(array) {
    const copy = array.slice();
    let result = [];
    while (copy.length > 0) {
      const randomIndex = Math.floor(Math.random() * copy.length);
      result.push(copy[randomIndex]);
      copy.splice(randomIndex, 1);
    }
    return result;
  }

  useEffect(() => {
    shuffleAnswers();
  }, []);

  useEffect(() => {
    isQuestionAnswered();

    // set correct answer

    let correctAnswer = allQuestions[index].question.answers.$values.filter(
      (x) => x.isCorrect == true
    );
    setCorrectAnswer(correctAnswer[0].answer);
    // console.log(allQuestions);
    // console.log(allQuestions[0].question.answers);

    // console.log("load next question");
    // console.log(answeredQuestions);
    updateProgressBar();
  }, [index]);

  function shuffleAnswers() {
    for (let i = 0; i < allQuestions.length; i++) {
      let unShuffledArray = allQuestions[i].question.answers.$values;
      let shuffledArray = shuffle(unShuffledArray);

      allQuestions[i].question.answers.$values = shuffledArray;
    }
  }
  //sätter den valda frågan som användaren valt.
  function question(id, isCorrect) {
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
    if (lockAnswer) {
      return;
    }

    let answerObject = {
      questionId: index,
      lockedAnswer:
        allQuestions[index].question.answers.$values[selectedAnswer],
      alternative: selectedAnswer,
      title: allQuestions[index].question.question,
      pickedAnswer:
        allQuestions[index].question.answers.$values[selectedAnswer].answer,
      correctAnswer: correctAnswer,
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
  }

  //reset to previous questions
  function loadPrevQuestion() {
    //logik för att ladda nästa fråga
    if (index - 1 < 0) {
      console.log("yes");
      updateProgressBar();
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
      updateProgressBar();
      return;
    }
    setAnsweredCorrect(false);
    setSelectedAnswer(null);
    setLockAnswer(false);
    //logik för att ladda nästa fråga
    setIndex(index + 1);
  }

  const [calculatingResult, setCalculatingResult] = useState(false);
  const [resultCalculated, setResultCalculated] = useState(false);
  const [scorepoints, setScorepoints] = useState(0);
  function CalculateResult() {
    //set calculatingResult till true because we begin calculating,
    setCalculatingResult(true);

    //räkna ut scorepoints, det kommer från answeredQuestions,
    //räkna hur många som har iscorrect på sig.
    let scorepoint = 0;
    answeredQuestions.forEach((a) => {
      if (a.lockedAnswer.isCorrect == true) scorepoint++;
    });
    //set result calculated, because the result has been calculated.
    setResultCalculated(true);
    console.log(scorepoint);
    //calculation is done, set scorepoint to final score
    setScorepoints(scorepoint);
    //set calculatingResult till false because we are done calculating,
    setCalculatingResult(false);
  }

  function saveResultToLocalStorage() {
    setQuizResultHasBeenAdded(true);
    // let storageObject = [answeredQuestions];
    //create storage object
    let storageObject = {
      totalScore: scorepoints,
      quizQuestionId: quizSessionId,
      questionTitle: questionTitle,
      answeredQuestions: [],
      date: new Date().toLocaleString(),
    };

    //push each questions into storage object
    answeredQuestions.forEach((x) => {
      let temp = {
        correctAnswer: x.correctAnswer,
        pickedAnswer: x.pickedAnswer,
        question_title: x.title,
        isCorrect: x.lockedAnswer.isCorrect,
      };
      storageObject.answeredQuestions.push(temp);
    });

    console.log(storageObject);

    //add if localstorage has questions already
    if (addObjectTolocalStorage(storageObject)) {
      return true;
    }
    // localStorage.setItem("Results", JSON.stringify([storageObject]));
  }

  async function addObjectTolocalStorage(objectToAdd) {
    const result = localStorage.getItem("Results");

    //finns det resultat, parse resultat
    if (result) {
      const parsedResult = await JSON.parse(result);

      parsedResult.push(objectToAdd);
      // vi tar det gamla resultat, parsar det och lägger till det nya resultatet till arrayen om det inte redan finns.
      localStorage.setItem("Results", JSON.stringify(parsedResult));
    } else {
      // om det inte finns något resultat då vill vi lägga in det som nytt resultat i en array.
      localStorage.setItem("Results", JSON.stringify([objectToAdd]));
    }
    return true;
  }

  const [progressBarPercentage, setProgressBarPercentage] = useState(0);
  function updateProgressBar() {
    if (index + 1 == allQuestions.length) {
      console.log("he");
      setProgressBarPercentage(100);
    } else {
      console.log(index);
      const progressPercentage = (index / allQuestions.length) * 100;
      console.log(progressPercentage);
      setProgressBarPercentage(Math.floor(progressPercentage));
    }
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <span className="text-white flex flex-col items-center pb-2">
        <span>answered</span> {answeredQuestions.length} / {allQuestions.length}
      </span>
      <div className="w-1/2">
        <div
          id="progress-container"
          className="w-full bg-gray-200 rounded-full h-4"
        >
          <div
            id="progress-bar"
            className={`bg-blue-600 h-4 rounded-full transition-all ease-linear duration-100`}
            style={{ width: `${progressBarPercentage}%` }}
          ></div>
        </div>
      </div>

      {/* quiz container */}
      <div className="relative w-full px-5 md:w-4/6 lg:w-3/5 xl:w-1/2 md:px-0 mt-10">
        <div className="min-w-full min-h-80 h-[400px] w-full bg-blue-900 bg-opacity-30">
          <img
            className="relative z-10 object-contain w-full max-h-full"
            src={allQuestions[index].question.image}
            alt=""
          />
          <img
            className={
              "z-0 mx-auto object-contain w-32 object-center absolute top-1/2 -translate-y-2/3 left-1/2 -translate-x-1/2 bg-gray-500"
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
        </div>

        <div className="text-white mt-3 text-center">
          {answeredQuestions.length == allQuestions.length ? (
            <button
              className={`px-4 py-2 border-primaryblue hover:bg-primaryblue hover:border-slateBlue ${
                lockAnswer ? "bg-primaryblue" : null
              } transition-colors ease-in duration-100 border-solid border-2 rounded-xl font-bold text-lg`}
              onClick={CalculateResult}
            >
              See Your Score!
            </button>
          ) : (
            <button
              className={`px-4 py-2 border-primaryblue hover:bg-primaryblue hover:border-slateBlue ${
                lockAnswer ? "bg-primaryblue" : null
              } transition-colors ease-in duration-100 border-solid border-2 rounded-xl font-bold text-lg`}
              onClick={checkAnswer}
            >
              lock answer
            </button>
          )}
        </div>
      </div>

      {calculatingResult ? null : resultCalculated ? (
        <article className="flex flex-col w-full my-32">
          <h1 className="text-white text-center text-3xl mb-5">
            Final results
          </h1>

          {/* table container */}
          <div className="mx-auto w-1/2 relative overflow-x-auto shadow-md sm:rounded-lg">
            {/* table */}
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3"
                  >
                    Nr
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3"
                  >
                    Question
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3"
                  >
                    picked answer
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3"
                  >
                    correct answer
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3"
                  >
                    correct
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* MAPPING OF QUESTIONS */}

                {answeredQuestions.map((q, index) => (
                  <tr
                    key={index}
                    className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {index + 1}
                    </th>
                    <td className="px-6 py-4">{q.title}</td>
                    <td className="px-6 py-4">{q.pickedAnswer}</td>
                    <td className="px-6 py-4">{q.correctAnswer}</td>
                    <td className="px-6 py-4">
                      {q.lockedAnswer.isCorrect ? (
                        <span className="font-medium text-green-600 dark:text-green-800">
                          ✓
                        </span>
                      ) : (
                        <span className="font-medium text-red-600 dark:text-red-800">
                          X
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="font-semibold text-gray-900 dark:text-white">
                  <th
                    scope="row"
                    className="px-6 py-3 text-base"
                  >
                    total points:
                  </th>
                  <td className="px-6 py-3">
                    {scorepoints} / {answeredQuestions.length}
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tfoot>
            </table>

            {/* save result button */}
            <div className="flex justify-center my-10">
              <button
                disabled={quizResultHasBeenAdded}
                onClick={saveResultToLocalStorage}
                className="bg-primaryblue bg-opacity-80 px-3 py-1 rounded-lg text-white hover:bg-opacity-100 transition-colors ease-in duration-100"
              >
                save Result
              </button>
            </div>
          </div>
        </article>
      ) : null}
      {/* final results */}
    </div>
  );
}

export default QuizComponent;
