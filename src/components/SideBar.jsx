import dashboard from "../assets/icons/dashboard.svg";
import plusSolid from "../assets/icons/plus-solid 1.svg";
import mail from "../assets/icons/mail.svg";
import settings from "../assets/icons/settings.svg";
import userSettings from "../assets/icons/user settings.svg";
import logout from "../assets/icons/logout.svg";

function SideBar() {
  return (
    <div className="flex h-screen">
      <div className="w-10"></div>
      <div className="w-64 bg-adminGray text-white">
        <div className="p-4 flex items-center mt-10 bg-gradient-primary">
          <img src={dashboard} alt="Dashboard" className="w-5 h-5 mr-2 ml-3" />
          DashBoard
        </div>

        {/* Dash Content */}
        <div className="p-4">
          <ul>
            <li className="mb-2 flex items-center  ml-3 mt-3">
              <img src={plusSolid} alt="Add Quiz" className="w-5 h-5 mr-2" />
              <a href="#" className="hover:text-gray-300">
                Add Quiz
              </a>
            </li>
            <li className="mb-2 flex items-center  ml-3 mt-6">
              <img src={mail} alt="Emails" className="w-5 h-5 mr-2" />
              <a href="#" className="hover:text-gray-300">
                Emails
              </a>
            </li>
            <li className="mb-2 flex items-center  ml-3 mt-6">
              <img src={settings} alt="Settings" className="w-5 h-5 mr-2" />
              <a href="#" className="hover:text-gray-300">
                Settings
              </a>
            </li>
            <li className="mb-2 flex items-center  ml-3 mt-6">
              <img src={userSettings} alt="Profile" className="w-5 h-5 mr-2" />
              <a href="#" className="hover:text-gray-300">
                Profile
              </a>
            </li>
            <li className="mb-2 flex items-center  ml-3 mt-6">
              <img src={logout} alt="Logout" className="w-5 h-5 mr-2" />
              <a href="#" className="hover:text-gray-300">
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
