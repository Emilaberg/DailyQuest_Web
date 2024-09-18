import { Link } from "react-router-dom";
import Newsletter from "../components/NewsletterComponent";
import { useState } from "react";

function Footer() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <footer className="relative flex flex-col items-center justify-center md:justify-between bottom-0 w-full h-60 bg-gradient-to-r from-[#05060B] from-0% to-[#15305A] to-100% ">
        <div className="relative flex items-center justify-center md:justify-between bottom-0 w-full h-60">
          <img
            className="md:h-40 max-md:hidden lg:h-full"
            src="..\src\assets\images\Left-image.svg"
            alt=""
          />
          {/* center content */}
          <div className="flex flex-col h-full justify-evenly text-white font-semibold pt-8">
            <div className="flex flex-col justify-center items-center">
              <h2 className="text-2xl text-center capitalize text-[25px] font-semibold">
                Subscribe to our newsletter
              </h2>
              <button
                onClick={() => setIsOpen(true)}
                className="text-[12px] mt-3 uppercase bg-gradient-primaryBlue rounded-[25px] px-3 py-2 md:w-1/2"
              >
                lets do this
              </button>
            </div>
            <Newsletter
              open={isOpen}
              onClose={() => setIsOpen(false)}
            />
          </div>
          <img
            className="md:h-40 max-md:hidden lg:h-full"
            src="..\src\assets\images\Right-image.svg"
            alt=""
          />
        </div>

        <section className="w-full bg-gradient-to-r from-[#05060B] from-0% to-[#88089C] to-100%">
          <div className="text-white">
            <div className="flex flex-col justify-center items-center h-full font-light text-white">
              <div>DailyQuest @ 2024</div>
              <div className="flex items-center">
                <span>admin</span>
                <Link to="admin/login">
                  <img
                    className="ml-2"
                    src="..\src\assets\icons\admin_login.svg"
                    alt=""
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
}
export default Footer;
