import React from "react";

const Child = ({ setshowModal }) => {
  return (
    <div>
      <h1>Child Component</h1>
      <button onClick={() => setshowModal(true)}>Show Modal</button>
    </div>
  );
};

export default Child;
