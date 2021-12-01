import React from 'react';
import './AddIdeaButton.css';
import Parse from 'parse';

const AddIdeaButton = ({
    text,
    UserIcon,
    trigger
}) => {

    async function createIdeaInDB(e) {
        console.log("createIdeaInDB started")

        const Idea = Parse.Object.extend("Idea")
        const newIdea = new Idea()
    
        console.log("createIdea new idea")
        try {
            await newIdea.save()
            alert("Idea is created - HURRRA!")
        }
        catch(error) {
           alert(error)
       }

        await newIdea.fetch().then((newIdea) => {
        const id = newIdea.id
        console.log("id " + id)
        }, error => {
        alert(error)
        })

        console.log("fetch ended")
        console.log("createIdeaInDB ended")
    }


    function handleClickPopup() {
        trigger(true)
        createIdeaInDB()
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