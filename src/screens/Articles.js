import React, { useState, useEffect } from 'react';
import Parse from 'parse';

// Styles
import "./Lists.css";

// Components
import Statusbar from '../components/statusbar/Statusbar';
import Footer from '../components/footer/Footer';
import LoadButton from '../components/buttons/LoadButton/LoadButton';
import PopupArticle from '../components/popups/popup-article/PopupArticle';
import { DataGrid } from "@mui/x-data-grid";

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
  },
   {
    field: "status",
    headerName: "STATUS",
    width: 250,
    editable: false,
    renderCell: (params) => (
      <Statusbar status={params.value}/>
    ),
  },
  {
    field: "deadline",
    headerName: "DEADLINE",
    sortable: true,
    width: 140,
  },
];

const Articles = () => {

//this line is needed to test the popup on article page
const [length, setLength] = useState()
const [articleTable, setArticleTable] = useState();

 useEffect(() => {
    fetchIdeas();
  }, []);

  useEffect(() => {
    console.log("from useEffect: ", articleTable);
  }, [articleTable]);

  async function fetchIdeas() {
    const query = new Parse.Query("Article");
    try {
      const article = await query.find();
      console.log("Parse Objects: ", article);
      const destructuredArticles = destructureArticle(article);
      setArticleTable(destructuredArticles);
      console.log("from readIdeas: ", articleTable);
      return true;
    } catch (error) {
      alert(`Error is this errortest ${error.message}`);
      return false;
    }
  }

  function destructure(article) {
    return {
      id: article.id,
      title: article.get("title"),
      section: article.get("section"),
      deadline: article.get("deadline"),
      status: article.get("status"),
    }
  }

  function destructureArticle(articles) {
    return articles.map(destructure);
  }
    
return (
          <>
      <div className="list">
        <h1>Article list</h1>
        <div className="list-table" />
          <DataGrid
            rows={articleTable}
            columns={columns}
            pageSize={100}
            rowsPerPageOptions={[100]}
          />
      </div>
            <PopupArticle/>
        <div className="footer-container">
            <div className="footer-btns">
                <LoadButton text="Load more Articles" />
            </div>
            <Footer/>
        </div>

        </> 
    )
}

export default Articles;