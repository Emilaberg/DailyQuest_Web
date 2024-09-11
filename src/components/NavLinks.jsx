import { Link } from "react-router-dom";

function NavLinks() {
  return (
    <div className="capitalize hidden text-lightSlateGray md:grow md:flex md:justify-end md:visible md:text-[18px] md:gap-7 lg:gap-10 lg:text-[22px]  xl:text-[27px] xl:gap-20 font-bold">
      <Link to="browse-games">Games</Link>
      <Link to="/">Todays Quiz</Link>
      <Link to="/frequently-asked-questions">FAQ</Link>
    </div>
  );
}

export default NavLinks;
