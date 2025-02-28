import React, { useState } from "react";
import "./../styles/App.css";
import Child from "./Child";
import Parent from "./Parent";

const App = () => {
  let [showModal, setshowModal] = useState(false);
  return (
    <div>
      <Parent showModal={showModal}></Parent>
      <Child setshowModal={setshowModal}></Child>
    </div>
  );
};

export default App;
