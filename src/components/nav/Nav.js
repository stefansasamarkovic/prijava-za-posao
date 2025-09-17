import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="bg-white shadow-md px-6 py-4  flex space-x-6 justify-left">
      <Link
        to="/"
        className="text-gray-700 text-lg font-medium hover:text-blue-600 transition-colors duration-200"
      >
        Home
      </Link>
      <Link
        to="/applications"
        className="text-gray-700 text-lg font-medium hover:text-blue-600 transition-colors duration-200"
      >
        Applications
      </Link>
    </nav>
  );
}
