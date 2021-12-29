import React, { useEffect, useState } from "react";
import Parse from "parse";

// Styles
import "./Lists.css";

// Components
import Footer from "../components/footer/Footer";
import AddIdeaButton from "../components/buttons/AddIdeaButton/AddIdeaButton";
import LoadButton from "../components/buttons/LoadButton/LoadButton";
import PopupIdeaNew from "../components/popups/popup-idea-new/PopupIdeaNew";
import { DataGrid } from "@mui/x-data-grid";
import Label from "../components/label/Label";

const columns = [
  {
    field: "title",
    headerName: "TITLE",
    width: 650,
    editable: false,
  },
  {
    field: "section",
    headerName: "SECTION",
    width: 200,
    editable: false,
    renderCell: (params) => <Label sectionName={params.value} />,
  },
  {
    field: "author",
    headerName: "AUTHOR",
    width: 125,
    editable: false,
    renderCell: (params) => (
      <div className="author-column">
        <img className="img-list" src={params.value.get("userimage").url()} />
        {params.value.get("username")}{" "}
      </div>
    ),
  },
  {
    field: "expiration",
    headerName: "EXPIRATION",
    sortable: true,
    width: 140,
  },
];

function Ideas() {
  const [popupNew, setPopupNew] = useState(false);
  const [ideaTable, setIdeaTable] = useState();

  // useEffects runs only once, first time the componenten renders, because we have an empty dependency!
  useEffect(() => {
    fetchIdeas();
  }, []);

  useEffect(() => {
    console.log("from useEffect: ", ideaTable);
  }, [ideaTable]);

  async function fetchIdeas() {
    const query = new Parse.Query("Idea");
    query.include("user");
    try {
      const ideas = await query.find();
      console.log("Parse Objects: ", ideas);
      const destructuredIdeas = destructureIdeas(ideas);
      setIdeaTable(destructuredIdeas);
      console.log("from readIdeas: ", ideaTable);
      return true;
    } catch (error) {
      alert(`Error is this errortest ${error.message}`);
      return false;
    }
  }

  function destructure(idea) {
    return {
      id: idea.id,
      title: idea.get("title"),
      section: idea.get("section"),
      author: idea.get("user"),
      expiration: idea.get("expiration"),
    };
  }

  function destructureIdeas(ideas) {
    return ideas.map(destructure);
  }

  return (
    <>
      <div className="list">
        <h1>Idea list</h1>
        <div className="list-table" />
        <DataGrid
          rows={ideaTable}
          columns={columns}
          pageSize={100}
          rowsPerPageOptions={[100]}
        />
      </div>
      <PopupIdeaNew popupNew={popupNew} setPopupNew={setPopupNew} />
      <div className="footer-container">
        <div className="footer-btns">
          <AddIdeaButton
            text="Add Idea"
            popupNew={popupNew}
            setPopupNew={setPopupNew}
          />
          <LoadButton text="Load more Ideas" />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Ideas;
