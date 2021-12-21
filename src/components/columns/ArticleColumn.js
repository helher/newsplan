import React, { useEffect } from 'react';
import Parse from 'parse';
import './ArticleColumn.css';
import Loui_Avatar from './Loui_Avatar.png';

function ArticleColumn(props)  {

  function handleClickIdeaPopup(card) {
    console.log("article card clicked!")
    props.setPopup(true)
    console.log("is this the id of the card?", card.id)
    props.setArticleId(card.id)
    props.setCardObject(card)
    console.log("this is the card: ", card)
}

  useEffect(() => {
    getArticleCard();
  }, []);


  async function getArticleCard() {
    const articleObjects = Parse.Object.extend("Article");
    const query = new Parse.Query(articleObjects);
    query.include("workload");
    query.equalTo("deadline", props.date.toString().substring(4,15));

    try {
      const articles = await query.find();
      console.log("Parse Objects: ", articles);
      const destructuredIdeas = destructureIdeas(articles);
      props.setColumn(destructuredIdeas);
      console.log("from readIdeas: ", props.column);
      return true;
    } catch (error) {
      alert(`getIdeaCard Error Message ${error.message}`);
      return false;
    }
  }

  function destructure(article) {
    return {
      id: article.id,
      title: article.get("title"),
      description: article.get("description"),
      section: article.get("section"),
      deadline: article.get("deadline"),
    }
    }


    function destructureIdeas(article) {
    return article.map(destructure);
    }
    
  return (
    <section className="card-container">
        <h2 className="column-title">{props.columnTitle}</h2>
      {props.column.map((card) => (
        <div className="card" onClick={() => handleClickIdeaPopup(card)}>
          <h3>{card.title}</h3>
          <div className="card-id">
            <small>
              <small>Deadline</small>
            </small>
            <small>{card.deadline}</small>
          </div>
          <p>{card.description}</p>
          <div className="tags">
            {/* <InputTag/> */}
            <p>{card.section}</p>
          </div>
          <div className="assigned-people">
            <img src={Loui_Avatar} alt="test"/>
          </div>
        </div>
      ))}
    </section>
  );
}

export default ArticleColumn;