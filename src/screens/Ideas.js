import React, { useEffect, useState } from 'react';
import Parse from 'parse';

import './Ideas.css'
import Footer from '../components/footer/Footer';
import PopupIdea from '../components/popups/popup-idea/PopupIdea';
import AddIdeaButton from '../components/buttons/AddIdeaButton/AddIdeaButton';
import LoadButton from '../components/buttons/LoadButton/LoadButton';
import { DataGrid } from '@mui/x-data-grid';

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
        console.log("useffect ran")
        getIdeas().then(idea => setIdeaTable(idea));
      }, []);


    function getIdeas () {
        let Ideas = []
        const ideas = new Parse.Query('Idea');
        
        return ideas.find().then((results) => {
            Ideas = results.map((idea) => {
              return {
                id: idea.objectId,
                title: idea.title,
                section: idea.tags,
                author: idea.user,
                expiration: idea.expiration
              };
            });
            return Ideas;
  
        }, (err) => {
          console.log(err);
        });
    }


      
      const rows = [
        { id: 1, section: 'Snow', title: 'Jon', author: 35 },
        { id: 2, section: 'Lannister', title: 'Cersei', author: 42 },
        { id: 3, section: 'Lannister', title: 'Jaime', author: 45 },
        { id: 4, section: 'Stark', title: 'Arya', author: 16 },
        { id: 5, section: 'Targaryen', title: 'Daenerys', author: null },
        { id: 6, section: 'Melisandre', title: null, author: 150 },
        { id: 7, section: 'Clifford', title: 'Ferrara', author: 44 },
        { id: 8, section: 'Frances', title: 'Rossini', author: 36 },
        { id: 9, section: 'Roxie', title: 'Harvey', author: 65 },
      ];



    return (
        <>
            <div className="idea">
                <div className="idea-table" />
                    <div style={{ height: 400, width: '100%' }}>
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            pageSize={5}
                            rowsPerPageOptions={[5]} />
                    </div>
            </div>
            <PopupIdea popup={popup} setPopup={setPopup} ideaId={ideaId} />
    
            <div className="footer-container">
                <div className="footeridea-btns">
                    <AddIdeaButton text="Add Idea" popup={popup} setPopup={setPopup} setIdeaId={setIdeaId} />
                    <LoadButton text="Load more Ideas" />
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Ideas;