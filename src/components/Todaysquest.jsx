function TodaysQuest() {
  return (
    <>
      <div>
        <h1 className="text-white text-4xl uppercase font-bold mb-5 ">
          Todays quest
        </h1>
        <div className="flex items-center justify-center bg-gradient-border px-4 py-4 rounded-[27px] mb-24 ">
          <div className="relative w-[1080px] h-[470px] bg-[url('src/assets/images/cards/the_legend_of_zelda_breath_of_the_wild_4k-wide-1332745958.jpg')] bg-center bg-no-repeat bg-cover rounded-[13.5px] ">
            <div className=" absolute top-0 w-full h-full bg-black rounded-[13.5px] opacity-50"></div>
            <div className="absolute justify-between flex w-full h-full items-center px-5">
              <img
                src="src\assets\icons\arrow_left.svg"
                className="cursor-pointer hover:bg-white"
              />
              <div className="flex flex-col items-center mb-48">
                <h1 className="text-white text-[50px] text-center text-shadow-2xl opacity-80 leading-tight *:mb-4">
                  Uncover Hyrule's Secrets <br />
                  in an Epic Adventure!
                </h1>
                <button className="text-white border-2 rounded-xl w-44 border-blue-600 hover:bg-blue-600">
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
