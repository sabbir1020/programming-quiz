import React from "react";
import { useLoaderData } from "react-router-dom";
import Questions from "../Questions/Questions";

const Quizprictice = () => {
  const quizs = useLoaderData();
  console.log(quizs);

  //   const allQuiz = quizs.data;
  //   //   const ca = allQuiz.correctAnswer;
  //   //   console.log(ca);
  //   //   console.log(allQuiz.questions);
  //   //   console.log(allQuiz.questions.correctAnswer);
  //   const handleQuestion = (ca) => {
  //     // console.log(ca);
  //   };

  return (
    <div>
      {/* <h1 className="text-3xl">{allQuiz.name}</h1> */}
      {/* {allQuiz.questions.map((question) => (
        <Questions
          question={question}
          key={question.id}
          //   handleQuestion={handleQuestion}
        ></Questions>
      ))} */}
      {quizs.data.questions.map((question) => (
        <Questions question={question}></Questions>
      ))}
    </div>
  );
};

export default Quizprictice;
