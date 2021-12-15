import React, { useEffect, useState } from 'react';
import Parse from 'parse';

import './Ideas.css'
import Footer from '../components/footer/Footer';
import PopupIdea from '../components/popups/popup-idea/PopupIdea';
import AddIdeaButton from '../components/buttons/AddIdeaButton/AddIdeaButton';
import LoadButton from '../components/buttons/LoadButton/LoadButton';
import { DataGrid } from '@mui/x-data-grid';
import { List } from "antd";
import { easing } from '@mui/material';


const columns = [
    {
      field: 'title',
      headerName: 'Title',
      width: 150,
      editable: false,
    },
    {
      field: 'section',
      headerName: 'Section',
      width: 150,
      editable: false,
    },
    {
      field: 'author',
      headerName: 'Author',
      width: 110,
      editable: false,
    },
    {
      field: 'expiration',
      headerName: 'Expiration',
      sortable: true,
      width: 160,
    },
  ];


function Ideas() {
    const [popup, setPopup] = useState(false)
    const [ideaId, setIdeaId] = useState()
    const [ideaTable, setIdeaTable] = useState()

    // useEffects runs only once, first time the componenten renders, because we have an empty dependency!
    useEffect(() => {
        fetch()
        .then((idea) => idea.json())
        .then((idea) => setIdeaTable(idea))
      }, []);


    
    async function readIdeas() {
      const query = new Parse.Query("Idea");
        try {
          const ideas = await query.find();
          setIdeaTable(ideas);
          return true;
        } catch(error){
           alert(`Error ${error.message}`);
           return false;
        } 
      }

/*      function destructureIdeas () {
        ideaTable.then(results.map((idea) => {
              return {
                id: idea.objectId,
                title: idea.get("title"),
                section: idea.tags,
                author: idea.user,
                expiration: idea.expiration
              };
            }
            return Ideas;
  
        }, (err) => {
          console.log(err);
        });
    } */



    return (
      <>
         <div className="idea">
                <div className="idea-table" />
                    <div style={{ height: 400, width: '100%' }}>
                        <DataGrid
                            rows={ideaTable}
                            columns={columns}
                            pageSize={5}
                            rowsPerPageOptions={[5]} />
                    </div>
            </div> 

        <div>
          {ideaTable !== null &&
            ideaTable !== undefined &&
            ideaTable.length > 0 && (
              <List
                dataSource={ideaTable}
                renderItem={(idea) => (
                  <List.Item >
                    <div>
                          <p className="comment-content">
                            {idea.get("title")}
                          </p>
                      
                    </div>
                  </List.Item>
                )}
              />
            )}
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