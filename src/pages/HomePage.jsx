import Welcome from "../components/Welcome";
import TodaysQuest from "../components/Todaysquest";
import Navbar from "../components/Navbar";
function HomePage() {
  return (
    <>
      <Navbar />
      <section className="flex items-center justify-center min-h-screen">
        <Welcome />
      </section>
      <section className="flex items-center justify-center ">
        <TodaysQuest />
      </section>
    </>
  );
}

export default HomePage;
