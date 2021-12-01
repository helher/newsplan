import React from 'react';
import './FooterButton.css';
import Parse from 'parse';

const FooterButton = ({
    text,
    UserIcon,
    trigger
}) => {

    async function createIdeaInDB(e) {
        console.log("createIdeaInDB started")

        const Idea = Parse.Object.extend("Idea")
        const newIdea = new Idea()
        
        newIdea.set("user", Parse.User.current())
        console.log("createIdea new idea")
        try {
            await newIdea.save()
            alert("Idea is creted - HURRRA!")
        }
        catch(error) {
           alert(error)
       }
       console.log("createIdeaInDB ended")
    }


    function handleClickPopup() {
        trigger(true)
        createIdeaInDB()
    }

    return (
        <div>
            <button className="footer-iconbtn" onClick={handleClickPopup}  >
                <div class="button-text-white">
                <UserIcon className="footer-icon"/>{text}
                </div>
            </button>
        </div>
    
    )
}

export default FooterButton;