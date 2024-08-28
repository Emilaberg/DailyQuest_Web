import Welcome from "../components/Welcome";
import TodaysQuest from "../components/Todaysquest";

function HomePage() {
  return (
    <>
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
