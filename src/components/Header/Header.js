import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/quiz-logo.png";
const Header = () => {
  return (
    <div className="bg-gray-400 flex justify-around">
      <div className="flex">
        <img className="w-14 h-14" src={logo} alt="" />
        <h1>Quiz </h1>
      </div>
      <nav>
        <Link className="mr-4 " to="/home">
          Home
        </Link>
        <Link className="mr-4 " to="/blogs">
          Blogs
        </Link>
        {/* <Link to="/home">Home</Link> */}
      </nav>
    </div>
  );
};

export default Header;
