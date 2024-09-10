import { Link } from "react-router-dom";
import dashboard from "../assets/icons/dashboard.svg";
import plusSolid from "../assets/icons/plus-solid 1.svg";
import mail from "../assets/icons/mail.svg";
import logout from "../assets/icons/logout.svg";
import { Link } from "react-router-dom";

function SideBar({ isOpen }) {
  return (
    <div
      className={`top-26 left-0 z-50 transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } md:translate-x-0 transition-transform duration-300 ease-in-out w-64 bg-adminGray text-white h-full`}
      style={{ transform: `translateX(${isOpen ? "23.5%" : "-150%"})` }}
    >
      <div className="p-4 flex items-center bg-gradient-primary">
        <Link to="admin-statistics" className="flex items-center">
          <img src={dashboard} alt="Dashboard" className="w-7 h-7 mr-2 ml-3" />
          DashBoard
        </Link>
      </div>

      {/* Dash Content */}
      <div className="p-4">
        <ul>
          <li className="mb-2 flex items-center ml-3 mt-3">
            <Link
              to="add-quiz"
              className="hover:text-gray-300 flex items-center"
            >
              <img src={plusSolid} alt="Create Quiz" className="w-7 h-7 mr-2" />
              Create Quiz
            </Link>
          </li>
          <li className="mb-2 flex items-center ml-3 mt-6">
            <Link
              to="tracked-emails"
              className="hover:text-gray-300 flex items-center"
            >
              <img src={mail} alt="Emails" className="w-7 h-7 mr-2" />
              Emails
            </Link>
          </li>
          <li className="mb-2 flex items-center ml-3 mt-6">
            <a href="#" className="hover:text-gray-300 flex items-center">
              <img src={logout} alt="Logout" className="w-7 h-7 mr-2" />
              Logout
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
