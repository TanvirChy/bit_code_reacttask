import React, { useRef } from "react";
import useDraggable from "./useDrag";

import "./App.css";

const DraggableCard = ({ children }) => {
  const cardRef = useRef(null);
  useDraggable(cardRef);

  return (
    <div className="card" ref={cardRef}>
      {children}
    </div>
  );
};

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

export default App;
