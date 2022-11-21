import React from "react";

const Questions = ({ question }) => {
  console.log(question);

  const { options, correctAnswer } = question;
  const handleQuestion = (option) => {
    console.log(option);
    if (option === correctAnswer) {
      alert("correctAnswer");
    } else {
      alert("wrong answer");
    }
  };

  //   console.log(question);
  //  const handleQuestion =
  return (
    <div className="border w-3/4  m-auto mt-7">
      <h1 className="text-2xl">{question.question}</h1>
      {options.map((option) => (
        <li onClick={() => handleQuestion(option)}>
          {/* {onclick = {()=>handleQuestion(option)}} */}

          {option}
        </li>
      ))}
    </div>
  );
};

export default Questions;
