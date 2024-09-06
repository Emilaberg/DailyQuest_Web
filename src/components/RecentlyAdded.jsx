import GradiantButton from "./GradiantButtonComponent";

function RecentlyAdded() {
  return (
    <>
      <div>
        <div className=" flex justify-center mb-4 md:justify-start">
          <h1 className="text-white text-xl uppercase font-bold tracking-wider lg:text-3xl">
            Recently added
          </h1>
        </div>
        <div className=" flex flex-row justify-between md:gap-4 lg:gap-12 xl:gap-16 ">
          <GradiantButton buttonText="League of Legends" />
          <GradiantButton buttonText="World of Warcraft" />
          <GradiantButton buttonText="Counter-strike" />
        </div>
      </div>
    </>
  );
}

export default RecentlyAdded;
