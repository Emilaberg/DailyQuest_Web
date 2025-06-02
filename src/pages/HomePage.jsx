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
        // style={{
        //   backgroundImage: `url(../src/assets/backgrounds/landing_page_blob.svg)`,
        // }}
        className="bg-no-repeat bg-center bg-cover bg-gradient-to-r from-0 from-black via-50% via-[#05060B] to-100 to-[#11284B] pt-[100px]"
      >
        <CookieConsent /> {}
        <section className="min-h-screen mb-32">
          <Welcome />
        </section>
        <section className="flex items-center justify-center lg:mx-16 mb-60">
          <RecentlyAdded />
        </section>
        <section className="flex flex-col justify-center items-center">
          <TodaysQuest
            textPrompt="HEJSAN"
            imageUrl="src/assets/images/cards/the_legend_of_zelda_breath_of_the_wild_4k-wide-1332745958.jpg"
            quizName="Todays Mixed Quiz"
            quiz={todaysMixedQuiz}
          />
        </section>
        <section
          id="games"
          className="flex items-center justify-center  lg:my-36 lg:mx-16"
        >
          <BrowseAll limit={6} />
        </section>
        <section className="flex items-center justify-center lg:mt-72 pb-72 lg:mx-72">
          <HelpingHand />
        </section>
      </div>
    </>
  );
}

export default HomePage;
