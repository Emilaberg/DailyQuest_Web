import { useState } from "react";
import NavLinks from "./NavLinks";
import { Link } from "react-router-dom";
function Navbar() {
  const [hamburgerClick, setHamburgerClick] = useState(false);

  return (
    <nav className="w-full h-28 bg-[#22195E] flex items-center justify-between pr-[81px] pl-[26px]">
      <Link
        className="mr-auto"
        to=""
      >
        <img
          className="w-56 lg:w-72 xl:w-full"
          src="src\assets\icons\Webicon.svg"
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
      {hamburgerClick ? (
        <div className="absolute left-0 w-full h-full">
          {/* <nav className="min-h-screen bg-slate-50">fd </nav> */}
        </div>
      ) : (
        false
      )}
    </nav>
  );
}

export default Navbar;
