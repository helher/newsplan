import React, { useState, useEffect } from "react";
import Parse from "parse";

// Styles
import "./PopupArticle.css";

// Functions
import { readJobList } from "../../../database/articleRole";
import { deleteArticle } from "../../../database/REST";
import { convertDateObjectToString } from "../popupConversions";
import { convertDateStringToObject } from "../popupConversions";
import { convertToPlain } from "../popupConversions";

//components
import TitleEdit from "../../title-edit/TitleEdit";
import RichTextEditor from "../../rich-text-editor/RichTextEdior";
import DropdownCalendar from "../../dropdowns/dropdown-calendar/DropdownCalendar";
import DropdownLength from "../../dropdowns/dropdown-length/DropdownLength";
import CreatedByArticle from "./../../created-by/CreatedByArticle";
import Section from "../../dropdowns/section/Section";
import JobForm from "../../dropdowns/job-dropdown-form/JobForm";
import JobList from "../../job-list/JobList";
import CommentForm from "../../comment-form/CommentForm";
import CommentList from "../../comment-list/CommentList";

//buttons
import ProceedButton from "../../buttons/ProceedButton/ProceedButton";
import SaveButton from "../../buttons/SaveButton/SaveButton";
import DiscardButton from "../../buttons/DiscardButton/DiscardButton";
import CloseWindow from "../../buttons/CloseWindow/CloseWindow";

function PopupArticle(props) {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [date, setDate] = useState();
  const [section, setSection] = useState();
  const [length, setLength] = useState();
  const [workload, setWorkload] = useState();
  const [selectedEmployee, setSelectedEmployee] = useState();
  const [ideaId, setIdeaId] = useState();
  const [ideaAuthor, setIdeaAuthor] = useState();
  const [hasAssignedJobs, setHasAssignedJobs] = useState(false);
  const [assignedJob, setAssignedJob] = useState();
  const [jobListResult, setJobListResult] = useState();
  const [commentResult, setCommentResult] = useState();

  useEffect(() => {
    props.ideaCardObject && setArticleStateInfoFromIdea();
  }, [props.articleId]);

  useEffect(() => {
    props.articleCardObject && setArticleState();
  }, [props.articleCardObject]);

  useEffect(() => {
    readJobList(props.articleId).then((jobList) => {
      setJobListResult(jobList);
    });
  }, [assignedJob]);

  async function setArticleStateInfoFromIdea() {
    console.log("setArticleInfoFromIdea started..", props.ideaCardObject);

    const initialDeadline = props.date.toString().substring(4, 15);
    const initialLength = "0-100 words";

    setTitle(props.ideaCardObject.title);
    setDescription(props.ideaCardObject.description);
    setSection(props.ideaCardObject.section);
    setIdeaId(props.ideaCardObject.id);
    setIdeaAuthor(props.ideaCardObject.author);
    setDate(convertDateStringToObject(initialDeadline));
    setLength(initialLength);
  }

  async function setArticleState() {
    console.log("setArticleState started..", props.articleCardObject);

    setIdeaAuthor(props.articleCardObject.author);
    setTitle(props.articleCardObject.title);
    setDescription(props.articleCardObject.description);
    setDate(convertDateStringToObject(props.articleCardObject.deadline));
    setSection(props.articleCardObject.section);
    setLength(props.articleCardObject.length);
    setIdeaId(props.articleCardObject.ideaId);
    setIdeaAuthor(props.articleCardObject.ideaAuthor);
  }

  function clearPopup() {
    setTitle("");
    setDescription("");
    setDate();
    setSection();
    setLength();
  }

  async function updateArticleInDB() {
    console.log("updateArticleInDB with article id: ", props.articleId);
    const objectId = props.articleId;
    const Article = new Parse.Object("Article");

    Article.set("objectId", objectId);
    Article.set("title", title);
    Article.set("description", convertToPlain(description));
    Article.set("deadline", convertDateObjectToString(date));
    Article.set("section", section);
    Article.set("lengths", length);

    try {
      let result = await Article.save();
      console.log("Article updated with objectId: " + result.id);
      props.setPopupArticle(false);
      clearPopup();
    } catch (error) {
      alert(
        "Failed to update article object from PopupArticle, with error code: " +
          error.message
      );
    }
  }

  async function handleDiscardAttempt() {
    try {
      await deleteArticle(props.articleId);
      alert("Success! Article deleted with id: " + props.articleId);
      console.log("Success! Article deleted with id: " + props.articleId);
      props.setPopupArticle(false);
      clearPopup();
    } catch (error) {
      alert(`Error ${error.message}`);
    }
  }

  function approveArticle() {
    return true;
  }

  function handlePopupArticle() {
    props.setPopupArticle(false);
    clearPopup();
  }

  /*  const updateJobList = async function () {
    let query = new Parse.Query("ArticleRole");
    query.include("user");
    query.equalTo("articleId", props.articleId);

    let job = await query.find();
    try {
      job.forEach((job) => {
        jobArray.push(job);
      });
      setJobListResult(jobArray);
      return true;
    } catch (error) {
      alert(`Error! ${error.message}`);
      return false;
    }
  }; */

  return props.popupArticle ? (
    <div className="popup-page">
      <div className="popup">
        <section className="idea-container">
          {/* LEFT-COLUMN */}
          <div className="idea-flex-left">
            <CreatedByArticle
              articleId={props.articleId}
              ideaId={ideaId}
              ideaAuthor={ideaAuthor}
            />
            <TitleEdit title={title} setTitle={setTitle} />
            <RichTextEditor
              description={description}
              setDescription={setDescription}
            />

            {/* Dropdowns */}
            <h5>Deadline</h5>
            <DropdownCalendar date={date} setDate={setDate} />
            <Section section={section} setSection={setSection} />
            <DropdownLength length={length} setLength={setLength} />
            <br />
            <br />
            <br />

            {/* Buttons */}
            <div className="align-bottons">
              <DiscardButton
                text="Discard"
                discardAction={handleDiscardAttempt}
              />

              <div className="right-buttons">
                <div className="convert-button">
                  <ProceedButton
                    text="Approve Article"
                    proceedAction={approveArticle}
                  />
                </div>
                <SaveButton saveAction={updateArticleInDB} />
              </div>
            </div>
          </div>

          {/* RIGHT-COLUMN */}
          <div className="idea-flex-right">
            <div className="top-right">
              <CloseWindow closeAction={handlePopupArticle} />
            </div>
            <div className="job-dropdown-container">
              <JobForm
                selectedEmployee={selectedEmployee}
                setSelectedEmployee={setSelectedEmployee}
                workload={workload}
                setWorkload={setWorkload}
                articleId={props.articleId}
                setAssignedJob={setAssignedJob}
                setHasAssignedJobs={setHasAssignedJobs}
              />
              {hasAssignedJobs && <JobList jobListResult={jobListResult} />}
            </div>
            <CommentForm
              ideaId={props.ideaId}
              setCommentResult={setCommentResult}
            />
            <CommentList commentResult={commentResult} />
          </div>
        </section>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}

export default PopupArticle;
