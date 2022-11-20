import React from "react";
import { useLoaderData } from "react-router-dom";
import "./Home.css";
const Home = () => {
  const quizs = useLoaderData();
  console.log(quizs.data);
  return (
    <div>
      <h1>This is Home Pages {quizs.data.length}</h1>
    </div>
  );
};

export default Home;
