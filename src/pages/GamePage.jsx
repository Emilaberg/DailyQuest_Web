import QuizComponent from "../components/QuizComponent";
import Navbar from "../components/Navbar";
import TodaysQuest from "../components/Todaysquest";

//hämta data
//loaders (om det används) måste returnera något. om det inte ska returnera något, returnera null
export async function loader() {
  return null;
}

//hantera form actions
//actions (om det används) måste returnera något. om det inte ska returnera något, returnera null
export async function action() {
  return null;
}

export default function GamePage() {
  return (
    <>
      <section className="flex items-center justify-center  lg:mx-72 ">
        <TodaysQuest
          imageUrl={"../src/assets/images/Image-missing.jpg"}
          textPrompt="THIS IS WHERE AWESOME TEXT SHOULD BE "
        />
      </section>
      <section className="min-h-screen">
        <QuizComponent />
      </section>
    </>
  );
}
