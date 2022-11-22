import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/quiz-logo.png";
const Header = () => {
  return (
    <div className="bg-gray-400 flex justify-around">
      <div className="flex">
        <img className="w-14 h-14 p-1" src={logo} alt="" />
        <h1 className="text-2xl mt-3 ml-3">Programming Quiz </h1>
      </div>
      <nav className="mt-3">
        <Link className="mr-4 text-xl " to="/home">
          Home
        </Link>
        <Link className="mr-4 text-xl " to="/statistics">
          Statistics
        </Link>
        <Link className="mr-4 text-xl " to="/blogs">
          Blogs
        </Link>
        {/* <Link to="/home">Home</Link> */}
      </nav>
    </div>
  );
};

export default Header;
