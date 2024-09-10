import { useLoaderData, Link } from "react-router-dom";

function HelpingHand() {
  const variableFromLoader = useLoaderData();
  console.log(variableFromLoader);
  return (
    <>
      <div className="w-full h-48 mt-14 mr-1 ml-1">
        <div className=" mb-3 flex justify-center md:ml-6 md:justify-start">
          <h1 className="text-white text-xl uppercase font-bold mb-2 tracking-wider lg:text-3xl ">
            Need a helping hand?
          </h1>
        </div>

        <div className="flex flex-row justify-center gap-2 md:ml-5 md:mr-5 md:gap-4 lg:gap-6 ">
          <Link
            to="frequently-asked-questions/Report-issue"
            className="w-[33%] h-10 border-[3px] rounded-[12px] border-primaryblue bg-slateBlue  text-lightSlateGray text-[12px] font-semibold flex flex-row items-center justify-between pl-3 pr-3 hover:bg-hoverBlueHelp md:h-16 md:text-[20px] md:pl-5  lg:text-[26px] lg:h-24"
          >
            Report a bug
            <img
              src="src\assets\icons\bug.svg"
              alt=""
              className="w-5 h-5 md:h-[35px] md:w-[35px] lg:h-[40px] lg:w-[40px]"
            />
          </Link>
          <Link
            to="frequently-asked-questions"
            className="w-[33%] h-10 border-[3px] rounded-[12px] border-primaryblue bg-slateBlue  text-lightSlateGray text-[12px] font-semibold flex flex-row items-center justify-between pl-3 pr-3 hover:bg-hoverBlueHelp md:h-16 md:text-[20px] md:pl-5 lg:text-[26px] lg:h-24"
          >
            FAQ
            <img
              src="src\assets\icons\questionmark.svg"
              alt=""
              className="w-5 h-5  md:h-[35px] md:w-[35px] lg:h-[40px] lg:w-[40px]"
            />
          </Link>
          <Link
            to="frequently-asked-questions/Report-issue"
            className="w-[33%] h-10 border-[3px] rounded-[12px] border-primaryblue bg-slateBlue  text-lightSlateGray text-[12px] font-semibold flex flex-row items-center justify-between pl-3 pr-3 hover:bg-hoverBlueHelp md:h-16 md:text-[20px] md:pl-5 md:justify-between lg:text-[26px] lg:h-24"
          >
            Email us
            <img
              src="src\assets\icons\mail.svg"
              alt=""
              className="w-5 h-5 md:h-[35px] md:w-[35px] lg:h-[40px] lg:w-[40px]"
            />
          </Link>
        </div>
      </div>
    </>
  );
}

export default HelpingHand;
