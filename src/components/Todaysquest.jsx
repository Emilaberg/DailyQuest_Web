function TodaysQuest() {
  return (
    <>
      <div className="w-3/4">
        <div className="flex justify-center md:justify-start md:ml-3 lg:justify-start">
          <h1 className="text-white text-2xl uppercase font-bold mb-2 tracking-wider lg:text-3xl ">
            Todays quest
          </h1>
        </div>
        <div className="flex w-full h-56 items-center justify-center bg-gradient-border px-4 py-4 rounded-[27px] mb-24 md:h-96">
          <div className="relative w-full h-full bg-center bg-no-repeat bg-cover rounded-[13.5px]  bg-[url('src/assets/images/cards/the_legend_of_zelda_breath_of_the_wild_4k-wide-1332745958.jpg')] ">
            <div className=" absolute w-full h-full bg-black rounded-[13.5px] opacity-50"></div>
            <div className="absolute justify-between flex w-full h-full items-center px-5">
              <img
                src="src\assets\icons\arrow_left.svg"
                className="cursor-pointer hover:bg-white"
              />
              <div className="flex flex-col items-center mb-12 md:mb-28">
                <h1 className="text-white text-lg text-center text-shadow-2xl opacity-80 leading-tight md:text-4xl lg:text-5xl">
                  Uncover Hyrule's Secrets <br />
                  in an Epic Adventure!
                </h1>
                <button className="text-white font-bold text-xs border-2 rounded-xl w-36 h-8 border-blue-600 bg-slateBlue hover:bg-blue-600 mt-3 md:w-48 md:text-base md:mt-3 lg:w-60 lg:text-lg">
                  PLAY THE QUIZ NOW
                </button>
              </div>
              <img
                src="src\assets\icons\arrow_left.svg"
                className="rotate-180 cursor-pointer hover:bg-white"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TodaysQuest;
