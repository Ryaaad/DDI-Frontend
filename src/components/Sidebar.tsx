import { NavLink, useLocation } from "react-router";
import { WEB_ROUTES } from "../consts/routes";
import { FaChartLine, FaMicroscope } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";

const Sidebar = () => {
  const location = useLocation();
  const navElements = [
    {
      path: WEB_ROUTES.about,
      childs: (
        <>
          <FaCircleInfo />
          <span>Model Info</span>
        </>
      ),
    },
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
                ? "text-custom-purple bg-blue-50"
                : "text-gray-600"
            }  rounded-md`}
          >
            {element.childs}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
