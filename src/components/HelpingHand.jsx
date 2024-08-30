function HelpingHand() {
  return (
    <>
      {/* Wrapper */}
      <div className="w-full h-48 mt-14">
        {/* Header */}
        <div className=" mb-3 flex justify-center md:ml-6 md:justify-start">
          <h1 className="text-white text-xl uppercase font-bold mb-2 tracking-wider lg:text-3xl ">
            Need a helping hand?
          </h1>
        </div>
        {/* Button */}
        <div className="flex flex-row justify-center gap-4 md:ml-5 md:mr-5 ">
          <button className="w-28 h-10 border-[3px] rounded-[12px] border-primaryblue bg-slateBlue  text-lightSlateGray text-[8px] font-semibold flex flex-row items-center justify-between pl-3 pr-3 hover:bg-hoverBlueHelp md:w-[404px] md:h-16 md:text-[20px] md:pl-5 lg:text-[30px]  ">
            Report a bug
            <img
              src="src\assets\icons\bug.svg"
              alt=""
              className="w-5 h-5 md:h-[35px] md:w-[35px] lg:h-[40px] lg:w-[40px]"
            />
          </button>
          <button className="w-28 h-10 border-[3px] rounded-[12px] border-primaryblue bg-slateBlue  text-lightSlateGray text-[10px] font-semibold flex flex-row items-center justify-between pl-3 pr-3 hover:bg-hoverBlueHelp md:w-[404px] md:h-16 md:text-[20px] md:pl-5 lg:text-[30px]">
            I need help
            <img
              src="src\assets\icons\questionmark.svg"
              alt=""
              className="w-5 h-5  md:h-[35px] md:w-[35px] lg:h-[40px] lg:w-[40px]"
            />
          </button>
          <button className="w-28 h-10 border-[3px] rounded-[12px] border-primaryblue bg-slateBlue  text-lightSlateGray text-[10px] font-semibold flex flex-row items-center justify-between pl-3 pr-3 hover:bg-hoverBlueHelp md:w-[404px] md:h-16 md:text-[20px] md:pl-5 md:justify-between lg:text-[30px]">
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
