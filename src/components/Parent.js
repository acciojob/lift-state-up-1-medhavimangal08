import React from "react";

const Parent = ({ showModal }) => {
  return (
    <div className="parent">
      <h1>Parent Component</h1>
      {showModal && (
        <div>
          <h3>Modal Content</h3>
          <p>This is the modal content.</p>
        </div>
      )}
    </div>
  );
};

export default Parent;
