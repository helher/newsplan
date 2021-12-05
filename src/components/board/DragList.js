// Dependencies
import React, { useEffect } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import DraggableElement from "./DraggableElement";
import Parse from "parse";

// Styling
import './Board.css';

const objectIdArray = [];

read();

async function read() {
  Parse.initialize(
    "IzWYeFjb4qsVpl2vqItLt4pm02I8DwqZNW8pQwZ1", 
    "dFQhdajG0EVpkTAvP7qjuXSHYwP0zyIjrni7od4Z"
  );
  
  Parse.serverURL = "https://parseapi.back4app.com/";

  const GetBoardData = new Parse.Query('Idea');
  let allIds = await GetBoardData.find();
    try {
      allIds.forEach(entry => {
        objectIdArray.push(entry.id);
    });
    } catch(error) {
      console.log(error.code);
    }
}
// Random Data Generator - Will be updated with real data when connected to the database
const getItems = (count, prefix) =>
  objectIdArray.map(entry => {
    return {
      id: `item-${entry}`,
      prefix,
      content: `item ${entry}`
    };
  });

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

const lists = ["idea", "today", "tomorrow", "day after tomorrow", "on hold"];

const generateLists = () =>
  lists.reduce(
    (acc, listKey) => ({ ...acc, [listKey]: getItems(10, listKey) }),
    {}
  );

function DragList() {
  const [elements, setElements] = React.useState(generateLists());
  console.log("debug here...")

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
          {lists.map((listKey) => (
            <DraggableElement
              elements={elements[listKey]}
              key={listKey}
              prefix={listKey}
            />
          ))}
        </div>
      </DragDropContext>
    </section>
  );
}

export default DragList;