import { NavLink, useLocation } from "react-router";
import { WEB_ROUTES } from "../consts/routes";
import { FaChartLine, FaMicroscope } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";

const Sidebar = () => {
  const location = useLocation();
  const navElements = [
    {
      path: WEB_ROUTES.datasets,
      childs: (
        <>
          <FaChartLine />
          <span>DataSets</span>
        </>
      ),
    },
    {
      path: WEB_ROUTES.extract,
      childs: (
        <>
          <FaMicroscope />
          <span>Analyze DDI</span>
        </>
      ),
    },
    {
      path: WEB_ROUTES.about,
      childs: (
        <>
          <FaCircleInfo />
          <span>About Model</span>
        </>
      ),
    },
  ];
  return (
    <div className="w-64 bg-white shadow-md h-screen p-4">
      <h2 className="text-lg font-semibold text-gray-800 mb-6">
        DDI Extraction AI
      </h2>
      <nav className="space-y-2">
        {navElements.map((element) => (
          <NavLink
            to={element.path}
            className={`flex items-center space-x-2 p-2 ${
              location.pathname === element.path
                ? "text-blue-600 bg-blue-50"
                : "text-gray-600"
            }  rounded-md`}
          >
            {element.childs}
          </NavLink>
        ))}

        {/* <NavLink
          to={WEB_ROUTES.extract}
          className="flex items-center space-x-2 p-2 text-gray-600 hover:bg-gray-100 rounded-md"
        >
          <FaMicroscope />
          <span>Analyze DDI</span>
        </NavLink>

        <NavLink
          to={WEB_ROUTES.about}
          className="flex items-center space-x-2 p-2 text-gray-600 hover:bg-gray-100 rounded-md"
        >
          <FaCircleInfo />

          <span>About Model</span>
        </NavLink> */}
      </nav>
      {/* <h2 className="text-lg font-semibold text-gray-800 mt-6 mb-2">INFO</h2>
      <nav className="space-y-2">
        <a
          href="#"
          className="flex items-center space-x-2 p-2 text-gray-600 hover:bg-gray-100 rounded-md"
        >
          <span>ℹ️</span>
          <span>About</span>
        </a>
        <a
          href="#"
          className="flex items-center space-x-2 p-2 text-gray-600 hover:bg-gray-100 rounded-md"
        >
          <span>📜</span>
          <span>Documentation</span>
        </a>
        <a
          href="#"
          className="flex items-center space-x-2 p-2 text-gray-600 hover:bg-gray-100 rounded-md"
        >
          <span>💻</span>
          <span>API</span>
        </a>
      </nav> */}
    </div>
  );
};

export default Sidebar;
