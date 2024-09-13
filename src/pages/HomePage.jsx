import Welcome from "../components/Welcome";
import TodaysQuest from "../components/Todaysquest";
import Navbar from "../components/Navbar";
import ApiService from "../hooks/apiService";
import { Children, useEffect, useState } from "react";
import BrowseAll from "../components/BrowseAll";
import HelpingHand from "../components/HelpingHand";
import RecentlyAdded from "../components/RecentlyAdded";
import { useLoaderData } from "react-router-dom";
import Newsletter from "../components/NewsletterComponent";

import CookieConsent from "../components/CookieConsent";

// Fetch data
export async function loader() {
  //test fetcha data
  const apiService = ApiService();

  let todaysMixedQuiz = await apiService.getQuizbyId(7);
  console.log(todaysMixedQuiz.data);
  if (todaysMixedQuiz.message.status) {
    return todaysMixedQuiz.data;
  } else {
    return "error fetching quiz, check Loader function.";
  }
}

// Handle form actions
export async function action() {
  return null;
}

function HomePage() {
  const todaysMixedQuiz = useLoaderData();
  // console.log(todaysMixedQuiz);

  return (
    <>
      <div
        style={{
          backgroundImage: `url(../src/assets/backgrounds/landing_page_blob.svg)`,
        }}
        className="bg-no-repeat bg-center bg-cover"
      >
        <CookieConsent /> {}
        <section className="min-h-screen">
          <Welcome />
        </section>
        <section className="flex flex-col justify-center items-center">
          <div className="flex w-2/3 h-20 bg-black rounded-2xl mb-32 -translate-y-1/2 text-white">
            <h1 className="m-auto">SOME TEXT VI KAN HA HÄR; NÅGOT COOLT</h1>
          </div>
          <TodaysQuest
            textPrompt="HEJSAN"
            imageUrl="src/assets/images/cards/the_legend_of_zelda_breath_of_the_wild_4k-wide-1332745958.jpg"
            quizName="Todays Mixed Quiz"
            quiz={todaysMixedQuiz}
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
        <section className="flex items-center justify-center lg:mt-72 pb-72 lg:mx-72">
          <HelpingHand />
        </section>
      </div>
    </>
  );
}

export default HomePage;
