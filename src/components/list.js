import React from "react";
import Item from "./item";

const list = ({
  questions,
  onClickAns,
  onCheckedHandler,
  disableTheRadioButtons
}) => {
  const item = questions.map((question, index) => {
    return (
      <Item
        question={question}
        key={question.q}
        onClickAns={(no, correct) => onClickAns(no, correct, question.q)}
        onCheckedHandler={onCheckedHandler}
        disableTheRadioButtons={disableTheRadioButtons}
      />
    );
  });
  return <>{item}</>;
};
export default list;
