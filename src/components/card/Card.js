// Dependencies
import React from 'react';
import { Parse } from 'parse';

// Styling
import './Card.css';

const cardIdentification = [];
const cards = [];

// Instantiates Connection to Database
Parse.initialize(
  "IzWYeFjb4qsVpl2vqItLt4pm02I8DwqZNW8pQwZ1",
  "dFQhdajG0EVpkTAvP7qjuXSHYwP0zyIjrni7od4Z"
);

Parse.serverURL = "https://parseapi.back4app.com/";

// - - - - - - - - - - - - - - - - - - - - - - - - - - 

// Get all the cards in the Cards class
let Cards = Parse.Object.extend("Idea");
let query = new Parse.Query(Cards);

query.include("section");
query.include("user");

query.find().then(function (results) {
  let cardsArray = new Array();
  for (let i in results) {
    let obj = results[i];
    let cardTitle = obj.get("title");
    let cardDescription = obj.get("description");
    let cardTags = obj.get("section").get("name");
    let cardUser = obj.get("user").get("username");

    cardsArray.push({
      card: {
        title: cardTitle,
        description: cardDescription,
        tags: cardTags,
        user: cardUser
      }
    });
  }
  console.log(cardsArray);
});

retrieveCards();

async function retrieveCards() {
  let cardTable = new Parse.Query('Idea');

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

function getDateFormat(date) {
  let regex = /([\w]* [\w]* [\d]{2} [\d]{4})/
  let splittedDates = date.split(regex);

  return splittedDates[1];
}

async function createCards(id) {
  const query = new Parse.Query('Idea');

  try {
    let specificCard = await query.get(id);
    let card = {
      id: id,
      
      title: specificCard.get('title'),
      //dueDate: specificCard.get('expiration'),
    };

    card.dueDate = getDateFormat(card.dueDate.toString());

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
            <h3>{card.title}</h3>

            <div className="card-id">
              <small>#<small>{card.id.toString()}</small></small>
              <small>{card.dueDate.toString()}</small>  
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
