import React from "react";
import { useLoaderData } from "react-router-dom";
import Questions from "../Questions/Questions";

const Quizprictice = () => {
  const quizs = useLoaderData();
  // console.log(quizs);

  return (
    <div>
      <h1 className="text-3xl">{quizs.data.name}</h1>

      <div>
        {quizs.data.questions.map((question) => (
          <Questions question={question} key={question.id}></Questions>
        ))}
      </div>
    </div>
  );
};

export default Quizprictice;
