function GameCard({ imageUrl, gameName }) {
  return (
    <>
      <div className="cursor-pointer transition-transform transform hover:scale-105 duration-300 ease-in-out hover:border-b-4 border-primaryblue">
        <div className="flex flex-col justify-end ">
          <img
            className=" bg-center bg-no-repeat bg-cover"
            src={`${imageUrl}`}
          />
        </div>
        <div className="flex items-center w-full justify-start py-1 bg-slateBlue lg:py-2 ">
          <h3 className="text-white font-medium text-xs pl-2 md:text-sm lg:text-base xl:text-lg ">
            {gameName} - Quiz
          </h3>
        </div>
      </div>
    </>
  );
}

export default GameCard;
