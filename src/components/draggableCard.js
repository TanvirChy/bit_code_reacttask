import React from 'react'
import { useRef } from 'react';
import useDraggable from '../useDrag';

const DraggableCard = ({ children }) => {
    const cardRef = useRef(null);
    useDraggable(cardRef);
  
    return (
      <div className="card" ref={cardRef}>
        {children}
      </div>
    );
  };

  export default DraggableCard