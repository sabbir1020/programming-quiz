import React from "react";

const Questions = ({ question }) => {
  //   console.log(question.options);
  console.log(question);
  return (
    <div className="border w-3/4  m-auto mt-7">
      <h1 className="text-2xl">{question.question}</h1>

      <div className="grid grid-cols-2 gap-3 p-6">
        <li className="grid grid-cols border p-3"> {question.options[0]}</li>
        <li className="grid grid-cols border p-3 "> {question.options[1]}</li>
        <li className="grid grid-cols border p-3 "> {question.options[2]}</li>
        <li className="grid grid-cols border p-3 "> {question.options[3]}</li>
      </div>
    </div>
  );
};

export default Questions;
