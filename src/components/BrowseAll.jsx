import GameCard from "./GameCard";

function BrowseAll() {
  return (
    <>
      <div className="flex flex-col ml-8 mr-8 mb-5 justify-start">
        <div className="mr-6 mb-5 md:justify-start md:ml-3 lg:justify-start">
          <div className="mb-2">
            <h1 className="text-white text-xl uppercase font-bold tracking-wider lg:text-3xl">
              Browse all
            </h1>
          </div>

          <div className="relative w-full max-w-lg">
            <div className="relative flex items-center p-[2px] rounded-md bg-gradient-border">
              <input
                type="text"
                placeholder="Search.."
                className="flex-1 p-2 text-white bg-midnightBlue border-none rounded-md outline-none font-bold"
              />
              <button className="absolute right-0 mr-2 px-4 py-1 text-white bg-primaryblue rounded-md hover:bg-oceanBlue">
                Search
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 md:gap-6 md:grid-cols-3">
          <GameCard
            imageUrl={"src/assets/images/cards/world-of-warcraft.png"}
            gameName={"World of Warcraft"}
          />
          <GameCard
            imageUrl={"src/assets/images/cards/league.png"}
            gameName={"League of Legends"}
          />
          <GameCard
            imageUrl={"src/assets/images/cards/Super_mario.png"}
            gameName={"Super-Mario"}
          />
          <GameCard
            imageUrl={"src/assets/images/cards/diablo.png"}
            gameName={"Diablo"}
          />
          <GameCard
            imageUrl={"src/assets/images/cards/counterstrike.png"}
            gameName={"Counter-strike"}
          />
          <GameCard
            imageUrl={"src/assets/images/cards/GTA_5.png"}
            gameName={"Grand Theft Auto 5"}
          />
        </div>
      </div>
    </>
  );
}

export default BrowseAll;
