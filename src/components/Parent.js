import React from "react";

const Parent = ({ showModal }) => {
  return (
    <div>
      <h1>Parent Component</h1>
      {showModal && (
        <div>
          <p>Modal Content</p>
          <p>This is the modal content</p>
        </div>
      )}
    </div>
  );
};

export default Parent;
