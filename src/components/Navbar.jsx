import { useState } from "react";
import NavLinks from "./NavLinks";
import { Link } from "react-router-dom";
function Navbar() {
  const [hamburgerClick, setHamburgerClick] = useState(false);

  return (
    <>
      <nav className="w-full h-28 bg-[#22195E] flex items-center justify-between pr-[81px] pl-[26px]">
        <Link className="mr-auto" to="/">
          <img
            className="w-56 lg:w-72 xl:w-full"
            src="../src/assets/icons/Webicon.svg"
            alt="webicon"
          />
        </Link>

        <NavLinks />

        <div className="md:hidden">
          <img
            src="src\assets\icons\hamburger_menu.svg"
            alt="hamburger menu"
            onClick={() => setHamburgerClick(!hamburgerClick)}
          />
        </div>
      </nav>
      {hamburgerClick ? (
        <div
          className="absolute left-0 top-0 min-h-screen w-full bg-midnightBlue bg-opacity-50"
          onClick={() => setHamburgerClick(!hamburgerClick)}
        >
          <nav
            className="absolute flex flex-col z-30 bg-adminGray min-h-screen w-[75%] p-10"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <img className="w-3/4" src="src\assets\icons\Webicon.svg" alt="" />
            <hr />
            <div className="capitalize text-adminLightSlateGray flex flex-col pt-5 gap-5 font-bold text-xl">
              <Link className="flex" to="/">
                <img
                  className="w-[24px] mr-3"
                  src="src\assets\icons\bug.svg"
                  alt=""
                />{" "}
                Games
              </Link>
              <Link className="flex" to="/games">
                <img
                  className="w-[24px] mr-3"
                  src="src\assets\icons\questionmark.svg"
                  alt=""
                />{" "}
                Today's Quiz
              </Link>
              <Link className="flex" to="/">
                <img
                  className="w-[24px] mr-3"
                  src="src\assets\icons\mail.svg"
                  alt=""
                />{" "}
                About us
              </Link>
            </div>
            <div className="mt-auto text-adminLightSlateGray text-center">
              <span>dailyQuest | 2024</span>
            </div>
          </nav>
        </div>
      ) : (
        false
      )}
    </>
  );
}

export default Navbar;
