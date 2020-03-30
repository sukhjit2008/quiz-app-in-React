import React from "react";

const ans = ({ answer, number, correct, hello }) => {
  return <div onClick={() => hello(number)}></div>;
};
export default ans;
