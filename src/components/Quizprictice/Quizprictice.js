import React from "react";
import { useLoaderData } from "react-router-dom";
import Questions from "../Questions/Questions";

const Quizprictice = () => {
  const quizs = useLoaderData();
  const allQuiz = quizs.data;
  //   console.log(allQuiz.questions);

  return (
    <div>
      <h1 className="text-3xl">{allQuiz.name}</h1>
      {allQuiz.questions.map((question) => (
        <Questions question={question} key={question.id}></Questions>
      ))}
    </div>
  );
};

export default Quizprictice;
