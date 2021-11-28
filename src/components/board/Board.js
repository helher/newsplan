import React, { useState } from 'react';
import Parse from 'parse';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import Card from '../card/Card'
import './Board.css';

async function getAllIdeaCards() {
    
    let s = "lol";
}

async function createIdeaCardsBasedOnDatabaseEntries() {
    const query = new Parse.Query("Idea");
    let allCards = await query.find();

    console.log("All cards below:")
    console.log(allCards);

    for(var i = 0; i < allCards.length-1; i++) {
        try {
            const card = await query.get(allCards[i].id);
            const id = allCards[i].id;
            const title = card.get("title");
            const description = card.get("description");
            const dueDate = card.get("dueDate");
            // consider how to get a tag
            // consider how to get persons
    
            const ideaCard = {
                id: id,
                title: title,
                description: description,
                dueDate: dueDate,
                tag: ["politik (hardcoded)", "penge (hardcoded)", "kultur (hardcoded)"],
                persons: ["Helena (hardcoded)", "Anita (hardcoded)"]
            }
            
            ideaCardsCollection.push(ideaCard);
            console.log(ideaCardsCollection);
    
            } catch (error) {
            alert(`FAILED to retrieve IDEA the object, with error: ${error.message}`);
        }
    }
} 

    const ideaCardsCollection = [];

    // Populate this list of cards with <Card /> components
    const cardsCollection = [
    {
        id: 'gary',
        name: 'Gary Goodspeed',
    },
    {
        id: 'cato',
        name: 'Little Cato',
    },
    {
        id: 'kvn',
        name: 'KVN',
    },
    {
        id: 'mooncake',
        name: 'Mooncake',
    },
    {
        id: 'quinn',
        name: 'Quinn Ergon',
    }
    ]

    function Board() {
    const [cards, updateCards] = useState(cardsCollection);
    const [ideaCards, updateIdeaCards] = useState(ideaCardsCollection);

    function handleOnDragEnd(result) {
        if (!result.destination) return;

        const items = Array.from(cards);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        updateCards(items);
    }

    return (
        <div className="Board">
        <header className="Board-header">
            <h1>Board for Cards</h1>
            <button onClick={async () => {await createIdeaCardsBasedOnDatabaseEntries()}}>Refresh tickets</button>
            <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="characters">
                {(provided) => (
                <ul className="characters" {...provided.droppableProps} ref={provided.innerRef}>
                    {cards.map(({id, name}, index) => {
                    return (
                        <Draggable key={id} draggableId={id} index={index}>
                        {(provided) => (
                            <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                            <p>
                                { name }
                            </p>
                            </li>
                        )}
                        </Draggable>
                    );
                    })}
                    {provided.placeholder}
                </ul>
                )}
            </Droppable>
            </DragDropContext>
        </header>
        </div>
    );
    }

export default Board;