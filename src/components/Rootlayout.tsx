import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import type { FC } from "react";

const RootLayout: FC = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="w-full flex-1 max-h-screen overflow-y-scroll">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
