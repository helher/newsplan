// Dependencies
import React from 'react'
import { Draggable } from 'react-beautiful-dnd';

// Styling
import './Card.css';

// Component Functionality

// Create function that fetches idea from back4app.com and extrats properties to create a card.
async function getCardFromDatabase(objectId) {
    const query = new Parse.Query("Idea");
    
    try {
        const card = await query.get(objectId);
        const id = objectId;
        const title = card.get("title");
        const description = card.get("description");
        const date = card.get("dueDate");
        // consider how to get a tag
        // consider how to get persons
    
        console.log(`Description: ${description}`);
        } catch (error) {
        alert(`FAILED to retrieve IDEA the object, with error: ${error.message}`);
    }
} 

// Component Structure
function Card() {
    return (
        <section className="card-component">
            <Draggable>
                <div className="card-element" >
                    <h3>Card Title</h3>
                    <small>ID</small>
                    <small>Date</small>
                    <p>Card Text</p>

                    <div className="tag">
                        <p>Tags</p>
                    </div>

                    <div className="people">
                        <p>People</p>
                    </div>
                </div>
            </Draggable>
        </section>
    )
}



export default Card;