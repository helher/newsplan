// Dependencies
import { Draggable } from "react-beautiful-dnd";
import { LoremIpsum } from "lorem-ipsum";
import React, { useMemo } from "react";

// Styling
import './Board.css';

const lorem = new LoremIpsum();

const ListItem = ({ item, index }) => {
  const randomHeader = useMemo(() => lorem.generateWords(5), []);

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
            <div className="card-header">{randomHeader}</div>
            
            <span>Content</span>
            
            <div className="card-footer">
              <span>{item.content}</span>
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

export default ListItem;