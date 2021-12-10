// Dependencies
import React from 'react';
import { Parse } from 'parse';

// Styling
import './Card.css';

const cardIdentification = [];
const cards = [];

// It is only possible to retrieve data if I have the Parse.initialize here. We need to find a solution
Parse.initialize(
  "IzWYeFjb4qsVpl2vqItLt4pm02I8DwqZNW8pQwZ1", 
  "dFQhdajG0EVpkTAvP7qjuXSHYwP0zyIjrni7od4Z"
);
  
Parse.serverURL = "https://parseapi.back4app.com/";

retrieveCards();

async function retrieveCards() {
  let cardTable = new Parse.Query('Cards');

  let allIdentifiers = await cardTable.find();
    try {
      allIdentifiers.forEach(entry => {
        cardIdentification.push(entry.id);
    });
    } catch(error) {
      console.log(error.code);
    }
    
    if(cardIdentification.length > 0) {
      cardIdentification.forEach(async id => await createCards(id))
      console.log(cards);
    }
}

async function createCards(id) {
  const query = new Parse.Query('Cards');

  try {
    let specificCard = await query.get(id);
    let card = {
      id: id,
      updatedAt: specificCard.get('updatedAt'),
      description: specificCard.get('description'),
    };

    cards.push(card);

  } catch (error) {
    console.log(error.code);
  } 
}

function Card() {
  return (
    <section className="card-container">
      {cards.map((card) => (
          <div className="card">
            <h3>Title of a Card</h3>

            <div className="card-id">
              <small>#<small>{card.id.toString()}</small></small>
              <small>{card.updatedAt.toString()}</small>  
            </div>
          
            <p>{card.description}</p>
            
            <div className="tags">
              {/* <InputTag/> */}
              <p>Tag 1</p>
              <p>Tag 2</p>
            </div>
      
            <div className="assigned-people">
              <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"/>
              <img src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"/>
            </div>
          </div>
      ))}
    </section>);
}

export default Card;