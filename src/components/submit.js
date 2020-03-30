import React from "react";

const submit = ({ onSubmitAnswers, showResults }) => {
  const button = !showResults ? "Submit" : "restart";
  return (
    <>
      <button className="btn btn__submit" onClick={onSubmitAnswers}>
        {button}
      </button>
    </>
  );
};

export default submit;
