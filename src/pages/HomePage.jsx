import Welcome from "../components/Welcome";
import TodaysQuest from "../components/Todaysquest";
import BrowseAll from "../components/BrowseAll";
import HelpingHand from "../components/HelpingHand";
function HomePage() {
  return (
    <>
      <div className="bg-[url(src/assets/backgrounds/landing_page_blob.svg)] bg-no-repeat bg-center bg-cover">
        <section className="flex items-center justify-center min-h-screen">
          <Welcome />
        </section>
        <section className="flex items-center justify-center ">
          <TodaysQuest />
        </section>
        <section>
          <BrowseAll />
        </section>
        <section className="flex items-center justify-center">
          <HelpingHand />
        </section>
      </div>
    </>
  );
}

export default HomePage;
