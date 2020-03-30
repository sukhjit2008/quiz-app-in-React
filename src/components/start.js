import React from "react";

const start = ({ startQuiz, start }) => {
  const newStart = !start ? "start" : null;
  return (
    <>
      <button
        style={start ? { display: "none" } : null}
        className="btn btn__start"
        onClick={startQuiz}
      >
        {newStart}
      </button>
    </>
  );
};
export default start;
