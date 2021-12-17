import React, { useEffect, useState } from "react";
import Parse from "parse";

import "./Ideas.css";
import Footer from "../components/footer/Footer";
import PopupIdea from "../components/popups/popup-idea/PopupIdea";
import AddIdeaButton from "../components/buttons/AddIdeaButton/AddIdeaButton";
import LoadButton from "../components/buttons/LoadButton/LoadButton";
import { DataGrid } from "@mui/x-data-grid";



const columns = [
  {
    field: "title",
    headerName: "TITLE",
    width: 470,
    editable: false,
  },
  {
    field: "section",
    headerName: "SECTION",
    width: 390,
    editable: false,
  },
  {
    field: "userimg",
    headerName: "IMAGE",
    width: 125,
    editable: false,
    renderCell: (params) => <img className="img-list" src={params.value} />,
  },
  {
    field: "author",
    headerName: "AUTHOR",
    width: 125,
    editable: false,
  },
  {
    field: "expiration",
    headerName: "EXPIRATION",
    sortable: true,
    width: 160,
    valueGetter: getFullExpiration,
  },
  {
    field: "expirationday",
    headerName: "Day",
    sortable: true,
    width: 160,
    hide: true
  },
  {
    field: "expirationmonth",
    headerName: "Month",
    sortable: true,
    width: 160,
    hide: true
  },

  {
    field: "expirationyear",
    headerName: "Year",
    sortable: true,
    width: 160,
    hide: true
  },
];

function getFullExpiration(params) {
  return `${params.row.expirationday}.${params.row.expirationmonth}.${params.row.expirationyear}`
}






function Ideas() {
  const [popup, setPopup] = useState(false);
  const [ideaId, setIdeaId] = useState();
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
      section: idea.get("tags"),
      author: idea.get("author"),
      userimg: idea.get("userimage").url(),
      expirationday: idea.get("expiration").day,
      expirationmonth: idea.get("expiration").month,
      expirationyear: idea.get("expiration").year
    }
  }




  function destructureIdeas(ideas) {
    return ideas.map(destructure);
  }


  return (
    <>
      <div className="idea">
        <h1>Idea list</h1>
        <div className="idea-table" />
        <div style={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={ideaTable}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
          />
        </div>
      </div>
      <PopupIdea popup={popup} setPopup={setPopup} ideaId={ideaId} />
      <div className="footer-container">
        <div className="footeridea-btns">
          <AddIdeaButton
            text="Add Idea"
            popup={popup}
            setPopup={setPopup}
            setIdeaId={setIdeaId}
          />
          <LoadButton text="Load more Ideas" />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Ideas;

