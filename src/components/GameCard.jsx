function GameCard({ imageUrl, gameName }) {
  return (
    <>
      <div
        className="flex flex-col justify-end h-28 w-full bg-center bg-no-repeat bg-cover lg:h-40 cursor-pointer transition-transform transform hover:scale-105 duration-300 ease-in-out"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="flex items-center w-full h-1/5 bg-slateBlue">
          <h3 className="text-white font-bold text-xs pl-2 md:text-sm lg:text-base">
            {gameName} - Quiz
          </h3>
        </div>
      </div>
    </>
  );
}

export default GameCard;
