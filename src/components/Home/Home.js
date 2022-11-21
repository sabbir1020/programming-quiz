import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Quiz from "../Quiz/Quiz";
import "./Home.css";
const Home = () => {
  const quizs = useLoaderData();
  //   const [cart, setCart] = useState([]);
  //   console.log(quizs.data);

  return (
    <div className="mt-7 p-6">
      <h1>This is Home Pages {quizs.data.length}</h1>
      <div className="grid md:grid-cols-4  gap-3">
        {quizs.data.map((quiz) => (
          <Quiz key={quiz.id} quiz={quiz}></Quiz>
        ))}
      </div>
    </div>
  );
};

export default Home;
