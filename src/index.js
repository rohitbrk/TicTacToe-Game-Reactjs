import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import Game from "./Game";

const Index = () => {
  return (
    <div>
      <Game />
    </div>
  );
};

ReactDom.render(<Index />, document.getElementById("root"));
