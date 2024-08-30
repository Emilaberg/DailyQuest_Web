import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="relative flex items-center justify-center md:justify-between bottom-0 py-3 w-full h-60 bg-gradient-to-r from-[#0C101F] from-0% to-[#980CDA] to-100% ">
      <img
        className="md:h-40 max-md:hidden lg:h-full"
        src="src\assets\images\Left-image.svg"
        alt=""
      />
      {/* center content */}
      <div className="flex flex-col h-full justify-evenly text-white font-semibold pt-8">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-2xl text-center capitalize text-[25px] font-semibold">
            Subscribe to our newsletter
          </h2>
          <button className="text-[12px] mt-3 uppercase bg-gradient-primaryBlue rounded-[25px] px-3 py-2 md:w-1/2">
            lets do this
          </button>
        </div>

        <div className="text-center mt-auto">
          <div>DailyQuest @ 2024</div>
          <div className="flex justify-center font-light">
            <span>admin</span>
            <Link to="admin">
              <img
                className="ml-2"
                src="src\assets\icons\admin_login.svg"
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>
      <img
        className="md:h-40 max-md:hidden lg:h-full"
        src="src\assets\images\Right-image.svg"
        alt=""
      />
    </footer>
  );
}
export default Footer;
