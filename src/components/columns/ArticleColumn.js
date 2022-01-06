import React, { useEffect } from "react";
import Parse from "parse";
import Loui_Avatar from "./Loui_Avatar.png";

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
/*       console.log("from readIdeas: ", props.column); */
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
/*     console.log("usernamesFromJobListArr", usernamesFromJobListArr) */

    let userimagesFromJobList = jobList.map((job) => job.attributes.user.attributes.userimage)
    let userimagesFromJobListArr = []
    userimagesFromJobListArr = userimagesFromJobList.map(userimage => userimage.url())
    console.log("userimagesFromJobListArr", userimagesFromJobListArr)

    let articleObject = {
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

    return articleObject
  }

  function destructureArticles(article) {
    return article.map(destructure);
  }

  async function getAssignedEmployees(id) {
    jobList = articleAndJob.get(id)
/*     console.log("jobList", jobList); */
    return jobList
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
              <Label sectionName={card.section} />
            </div>
            <div className="assigned-people">
              <p>{card.usernames}</p>
              <img src={card.userimages} alt="userimage"></img>
              {/* <img src={card.userimage.url()} alt="test" /> */}
            </div>
            <div className="statusbar">
            <Statusbar status={card.status} />
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default ArticleColumn;
