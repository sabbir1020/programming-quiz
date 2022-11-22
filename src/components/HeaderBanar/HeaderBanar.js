import React from "react";
import "./HeaderBanar.css";
import bg from "../../img/banarbg.jpg";
const HeaderBanar = () => {
  return (
    <div
      className=""
      style={{
        backgroundImage: `url(${bg})`,
        height: "400px",
      }}
    >
      <div className="p-3 ">
        <h1 className="text-3xl  text-white"> Programming Quiz </h1>
        <p className="text-white mt-2 ">
          This is a fun quiz on programming. The programming quiz is in four
          sections.
          <br /> Through this quiz attended we can learn more programming
          knowledge
        </p>
        <ul className="text-white">
          <h2 className="text-2xl mb-3 mt-2"> Our section is :</h2>
          <li>REACT</li>
          <li>JAVASCRIPT</li>
          <li>CSS</li>
          <li>GIT</li>
        </ul>
      </div>
      <div>
        <button className="px-5 py2 bg-green-600 rounded-md p-3 text-white">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default HeaderBanar;
