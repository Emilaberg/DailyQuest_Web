import dashboard from "../assets/icons/dashboard.svg";
import plusSolid from "../assets/icons/plus-solid 1.svg";
import mail from "../assets/icons/mail.svg";
import settings from "../assets/icons/settings.svg";
import userSettings from "../assets/icons/user settings.svg";
import logout from "../assets/icons/logout.svg";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div className="flex h-screen">
      <div className="w-10"></div>
      <div className="w-64 bg-adminGray text-white">
        <div className="p-4 flex items-center mt-10 bg-gradient-primary">
          <img
            src={dashboard}
            alt="Dashboard"
            className="w-7 h-7 mr-2 ml-3"
          />
          DashBoard
        </div>

        {/* Dash Content */}
        <div className="p-4">
          <ul>
            <li className="mb-2 flex items-center  ml-3 mt-3">
              <a
                href="#"
                className="hover:text-gray-300 flex items-center"
              >
                <img
                  src={plusSolid}
                  alt="Add Quiz"
                  className="w-7 h-7 mr-2"
                />
                Add Quiz
              </a>
            </li>
            <li className="mb-2 flex items-center  ml-3 mt-6">
              <a
                href="tracked-emails"
                className="hover:text-gray-300 flex items-center"
              >
                <img
                  src={mail}
                  alt="Emails"
                  className="w-7 h-7 mr-2"
                />
                Emails
              </a>
            </li>
            <li className="mb-2 flex items-center  ml-3 mt-6">
              <a
                href="#"
                className="hover:text-gray-300 flex items-center"
              >
                <img
                  src={settings}
                  alt="Settings"
                  className="w-7 h-7 mr-2"
                />
                Settings
              </a>
            </li>
            <li className="mb-2 flex items-center  ml-3 mt-6">
              <a
                href="#"
                className="hover:text-gray-300 flex items-center"
              >
                <img
                  src={userSettings}
                  alt="Profile"
                  className="w-7 h-7 mr-2"
                />
                Profile
              </a>
            </li>
            <li className="mb-2 flex items-center  ml-3 mt-6">
              <a
                href="#"
                className="hover:text-gray-300 flex items-center"
              >
                <img
                  src={logout}
                  alt="Logout"
                  className="w-7 h-7 mr-2"
                />
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
