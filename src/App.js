import React from "react";
import DraggableCard from './useDrag'


import "./App.css";
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

export default App