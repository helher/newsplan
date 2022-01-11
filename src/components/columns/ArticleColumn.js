import React, { useEffect } from "react";
import Parse from "parse";

// Styles
import "./ArticleColumn.css";

// Function
import { readJobList } from "../../database/articleRole";

// Components
import Statusbar from "../statusbar/Statusbar";
import Label from "../label/Label";

function ArticleColumn(props) {

  useEffect(() => {
    getArticleCard();
  }, []);

  let articleAndJob = new Map()
  let jobList = [];

  function handleClickIdeaPopup(card) {
    /*     console.log("article card clicked!"); */
        props.setPopupArticle(true);
        props.setArticleId(card.id);
        props.setArticleCardObject(card);
      }

  async function getArticleCard() {
    const articleObjects = Parse.Object.extend("Article");
    const query = new Parse.Query(articleObjects);
    query.include("workload");
    query.include("ArticleRole");
    query.equalTo("deadline", props.date.toString().substring(4, 15));
    query.notEqualTo("status", "onhold");

    try {
      const articles = await query.find();
      let articleIdArr = articles.map((article) => article.id);

      for (let i = 0; i < articleIdArr.length; i++) {
        let articleId = articleIdArr[i];
        articleAndJob = articleAndJob.set(articleId, await readJobList(articleId))
      }

      const destructuredArticles = destructureArticles(articles);
      props.setColumn(destructuredArticles);
/*       console.log("from readArticles: ", props.column); */
      return true;
    } catch (error) {
      alert(`getArticleCard Error Message ${error.message}`);
      return false;
    }
  }

  function destructure(article) {
    getAssignedEmployees(article.id);

    let usernamesFromJobList = jobList.map((job) => job.attributes.user.attributes.username) 
    let usernamesFromJobListArr = []
    usernamesFromJobListArr = usernamesFromJobList.map(username => username)

    let userimagesFromJobList = jobList.map((job) => job.attributes.user.attributes.userimage)
    let userimagesFromJobListArr = []
    userimagesFromJobListArr = userimagesFromJobList.map(userimage => userimage.url())

    let articleCardObject = {
      id: article.id,
      title: article.get("title"),
      description: article.get("description"),
      section: article.get("section"),
      deadline: article.get("deadline"),
      length: article.get("length"),
      status: article.get("status"),
      ideaId: article.get("ideaId"),
      ideaAuthor: article.get("ideaAuthor"),
      usernames: usernamesFromJobListArr,
      userimages: userimagesFromJobListArr
    }

    return articleCardObject
  }

  function destructureArticles(article) {
    return article.map(destructure);
  }

  function getAssignedEmployees(id) {
    jobList = articleAndJob.get(id)
    return jobList
  }

  return (
    <div >
      <h2 className="article-column-title">{props.columnTitle}</h2>
      <section className="article-card-container" >
        {props.column.map((card, index) => (
          <div key={index} >
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
              <Label sectionName={card.section} />
            </div>
            <div className="assigned-people">
              {card.userimages.map((userimage, index) => (
                <div key={index} >
                  <img src={userimage} alt="userimage"></img>
                  </div>
              ))}
            </div>
            <div className="statusbar">
            <Statusbar status={card.status} />
            </div>
          </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default ArticleColumn;
