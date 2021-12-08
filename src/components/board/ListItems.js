/* // Dependencies
import { Draggable } from "react-beautiful-dnd";
import React, { useMemo } from "react";

// Styling
import './Board.css';

const ListItem = ({ item, index }) => {
  console.log("Debug ListItem");
  
  return (
    <Draggable draggableId={item.id} index={index}>
      {(provided, snapshot) => {
        return (
          <section className="drag-item"
            ref={provided.innerRef}
            snapshot={snapshot}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <div className="card-header">{item.content.description}</div>
            <div className="card-footer">
              <span>{item.content.title}</span>
                <div 
                  className="author">
                  {item.id}
                </div>
            </div>
          </section>
        );
      }}
    </Draggable>
  );
};

export default ListItem; */