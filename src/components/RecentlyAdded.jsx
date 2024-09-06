import GradiantButton from "./GradiantButtonComponent";
import ApiService from "../hooks/apiService";
import { useState, useEffect } from "react";

function RecentlyAdded() {
  const [tags, setTags] = useState([]);
  const [fetchError, setFetchError] = useState(false);
  const apiService = ApiService();
  useEffect(() => {
    async function fetchRecentTags() {
      var response = await apiService.getAllMetaTags();
      if (response === 0) {
        setFetchError(true);
      } else {
        const latestsTags = response.slice(-3);
        setTags(latestsTags);
      }
    }
    fetchRecentTags();
  }, []);
  return (
    <>
      <div>
        <div className=" flex justify-center mb-4 md:justify-start">
          <h1 className="text-white text-xl uppercase font-bold tracking-wider lg:text-3xl">
            Recently added
          </h1>
        </div>
        <div className=" flex flex-row justify-between md:gap-4 lg:gap-10 xl:gap-16 ">
          {fetchError == true ? (
            <div className="text-white font-bold text-xl col-span-full pt-10">
              Failed to fetch. Please try again later.
            </div>
          ) : (
            tags.map((tag, index) => (
              <GradiantButton buttonText={tag.tagName} key={index} />
            ))
          )}
          {/* <GradiantButton buttonText="League of Legends" />
          <GradiantButton buttonText="World of Warcraft" />
          <GradiantButton buttonText="Counter-strike" /> */}
        </div>
      </div>
    </>
  );
}

export default RecentlyAdded;
