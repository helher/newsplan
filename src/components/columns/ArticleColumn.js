import React, { useEffect } from "react";
import Parse from "parse";
import Loui_Avatar from "./Loui_Avatar.png";

// Styles
import "./ArticleColumn.css";

// Components
import Statusbar from "../statusbar/Statusbar";
import Label from "../label/Label";

function ArticleColumn(props) {
  function handleClickIdeaPopup(card) {
    console.log("article card clicked!");
    props.setPopupArticle(true);
    props.setArticleId(card.id);
    props.setArticleCardObject(card);
  }

  useEffect(() => {
    getArticleCard();
  }, []);

  async function getArticleCard() {
    const articleObjects = Parse.Object.extend("Article");
    const query = new Parse.Query(articleObjects);
    query.include("workload");
    query.equalTo("deadline", props.date.toString().substring(4, 15));
    query.notEqualTo("status", "onhold");

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
      length: article.get("length"),
      status: article.get("status"),
      ideaId: article.get("ideaId"),
      ideaAuthor: article.get("ideaAuthor"),
    };
  }

  function destructureIdeas(article) {
    return article.map(destructure);
  }

  return (
    <div>
      <h2 className="article-column-title">{props.columnTitle}</h2>
      <section className="article-card-container">
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
              <Label sectionName={card.section} />
            </div>
            <div className="assigned-people">
              <img src={Loui_Avatar} alt="test" />
            </div>
            <Statusbar status={card.status} />
          </div>
        ))}
      </section>
    </div>
  );
}

export default ArticleColumn;