import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import Card from '../card/Card'
import './Board.css';


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