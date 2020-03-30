import React from "react";

const result = ({ score, showResults }) => {
  const result = score >= 3 ? "Pass" : "Fail";
  return (
    <>
      <h4
        style={!showResults ? { display: "none" } : { display: "inline" }}
        className="heading-h4"
      >
        Result: {result}
      </h4>
    </>
  );
};
export default result;
