import React from 'react';
import './AddIdeaButton.css';
import Parse from 'parse';

const AddIdeaButton = ({
    text,
    UserIcon,
    setShowPopup,
    setIdeaId
}) => {

    function handleClickPopup() {
        console.log("bt clicked!")
        setShowPopup(true)
        createIdeaInDB()
    }

    async function createIdeaInDB() {
        console.log("createIdeaInDB started")

        const Idea = Parse.Object.extend("Idea")
        const newIdea = new Idea()
    
        console.log("createIdea new idea")
        try {
            let result = await newIdea.save()
            let ididea = result.id
            setIdeaId(ididea)
            console.log("ideaid", ididea)
            console.log("idea in brackets: ", (createIdeaInDB = {ididea}))
/*          alert("Idea with id: " + ididea + " is created - HURRRA!") */
        }
        catch(error) {
           alert(error.message)
       }

        await newIdea.fetch().then((newIdea) => {
        const id = newIdea.id
        console.log("id " + id)
        }, error => {
        alert(error.message)
        })

        console.log("fetch ended")
        console.log("createIdeaInDB ended")
    }


    return (
        <button className="addidea-iconbtn" onClick={handleClickPopup}  >
            <div class="button-text-white">
            <UserIcon className="addidea-icon"/>{text}
            </div>
        </button>
    )
}

export default AddIdeaButton;

