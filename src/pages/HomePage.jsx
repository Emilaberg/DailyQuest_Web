import Welcome from "../components/Welcome";
import TodaysQuest from "../components/Todaysquest";
import Navbar from "../components/Navbar";
import ApiService from "../hooks/apiService";
import { useEffect, useState } from "react";
import BrowseAll from "../components/BrowseAll";
import HelpingHand from "../components/HelpingHand";

function HomePage() {
  const apiService = ApiService();

  const [quiz, setQuiz] = useState([]);
  useEffect(() => {
    async function fetchData() {
      let res = await apiService.getAllQuiz();
      setQuiz(res);
    }
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="bg-[url(../src/assets/backgrounds/landing_page_blob.svg)] bg-no-repeat bg-center bg-cover">
        <section className="flex items-center justify-center min-h-screen ">
          <Welcome />
        </section>
        <section className="flex items-center justify-center lg:-mt-52 lg:mb-72 lg:mx-52">
          <TodaysQuest />
        </section>
        <section
          id="games"
          className="lg:my-72 lg:mx-72"
        >
          <BrowseAll />
        </section>
        <section className="flex items-center justify-center lg:my-72 lg:mx-52">
          <HelpingHand />
        </section>
      </div>
    </>
  );
}

export default HomePage;
