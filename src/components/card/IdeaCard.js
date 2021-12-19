import React, { useState, useEffect } from "react";
import Parse from "parse";

// Styling
import "./Card.css";

function IdeaCard({setPopup, setIdeaId}) {
  const [cardIdeaTable, setCardIdeaTable] = useState([]);

  function handleClickIdeaPopup(card) {
    console.log("idea card clicked!")
    setPopup(true)
    console.log("is this the id of the card?", card.id)
    setIdeaId(card.id)

}

  useEffect(() => {
    getIdeaCard();
  }, []);

  useEffect(() => {
    console.log("from useEffect: ", cardIdeaTable);
  }, [cardIdeaTable]);

  async function getIdeaCard() {
    const Ideas = Parse.Object.extend("Idea");
    const query = new Parse.Query(Ideas);
    query.include("user");
    query.include("section");
    query.descending("createdAt");

    try {
      const ideas = await query.find();
      console.log("Parse Objects: ", ideas);
      const destructuredIdeas = destructureIdeas(ideas);
      setCardIdeaTable(destructuredIdeas);
      console.log("from readIdeas: ", cardIdeaTable);
      return true;
    } catch (error) {
      alert(`getIdeaCard Error Message ${error.message}`);
      return false;
    }
  }

  function destructureIdeas(ideas) {
    let eachIdea = ideas.map((idea) => ({
      id: idea.id,
      userImage: idea.get("user").get("userimage").url(),
      title: idea.get("title"),
      description: idea.get("description"),
      section: idea.get("section").get("name"),
      author: idea.get("author"),
      expirationDate: idea.get("expiration"),
    }))

    return eachIdea;
  }

  return (
    <section className="card-container">
      {cardIdeaTable.map((card) => (
        <div className="card" onClick={() => handleClickIdeaPopup(card)}>
          <h3>{card.title}</h3>
          <div className="card-id">
            <small>
              #<small>{card.id}</small>
            </small>
            <small>{card.expirationDate.toString().substring(4, 15)}</small>
          </div>
          <p>{card.description}</p>
          <div className="tags">
            {/* <InputTag/> */}
            <p>{card.section}</p>
          </div>
          <div className="assigned-people">
            <img src={card.userImage} />
          </div>
        </div>
      ))}
    </section>
  );
}

export default IdeaCard;
