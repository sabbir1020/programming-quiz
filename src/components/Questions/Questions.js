import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const Questions = ({ question }) => {
  // console.log(question);

  const { options, correctAnswer } = question;
  const handleQuestion = (option) => {
    // console.log(option);
    if (option === correctAnswer) {
      alert("correctAnswer");
    } else {
      alert("wrong answer");
    }
  };
  const rightAns = (correctAnswer) => {
    alert(`${correctAnswer}`);
  };

  return (
    <div className="border w-3/4  m-auto mt-7">
      <div className="flex justify-center">
        <h1 className="text-2xl">{question.question}</h1>
        <FontAwesomeIcon
          icon={faEye}
          className="ml-10 mt-3 "
          onClick={() => rightAns(correctAnswer)}
        />
      </div>
      {options.map((option) => (
        <li key={option.toString()} onClick={() => handleQuestion(option)}>
          {option}
        </li>
      ))}
    </div>
  );
};

export default Questions;
