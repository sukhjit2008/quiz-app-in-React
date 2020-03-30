import React from "react";
//import Ans from "./ans";

const item = ({
  question,
  onClickAns,
  onCheckedHandler,
  disableTheRadioButtons
}) => {
  const ans = question.answers.map(answer => {
    // const correct = answer.isCorrectAns ? (
    //   <p style={{ color: "green" }}>Answer is correct</p>
    // ) : null;
    return (
      <div key={answer.no}>
        <li className="item">
          <input
            type="checkbox"
            id={answer.id}
            className="checkbox "
            onChange={onCheckedHandler}
          />

          <label
            onClick={() => onClickAns(answer.no, answer.correct)}
            htmlFor={answer.id}
            className="label "
            // style={
            //   !answer.isCorrectAns ? { color: "#eb2f64" } : { color: "green" }
            // }
          >
            {answer.ans}
          </label>
          {/* {correct} */}
        </li>
      </div>
    );
  });
  return (
    <>
      <div className="questionAnswer">
        <h4 className="heading-h4">{question.question}</h4>
        <ul className="list">{ans}</ul>
      </div>
    </>
  );
};
export default item;
