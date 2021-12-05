// Dependencies
import { Draggable } from "react-beautiful-dnd";
import { LoremIpsum } from "lorem-ipsum";
import React, { useMemo } from "react";
import Parse from "parse";

// Styling
import './Board.css';

const lorem = new LoremIpsum();



read();

function read() {
  const RetrieveBoardData = new Parse.Query('Idea');
  RetrieveBoardData.equalTo('title');
  RetrieveBoardData.first().then(function(idea){
    if(idea){
      console.log('Idea found successfully with the title: ' + idea.get("title") + ' ' + 'and was updated at ' + idea.get('updatedAt'));
    } else {
        console.log("Nothing found, please try again");
    }
  }).catch(function(error){
    console.log("Error: " + error.code + " " + error.message);       
  });
}


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