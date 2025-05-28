import React from "react";

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 bg-white shadow-md h-screen p-4">
      <h2 className="text-lg font-semibold text-gray-800 mb-6">
        DDI Extraction AI
      </h2>
      <nav className="space-y-2">
        <a
          href="#"
          className="flex items-center space-x-2 p-2 bg-purple-100 text-purple-600 rounded-md"
        >
          <span>📊</span>
          <span>Dashboard</span>
        </a>
        <a
          href="#"
          className="flex items-center space-x-2 p-2 text-gray-600 hover:bg-gray-100 rounded-md"
        >
          <span>🔍</span>
          <span>Analyze DDI</span>
        </a>
        <a
          href="#"
          className="flex items-center space-x-2 p-2 text-gray-600 hover:bg-gray-100 rounded-md"
        >
          <span>💾</span>
          <span>Dataset</span>
        </a>
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
