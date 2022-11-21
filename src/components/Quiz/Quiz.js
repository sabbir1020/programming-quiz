import React from "react";
import { Link } from "react-router-dom";

const Quiz = ({ quiz }) => {
  console.log(quiz);
  const { id, name, logo, total } = quiz;
  return (
    <div className="border w-56">
      <img className="w-60 h-60 border m-0 m-auto " src={logo} alt="" />
      <div>
        <p>{name}</p>
        <p>{total}</p>
      </div>
      <div>
        <Link to={`/quiz/${id}`}>
          <button className="py-2 px-5 rounded border bg-green-600">
            Start Practice
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Quiz;
