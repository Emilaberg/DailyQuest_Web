import Welcome from "../components/Welcome";
import TodaysQuest from "../components/Todaysquest";
import Navbar from "../components/Navbar";
import ApiService from "../hooks/apiService";
import { useEffect, useState } from "react";
import BrowseAll from "../components/BrowseAll";
import HelpingHand from "../components/HelpingHand";
import RecentlyAdded from "../components/RecentlyAdded";
import { useLoaderData } from "react-router-dom";
import CookieConsent from "../components/CookieConsent"; // Make sure the import path is correct

//hämta data
//loaders (om det används) måste returnera något. om det inte ska returnera något, returnera null
export async function loader() {
  return "hello from loader";
}

//hantera form actions
//actions (om det används) måste returnera något. om det inte ska returnera något, returnera null
export async function action() {
  return null;
}

function HomePage() {
  const apiService = ApiService();
  const variableFromLoader = useLoaderData();

  console.log(variableFromLoader);

  return (
    <>
      <div className="bg-[url(../src/assets/backgrounds/landing_page_blob.svg)] bg-no-repeat bg-center bg-cover">
        <CookieConsent /> {/* Add the CookieConsent component here */}
        <section className="flex items-center justify-center min-h-screen ">
          <Welcome />
        </section>
        <section className="flex items-center justify-center lg:-mt-52 lg:mb-72 lg:mx-72 ">
          <TodaysQuest
            textPrompt="HEJSAN"
            imageUrl="src/assets/images/cards/the_legend_of_zelda_breath_of_the_wild_4k-wide-1332745958.jpg"
            quizName="Todays quest"
          />
        </section>
        <section className="flex items-center justify-center lg:mx-16">
          <RecentlyAdded />
        </section>
        <section
          id="games"
          className="flex items-center justify-center  lg:my-36 lg:mx-16"
        >
          <BrowseAll />
        </section>
        <section className="flex items-center justify-center lg:my-72 lg:mx-72 ">
          <HelpingHand />
        </section>
      </div>
    </>
  );
}

export default HomePage;
