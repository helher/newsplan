import React from 'react'
import './PopupArticle.css'

//components
import './../../title-edit/TitleEdit'; 
import './../../rich-text-editor/RichTextEdior'; 
import './../../dropdowns/DropdownCalendar/DropdownCalendar'; 
import './../../input-tag/InputTag'; 
import './../../dropdowns/DropdownLength/DropdownLength';

import ProceedButton from '../../buttons/ProceedButton/ProceedButton';
import SaveButton from '../../buttons/SaveButton/SaveButton';
import DiscardButton from '../../buttons/DiscardButton/DiscardButton';




function PopupArticle() {

    const [title, setTitle] = useState()
    const [description, setDescription] = useState()
    const [expirationDate, setExpirationDate] = useState()


    async function handleDiscardAttempt() {
        const objectId = props.articleID
        console.log("handlediscard id: ", objectId)
        console.log("delete started")
        
        const Idea = new Parse.Object('Idea');
        const id = Idea.set('objectId', objectId);
        
        console.log(id)

        try {
            let result = await Idea.destroy();
/*             alert('Success! Idea deleted with id: ' + result.id); */
            console.log('Success! Idea deleted with id: ' + result.id)
            props.setPopup(false)
            clearPopup()
            return true;
        } catch (error) {
            alert(`Error ${error.message}`);
            return false;
        };
    }


    return (
        <div>
            
        </div>
    )
}

export default PopupArticle
