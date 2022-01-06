import React, {  useEffect } from "react";
import Parse from "parse";

// Styles
import "./IdeaColumn.css";

// Components
import Label from '../label/Label';

function IdeaColumn(props) {

  function handleClickIdeaPopup(card) {
/*     console.log("idea card clicked!") */
    props.setPopup(true)
    props.setIdeaId(card.id)
    props.setIdeaCardObject(card)
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
/*       console.log("Parse Objects ideas: ", ideas); */
      const destructuredIdeas = destructureIdeas(ideas);
      props.setCardIdeaTable(destructuredIdeas);
/*       console.log("from getIdeaCard: ", props.cardIdeaTable); */
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
      expiration: idea.get("expiration"),
      visibility: idea.get("visibility")
     
    }
    }


    function destructureIdeas(ideas) {
    return ideas.map(destructure);
    }
    
  return (
    <>
    <h2 className="idea-column-title" >IDEAS</h2>
    <section className="idea-card-container">
      {props.cardIdeaTable.map((card) => (
        <div className="card-idea" onClick={() => handleClickIdeaPopup(card)}>
          <h3>{card.title}</h3>
          <div className="card-id">
            <small>
              <small>Expiration Date</small>
            </small>
            <small>{card.expiration}</small>
          </div>
          <p>{card.description}</p>
          <div className="tags">
            <Label sectionName={card.section}/>
          </div>
          <div className="assigned-people">
            <img src={card.userImage} />
          </div>
        </div>
      ))}
    </section>
    </>
  );
}

export default IdeaColumn;
