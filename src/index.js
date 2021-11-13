import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import DraggableCard from "./components/draggableCard";

function App() {
  return (
    <div className="container">
      <DraggableCard>Card 1</DraggableCard>
      <DraggableCard>Card 2</DraggableCard>
      <DraggableCard>Card 3</DraggableCard>
      <DraggableCard>Card 4</DraggableCard>
      <DraggableCard>Card 5</DraggableCard>
      <DraggableCard>Card 6</DraggableCard>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
