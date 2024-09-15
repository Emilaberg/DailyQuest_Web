import { useLoaderData } from "react-router-dom";
import BannerComponent from "../components/BannerComponent";

export async function loader() {
  const storedResults = localStorage.getItem("Results");
  if (storedResults) {
    let result = await JSON.parse(storedResults)[0];
    return { result };
  } else {
    return null;
  }
}

function PlayedQuizzesPage() {
  const storedResults = useLoaderData();

  console.log(storedResults);
  return (
    <>
      <section className="w-full min-h-screen">
        <BannerComponent
          title="My Played Quizzes"
          imageUrl="../src/assets/images/browseBannerMixGames.png"
        />
        <div className="flex justify-center">
          <h1 className="text-white font-bold text-4xl">My played Quizzes</h1>
        </div>
      </section>
    </>
  );
}

export default PlayedQuizzesPage;
