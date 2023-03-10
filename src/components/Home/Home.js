import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import HeaderBanar from "../HeaderBanar/HeaderBanar";
import Quiz from "../Quiz/Quiz";
import "./Home.css";
const Home = () => {
  const quizs = useLoaderData();
  //   const [cart, setCart] = useState([]);
  //   console.log(quizs.data);

  return (
    <div>
      <HeaderBanar></HeaderBanar>
      <div className="mt-3 p-6">
        {/* <h1>This is Home Pages {quizs.data.length}</h1> */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
          {quizs.data.map((quiz) => (
            <Quiz key={quiz.id} quiz={quiz}></Quiz>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
