import QuizComponent from "../components/QuizComponent";
import Navbar from "../components/Navbar";

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
      <div className="min-h-screen">
        <QuizComponent />
      </div>
    </>
  );
}
