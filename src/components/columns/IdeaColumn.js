import React, {  useEffect } from "react";
import Parse from "parse";

// Styling
import "./IdeaColumn.css";

function IdeaColumn(props) {

  function handleClickIdeaPopup(card) {
    console.log("idea card clicked!")
    props.setPopup(true)
    console.log("is this the id of the card?", card.id)
    props.setIdeaId(card.id)
    props.setCardObject(card)
    console.log("this is the card: ", card)
}

  useEffect(() => {
    getIdeaCard();
  }, []);

/*   useEffect(() => {
    console.log("from useEffect: ", cardIdeaTable);
  }, [cardIdeaTable]); */

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
      props.setCardIdeaTable(destructuredIdeas);
      console.log("from readIdeas: ", props.cardIdeaTable);
      return true;
    } catch (error) {
      alert(`getIdeaCard Error Message ${error.message}`);
      return false;
    }
  }

  function destructure(idea) {
    return {
      id: idea.id,
      userImage: idea.get("user").get("userimage").url(),
      title: idea.get("title"),
      description: idea.get("description"),
      section: idea.get("section"),
      author: idea.get("author"),
      expirationDate: idea.get("expiration"),
      visibility: idea.get("visibility")
    }
    }


    function destructureIdeas(ideas) {
    return ideas.map(destructure);
    }
    
  return (
    <section className="idea-card-container">
      <h2 className="column-title" >IDEAS</h2>
      {props.cardIdeaTable.map((card) => (
        <div className="card" onClick={() => handleClickIdeaPopup(card)}>
          <h3>{card.title}</h3>
          <div className="card-id">
            <small>
              <small>Expiration Date</small>
            </small>
            <small>{card.expirationDate.toString().substring(4,15)}</small>
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

export default IdeaColumn;
