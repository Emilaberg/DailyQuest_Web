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
            <div className="absolute flex flex-col w-full h-full items-center pt-20">
              <h1 className="text-white text-[60px] text-center">
                Uncover Hyrule's Secrets <br />
                in an Epic Adventure!
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TodaysQuest;
