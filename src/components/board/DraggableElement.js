// Dependencies
import { Droppable } from "react-beautiful-dnd";
import ListItems from "./ListItems";
import React from "react";

// Styling
import './Board.css';

const DraggableElement = ({ prefix, elements }) => (
  <div className="draggable">
    <div className="column-header">{prefix}</div>
      <Droppable droppableId={`${prefix}`}>
        {(provided) => (
          <div 
            {...provided.droppableProps} 
            ref={provided.innerRef}
          >
          {elements.map((item, index) => (
            <ListItems 
              key={item.id} 
              item={item} 
              index={index} 
            />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  </div>
  
);

export default DraggableElement;