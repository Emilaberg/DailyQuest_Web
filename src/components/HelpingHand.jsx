function HelpingHand() {
  return (
    <>
      {/* Wrapper */}
      <div className="w-3/4 h-48 mt-14">
        {/* Header */}
        <div className=" mb-3 flex justify-center md:ml-6 md:justify-start">
          <h1 className="text-white text-xl uppercase font-bold mb-2 tracking-wider lg:text-3xl ">
            Need a helping hand?
          </h1>
        </div>
        {/* Button */}
        <div className="flex flex-row justify-between gap-2 md:ml-5 md:mr-5 md:gap-4 lg:gap-6 ">
          <button className="w-[33%] h-10 border-[3px] rounded-[12px] border-primaryblue bg-slateBlue  text-lightSlateGray text-xs font-semibold flex flex-row items-center justify-between pl-1 pr-1 hover:bg-hoverBlueHelp md:h-16 md:text-[19px] md:pl-5  lg:text-[26px] lg:h-20 xl:pl-7 xl:pr-10 xl:h-24 xl:text-[30px]  ">
            Report bug
            <img
              src="src\assets\icons\bug.svg"
              alt=""
              className="w-5 h-5 md:h-[35px] md:w-[19px] lg:h-[40px] lg:w-[40px]"
            />
          </button>
          <button className="w-[33%] h-10 border-[3px] rounded-[12px] border-primaryblue bg-slateBlue  text-lightSlateGray text-xs font-semibold flex flex-row items-center justify-between pl-1 pr-1 hover:bg-hoverBlueHelp md:h-16 md:text-[19px] md:pl-5 lg:text-[26px] lg:h-20 xl:pl-7 xl:pr-10 xl:h-24 xl:text-[30px]">
            FAQ?
            <img
              src="src\assets\icons\questionmark.svg"
              alt=""
              className="w-5 h-5 pr-1  md:h-[35px] md:w-[35px] lg:h-[40px] lg:w-[40px]"
            />
          </button>
          <button className="w-[33%] h-10 border-[3px] rounded-[12px] border-primaryblue bg-slateBlue  text-lightSlateGray text-xs font-semibold flex flex-row items-center justify-between pl-2 pr-2 hover:bg-hoverBlueHelp md:h-16 md:text-[19px] md:pl-5 md:justify-between lg:text-[26px] lg:h-20 xl:pl-7 xl:pr-10 xl:h-24 xl:text-[30px]">
            Email us
            <img
              src="src\assets\icons\mail.svg"
              alt=""
              className="w-5 h-5 md:h-[35px] md:w-[35px] lg:h-[40px] lg:w-[40px]"
            />
          </button>
        </div>
      </div>
    </>
  );
}

export default HelpingHand;
