import { useLoaderData } from "react-router-dom";
import BannerComponent from "../components/BannerComponent";

export async function loader() {
  const storedResults = localStorage.getItem("Results");
  if (storedResults) {
    let result = await JSON.parse(storedResults);
    return result;
  } else {
    return null;
  }
}

function PlayedQuizzesPage() {
  const storedResults = useLoaderData();

  console.log(storedResults);
  return (
    <>
      <section className="w-full min-h-screen bg-gradient-to-br from-0 from-[#05060B] to-100 to-[#11284B] pb-32 pt-[100px]">
        <BannerComponent
          title="My Played Quizzes"
          imageUrl="../src/assets/images/browseBannerMixGames.png"
        />
        <div className="flex flex-col items-center w-full ">
          <h1 className="text-white font-bold text-4xl">My played Quizzes</h1>

          {storedResults ? (
            storedResults.map((x, index) => (
              <article
                key={index}
                className="w-1/2 my-10"
              >
                <h1 className="text-white text-2xl my-2">{x.questionTitle}</h1>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
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

                    {x.answeredQuestions.map((q, index) => (
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
                        <td className="px-6 py-4">{q.question_title}</td>
                        <td className="px-6 py-4">{q.pickedAnswer}</td>
                        <td className="px-6 py-4">{q.correctAnswer}</td>
                        <td className="px-6 py-4">
                          {q.isCorrect ? (
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
                </table>
              </article>
            ))
          ) : (
            <div>
              <h1 className="text-white">
                your saved quizzes will be displayed here...
              </h1>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default PlayedQuizzesPage;
