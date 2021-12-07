// Dependencies
import React, { useEffect } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import DraggableElement from "./DraggableElement";
import Parse from "parse";

// Styling
import './Board.css';

const objectIdArray = [];
const cards = [];

read();

async function read() {
  Parse.initialize(
    "IzWYeFjb4qsVpl2vqItLt4pm02I8DwqZNW8pQwZ1", 
    "dFQhdajG0EVpkTAvP7qjuXSHYwP0zyIjrni7od4Z"
  );
  
  Parse.serverURL = "https://parseapi.back4app.com/";

  const allObjectIds = new Parse.Query('Idea');
  let allIds = await allObjectIds.find();
    try {
      allIds.forEach(entry => {
        objectIdArray.push(entry.id);
    });
    } catch(error) {
      console.log(error.code);
    }
    
    if(objectIdArray.length > 0) {
      objectIdArray.forEach(async id => await makeCards(id))
      console.log("CONTENT OF ALL CARDS FROM DB:");
      console.log(cards);
    }
}
// Populates lanes with cards
const getItems = (count, laneName) =>
  cards.filter(card => card.lanetype === laneName).map(card =>  {
    return {
      id: `#${card.id}`,
      prefix: card.lanetype,
      content: card,
    };
  });


  async function makeCards(id) {
    const query = new Parse.Query('Idea');
  
    try {
      let idea = await query.get(id);
  
      let card = {
        id: id,
        expiration: idea.get('expiration'),
        description: idea.get('description'),
        author: idea.get('author'),
        title: idea.get('title'),
        tags: idea.get('tags'),
        userId: idea.get('user'),
        lanetype: idea.get('lane_type'),
      };
  
      cards.push(card);
    } catch (error) {
      console.log(error.code);
    } 
  } 

const removeFromList = (list, index) => {
  const result = Array.from(list);
  const [removed] = result.splice(index, 1);
  return [removed, result];
};

const addToList = (list, index, element) => {
  const result = Array.from(list);
  result.splice(index, 0, element);
  return result;
};

const lanes = ["idea", "today", "tomorrow", "day after tomorrow", "on hold"];

const generateLists = () =>
  lanes.reduce(
    (acc, listKey) => ({ ...acc, [listKey]: getItems(0, listKey) }),
    {}
  );

function DragList() {
  const [elements, setElements] = React.useState(generateLists());
  console.log("Draglist debug")

  useEffect(() => {
    setElements(generateLists());
  }, []);

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    const listCopy = { ...elements };

    const sourceList = listCopy[result.source.droppableId];
    const [removedElement, newSourceList] = removeFromList(
      sourceList,
      result.source.index
    );

    listCopy[result.source.droppableId] = newSourceList;

    const destinationList = listCopy[result.destination.droppableId];
    listCopy[result.destination.droppableId] = addToList(
      destinationList,
      result.destination.index,
      removedElement
    );

    setElements(listCopy);
  };

  return (
  <section className="container">
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="list-grid">
        {lanes.map((laneName) =>
        (
          <DraggableElement 
            elements={elements[laneName]}
            key={laneName}
            prefix={laneName}
          />
        ))}
      </div>
    </DragDropContext>
  </section>
);
}


export default DragList;