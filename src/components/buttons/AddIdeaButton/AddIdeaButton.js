import React from 'react';
import './AddIdeaButton.css';
import Parse from 'parse';

const AddIdeaButton = ({
    text,
    UserIcon,
    trigger,
    createIdeaInDB
}) => {

    function handleClickPopup() {
        trigger(true)
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
            console.log("ideaiiiid " + ididea)
            alert("Idea with id: " + ididea + " is created - HURRRA!")
            return ididea
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
        <div>
            <button className="addidea-iconbtn" onClick={handleClickPopup}  >
                <div class="button-text-white">
                <UserIcon className="addidea-icon"/>{text}
                </div>
            </button>
        </div>
    
    )
}

export default AddIdeaButton;

