import React from "react";
import { Link } from "react-router-dom";

const LeftSideBar = () => {
  return (
    <div className="w-80 h-screen bg-indigo-300 hidden md:block text-white p-6 shadow-lg rounded-r-2xl">
      <h2 className="text-2xl font-bold mb-8 text-center border-b pb-2 border-white">
        Menu
      </h2>
      <nav className="flex flex-col gap-6 text-lg font-medium">
        <Link
          to="/message"
          className="hover:bg-white hover:text-blue-800 transition-all duration-300 px-4 py-2 rounded-lg"
        >
          Message
        </Link>
        <Link
          to="/post"
          className="hover:bg-white hover:text-blue-800 transition-all duration-300 px-4 py-2 rounded-lg"
        >
          Post
        </Link>
        <Link
          to="/connection"
          className="hover:bg-white hover:text-blue-800 transition-all duration-300 px-4 py-2 rounded-lg"
        >
          Connection
        </Link>
        <Link
          to="/notification"
          className="hover:bg-white hover:text-blue-800 transition-all duration-300 px-4 py-2 rounded-lg"
        >
        Notification
        </Link>
        <Link
          to="/profile"
          className="hover:bg-white hover:text-blue-800 transition-all duration-300 px-4 py-2 rounded-lg"
        >
          Profile
        </Link>
        <Link
          to="/setting"
          className="hover:bg-white hover:text-blue-800 transition-all duration-300 px-4 py-2 rounded-lg"
        >
          Setting
        </Link>
      </nav>
    </div>
  );
};

export default LeftSideBar;
